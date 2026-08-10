import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Le rapport interroge Search Console + GA4 en direct : jamais de cache statique,
// et il faut plus que les 10 s par défaut de l'hébergeur pour agréger 11 appels.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 60;

// Auth via service account
function getAuth() {
  let credentials;
  try {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');
  } catch {
    // Cause habituelle : la clé JSON a été collée sur plusieurs lignes. Elle doit
    // tenir sur une seule ligne, avec les sauts de ligne de la clé privée en \n.
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY illisible — le JSON doit être sur une seule ligne (\\n échappés dans private_key).');
  }
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

// ── Résilience : un appel Google qui échoue ou traîne ne doit pas vider le rapport ──
// Chaque source a un délai maximal et une valeur de repli ; l'erreur est collectée
// et renvoyée dans `errors[]` au lieu de faire planter toute la réponse.
const SOURCE_TIMEOUT_MS = 20000;

async function safeSource(label, fallback, fn, errors) {
  try {
    let timer;
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(`délai dépassé (${SOURCE_TIMEOUT_MS} ms)`)), SOURCE_TIMEOUT_MS);
    });
    try {
      return await Promise.race([fn(), timeout]);
    } finally {
      clearTimeout(timer);
    }
  } catch (error) {
    console.error(`Rapport — source « ${label} » indisponible :`, error.message);
    errors.push({ source: label, message: error.message });
    return fallback;
  }
}

// Cache mémoire : survit aux invocations chaudes. Le rapport hebdo et le dashboard
// tapent les mêmes données ; inutile de refaire 11 appels Google à chaque fois.
const REPORT_TTL_MS = 60 * 60 * 1000; // 1 h
const reportCache = { data: null, ts: 0 };

// ── Shared: build the full report payload via the service account ──
// Used by both POST (dashboard) and GET (automated feed for the SEO report).
async function generateReportPayload({ useCache = false } = {}) {
  if (useCache && reportCache.data && Date.now() - reportCache.ts < REPORT_TTL_MS) {
    return { ...reportCache.data, cached: true, cacheAgeMinutes: Math.round((Date.now() - reportCache.ts) / 60000) };
  }

  const errors = [];
  const auth = getAuth();
  const siteUrl = 'sc-domain:vpourdesign.com';
  const propertyId = process.env.GA4_PROPERTY_ID || '374889119';

  const today = formatDate(new Date());
  const weekStart = daysAgo(7);
  const monthStart = daysAgo(30);

  const emptyGa = { activeUsers: '0', newUsers: '0', sessions: '0', pageViews: '0', avgSessionDuration: '0', bounceRate: '0' };

  const [
    scWeekQueries,
    scMonthQueries,
    scWeekPages,
    scLavalQueries,
    scAgenceWebQueries,
    scBroadQueries,
    gaWeek,
    gaMonth,
    gaTopPagesWeek,
    gaTrafficWeek,
    gaRealtime,
  ] = await Promise.all([
    safeSource('gsc:requêtes 7j', [], () => getSearchConsoleData(auth, siteUrl, weekStart, today, ['query']), errors),
    safeSource('gsc:requêtes 30j', [], () => getSearchConsoleData(auth, siteUrl, monthStart, today, ['query']), errors),
    safeSource('gsc:pages 7j', [], () => getSearchConsoleData(auth, siteUrl, weekStart, today, ['page']), errors),
    safeSource('gsc:laval', [], () => getSearchConsoleQueryData(auth, siteUrl, monthStart, today, 'laval'), errors),
    safeSource('gsc:agence web', [], () => getSearchConsoleQueryData(auth, siteUrl, monthStart, today, 'agence web'), errors),
    safeSource('gsc:top 200 / 90j', [], () => getTopQueriesBroad(auth, siteUrl), errors),
    safeSource('ga4:7j', emptyGa, () => getAnalyticsData(auth, propertyId, weekStart, today), errors),
    safeSource('ga4:30j', emptyGa, () => getAnalyticsData(auth, propertyId, monthStart, today), errors),
    safeSource('ga4:top pages', [], () => getAnalyticsTopPages(auth, propertyId, weekStart, today), errors),
    safeSource('ga4:sources', [], () => getAnalyticsTrafficSources(auth, propertyId, weekStart, today), errors),
    safeSource('ga4:temps réel', '0', () => getAnalyticsRealtime(auth, propertyId), errors),
  ]);

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

  const shuffled = [...BLOG_POOL].sort(() => Math.random() - 0.5);
  const blogSuggestions = shuffled.slice(0, 5);

  const payload = {
    generatedAt: new Date().toISOString(),
    // `ok: false` = données partielles. Le rapport doit le dire au lieu de faire semblant.
    ok: errors.length === 0,
    errors,
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
  };

  // On ne met en cache qu'un rapport complet — jamais des données partielles.
  if (errors.length === 0) {
    reportCache.data = payload;
    reportCache.ts = Date.now();
  }

  return payload;
}

// ── Automated feed (GET) — service-account only, token-protected ──
// Called by the scheduled SEO-report task via a simple GET (no browser, no login).
// Auth: ?token=<RAPPORT_FEED_TOKEN>. Falls back to RAPPORT_PASSWORD if the
// dedicated token isn't set. Read-only; returns the same JSON as the dashboard.
// Toujours 200 avec un corps JSON — même en cas de panne, pour que la tâche
// planifiée reçoive un diagnostic lisible plutôt qu'une réponse vide.
export async function GET(request) {
  try {
    const token = new URL(request.url).searchParams.get('token');
    const validToken = process.env.RAPPORT_FEED_TOKEN || process.env.RAPPORT_PASSWORD || 'vpd2026';
    if (!token || token !== validToken) {
      return NextResponse.json(
        { ok: false, error: 'unauthorized', message: 'Token invalide ou absent — vérifier RAPPORT_FEED_TOKEN sur l\'hébergeur.' },
        { status: 401 }
      );
    }
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      return NextResponse.json(
        { ok: false, error: 'missing_credentials', message: 'GOOGLE_SERVICE_ACCOUNT_KEY absente de l\'environnement de production.' },
        { status: 200 }
      );
    }
    const payload = await generateReportPayload({ useCache: true });
    return NextResponse.json(payload, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Rapport feed (GET) error:', error);
    return NextResponse.json(
      { ok: false, error: 'api_error', message: error.message },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    );
  }
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

    // Même source que le flux automatisé (GET) — un seul chemin de données.
    return NextResponse.json(await generateReportPayload());
  } catch (error) {
    console.error('Rapport API error:', error);
    return NextResponse.json(
      { error: 'api_error', message: error.message },
      { status: 500 }
    );
  }
}
