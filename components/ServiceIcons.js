'use client';

export function ServiceIcon({ serviceId }) {
  const icons = {
    'creation-site-web': (
      <svg className="service-icon-svg float" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="16" width="56" height="48" rx="1" stroke="var(--text-muted)" strokeWidth="1"/>
        <line x1="12" y1="26" x2="68" y2="26" stroke="var(--text-muted)" strokeWidth="1"/>
        <circle cx="19" cy="21" r="1.5" fill="var(--text-muted)" opacity="0.9"/>
        <circle cx="25" cy="21" r="1.5" fill="var(--text-muted)" opacity="0.9"/>
        <circle cx="31" cy="21" r="1.5" fill="var(--text-muted)" opacity="0.9"/>
        <line x1="20" y1="34" x2="36" y2="34" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
        <line x1="24" y1="40" x2="46" y2="40" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
        <line x1="24" y1="46" x2="40" y2="46" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
        <line x1="20" y1="52" x2="34" y2="52" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
        <rect x="48" y="33" width="8" height="10" stroke="var(--accent)" strokeWidth="0.8" opacity="0.7"/>
      </svg>
    ),
    'strategie-ia': (
      <svg className="service-icon-svg spin" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="6" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
        <circle cx="40" cy="40" r="2.5" fill="var(--accent)" opacity="0.7"/>
        <circle cx="40" cy="14" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
        <circle cx="62" cy="27" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
        <circle cx="62" cy="53" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
        <circle cx="40" cy="66" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
        <circle cx="18" cy="53" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
        <circle cx="18" cy="27" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
        <line x1="40" y1="17.5" x2="40" y2="34" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="58.5" y1="28.5" x2="46" y2="37" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="58.5" y1="51.5" x2="46" y2="43" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="40" y1="62.5" x2="40" y2="46" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="21.5" y1="51.5" x2="34" y2="43" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="21.5" y1="28.5" x2="34" y2="37" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="40" y1="17.5" x2="58.5" y2="28.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
        <line x1="58.5" y1="28.5" x2="58.5" y2="51.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
        <line x1="58.5" y1="51.5" x2="40" y2="62.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
        <line x1="40" y1="62.5" x2="21.5" y2="51.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
        <line x1="21.5" y1="51.5" x2="21.5" y2="28.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
        <line x1="21.5" y1="28.5" x2="40" y2="17.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
        <circle cx="40" cy="14" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
        <circle cx="62" cy="27" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
        <circle cx="62" cy="53" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
        <circle cx="40" cy="66" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
        <circle cx="18" cy="53" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
        <circle cx="18" cy="27" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
      </svg>
    ),
    'identite-visuelle': (
      <svg className="service-icon-svg pen-draw" viewBox="0 0 80 80" fill="none">
        <line x1="22" y1="58" x2="56" y2="18" stroke="var(--text-muted)" strokeWidth="1.2"/>
        <line x1="26" y1="60" x2="60" y2="20" stroke="var(--text-muted)" strokeWidth="1.2"/>
        <polygon points="22,58 26,60 20,66" fill="var(--accent)" opacity="0.85"/>
        <line x1="56" y1="18" x2="60" y2="20" stroke="var(--text-muted)" strokeWidth="1"/>
        <line x1="56" y1="18" x2="59" y2="14" stroke="var(--text-muted)" strokeWidth="1"/>
        <line x1="60" y1="20" x2="63" y2="16" stroke="var(--text-muted)" strokeWidth="1"/>
        <line x1="59" y1="14" x2="63" y2="16" stroke="var(--text-muted)" strokeWidth="1"/>
        <path d="M20,66 Q18,68 16,67 Q13,66 14,63 Q15,60 18,58" stroke="var(--accent)" strokeWidth="0.9" fill="none" opacity="0.7"/>
        <circle cx="19" cy="67" r="1.2" fill="var(--accent)" opacity="0.85"/>
        <path d="M20,66 Q28,72 36,68 Q44,64 48,68" stroke="var(--text-muted)" strokeWidth="0.7" fill="none" opacity="0.6" strokeDasharray="2 2"/>
      </svg>
    ),
    'contenu-medias': (
      <svg className="service-icon-svg pulse" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="38" r="24" stroke="var(--text-muted)" strokeWidth="1"/>
        <circle cx="40" cy="38" r="16" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
        <line x1="40" y1="14" x2="40" y2="22" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="40" y1="54" x2="40" y2="62" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="16" y1="38" x2="24" y2="38" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <line x1="56" y1="38" x2="64" y2="38" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
        <polygon points="35,30 35,46 49,38" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.85"/>
        <line x1="57" y1="55" x2="66" y2="64" stroke="var(--text-muted)" strokeWidth="1.2" opacity="0.8"/>
        <circle cx="68" cy="66" r="2" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
      </svg>
    ),
    'seo-referencement': (
      <svg className="service-icon-svg float" viewBox="0 0 80 80" fill="none">
        <circle cx="36" cy="36" r="18" stroke="var(--text-muted)" strokeWidth="1"/>
        <line x1="49" y1="49" x2="64" y2="64" stroke="var(--text-muted)" strokeWidth="1.5"/>
        <line x1="28" y1="36" x2="44" y2="36" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
        <line x1="36" y1="28" x2="36" y2="44" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
        <circle cx="36" cy="36" r="10" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.7" strokeDasharray="3 3"/>
      </svg>
    ),
  };

  return icons[serviceId] || null;
}
