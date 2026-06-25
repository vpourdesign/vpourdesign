import PhoneLink from '../../../components/PhoneLink';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Contenu & m\u00e9dias \u2014 Vid\u00e9o, photo et r\u00e9seaux sociaux | V pour Design',
  description: 'Production vid\u00e9o, photographie professionnelle et gestion des r\u00e9seaux sociaux pour les PME de la Rive-Nord. Contenu optimis\u00e9 par l\u2019intelligence artificielle.',
  alternates: { canonical: 'https://vpourdesign.com/services/contenu-medias' },
};

export default function ContenuMediasPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'Contenu et m\u00e9dias',description:'Production vid\u00e9o, photographie professionnelle et gestion des r\u00e9seaux sociaux pour les PME de la Rive-Nord. Contenu optimis\u00e9 par l\u0027intelligence artificielle.',url:'/services/contenu-medias',features:['Production vid\u00e9o','Photographie professionnelle','Gestion r\u00e9seaux sociaux','Publicit\u00e9 web cibl\u00e9e','Contenu optimis\u00e9 par IA']})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Services',url:'/services'},{name:'Contenu & m\u00e9dias'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 04 &middot; Contenu &amp; m&eacute;dias</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          Le contenu ne suffit pas.<br/>
          Nous créons l&apos;impact qui fait<br/>
          la <em style={{ color: 'var(--accent)' }}>différence.</em>
        </h1>
      </section>

      {/* MANIFESTO GRID */}
      <section className="svc-manifesto">
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', borderRight: '0.5px solid var(--line)' }}>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}>
            Vid&eacute;os qui captent l&apos;attention en 3 secondes. Photos qui racontent une histoire. Contenus sociaux qui g&eacute;n&egrave;rent de l&apos;engagement. Chaque pi&egrave;ce de contenu est un investissement dans votre visibilit&eacute;.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg className="service-icon-svg pulse" viewBox="0 0 80 80" fill="none" width="200" height="200">
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
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div className="svc-stat-row">
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Vid&eacute;o</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Capsules qui <em style={{ color: 'var(--accent)' }}>convertissent</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Vid&eacute;os promotionnelles, t&eacute;moignages clients, tournages immobiliers, Reels et TikToks &mdash; du concept au montage final, tout est produit en interne.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div className="svc-stat-row">
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Photo</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Photographie <em style={{ color: 'var(--accent)' }}>professionnelle</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Portraits corporatifs, produits, &eacute;v&eacute;nements, immobilier &mdash; des visuels qui &eacute;l&egrave;vent instantan&eacute;ment la perception de votre marque.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div className="svc-stat-row">
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Social</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Gestion des r&eacute;seaux <em style={{ color: 'var(--accent)' }}>sociaux</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Strat&eacute;gie &eacute;ditoriale, cr&eacute;ation de contenu, planification et publication sur Instagram, Facebook, TikTok et LinkedIn. Vous vous concentrez sur votre business.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div className="svc-stat-row">
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Pub</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Publicit&eacute; web <em style={{ color: 'var(--accent)' }}>cibl&eacute;e</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Campagnes Facebook Ads, Google Ads, Instagram &mdash; ciblage pr&eacute;cis de votre client&egrave;le locale sur la Rive-Nord et au-del&agrave;. Chaque dollar publicitaire optimis&eacute; par l&apos;IA.
            </p>
          </div>
        </div>

        {/* Statement 5 */}
        <div className="svc-stat-row">
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>IA</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Contenu g&eacute;n&eacute;r&eacute; et optimis&eacute; par <em style={{ color: 'var(--accent)' }}>l&apos;IA</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              R&eacute;daction assist&eacute;e, calendrier &eacute;ditorial automatis&eacute;, analyse de performance en temps r&eacute;el &mdash; l&apos;IA transforme votre strat&eacute;gie de contenu d&apos;artisanale &agrave; industrielle.
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
            Vos concurrents publient<br/>
            du contenu. Vos clients<br/>
            veulent une <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>histoire.</em>
          </h2>
        </div>
      </section>

      {/* CTA — FREE SESSION */}
      <section className="svc-manifesto">
        <div style={{ padding: 'clamp(40px, 5vw, 80px)', borderRight: '0.5px solid var(--line)' }}>
          <div className="eyebrow" style={{ marginBottom: '24px', color: 'var(--accent)' }}>Offre exclusive</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Une s&eacute;ance<br/><em style={{ color: 'var(--accent)' }}>gratuite</em>
          </h2>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '45ch',
          }}>
            Nous sommes tellement confiants dans la valeur que notre expertise en contenu peut apporter &agrave; votre entreprise que nous offrons une premi&egrave;re s&eacute;ance d&apos;exploration gratuite. Aucune obligation. Aucun pitch de vente. Juste une conversation honn&ecirc;te sur vos besoins.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--bg-primary)',
            background: 'var(--accent)',
            padding: '14px 32px',
            textDecoration: 'none',
            transition: 'opacity 0.3s',
          }}>
            R&eacute;server ma s&eacute;ance gratuite &rarr;
          </Link>
        </div>
        <div style={{ padding: 'clamp(40px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Ce qui est inclus</div>
          {[
            'Audit de vos r\u00e9seaux sociaux',
            'Strat\u00e9gie de contenu personnalis\u00e9e',
            'Analyse de la comp\u00e9tition locale',
          ].map((item, i) => (
            <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', padding: '12px 0', borderBottom: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '16px' }}>+</span> {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Pr&ecirc;t &agrave; raconter<br/>votre <em>histoire?</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">T&eacute;l&eacute;phone</div>
              <div className="contact-info-value"><PhoneLink /></div>
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
