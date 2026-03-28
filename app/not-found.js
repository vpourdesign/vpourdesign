import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Page introuvable',
  description: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(40px, 8vw, 120px) clamp(24px, 5vw, 64px)',
        borderBottom: '0.5px solid var(--line)',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Erreur 404
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 0.93,
          letterSpacing: '-0.02em',
          marginBottom: '32px',
          maxWidth: '20ch',
        }}>
          Cette page n&apos;existe <em style={{ color: 'var(--accent)' }}>plus</em>
        </h1>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          maxWidth: '50ch',
          marginBottom: '40px',
        }}>
          La page que vous cherchez a peut-être été déplacée ou n&apos;existe plus.
          Voici quelques liens pour retrouver votre chemin.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '0.5px solid var(--accent)',
            transition: 'background 0.3s, color 0.3s',
          }}>
            Accueil
          </Link>
          <Link href="/services" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '0.5px solid var(--line)',
            transition: 'border-color 0.3s',
          }}>
            Services
          </Link>
          <Link href="/projets" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '0.5px solid var(--line)',
            transition: 'border-color 0.3s',
          }}>
            Projets
          </Link>
          <Link href="/contact" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '0.5px solid var(--line)',
            transition: 'border-color 0.3s',
          }}>
            Contact
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
