'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const CONSENT_KEY = 'vpd_consent_v1';

// ── Bilingual copy ──────────────────────────────────────────────────────────
const copy = {
  fr: {
    eyebrow: 'Confidentialité',
    title: 'Respect de votre vie privée',
    desc: 'Nous utilisons des témoins (cookies) pour analyser notre trafic et améliorer votre expérience. Conformément à la Loi 25 du Québec et à la LPRPDE fédérale, votre consentement est requis avant toute collecte de données.',
    law: 'Conforme à la Loi 25 (Québec) · LPRPDE (Canada)',
    categories: [
      {
        key: 'essential',
        label: 'Essentiels',
        desc: 'Nécessaires au bon fonctionnement du site. Ne peuvent pas être désactivés.',
        locked: true,
      },
      {
        key: 'analytics',
        label: 'Analytiques',
        desc: 'Google Analytics — nous permet de comprendre votre navigation et améliorer nos pages.',
        locked: false,
      },
      {
        key: 'marketing',
        label: 'Marketing',
        desc: 'Publicités ciblées et pixels de réseaux sociaux (Facebook, Google Ads).',
        locked: false,
      },
    ],
    acceptAll: 'Tout accepter',
    rejectAll: 'Tout refuser',
    customize: 'Personnaliser',
    save: 'Sauvegarder mes choix',
    policy: 'Politique de confidentialité',
    always: 'Toujours actif',
  },
  en: {
    eyebrow: 'Privacy',
    title: 'Your Privacy',
    desc: 'We use cookies to analyze traffic and improve your experience. Under Quebec Law 25 and federal PIPEDA, your consent is required before any data collection.',
    law: 'Compliant with Law 25 (Quebec) · PIPEDA (Canada)',
    categories: [
      {
        key: 'essential',
        label: 'Essential',
        desc: 'Required for the site to function properly. Cannot be disabled.',
        locked: true,
      },
      {
        key: 'analytics',
        label: 'Analytics',
        desc: 'Google Analytics — helps us understand how you navigate and improve our pages.',
        locked: false,
      },
      {
        key: 'marketing',
        label: 'Marketing',
        desc: 'Targeted advertising and social media pixels (Facebook, Google Ads).',
        locked: false,
      },
    ],
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    customize: 'Customize',
    save: 'Save preferences',
    policy: 'Privacy Policy',
    always: 'Always active',
  },
};

// ── Apply consent to Google Tag Manager ────────────────────────────────────
function applyGtag(prefs) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: prefs.analytics ? 'granted' : 'denied',
      ad_storage: prefs.marketing ? 'granted' : 'denied',
      ad_user_data: prefs.marketing ? 'granted' : 'denied',
      ad_personalization: prefs.marketing ? 'granted' : 'denied',
    });
  }
}

