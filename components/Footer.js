import Link from 'next/link';
import PhoneLink from './PhoneLink';

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '20px 32px', flexWrap: 'wrap', gap: '12px' }}>
        <div className="footer-left" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>© 2026 V pour Design — Tous droits réservés</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>400 Grande-Côte, Rosemère, QC · <PhoneLink plain /></span>
        </div>
        <div className="footer-right">
          <Link href="/agence-web-rosemere">Rosemère</Link> · <Link href="/agence-web-laval">Laval</Link> · <Link href="/agence-web-blainville">Blainville</Link> · <Link href="/agence-web-boisbriand">Boisbriand</Link> · <Link href="/agence-web-sainte-therese">Sainte-Thérèse</Link> · <Link href="/agence-web-terrebonne">Terrebonne</Link>
        </div>
      </div>
    </footer>
  );
}
