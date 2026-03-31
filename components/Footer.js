import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ flexDirection: 'column', gap: '0' }}>
      {/* Map bar */}
      <div style={{ width: '100%', borderBottom: '0.5px solid var(--line)' }}>
        <iframe
          src="https://www.google.com/maps?q=400+Grande-C%C3%B4te,+Rosem%C3%A8re,+QC,+Canada&output=embed&hl=fr"
          width="100%"
          height="150"
          style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(92%) contrast(0.9)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="V pour Design — 400 Grande-Côte, Rosemère"
        ></iframe>
      </div>
      {/* Footer content */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '20px 32px', flexWrap: 'wrap', gap: '12px' }}>
        <div className="footer-left" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>© 2026 V pour Design — Tous droits réservés</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>400 Grande-Côte, Rosemère, QC · (514) 567-5763</span>
        </div>
        <div className="footer-right">
          <Link href="/agence-web-rosemere">Rosemère</Link> · <Link href="/agence-web-laval">Laval</Link> · <Link href="/agence-web-blainville">Blainville</Link> · <Link href="/agence-web-boisbriand">Boisbriand</Link> · <Link href="/agence-web-sainte-therese">Sainte-Thérèse</Link> · <Link href="/agence-web-terrebonne">Terrebonne</Link>
        </div>
      </div>
    </footer>
  );
}
