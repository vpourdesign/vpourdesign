import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">© 2026 V pour Design — Tous droits réservés</div>
      <div className="footer-right">
        <Link href="/agence-web-laval">Laval</Link> · <Link href="/agence-web-blainville">Blainville</Link> · <Link href="/agence-web-boisbriand">Boisbriand</Link> · <Link href="/agence-web-sainte-therese">Sainte-Thérèse</Link> · <Link href="/agence-web-terrebonne">Terrebonne</Link>
      </div>
    </footer>
  );
}
