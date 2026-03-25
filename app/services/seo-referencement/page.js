import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'SEO & R\u00e9f\u00e9rencement local \u2014 Rive-Nord & Laval | V pour Design',
  description: 'R\u00e9f\u00e9rencement local et SEO pour les PME de la Rive-Nord de Montr\u00e9al. Premi\u00e8re page Google gr\u00e2ce \u00e0 l\u2019intelligence artificielle. Laval, Blainville, Terrebonne.',
  alternates: { canonical: 'https://vpourdesign.com/services/seo-referencement' },
};

export default function SeoReferencementPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'SEO et r\u00e9f\u00e9rencement local',description:'R\u00e9f\u00e9rencement local et SEO pour les PME de la Rive-Nord de Montr\u00e9al. Premi\u00e8re page Google gr\u00e2ce \u00e0 l\u0027intelligence artificielle.',url:'/services/seo-referencement',features:['SEO local Rive-Nord','Optimisation technique','Strat\u00e9gie de contenu SEO','Google Ads','Rapports et transparence']})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Services',url:'/services'},{name:'SEO & R\u00e9f\u00e9rencement'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 05 &middot; SEO & R&eacute;f&eacute;rencement</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          &Ecirc;tre invisible sur Google,<br/>
          c&apos;est comme <em style={{ color: 'var(--accent)' }}>ne pas exister.</em>
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
            Le SEO n&apos;est pas de la magie noire. C&apos;est de la strat&eacute;gie, de la rigueur et de l&apos;intelligence artificielle appliqu&eacute;e &agrave; votre visibilit&eacute;. Nous positionnons les PME de la Rive-Nord en premi&egrave;re page — et on y reste.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg className="service-icon-svg float" viewBox="0 0 80 80" fill="none" width="200" height="200">
            <circle cx="36" cy="36" r="18" stroke="var(--text-muted)" strokeWidth="1"/>
            <line x1="49" y1="49" x2="64" y2="64" stroke="var(--text-muted)" strokeWidth="1.5"/>
            <line x1="28" y1="36" x2="44" y2="36" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
            <line x1="36" y1="28" x2="36" y2="44" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
            <circle cx="36" cy="36" r="10" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.7" strokeDasharray="3 3"/>
          </svg>
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Local</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              SEO local <em style={{ color: 'var(--accent)' }}>dominant</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Pages d&eacute;di&eacute;es par ville (Laval, Blainville, Terrebonne, Boisbriand, Sainte-Th&eacute;r&egrave;se), Google Business Profile optimis&eacute;, citations NAP coh&eacute;rentes — vous apparaissez l&agrave; o&ugrave; vos clients cherchent.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Tech</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Optimisation <em style={{ color: 'var(--accent)' }}>technique</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Vitesse de chargement, Core Web Vitals, structure de donn&eacute;es schema.org, architecture de site — les fondations invisibles qui font toute la diff&eacute;rence sur Google.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Contenu</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Strat&eacute;gie de contenu <em style={{ color: 'var(--accent)' }}>SEO</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Articles de blog optimis&eacute;s, pages de service cibl&eacute;es, FAQ structur&eacute;es — du contenu qui r&eacute;pond aux vraies questions de vos clients et qui positionne votre expertise.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Ads</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Google Ads <em style={{ color: 'var(--accent)' }}>intelligent</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Campagnes Search, Display et Local Services — ciblage g&eacute;ographique pr&eacute;cis sur la Rive-Nord avec optimisation IA continue du budget et des ench&egrave;res.
            </p>
          </div>
        </div>

        {/* Statement 5 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Data</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Rapports et <em style={{ color: 'var(--accent)' }}>transparence</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Tableaux de bord en temps r&eacute;el, rapports mensuels clairs, m&eacute;triques qui comptent — vous savez exactement o&ugrave; va chaque dollar et quel retour il g&eacute;n&egrave;re.
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
            La premi&egrave;re page de Google<br/>
            n&apos;est pas un luxe.<br/>
            C&apos;est une <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>n&eacute;cessit&eacute;.</em>
          </h2>
        </div>
      </section>

      {/* CTA — FREE SESSION */}
      <section style={{ borderTop: '0.5px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
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
            Nous sommes tellement confiants dans la valeur que le SEO peut apporter &agrave; votre entreprise que nous offrons une premi&egrave;re s&eacute;ance d&apos;exploration gratuite. Aucune obligation. Aucun pitch de vente. Juste une conversation honn&ecirc;te sur votre visibilit&eacute; et comment la propulser.
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
            'Audit SEO partiel de votre site',
            'Analyse des mots-cl\u00e9s locaux',
            '\u00c9tude de la comp\u00e9tition Rive-Nord',
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
