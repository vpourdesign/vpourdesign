'use client';

import { useState, useEffect } from 'react';

export default function AtelierJacobSeoPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Le cookie survit 30 jours : on tente l'accès direct avant d'afficher le formulaire.
  useEffect(() => {
    fetch('/api/atelierjacob-seo/plan', { method: 'GET' })
      .then((r) => setAuthenticated(r.ok))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/atelierjacob-seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.status === 401) setError('Mot de passe invalide');
      else if (res.status === 503) setError('Accès non configuré — contactez V pour Design');
      else if (!res.ok) setError('Erreur de connexion');
      else setAuthenticated(true);
    } catch {
      setError('Erreur de connexion');
    }
    setLoading(false);
  }

  async function logout() {
    await fetch('/api/atelierjacob-seo', { method: 'DELETE' });
    setAuthenticated(false);
    setPassword('');
  }

  if (loading && !authenticated) {
    return <div style={s.loginWrap}><div style={s.meta}>Chargement…</div></div>;
  }

  if (!authenticated) {
    return (
      <div style={s.loginWrap}>
        <div style={s.loginBox}>
          <div style={s.eyebrow}>V pour Design × Ateliers Jacob</div>
          <h1 style={s.loginTitle}>
            Plan <em style={{ color: 'var(--accent, #C9A84C)', fontStyle: 'italic' }}>SEO</em>
          </h1>
          <p style={s.sub}>Six semaines pour remonter dans Google. Document de travail privé.</p>
          <form onSubmit={handleSubmit} style={{ marginTop: '32px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              style={s.input}
              autoFocus
              autoComplete="current-password"
            />
            <button type="submit" style={s.button} disabled={loading}>
              {loading ? 'Vérification…' : 'Accéder'}
            </button>
          </form>
          {error && <div style={s.error}>{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div style={s.shell}>
      <div style={s.bar}>
        <span style={s.eyebrow}>V pour Design × Ateliers Jacob — plan SEO</span>
        <span style={s.barActions}>
          <a href="/api/atelierjacob-seo/plan" target="_blank" rel="noopener noreferrer" style={s.link}>
            Plein écran / imprimer
          </a>
          <button onClick={logout} style={s.linkBtn}>Quitter</button>
        </span>
      </div>
      <iframe src="/api/atelierjacob-seo/plan" title="Plan SEO Ateliers Jacob" style={s.frame} />
    </div>
  );
}

const mono = "'DM Mono', ui-monospace, monospace";

const s = {
  loginWrap: {
    minHeight: '100vh',
    background: 'var(--bg-primary, #0C0B09)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  loginBox: { maxWidth: '400px', width: '100%', padding: '48px', border: '0.5px solid var(--line, #2a2820)' },
  eyebrow: {
    fontFamily: mono,
    fontSize: '10px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--text-muted, #8a7e6a)',
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
  sub: { fontFamily: mono, fontSize: '11px', lineHeight: 1.7, color: 'var(--text-muted, #8a7e6a)', marginTop: '16px' },
  input: {
    width: '100%',
    padding: '12px 16px',
    background: 'transparent',
    border: '0.5px solid var(--line, #2a2820)',
    color: 'var(--text-primary, #F0EAD6)',
    fontFamily: mono,
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
    fontFamily: mono,
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  error: { marginTop: '16px', fontFamily: mono, fontSize: '12px', color: '#F44336' },
  meta: { fontFamily: mono, fontSize: '12px', color: 'var(--text-muted, #8a7e6a)' },

  shell: { height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary, #0C0B09)' },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    padding: '10px 20px',
    borderBottom: '0.5px solid var(--line, #2a2820)',
    flexWrap: 'wrap',
  },
  barActions: { display: 'flex', alignItems: 'center', gap: '18px' },
  link: {
    fontFamily: mono,
    fontSize: '10px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--accent, #C9A84C)',
    textDecoration: 'none',
  },
  linkBtn: {
    fontFamily: mono,
    fontSize: '10px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted, #8a7e6a)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  frame: { flex: 1, width: '100%', border: 0, display: 'block' },
};
