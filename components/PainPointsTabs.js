'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'Plombier',
    plainte: 'Le plombier est arriv\u00e9 2 heures en retard et ne m\u0027a pas pr\u00e9venu. J\u0027ai manqu\u00e9 ma r\u00e9union.',
    pubImage: 'On confirme l\u0027heure. On la respecte. Sinon on vous appelle.',
    pubCaption: 'Chez nous, si on dit 9h, c\u0027est 9h. Pas 9h-ish.',
    pourquoi: 'Vous ne parlez pas de vos tuyaux. Vous parlez de ce qui a bris\u00e9 la confiance d\u0027un client avec un autre plombier \u2014 et vous montrez que vous \u00eates diff\u00e9rent.',
  },
  {
    label: 'Consultant RH',
    plainte: 'On paie une fortune \u00e0 un consultant RH et apr\u00e8s 3 mois, on a un rapport PDF de 40 pages que personne ne lit.',
    pubImage: 'Rapport de 40 pages \u2718 vs Plan d\u0027action en 5 \u00e9tapes \u2713',
    pubCaption: 'Nos livrables, c\u0027est de l\u0027action. Pas du papier.',
    pourquoi: 'Ce contenu cr\u00e9e une reconnaissance imm\u00e9diate chez tout gestionnaire qui a d\u00e9j\u00e0 v\u00e9cu \u00e7a. Il partage. Son r\u00e9seau voit. Vous gagnez en cr\u00e9dibilit\u00e9 sans avoir dit un seul mot sur vos certifications.',
  },
  {
    label: 'Esth\u00e9tique',
    plainte: 'Le r\u00e9sultat \u00e9tait super en salon, mais apr\u00e8s 3 lavages, tout \u00e9tait parti. C\u0027\u00e9tait n\u0027importe quoi.',
    pubImage: 'Image avant/apr\u00e8s \u00e0 J+30, pas J+1',
    pubCaption: 'Nos r\u00e9sultats tiennent dans le temps. On vous montre la vraie dur\u00e9e, pas juste le jour J.',
    pourquoi: 'La peur du \u00ab \u00e7a va pas durer \u00bb est le frein #1 dans l\u0027industrie de l\u0027esth\u00e9tique. Vous l\u0027adressez directement, avec une preuve visuelle. R\u00e9sultat : moins d\u0027h\u00e9sitation, plus de prises de rendez-vous.',
  },
];

export default function PainPointsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tab selector */}
      <div style={{ display: 'flex', gap: '0', margin: '32px 0 0', borderBottom: '0.5px solid #c8c0b0' }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            style={{
              flex: 1,
              padding: '14px 16px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === i ? '2px solid #9a7b2e' : '2px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: activeTab === i ? '#9a7b2e' : '#8a7e6a',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.3s ease, border-color 0.3s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ padding: '32px 0' }}>
        {/* Plainte */}
        <div style={{ border: '0.5px solid #b06060', background: 'rgba(176, 96, 96, 0.08)', padding: '24px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Plainte identifi&eacute;e</div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.4, margin: 0 }}>
            &laquo;&nbsp;{tabs[activeTab].plainte}&nbsp;&raquo;
          </p>
        </div>

        {/* Publication */}
        <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.08)', padding: '24px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Publication cibl&eacute;e</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#0C0B09', marginBottom: '8px', fontWeight: 500 }}>{tabs[activeTab].pubImage}</div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#6a5e4e', margin: 0 }}>{tabs[activeTab].pubCaption}</p>
        </div>

        {/* Pourquoi ca marche */}
        <div style={{ border: '0.5px solid #508050', background: 'rgba(80, 128, 80, 0.08)', padding: '24px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#408040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Pourquoi &ccedil;a marche</div>
          <p style={{ margin: 0, color: '#4a4438' }}>{tabs[activeTab].pourquoi}</p>
        </div>
      </div>
    </>
  );
}
