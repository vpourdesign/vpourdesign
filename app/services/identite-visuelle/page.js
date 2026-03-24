import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Identit\u00e9 visuelle & branding \u2014 Design de marque | V pour Design',
  description: 'Logos, chartes graphiques et syst\u00e8mes visuels complets pour les PME de la Rive-Nord. Design de marque augment\u00e9 par l\u2019intelligence artificielle.',
  alternates: { canonical: 'https://vpourdesign.com/services/identite-visuelle' },
};

export default function IdentiteVisuellePage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'Identit\u00e9 visuelle et branding',description:'Logos, chartes graphiques et syst\u00e8mes visuels complets pour les PME de la Rive-Nord. Design de marque augment\u00e9 par l\u0027intelligence artificielle.',url:'/services/identite-visuelle',features:['Logo et marque','Charte graphique','Supports imprim\u00e9s','Templates r\u00e9seaux sociaux','Design augment\u00e9 par IA']})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Services',url:'/services'},{name:'Identit\u00e9 visuelle'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 03 &middot; Identit&eacute; visuelle</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          Votre marque m&eacute;rite<br/>
          plus qu&apos;un logo.<br/>
          Elle m&eacute;rite une <em style={{ color: 'var(--accent)' }}>identit&eacute;.</em>
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
            Une identit&eacute; visuelle forte, c&apos;est ce qui fait qu&apos;on vous reconna&icirc;t avant m&ecirc;me de lire votre nom. C&apos;est la promesse silencieuse que vous faites &agrave; chaque client potentiel.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg className="service-icon-svg pen-draw" viewBox="0 0 80 80" fill="none" width="200" height="200">
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
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Logo</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Un logo qui <em style={{ color: 'var(--accent)' }}>marque</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Pas un logo g&eacute;n&eacute;rique sorti d&apos;un template. Une marque con&ccedil;ue &agrave; partir de votre ADN d&apos;entreprise, test&eacute;e en contexte r&eacute;el, d&eacute;clin&eacute;e sur tous vos supports.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Charte</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Syst&egrave;me visuel <em style={{ color: 'var(--accent)' }}>complet</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Couleurs, typographies, iconographie, r&egrave;gles d&apos;utilisation &mdash; un guide de marque exhaustif pour que chaque point de contact soit coh&eacute;rent et professionnel.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Print</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Du num&eacute;rique au <em style={{ color: 'var(--accent)' }}>tangible</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Cartes d&apos;affaires, papeterie, emballages, enseignes, habillages de v&eacute;hicules &mdash; votre identit&eacute; prend vie sur tous les supports physiques.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Social</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Templates r&eacute;seaux <em style={{ color: 'var(--accent)' }}>sociaux</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Gabarits Instagram, Facebook, LinkedIn pr&ecirc;ts &agrave; l&apos;emploi. Votre &eacute;quipe publie du contenu on-brand en quelques minutes, sans designer.
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
              Le design augment&eacute; par <em style={{ color: 'var(--accent)' }}>l&apos;IA</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              L&apos;intelligence artificielle nous permet d&apos;explorer 10x plus de directions cr&eacute;atives. Vous recevez des propositions plus fortes, plus vite, avec plus de variations &agrave; choisir.
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
            Une bonne identit&eacute; visuelle<br/>
            ne se remarque pas.<br/>
            Elle se <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>ressent.</em>
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
            Nous sommes tellement confiants dans la valeur d&apos;une identit&eacute; visuelle forte que nous offrons une premi&egrave;re s&eacute;ance d&apos;exploration gratuite. Aucune obligation. Aucun pitch de vente. Juste une conversation honn&ecirc;te sur votre marque.
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
            'Audit de votre image de marque actuelle',
            'Analyse de votre positionnement vs concurrents',
            'Moodboard et direction cr\u00e9ative',
            '3 propositions de logo',
            'Guide de marque complet',
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
          <h2 className="contact-title reveal">Pr&ecirc;t &agrave; d&eacute;finir<br/>votre <em>identit&eacute;?</em></h2>
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
