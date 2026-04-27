import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Auth via service account
function getAuth() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');
  return new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly',
    ],
  });
}

// ── 20 target keywords for competitive table ──
// First 10 = queried via SerpAPI (Delisoft #1 sur villes QC → battle terrain)
// Last 10  = GSC-only tracking (niche local — suivi VPD)
const TARGET_KEYWORDS = [
  // ── Top 10 : villes Laval/Rive-Nord où Delisoft domine ──
  'agence web rosemère',       // priorité #1 — Delisoft #1 ici, objectif VPD
  'agence web laval',
  'agence web blainville',
  'agence web boisbriand',
  'agence web sainte-thérèse',
  'agence web terrebonne',
  'agence web rive-nord',
  'création site web laval',
  'agence web saint-eustache',
  'agence web mirabel',
  // ── Bottom 10 : suivi GSC uniquement ──
  'seo laval',
  'référencement laval',
  'site web laval',
  'création site web rive-nord',
  'agence web basses-laurentides',
  'marketing numérique laval',
  'design web laval',
  'agence web mascouche',
  'identité visuelle laval',
  'agence ia québec',
];

// ── Competitor config — agences qui ciblent Laval/Rive-Nord ──
const COMPETITORS = [
  { key: 'delisoft',   label: 'Delisoft',       url: 'delisoft.ca'     }, // #1 sur ~30 villes QC
  { key: 'effetweb',   label: 'Effet Web',      url: 'effetweb.ca'     },
  { key: 'effetfute',  label: "L'Effet Futé",   url: 'effetfute.com'   },
  { key: 'bleu3',      label: 'Bleu 3',         url: 'bleu3.com'       },
  { key: 'voyou',      label: 'Voyou',          url: 'voyou.com'       },
];

// ── Blog/content suggestions pool (15 ideas) ──
const BLOG_POOL = [
  { title: 'Agence web sur la Rive-Nord : comment choisir (et pourquoi ça compte)', keyword: 'agence web rive-nord', type: 'Blog' },
  { title: 'IA et création de sites web : ce qui change pour les PME en 2026', keyword: 'intelligence artificielle web', type: 'Blog' },
  { title: 'Google Ads ou SEO local pour une PME lavalloise ?', keyword: 'google ads laval', type: 'Blog' },
  { title: 'Comment dominer les résultats Google pour votre secteur à Laval', keyword: 'seo laval', type: 'Page pilier' },
  { title: 'Refonte de site web en 2026 : les 7 signaux d\'alarme', keyword: 'création site web laval', type: 'Blog' },
  { title: 'SEO local pour cliniques et professionnels de la santé à Laval', keyword: 'référencement laval', type: 'Page service' },
  { title: 'Pourquoi votre site web ne génère pas de leads (et comment changer ça)', keyword: 'site web laval', type: 'Blog' },
  { title: 'Blainville, Boisbriand, Sainte-Thérèse : stratégie web Rive-Nord', keyword: 'agence web blainville', type: 'Page ville' },
  { title: 'ChatGPT et marketing local : ce que les PME de Laval doivent savoir', keyword: 'agence ia québec', type: 'Blog' },
  { title: 'Google Business Profile 2026 : guide complet pour Laval', keyword: 'marketing numérique laval', type: 'Guide' },
  { title: 'Facebook Ads vs Google Ads : quel réseau pour la Rive-Nord', keyword: 'google ads laval', type: 'Blog' },
  { title: 'Stratégie de contenu avec IA pour PME québécoises', keyword: 'intelligence artificielle web', type: 'Guide' },
  { title: 'Courtiers immobiliers Rive-Nord : doubler votre visibilité Google', keyword: 'agence web rive-nord', type: 'Page verticale' },
  { title: 'Identité visuelle + site web : pourquoi l\'un sans l\'autre ne fonctionne pas', keyword: 'identité visuelle laval', type: 'Blog' },
  { title: 'Création de site web pour restaurants et services à Laval', keyword: 'création site web laval', type: 'Page verticale' },
];

// ── SERP competitor positions (SerpAPI — free tier 100/month) ──
// Cache module-level: survives warm serverless invocations (TTL 24h)
// Version bump → forces cache bust when keywords change
const SERP_CACHE_VERSION = 'v4-urls-fixed';
const serpCache = { data: null, ts: 0, version: null };
const SERP_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

