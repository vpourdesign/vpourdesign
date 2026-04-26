'use client';

import { useState, useMemo } from 'react';

export default function RapportPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // SERP state — loaded on demand only
  const [serpData, setSerpData] = useState(null);
  const [serpLoading, setSerpLoading] = useState(false);
  const [serpUpdatedAt, setSerpUpdatedAt] = useState(null);

  // ── Blog suggestions seed (must be top-level, before any early return) ──
  const [blogSeed, setBlogSeed] = useState(0);
  const shownSuggestions = useMemo(() => {
    if (!data?.blogPool) return data?.blogSuggestions || [];
    const arr = [...data.blogPool].sort(() => (Math.sin(blogSeed * 7 + 13) - 0.5));
    return arr.slice(0, 5);
  }, [data, blogSeed]);

  async function fetchData(pwd) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/rapport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd }),
      });
      if (res.status === 401) {
        setError('Mot de passe invalide');
        setLoading(false);
        return;
      }
      const json = await res.json();
      if (json.error) {
        setError(json.message || 'Erreur API');
        setLoading(false);
        return;
      }
      setData(json);
      setAuthenticated(true);
    } catch (e) {
      setError('Erreur de connexion');
    }
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData(password);
  }

  function refresh() {
    fetchData(password);
  }

  async function fetchSerpData() {
    setSerpLoading(true);
    try {
      const res = await fetch('/api/rapport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, type: 'serp' }),
      });
      const json = await res.json();
      if (json.serpPositions) {
        setSerpData(json.serpPositions);
        setSerpUpdatedAt(new Date());
      }
    } catch (_) {}
    setSerpLoading(false);
  }

  // ── Login screen ──
  if (!authenticated) {
    return (
      <div style={styles.loginWrap}>
        <div style={styles.loginBox}>
          <div style={styles.eyebrow}>V pour Design</div>
          <h1 style={styles.loginTitle}>Rapport <em style={{ color: 'var(--accent)' }}>SEO</em></h1>
          <form onSubmit={handleSubmit} style={{ marginTop: '32px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Chargement...' : 'Accéder'}
            </button>
          </form>
          {error && <div style={styles.error}>{error}</div>}
        </div>
      </div>
    );
  }

  // ── Dashboard ──
  const { realtime, objectives, analytics, searchConsole, competitive, generatedAt } = data;
  const genTime = new Date(generatedAt).toLocaleString('fr-CA');

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div>
          <div style={styles.eyebrow}>Tableau de bord SEO</div>
          <h1 style={styles.h1}>Rapport <em style={{ color: 'var(--accent)' }}>vpourdesign.com</em></h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={styles.realtimeBadge}>
            <span style={styles.realtimeDot}></span>
            {realtime.activeUsers} actif{realtime.activeUsers > 1 ? 's' : ''} maintenant
          </div>
          <div style={styles.meta}>Généré le {genTime}</div>
          <button onClick={refresh} style={styles.refreshBtn} disabled={loading}>
            {loading ? '↻ ...' : '↻ Rafraîchir'}
          </button>
        </div>
      </header>

      {/* ── OBJECTIFS ── */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabel}>Objectifs SEO</div>
          <div style={styles.sectionNum}>2 objectifs actifs</div>
        </div>

        {/* Laval */}
        <ObjectiveBlock
          num="01"
          label={objectives.laval.label}
          target={objectives.laval.target}
          queries={objectives.laval.queries}
        />

        {/* Rosemère */}
        <ObjectiveBlock
          num="02"
          label={objectives.rosemere.label}
          target={objectives.rosemere.target}
          queries={objectives.rosemere.queries}
        />
      </section>

      {/* ── ANALYTICS ── */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabel}>Google Analytics</div>
          <div style={styles.sectionNum}>GA4</div>
        </div>

        <div style={styles.metricsGrid}>
          <MetricCard label="Utilisateurs actifs" weekVal={analytics.week.activeUsers} monthVal={analytics.month.activeUsers} />
          <MetricCard label="Nouveaux utilisateurs" weekVal={analytics.week.newUsers} monthVal={analytics.month.newUsers} />
          <MetricCard label="Sessions" weekVal={analytics.week.sessions} monthVal={analytics.month.sessions} />
          <MetricCard label="Pages vues" weekVal={analytics.week.pageViews} monthVal={analytics.month.pageViews} />
          <MetricCard label="Durée moy. session" weekVal={formatSeconds(analytics.week.avgSessionDuration)} monthVal={formatSeconds(analytics.month.avgSessionDuration)} />
          <MetricCard label="Taux de rebond" weekVal={formatPercent(analytics.week.bounceRate)} monthVal={formatPercent(analytics.month.bounceRate)} />
        </div>

        {/* Traffic sources */}
        <div style={styles.subSection}>
          <div style={styles.subLabel}>Sources de trafic (7 jours)</div>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Canal</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Sessions</th>
                </tr>
              </thead>
              <tbody>
                {analytics.trafficSources.map((s, i) => (
                  <tr key={i}>
                    <td style={styles.td}>{s.channel}</td>
                    <td style={{ ...styles.td, textAlign: 'right', color: 'var(--text-primary)' }}>{s.sessions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top pages */}
        <div style={styles.subSection}>
          <div style={styles.subLabel}>Top pages (7 jours)</div>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Page</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Vues</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Utilisateurs</th>
                </tr>
              </thead>
              <tbody>
                {analytics.topPages.map((p, i) => (
                  <tr key={i}>
                    <td style={{ ...styles.td, maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.page}</td>
                    <td style={{ ...styles.td, textAlign: 'right', color: 'var(--text-primary)' }}>{p.views}</td>
                    <td style={{ ...styles.td, textAlign: 'right' }}>{p.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SEARCH CONSOLE ── */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabel}>Search Console</div>
          <div style={styles.sectionNum}>Requêtes &amp; Pages</div>
        </div>

        <div style={styles.subSection}>
          <div style={styles.subLabel}>Top requêtes (7 jours)</div>
          <QueryTable rows={searchConsole.weekQueries} />
        </div>

        <div style={styles.subSection}>
          <div style={styles.subLabel}>Top requêtes (30 jours)</div>
          <QueryTable rows={searchConsole.monthQueries} />
        </div>

        <div style={styles.subSection}>
          <div style={styles.subLabel}>Pages (7 jours)</div>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Page</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Clics</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Impr.</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>CTR</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Pos.</th>
                </tr>
              </thead>
              <tbody>
                {searchConsole.weekPages.map((p, i) => (
                  <tr key={i}>
                    <td style={{ ...styles.td, maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.page.replace('https://vpourdesign.com', '')}</td>
                    <td style={{ ...styles.td, textAlign: 'right', color: 'var(--text-primary)' }}>{p.clicks}</td>
                    <td style={{ ...styles.td, textAlign: 'right' }}>{p.impressions}</td>
                    <td style={{ ...styles.td, textAlign: 'right' }}>{p.ctr}%</td>
                    <td style={{ ...styles.td, textAlign: 'right' }}><PositionBadge pos={p.position} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── COMPETITIVE POSITIONING ── */}
      {competitive && (
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>Positionnement VS compétiteurs</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {serpUpdatedAt && (
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'var(--text-ghost, #4a4438)' }}>
                  Mis à jour {serpUpdatedAt.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
              <button
                onClick={fetchSerpData}
                disabled={serpLoading || !competitive.hasSerpKey}
                style={{
                  ...styles.refreshBtn,
                  color: competitive.hasSerpKey ? 'var(--accent, #C9A84C)' : 'var(--text-ghost, #4a4438)',
                  borderColor: competitive.hasSerpKey ? 'var(--accent, #C9A84C)' : 'var(--line, #2a2820)',
                  opacity: serpLoading ? 0.5 : 1,
                }}
                title={competitive.hasSerpKey ? '10 crédits SerpAPI' : 'SERPAPI_KEY non configurée'}
              >
                {serpLoading ? '↻ Chargement...' : '↻ Rafraîchir concurrents'}
              </button>
            </div>
          </div>
          <div style={styles.subSection}>
            <div style={styles.subLabel}>Positions moyennes — 90 jours GSC · Google.ca/fr</div>
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={{ ...styles.th, minWidth: '200px' }}>Mot-clé</th>
                    <th style={{ ...styles.th, textAlign: 'center', color: 'var(--accent, #C9A84C)', minWidth: '90px' }}>VPD</th>
                    {competitive.competitors.map(c => (
                      <th key={c.key} style={{ ...styles.th, textAlign: 'center', minWidth: '100px' }}>{c.label}</th>
                    ))}
                    <th style={{ ...styles.th, textAlign: 'right', minWidth: '60px' }}>Clics</th>
                    <th style={{ ...styles.th, textAlign: 'right', minWidth: '70px' }}>Impr.</th>
                  </tr>
                </thead>
                <tbody>
                  {competitive.rows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ ...styles.td, color: 'var(--text-primary, #F0EAD6)', fontWeight: 400 }}>{row.keyword}</td>
                      <td style={{ ...styles.td, textAlign: 'center' }}>
                        <PositionBadge pos={row.myPosition} />
                      </td>
                      {competitive.competitors.map(c => {
                        const pos = serpData?.[row.keyword]?.[c.key];
                        return (
                          <td key={c.key} style={{ ...styles.td, textAlign: 'center' }}>
                            {pos ? <PositionBadge pos={String(pos)} /> : <span style={{ color: 'var(--text-ghost, #4a4438)' }}>—</span>}
                          </td>
                        );
                      })}
                      <td style={{ ...styles.td, textAlign: 'right' }}>{row.myClicks}</td>
                      <td style={{ ...styles.td, textAlign: 'right' }}>{row.myImpressions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── BLOG / CONTENT SUGGESTIONS ── */}
      {data.blogPool && (
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>Idées de contenu — boost SEO</div>
            <button
              onClick={() => setBlogSeed(s => s + 1)}
              style={{ ...styles.refreshBtn, color: 'var(--accent, #C9A84C)', borderColor: 'var(--accent, #C9A84C)' }}
            >
              ↻ Nouvelles idées
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {shownSuggestions.map((idea, i) => (
              <div key={i} style={{ padding: 'clamp(20px, 3vw, 32px)', borderRight: '0.5px solid var(--line, #2a2820)', borderBottom: '0.5px solid var(--line, #2a2820)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'var(--accent, #C9A84C)', textTransform: 'uppercase' }}>0{i + 1}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'var(--text-ghost, #4a4438)', padding: '2px 8px', border: '0.5px solid var(--line, #2a2820)', textTransform: 'uppercase' }}>{idea.type}</span>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, color: 'var(--text-primary, #F0EAD6)', lineHeight: 1.3 }}>{idea.title}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'var(--text-ghost, #4a4438)' }}>Cible : <span style={{ color: 'var(--text-muted, #8a7e6a)' }}>{idea.keyword}</span></div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <span>V pour Design — Rapport SEO confidentiel</span>
        <span>400 Grande-Côte, Rosemère</span>
      </footer>
    </div>
  );
}

// ── Sub-components ──

function ObjectiveBlock({ num, label, target, queries }) {
  const bestPos = queries.length > 0
    ? Math.min(...queries.map(q => parseFloat(q.position)))
    : null;
  const totalImpressions = queries.reduce((sum, q) => sum + q.impressions, 0);
  const totalClicks = queries.reduce((sum, q) => sum + q.clicks, 0);

  return (
    <div style={styles.objectiveBlock}>
      <div style={styles.objectiveHeader}>
        <span style={styles.objectiveNum}>{num}</span>
        <span style={styles.objectiveLabel}>{label}</span>
        <span style={styles.objectiveTarget}>Objectif: {target}</span>
      </div>
      <div style={styles.objectiveMetrics}>
        <div style={styles.objectiveMetric}>
          <div style={styles.objectiveMetricValue}>{bestPos !== null ? bestPos : '—'}</div>
          <div style={styles.objectiveMetricLabel}>Meilleure pos.</div>
        </div>
        <div style={styles.objectiveMetric}>
          <div style={styles.objectiveMetricValue}>{totalImpressions}</div>
          <div style={styles.objectiveMetricLabel}>Impressions</div>
        </div>
        <div style={styles.objectiveMetric}>
          <div style={styles.objectiveMetricValue}>{totalClicks}</div>
          <div style={styles.objectiveMetricLabel}>Clics</div>
        </div>
      </div>
      {queries.length > 0 && <QueryTable rows={queries} />}
      {queries.length === 0 && (
        <div style={{ ...styles.meta, padding: '16px 24px' }}>Aucune donnée encore — les requêtes apparaîtront après quelques jours d'indexation.</div>
      )}
    </div>
  );
}

function QueryTable({ rows }) {
  return (
    <div style={styles.tableWrap}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Requête</th>
            <th style={{ ...styles.th, textAlign: 'right' }}>Clics</th>
            <th style={{ ...styles.th, textAlign: 'right' }}>Impr.</th>
            <th style={{ ...styles.th, textAlign: 'right' }}>CTR</th>
            <th style={{ ...styles.th, textAlign: 'right' }}>Position</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={styles.td}>{r.query}</td>
              <td style={{ ...styles.td, textAlign: 'right', color: 'var(--text-primary)' }}>{r.clicks}</td>
              <td style={{ ...styles.td, textAlign: 'right' }}>{r.impressions}</td>
              <td style={{ ...styles.td, textAlign: 'right' }}>{r.ctr}%</td>
              <td style={{ ...styles.td, textAlign: 'right' }}><PositionBadge pos={r.position} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PositionBadge({ pos }) {
  const p = parseFloat(pos);
  let color = 'var(--text-muted)';
  if (p <= 3) color = '#4CAF50';
  else if (p <= 10) color = 'var(--accent)';
  else if (p <= 20) color = '#FF9800';
  else color = '#F44336';
  return <span style={{ color, fontWeight: 500 }}>{pos}</span>;
}

// ── Helpers ──
function formatSeconds(val) {
  const s = Math.round(parseFloat(val));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function formatPercent(val) {
  return (parseFloat(val) * 100).toFixed(1) + '%';
}

function MetricCard({ label, weekVal, monthVal }) {
  return (
    <div style={styles.metricCard}>
      <div style={styles.metricLabel}>{label}</div>
      <div style={styles.metricRow}>
        <div>
          <div style={styles.metricValue}>{weekVal}</div>
          <div style={styles.metricPeriod}>7 jours</div>
        </div>
        <div style={styles.metricDivider}></div>
        <div>
          <div style={{ ...styles.metricValue, fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-muted)' }}>{monthVal}</div>
          <div style={styles.metricPeriod}>30 jours</div>
        </div>
      </div>
    </div>
  );
}

// ── Styles ──
const styles = {
  // Login
  loginWrap: {
    minHeight: '100vh',
    background: 'var(--bg-primary, #0C0B09)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  loginBox: {
    maxWidth: '400px',
    width: '100%',
    padding: '48px',
    border: '0.5px solid var(--line, #2a2820)',
  },
  loginTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 300,
    color: 'var(--text-primary, #F0EAD6)',
    lineHeight: 0.93,
    letterSpacing: '-0.02em',
    marginTop: '12px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    background: 'transparent',
    border: '0.5px solid var(--line, #2a2820)',
    color: 'var(--text-primary, #F0EAD6)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '13px',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '12px',
    background: 'var(--accent, #C9A84C)',
    border: 'none',
    color: 'var(--bg-primary, #0C0B09)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  error: {
    marginTop: '16px',
    fontFamily: "'DM Mono', monospace",
    fontSize: '12px',
    color: '#F44336',
  },
  // Page
  page: {
    minHeight: '100vh',
    background: 'var(--bg-primary, #0C0B09)',
    color: 'var(--text-muted, #8a7e6a)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '12px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 'clamp(24px, 4vw, 48px)',
    borderBottom: '0.5px solid var(--line, #2a2820)',
    flexWrap: 'wrap',
    gap: '16px',
  },
  eyebrow: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-muted, #8a7e6a)',
  },
  h1: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 300,
    color: 'var(--text-primary, #F0EAD6)',
    lineHeight: 0.93,
    letterSpacing: '-0.02em',
    marginTop: '8px',
  },
  realtimeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    color: '#4CAF50',
    padding: '4px 12px',
    border: '0.5px solid #4CAF5040',
  },
  realtimeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#4CAF50',
    display: 'inline-block',
    animation: 'pulse 2s infinite',
  },
  meta: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    color: 'var(--text-ghost, #4a4438)',
    marginTop: '6px',
  },
  refreshBtn: {
    marginTop: '8px',
    padding: '4px 12px',
    background: 'transparent',
    border: '0.5px solid var(--line, #2a2820)',
    color: 'var(--text-muted, #8a7e6a)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    cursor: 'pointer',
  },
  // Sections
  section: {
    borderBottom: '0.5px solid var(--line, #2a2820)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px clamp(24px, 4vw, 48px)',
    borderBottom: '0.5px solid var(--line, #2a2820)',
  },
  sectionLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-muted, #8a7e6a)',
  },
  sectionNum: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    color: 'var(--text-ghost, #4a4438)',
  },
  subSection: {
    borderTop: '0.5px solid var(--line, #2a2820)',
  },
  subLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-ghost, #4a4438)',
    padding: '12px clamp(24px, 4vw, 48px)',
  },
  // Objectives
  objectiveBlock: {
    borderTop: '0.5px solid var(--line, #2a2820)',
  },
  objectiveHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px clamp(24px, 4vw, 48px)',
    flexWrap: 'wrap',
  },
  objectiveNum: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    color: 'var(--accent, #C9A84C)',
    letterSpacing: '0.15em',
  },
  objectiveLabel: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    fontWeight: 300,
    color: 'var(--text-primary, #F0EAD6)',
  },
  objectiveTarget: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    color: 'var(--text-ghost, #4a4438)',
    padding: '2px 8px',
    border: '0.5px solid var(--line, #2a2820)',
  },
  objectiveMetrics: {
    display: 'flex',
    gap: '0',
    borderTop: '0.5px solid var(--line, #2a2820)',
  },
  objectiveMetric: {
    flex: 1,
    padding: '16px clamp(24px, 4vw, 48px)',
    borderRight: '0.5px solid var(--line, #2a2820)',
  },
  objectiveMetricValue: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: 300,
    color: 'var(--text-primary, #F0EAD6)',
    lineHeight: 1,
  },
  objectiveMetricLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '9px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-ghost, #4a4438)',
    marginTop: '4px',
  },
  // Metrics grid
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
  metricCard: {
    padding: '20px clamp(24px, 4vw, 32px)',
    borderRight: '0.5px solid var(--line, #2a2820)',
    borderBottom: '0.5px solid var(--line, #2a2820)',
  },
  metricLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '9px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-ghost, #4a4438)',
    marginBottom: '8px',
  },
  metricRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
  },
  metricValue: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(20px, 3vw, 30px)',
    fontWeight: 300,
    color: 'var(--text-primary, #F0EAD6)',
    lineHeight: 1,
  },
  metricPeriod: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '8px',
    color: 'var(--text-ghost, #4a4438)',
    marginTop: '2px',
  },
  metricDivider: {
    width: '1px',
    height: '24px',
    background: 'var(--line, #2a2820)',
  },
  // Tables
  tableWrap: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '9px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-ghost, #4a4438)',
    padding: '8px clamp(16px, 2vw, 24px)',
    textAlign: 'left',
    borderBottom: '0.5px solid var(--line, #2a2820)',
    whiteSpace: 'nowrap',
  },
  td: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '12px',
    color: 'var(--text-muted, #8a7e6a)',
    padding: '8px clamp(16px, 2vw, 24px)',
    borderBottom: '0.5px solid var(--line, #2a2820)',
    whiteSpace: 'nowrap',
  },
  // Footer
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px clamp(24px, 4vw, 48px)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    color: 'var(--text-ghost, #4a4438)',
  },
};
