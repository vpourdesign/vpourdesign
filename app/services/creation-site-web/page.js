import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Cr\u00e9ation de sites web sur mesure \u2014 Agence web IA | V pour Design',
  description: 'Sites web performants, optimis\u00e9s SEO et propuls\u00e9s par l\'IA. Conception sur mesure pour les PME de la Rive-Nord de Montr\u00e9al. Du vitrine au e-commerce.',
  alternates: { canonical: 'https://vpourdesign.com/services/creation-site-web' },
};

export default function CreationSiteWebPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'Cr\u00e9ation de sites web sur mesure',description:'Sites web performants, optimis\u00e9s SEO et propuls\u00e9s par l\u0027IA pour les PME de la Rive-Nord.',url:'/services/creation-site-web',features:['Site vitrine','E-commerce','Site sur mesure','Optimisation SEO','Design responsive','Int\u00e9gration IA']})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Services',url:'/services'},{name:'Sites web'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 01 &middot; Sites web</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          Votre site web est votre<br/>
          meilleur <em style={{ color: 'var(--accent)' }}>vendeur.</em><br/>
          Il travaille 24/7.
        </h1>
      </section>

      {/* MANIFESTO GRID */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '0.5px solid var(--line)' }}>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', borderRight: '0.5px solid var(--line)' }}>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}>
            Chaque pixel, chaque ligne de code, chaque interaction est pens&eacute;e pour convertir vos visiteurs en clients. Pas un site vitrine. Un outil de croissance.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg viewBox="0 0 80 80" fill="none" style={{ width: '200px', height: '200px' }}>
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
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>100%</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Sur mesure, <em style={{ color: 'var(--accent)' }}>toujours</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Zero template. Chaque site est con&ccedil;u de z&eacute;ro, adapt&eacute; &agrave; votre marque, votre march&eacute; et vos objectifs. Du e-commerce au site vitrine, chaque projet est unique.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>SEO</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Optimis&eacute; d&egrave;s le <em style={{ color: 'var(--accent)' }}>d&eacute;part</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Structure technique, balises, vitesse de chargement, contenu &mdash; le SEO est int&eacute;gr&eacute; dans chaque d&eacute;cision de conception. Pas un ajout apr&egrave;s coup.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Mobile</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Exp&eacute;rience mobile <em style={{ color: 'var(--accent)' }}>irr&eacute;prochable</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              70% de vos visiteurs sont sur mobile. Chaque site est con&ccedil;u mobile-first avec des interactions tactiles fluides et un temps de chargement sous 2 secondes.
            </p>
          </div>
        </div>

        {/* Statement 5 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>IA</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              L&apos;intelligence artificielle <em style={{ color: 'var(--accent)' }}>int&eacute;gr&eacute;e</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Chatbots, recommandations personnalis&eacute;es, contenu dynamique &mdash; l&apos;IA rend votre site plus intelligent et plus performant que la comp&eacute;tition.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH BOLD STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        <div style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            Un site web qui ne convertit pas est un site web qui vous <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>co&ucirc;te de l&apos;argent.</em>
          </h2>
        </div>
      </section>


      {/* NOS RÉALISATIONS */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Portfolio</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05 }}>
            Nos <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>réalisations</em>
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '0',
        }}>
          {[
            { name: 'Probaclac', url: 'probaclac.ca', span: '2' },
            { name: 'Olivier Martineau', url: 'olivier-martineau.com', span: '1' },
            { name: 'Santé Rosemère', url: 'santerosemere.com', span: '1' },
            { name: 'Toitex', url: 'toitex.ca', span: '1' },
            { name: 'Fred et Max', url: 'fredetmax.com', span: '1' },
            { name: 'Fabelta', url: 'fabelta.com', span: '1' },
            { name: 'Carrefour Industrielle Alliance', url: 'carrefourindustriellealliance.com', span: '2' },
            { name: 'Myoclub', url: 'myoclub.ca', span: '1' },
            { name: 'Casa Murray', url: 'casamurray.ca', span: '2' },
          ].map((project, i) => (
            <a
              key={i}
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                gridColumn: `span ${project.span}`,
                position: 'relative',
                aspectRatio: project.span === '2' ? '2.2/1' : '1.1/1',
                overflow: 'hidden',
                border: '0.5px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 'clamp(20px, 3vw, 40px)',
                textDecoration: 'none',
                transition: 'background 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'var(--bg-primary)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#141310'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '6px' }}>
                {project.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                {project.url}
              </div>
              <div style={{ position: 'absolute', top: 'clamp(20px, 3vw, 40px)', right: 'clamp(20px, 3vw, 40px)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.1em' }}>
                ↗
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Pr&ecirc;t &agrave; prendre<br/>de l&apos;<em>avance?</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">T&eacute;l&eacute;phone</div>
              <div className="contact-info-value"><a href="tel:5145675763">(514) 567-5763</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Courriel</div>
              <div className="contact-info-value"><a href="mailto:info@vpourdesign.com">info@vpourdesign.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