async function getSerpPositions(keywords, competitors) {
  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) return { data: null, error: 'SERPAPI_KEY non configurée', totalFound: 0 };

  const now = Date.now();
  if (serpCache.data && serpCache.version === SERP_CACHE_VERSION && now - serpCache.ts < SERP_TTL_MS) {
    return { data: serpCache.data, error: null, cached: true };
  }

  // Query the 10 most competitive keywords (saves API credits)
  const keywordsToCheck = keywords.slice(0, 10);
  const results = {};
  let firstError = null;
  let totalFound = 0;

  await Promise.all(keywordsToCheck.map(async (kw) => {
    try {
      const params = new URLSearchParams({
        engine: 'google',
        q: kw,
        gl: 'ca',
        hl: 'fr',
        num: '20',
        api_key: apiKey,
      });
      const res = await fetch(`https://serpapi.com/search.json?${params}`);
      const json = await res.json();

      // Surface SerpAPI errors (invalid key, quota exceeded, etc.)
      if (json.error) {
        if (!firstError) firstError = json.error;
        results[kw] = {};
        return;
      }

      const organicResults = json.organic_results || [];
      results[kw] = {};
      for (let i = 0; i < organicResults.length; i++) {
        const link = (organicResults[i].link || '').toLowerCase();
        for (const comp of competitors) {
          if (!results[kw][comp.key] && link.includes(comp.url)) {
            results[kw][comp.key] = i + 1;
            totalFound++;
          }
        }
      }
    } catch (e) {
      if (!firstError) firstError = e.message;
      results[kw] = {};
    }
  }));

  serpCache.data = results;
  serpCache.ts = now;
  serpCache.version = SERP_CACHE_VERSION;
  return { data: results, error: firstError, totalFound };
}

// ── Search Console API ──
async function getSearchConsoleData(auth, siteUrl, startDate, endDate, dimensions = ['query']) {
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit: 25,
    },
  });
  return res.data.rows || [];
}

async function getSearchConsoleQueryData(auth, siteUrl, startDate, endDate, query) {
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      dimensionFilterGroups: [{
        filters: [{ dimension: 'query', operator: 'contains', expression: query }]
      }],
      rowLimit: 10,
    },
  });
  return res.data.rows || [];
}

// ── Broad query pull for competitive table (top 200 queries, 90 days) ──
async function getTopQueriesBroad(auth, siteUrl) {
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const endDate = formatDate(new Date());
  const startDate = formatDate(new Date(Date.now() - 90 * 24 * 60 * 60 * 1000));
  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit: 200,
    },
  });
  return res.data.rows || [];
}

// ── GA4 Analytics Data API ──
async function getAnalyticsData(auth, propertyId, startDate, endDate) {
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  const res = await analyticsdata.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'newUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
      ],
    },
  });
  const row = res.data.rows?.[0]?.metricValues || [];
  const metricNames = ['activeUsers', 'newUsers', 'sessions', 'pageViews', 'avgSessionDuration', 'bounceRate'];
  const result = {};
  metricNames.forEach((name, i) => {
    result[name] = row[i]?.value || '0';
  });
  return result;
}

async function getAnalyticsTopPages(auth, propertyId, startDate, endDate) {
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  const res = await analyticsdata.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    },
  });
  return (res.data.rows || []).map(row => ({
    page: row.dimensionValues[0].value,
    views: row.metricValues[0].value,
    users: row.metricValues[1].value,
  }));
}

async function getAnalyticsTrafficSources(auth, propertyId, startDate, endDate) {
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  const res = await analyticsdata.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 8,
    },
  });
  return (res.data.rows || []).map(row => ({
    channel: row.dimensionValues[0].value,
    sessions: row.metricValues[0].value,
  }));
}

async function getAnalyticsRealtime(auth, propertyId) {
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  const res = await analyticsdata.properties.runRealtimeReport({
    property: `properties/${propertyId}`,
    requestBody: {
      metrics: [{ name: 'activeUsers' }],
    },
  });
  return res.data.rows?.[0]?.metricValues?.[0]?.value || '0';
}

// ── Date helpers ──
function formatDate(d) {
  return d.toISOString().split('T')[0];
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return formatDate(d);
}