// ── Component ───────────────────────────────────────────────────────────────
export default function CookieBanner() {
  const pathname = usePathname();
  const lang = pathname?.startsWith('/en') ? 'en' : 'fr';
  const c = copy[lang];

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  // Check existing consent on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const saved = JSON.parse(stored);
        applyGtag(saved);
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(selectedPrefs) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(selectedPrefs));
    } catch {}
    applyGtag(selectedPrefs);
    setVisible(false);
  }

  function handleAcceptAll() {
    saveConsent({ analytics: true, marketing: true });
  }

  function handleRejectAll() {
    saveConsent({ analytics: false, marketing: false });
  }

  function handleSave() {
    saveConsent(prefs);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop blur on mobile */}
      <div style={styles.backdrop} aria-hidden="true" />

      <div role="dialog" aria-label={c.title} aria-modal="false" style={styles.banner}>

        {/* ── Main row ── */}
        <div style={styles.mainRow}>

          {/* Left — copy */}
          <div style={styles.copyBlock}>
            <div style={styles.eyebrow}>{c.eyebrow}</div>
            <div style={styles.title}>{c.title}</div>
            <p style={styles.desc}>{c.desc}</p>
            <div style={styles.lawBadge}>{c.law}</div>
          </div>

          {/* Right — actions */}
          <div style={styles.actions}>
            <button
              onClick={handleAcceptAll}
              style={styles.btnAccept}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {c.acceptAll}
            </button>
            <button
              onClick={handleRejectAll}
              style={styles.btnReject}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-muted, #8a7e6a)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line, #2a2820)'}
            >
              {c.rejectAll}
            </button>
            <button
              onClick={() => setExpanded(v => !v)}
              style={styles.btnCustomize}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary, #F0EAD6)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-ghost, #4a4438)'}
            >
              {expanded ? '↑' : '↓'} {c.customize}
            </button>
          </div>
        </div>

        {/* ── Expanded categories ── */}
        {expanded && (
          <div style={styles.categories}>
            {c.categories.map((cat) => (
              <div key={cat.key} style={styles.categoryRow}>
                <div style={styles.categoryInfo}>
                  <div style={styles.categoryLabel}>{cat.label}</div>
                  <div style={styles.categoryDesc}>{cat.desc}</div>
                </div>
                {cat.locked ? (
                  <div style={styles.alwaysActive}>{c.always}</div>
                ) : (
                  <button
                    role="switch"
                    aria-checked={prefs[cat.key]}
                    onClick={() => setPrefs(p => ({ ...p, [cat.key]: !p[cat.key] }))}
                    style={{
                      ...styles.toggle,
                      background: prefs[cat.key] ? 'var(--accent, #C9A84C)' : 'transparent',
                      borderColor: prefs[cat.key] ? 'var(--accent, #C9A84C)' : 'var(--line, #2a2820)',
                    }}
                    aria-label={cat.label}
                  >
                    <span style={{
                      ...styles.toggleDot,
                      transform: prefs[cat.key] ? 'translateX(16px)' : 'translateX(0px)',
                      background: prefs[cat.key] ? 'var(--bg-primary, #0C0B09)' : 'var(--text-ghost, #4a4438)',
                    }} />
                  </button>
                )}
              </div>
            ))}

            {/* Save + policy row */}
            <div style={styles.saveRow}>
              <Link
                href={lang === 'en' ? '/en/privacy-policy' : '/politique-de-confidentialite'}
                style={styles.policyLink}
              >
                {c.policy}
              </Link>
              <button
                onClick={handleSave}
                style={styles.btnSave}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {c.save}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    zIndex: 9998,
    pointerEvents: 'none',
    background: 'linear-gradient(to top, rgba(12,11,9,0.6) 0%, transparent 60%)',
  },
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    background: 'var(--bg-primary, #0C0B09)',
    borderTop: '0.5px solid var(--line, #2a2820)',
    fontFamily: "'DM Mono', monospace",
  },
  mainRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '48px',
    alignItems: 'center',
    padding: 'clamp(20px, 3vw, 32px) clamp(24px, 5vw, 64px)',
  },
  copyBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '640px',
  },
  eyebrow: {
    fontSize: '9px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--accent, #C9A84C)',
    marginBottom: '2px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(18px, 2vw, 24px)',
    fontWeight: 300,
    color: 'var(--text-primary, #F0EAD6)',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  desc: {
    fontSize: '11px',
    color: 'var(--text-muted, #8a7e6a)',
    lineHeight: 1.7,
    margin: 0,
  },
  lawBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '9px',
    letterSpacing: '0.1em',
    color: 'var(--text-ghost, #4a4438)',
    borderTop: '0.5px solid var(--line, #2a2820)',
    paddingTop: '8px',
    marginTop: '4px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'stretch',
    minWidth: '180px',
  },
  btnAccept: {
    padding: '10px 20px',
    background: 'var(--accent, #C9A84C)',
    border: 'none',
    color: 'var(--bg-primary, #0C0B09)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: 'crosshair',
    transition: 'opacity 0.15s',
    whiteSpace: 'nowrap',
  },
  btnReject: {
    padding: '10px 20px',
    background: 'transparent',
    border: '0.5px solid var(--line, #2a2820)',
    color: 'var(--text-muted, #8a7e6a)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: 'crosshair',
    transition: 'border-color 0.15s',
    whiteSpace: 'nowrap',
  },
  btnCustomize: {
    padding: '6px 0',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-ghost, #4a4438)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.1em',
    cursor: 'crosshair',
    textAlign: 'center',
    transition: 'color 0.15s',
  },
  // Expanded categories
  categories: {
    borderTop: '0.5px solid var(--line, #2a2820)',
    padding: 'clamp(16px, 2vw, 24px) clamp(24px, 5vw, 64px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  categoryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '0.5px solid var(--line, #2a2820)',
    gap: '24px',
  },
  categoryInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  categoryLabel: {
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-primary, #F0EAD6)',
  },
  categoryDesc: {
    fontSize: '10px',
    color: 'var(--text-muted, #8a7e6a)',
    maxWidth: '480px',
  },
  alwaysActive: {
    fontSize: '9px',
    letterSpacing: '0.1em',
    color: 'var(--accent, #C9A84C)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  toggle: {
    position: 'relative',
    width: '36px',
    height: '20px',
    border: '0.5px solid',
    borderRadius: '2px',
    background: 'transparent',
    cursor: 'crosshair',
    padding: 0,
    transition: 'background 0.2s, border-color 0.2s',
    flexShrink: 0,
  },
  toggleDot: {
    position: 'absolute',
    top: '3px',
    left: '3px',
    width: '12px',
    height: '12px',
    transition: 'transform 0.2s, background 0.2s',
  },
  saveRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    gap: '16px',
    flexWrap: 'wrap',
  },
  policyLink: {
    fontSize: '10px',
    color: 'var(--text-ghost, #4a4438)',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    borderBottom: '0.5px solid var(--line, #2a2820)',
    paddingBottom: '2px',
  },
  btnSave: {
    padding: '10px 24px',
    background: 'transparent',
    border: '0.5px solid var(--accent, #C9A84C)',
    color: 'var(--accent, #C9A84C)',
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: 'crosshair',
    transition: 'opacity 0.15s',
  },
};
