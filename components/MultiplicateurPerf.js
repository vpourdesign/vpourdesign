'use client';

import { useState } from 'react';

const BASE_VISITEURS = 1000;
const BASE_TAUX = 2; // 2 % de conversion

function fmt(n) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function dec(n) {
  return n.toFixed(1).replace('.', ',');
}

export default function MultiplicateurPerf() {
  const [visibilite, setVisibilite] = useState(2);
  const [conversion, setConversion] = useState(2);

  const total = visibilite * conversion;
  const visiteurs = BASE_VISITEURS * visibilite;
  const taux = BASE_TAUX * conversion;
  const clients = (visiteurs * taux) / 100;
  const clientsBase = (BASE_VISITEURS * BASE_TAUX) / 100;

  const verdict =
    total < 1.6
      ? 'Une amélioration marginale — le genre qu’on remarque à peine dans les chiffres.'
      : total < 3
        ? 'Un site qui travaille visiblement mieux qu’avant.'
        : total < 5
          ? 'C’est l’ordre de grandeur dont on parle dans cet article.'
          : 'Ambitieux — mais c’est exactement comme ça que la multiplication fonctionne.';

  const sliderStyle = {
    width: '100%',
    accentColor: '#9a7b2e',
    cursor: 'pointer',
    marginTop: '10px',
    // 16px de haut par défaut, sous le seuil tactile. La piste reste dessinée
    // centrée et fine : seule la zone de saisie grandit.
    height: '24px',
    touchAction: 'none',
  };

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: '#8a7e6a',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  };

  return (
    <div style={{ border: '0.5px solid #c8c0b0', margin: '32px 0', background: '#fff' }}>
      {/* En-tête */}
      <div style={{ padding: '16px 20px', borderBottom: '0.5px solid #c8c0b0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#0C0B09', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Pourquoi &laquo;&nbsp;4&nbsp;fois&nbsp;&raquo; — essayez vous-m&ecirc;me
        </div>
      </div>

      {/* Curseurs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <div style={{ padding: '22px 24px', borderRight: '0.5px solid #c8c0b0', borderBottom: '0.5px solid #c8c0b0' }}>
          <div style={labelStyle}>Visibilité &mdash; SEO &amp; GEO</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: '#0C0B09', marginTop: '6px' }}>
            &times;{dec(visibilite)}
          </div>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={visibilite}
            onChange={(e) => setVisibilite(parseFloat(e.target.value))}
            style={sliderStyle}
            aria-label="Multiplicateur de visibilité"
          />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8a7e6a', marginTop: '8px' }}>
            {fmt(visiteurs)} visiteurs / mois
          </div>
        </div>

        <div style={{ padding: '22px 24px', borderBottom: '0.5px solid #c8c0b0' }}>
          <div style={labelStyle}>Conversion &mdash; positionnement</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: '#0C0B09', marginTop: '6px' }}>
            &times;{dec(conversion)}
          </div>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={conversion}
            onChange={(e) => setConversion(parseFloat(e.target.value))}
            style={sliderStyle}
            aria-label="Multiplicateur de taux de conversion"
          />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8a7e6a', marginTop: '8px' }}>
            {dec(taux)}&nbsp;% de taux de conversion
          </div>
        </div>
      </div>

      {/* Résultat */}
      <div style={{ padding: '28px 24px', background: 'rgba(154, 123, 46, 0.07)', textAlign: 'center' }}>
        <div style={{ ...labelStyle, marginBottom: '10px' }}>Effet combiné sur les demandes reçues</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 7vw, 68px)', fontWeight: 300, color: '#9a7b2e', lineHeight: 1 }}>
          &times;{dec(total)}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4a4438', marginTop: '14px', lineHeight: 1.7 }}>
          {fmt(clientsBase)} demandes par mois &nbsp;&rarr;&nbsp; <strong style={{ color: '#0C0B09' }}>{fmt(clients)} demandes par mois</strong>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#6a5e4e', marginTop: '10px', fontStyle: 'italic' }}>
          {verdict}
        </div>
      </div>

      {/* Note */}
      <div style={{ padding: '14px 20px', borderTop: '0.5px solid #c8c0b0', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8a7e6a', lineHeight: 1.6 }}>
        Base de départ : 1&#8239;000 visiteurs par mois et 2&nbsp;% de conversion. Les deux curseurs ne s&apos;additionnent pas — ils se multiplient.
      </div>
    </div>
  );
}