// ── Main handler ──
export async function POST(request) {
  try {
    const { password, type } = await request.json();

    // Password check
    const validPassword = process.env.RAPPORT_PASSWORD || 'vpd2026';
    if (password !== validPassword) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }

    // ── SERP-only request (on-demand, triggered by button) ──
    if (type === 'serp') {
      const { data: serpPositions, error: serpError, cached, totalFound } = await getSerpPositions(TARGET_KEYWORDS, COMPETITORS);
      return NextResponse.json({
        serpPositions,
        serpError: serpError || null,
        serpCached: !!cached,
        totalFound: totalFound || 0,
        hasSerpData: !!process.env.SERPAPI_KEY,
        serpCacheAge: serpCache.ts ? Math.round((Date.now() - serpCache.ts) / 60000) : null,
        fetchedAt: new Date().toISOString(),
      });
    }

    const auth = getAuth();
    const siteUrl = 'sc-domain:vpourdesign.com';
    const propertyId = process.env.GA4_PROPERTY_ID || '374889119';

    const today = formatDate(new Date());
    const weekStart = daysAgo(7);
    const monthStart = daysAgo(30);

    // Parallel API calls
    const [
      // Search Console
      scWeekQueries,
      scMonthQueries,
      scWeekPages,
      scLavalQueries,
      scAgenceWebQueries,
      scBroadQueries,
      // GA4
      gaWeek,
      gaMonth,
      gaTopPagesWeek,
      gaTrafficWeek,
      gaRealtime,
    ] = await Promise.all([
      getSearchConsoleData(auth, siteUrl, weekStart, today, ['query']),
      getSearchConsoleData(auth, siteUrl, monthStart, today, ['query']),
      getSearchConsoleData(auth, siteUrl, weekStart, today, ['page']),
      getSearchConsoleQueryData(auth, siteUrl, monthStart, today, 'laval'),
      getSearchConsoleQueryData(auth, siteUrl, monthStart, today, 'agence web'),
      getTopQueriesBroad(auth, siteUrl),
      getAnalyticsData(auth, propertyId, weekStart, today),
      getAnalyticsData(auth, propertyId, monthStart, today),
      getAnalyticsTopPages(auth, propertyId, weekStart, today),
      getAnalyticsTrafficSources(auth, propertyId, weekStart, today),
      getAnalyticsRealtime(auth, propertyId),
    ]);

    // ── Build competitive table ──
    const broadMap = {};
    for (const row of scBroadQueries) {
      broadMap[row.keys[0].toLowerCase()] = row;
    }

    const competitiveRows = TARGET_KEYWORDS.map(kw => {
      const exact = broadMap[kw];
      const partial = !exact
        ? scBroadQueries.find(r => r.keys[0].toLowerCase().includes(kw) || kw.includes(r.keys[0].toLowerCase()))
        : null;
      const match = exact || partial;
      return {
        keyword: kw,
        myPosition: match ? parseFloat(match.position).toFixed(1) : '50+',
        myClicks: match ? match.clicks : 0,
        myImpressions: match ? match.impressions : 0,
      };
    });

    // ── Blog suggestions — 5 random from pool ──
    const shuffled = [...BLOG_POOL].sort(() => Math.random() - 0.5);
    const blogSuggestions = shuffled.slice(0, 5);

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      realtime: { activeUsers: gaRealtime },
      objectives: {
        laval: {
          label: 'Grimper — agence web laval',
          target: 'Top 5',
          queries: scLavalQueries.map(r => ({
            query: r.keys[0],
            clicks: r.clicks,
            impressions: r.impressions,
            ctr: (r.ctr * 100).toFixed(1),
            position: r.position.toFixed(1),
          })),
        },
        rosemere: {
          label: 'Autorité — agence web rive-nord',
          target: 'Top 3',
          queries: scAgenceWebQueries.map(r => ({
            query: r.keys[0],
            clicks: r.clicks,
            impressions: r.impressions,
            ctr: (r.ctr * 100).toFixed(1),
            position: r.position.toFixed(1),
          })),
        },
      },
      competitive: {
        competitors: COMPETITORS,
        rows: competitiveRows,
        hasSerpKey: !!process.env.SERPAPI_KEY,
      },
      blogSuggestions,
      blogPool: BLOG_POOL,
      analytics: {
        week: gaWeek,
        month: gaMonth,
        topPages: gaTopPagesWeek,
        trafficSources: gaTrafficWeek,
      },
      searchConsole: {
        weekQueries: scWeekQueries.slice(0, 15).map(r => ({
          query: r.keys[0],
          clicks: r.clicks,
          impressions: r.impressions,
          ctr: (r.ctr * 100).toFixed(1),
          position: r.position.toFixed(1),
        })),
        monthQueries: scMonthQueries.slice(0, 15).map(r => ({
          query: r.keys[0],
          clicks: r.clicks,
          impressions: r.impressions,
          ctr: (r.ctr * 100).toFixed(1),
          position: r.position.toFixed(1),
        })),
        weekPages: scWeekPages.slice(0, 10).map(r => ({
          page: r.keys[0],
          clicks: r.clicks,
          impressions: r.impressions,
          ctr: (r.ctr * 100).toFixed(1),
          position: r.position.toFixed(1),
        })),
      },
    });
  } catch (error) {
    console.error('Rapport API error:', error);
    return NextResponse.json(
      { error: 'api_error', message: error.message },
      { status: 500 }
    );
  }
}
