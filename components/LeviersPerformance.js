'use client';

import { useState } from 'react';

const leviers = [
  {
    label: 'Positionnement',
    axe: 'Agit sur le taux de conversion',
    symptome: 'Vous avez du trafic, mais peu d’appels. Les gens arrivent, lisent trois lignes, et repartent chez le concurrent. Le site est beau — il ne dit simplement pas assez vite pourquoi vous plutôt qu’un autre.',
    levier: 'On cartographie votre positionnement réel : ce qui vous distingue concrètement, comment vos clients formulent ce besoin, et quels arguments tombent à plat. Le message du site est ensuite construit à partir de ça, pas d’une page « À propos » réécrite au goût du jour.',
    effet: 'Le même trafic génère plus de demandes. C’est le levier le moins visible et le plus rentable : il n’ajoute pas un visiteur, il change ce que chaque visiteur fait en arrivant.',
  },
  {
    label: 'Comparatif',
    axe: 'Agit sur l’efficacité de l’acquisition',
    symptome: 'Vous investissez dans des mots-clés déjà verrouillés par trois gros joueurs, pendant que des requêtes réellement gagnables dorment sans que personne ne les occupe dans votre région.',
    levier: 'On analyse vos vrais compétiteurs en ligne — souvent pas ceux que vous nommeriez spontanément — leur contenu, leurs positions, leurs angles morts. On en tire une carte de ce qui est gagnable, et à quel coût.',
    effet: 'Vous arrêtez de dépenser du temps et du budget sur des batailles perdues d’avance. Le même effort, dirigé aux bons endroits, rapporte beaucoup plus.',
  },
  {
    label: 'SEO & GEO',
    axe: 'Agit sur la visibilité',
    symptome: 'Vous êtes correctement positionné sur Google — mais quand un client demande à ChatGPT ou à Perplexity de lui recommander un fournisseur dans votre domaine, votre nom ne sort jamais.',
    levier: 'SEO technique complet pour Google, et optimisation GEO pour les moteurs génératifs : données structurées, entités nommées, contenu formaté pour être compris et cité par les moteurs d’IA plutôt que simplement indexé.',
    effet: 'Vous devenez visible sur deux canaux au lieu d’un — dont le plus récent croît chaque mois. C’est le levier qui augmente le volume à l’entrée.',
  },
  {
    label: 'Dashboard',
    axe: 'Multiplie les trois autres dans le temps',
    symptome: 'Vous découvrez qu’une page a perdu ses positions… trois mois plus tard, dans un rapport trimestriel. Le temps de réagir, le trafic est parti chez quelqu’un d’autre.',
    levier: 'Un tableau de bord construit pour votre site, alimenté en continu : positions, trafic organique, conversions, présence sur les moteurs IA. Les écarts se voient dans la semaine, pas dans le trimestre.',
    effet: 'C’est le levier qui rend les trois autres cumulatifs. Sans mesure, une stratégie se dégrade tranquillement. Avec mesure, elle se corrige et s’améliore en continu.',
  },
];

export default function LeviersPerformance() {
  const [actif, setActif] = useState(0);
  const l = leviers[actif];

  return (
    <>
      {/* Sélecteur de levier */}
      <div style={{ display: 'flex', gap: '0', margin: '32px 0 0', borderBottom: '0.5px solid #c8c0b0', flexWrap: 'wrap' }}>
        {leviers.map((item, i) => (
          <button
            key={i}
            onClick={() => setActif(i)}
            style={{
              flex: '1 1 auto',
              minWidth: '110px',
              padding: '14px 16px',
              background: 'transparent',
              border: 'none',
              borderBottom: actif === i ? '2px solid #9a7b2e' : '2px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: actif === i ? '#9a7b2e' : '#8a7e6a',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.3s ease, border-color 0.3s ease',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Axe de performance */}
      <div style={{ padding: '20px 0 4px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#9a7b2e', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {l.axe}
      </div>

      <div style={{ padding: '12px 0 32px' }}>
        {/* Symptôme */}
        <div style={{ border: '0.5px solid #b06060', background: 'rgba(176, 96, 96, 0.08)', padding: '24px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Le sympt&ocirc;me, sans ce levier</div>
          <p style={{ margin: 0, color: '#4a4438' }}>{l.symptome}</p>
        </div>

        {/* Levier */}
        <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.08)', padding: '24px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Ce qu&apos;on met en place</div>
          <p style={{ margin: 0, color: '#4a4438' }}>{l.levier}</p>
        </div>

        {/* Effet mesurable */}
        <div style={{ border: '0.5px solid #508050', background: 'rgba(80, 128, 80, 0.08)', padding: '24px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#408040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>L&apos;effet sur la performance</div>
          <p style={{ margin: 0, color: '#4a4438' }}>{l.effet}</p>
        </div>
      </div>
    </>
  );
}
