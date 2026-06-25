'use client';
import { useState, useEffect } from 'react';

/**
 * Numéro de téléphone anti-scraping.
 * Le numéro est encodé (base64) et reconstruit uniquement côté client après
 * hydratation : il N'APPARAÎT PAS dans le HTML rendu côté serveur, donc les
 * bots qui aspirent le code source ne le voient pas. Les vrais visiteurs, eux,
 * voient le numéro et peuvent cliquer pour appeler (lien tel:).
 *
 * Props :
 *   className — classe CSS appliquée au lien (ex. "nav-phone")
 *   plain     — true => hérite couleur + sans soulignement (pour le footer en texte)
 */
export default function PhoneLink({ className = '', plain = false }) {
  const [tel, setTel] = useState(null);

  useEffect(() => {
    setTel(atob('NTE0NTY3NTc2Mw=='));
  }, []);

  // Avant hydratation (et dans le HTML serveur) : aucun numéro exposé.
  if (!tel) {
    return <span className={className} aria-hidden="true" />;
  }

  const pretty = `(${tel.slice(0, 3)}) ${tel.slice(3, 6)}-${tel.slice(6)}`;
  const style = plain ? { color: 'inherit', textDecoration: 'none' } : undefined;

  return (
    <a href={`tel:${tel}`} className={className} style={style} aria-label="Téléphone">
      {pretty}
    </a>
  );
}
