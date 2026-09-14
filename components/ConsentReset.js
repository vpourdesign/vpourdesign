'use client';

// Efface le choix de témoins enregistré par CookieBanner et recharge la page :
// le bandeau réapparaît et la personne peut retirer ou modifier son consentement.
export default function ConsentReset() {
  function handleReset() {
    try {
      localStorage.removeItem('vpd_consent_v1');
    } catch {}
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#0C0B09',
        background: 'transparent',
        border: '0.5px solid #0C0B09',
        padding: '12px 24px',
        cursor: 'crosshair',
        margin: '8px 0 24px',
      }}
    >
      Modifier mes choix de témoins
    </button>
  );
}
