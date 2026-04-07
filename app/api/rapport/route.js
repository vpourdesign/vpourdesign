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
    const { password } = await request.json();

    // Password check
    const validPassword = process.env.RAPPORT_PASSWORD || 'vpd2026';
    if (password !== validPassword) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
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
      scRosemereQueries,
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
      getSearchConsoleQueryData(auth, siteUrl, monthStart, today, 'rosem'),
      getAnalyticsData(auth, propertyId, weekStart, today),
      getAnalyticsData(auth, propertyId, monthStart, today),
      getAnalyticsTopPages(auth, propertyId, weekStart, today),
      getAnalyticsTrafficSources(auth, propertyId, weekStart, today),
      getAnalyticsRealtime(auth, propertyId),
    ]);

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
          label: 'Autorité — agence web rosemère',
          target: 'Top 3',
          queries: scRosemereQueries.map(r => ({
            query: r.keys[0],
            clicks: r.clicks,
            impressions: r.impressions,
            ctr: (r.ctr * 100).toFixed(1),
            position: r.position.toFixed(1),
          })),
        },
      },
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
