import Image from 'next/image';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Stratégie IA pour PME — Agence web augmentée | V pour Design',
  description: 'L\'intelligence artificielle au service de votre croissance. Sites web 5x plus performants, automatisation des contenus, applications sur mesure et Big Data accessible pour les PME de la Rive-Nord.',
  alternates: { canonical: 'https://vpourdesign.com/services/strategie-ia' },
};

export default function StrategieIAPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'Strat\u00e9gie IA pour PME',description:'L\u0027intelligence artificielle au service de votre croissance. Sites web 5x plus performants, automatisation et Big Data accessible pour les PME de la Rive-Nord.',url:'/services/strategie-ia',features:['Sites web 5x plus performants','Veille des performances','Automatisation contenus sociaux','Applications sur mesure','Big Data accessible']})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Services',url:'/services'},{name:'Strat\u00e9gie IA'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 02 · Stratégie IA</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          L&apos;IA n&apos;est pas un <em style={{ color: 'var(--accent)' }}>gadget.</em><br/>
          C&apos;est votre prochain<br/>
          avantage compétitif.
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
            Pendant que vos concurrents hésitent, nous intégrons l&apos;intelligence artificielle directement dans votre entreprise. Pas de la théorie. Pas de buzzwords. Des résultats mesurables qui transforment votre façon de travailler, de communiquer et de vendre.
          </p>
        </div>
        <div style={{ padding: 0, position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: 0.7 }}
          >
            <source src="/images/services/ai/main.webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>5x</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Un site web <em style={{ color: 'var(--accent)' }}>5 fois</em> plus performant
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Pour le même investissement, l&apos;IA nous permet de livrer des sites optimisés dès le départ — structure SEO intelligente, contenu ciblé, performance technique maximale. Vos concurrents paient le même prix pour un site 5 fois moins efficace.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>24/7</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Veille des performances <em style={{ color: 'var(--accent)' }}>en continu</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              L&apos;IA surveille votre site, vos campagnes et votre positionnement Google pendant que vous dormez. Alertes proactives, recommandations d&apos;optimisation, rapports automatisés. Vous prenez les décisions, l&apos;IA fait le monitoring.
            </p>
          </div>
        </div>

        {/* VISUAL BREAK — Image 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '0.5px solid var(--line)', minHeight: '320px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRight: '0.5px solid var(--line)' }}>
            <Image src="/images/services/ai/1.jpg" alt="Intelligence artificielle appliquée" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) contrast(1.1)', opacity: 0.6 }} />
          </div>
          <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Ce qui nous différencie</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.3, maxWidth: '35ch' }}>
              Nous ne vendons pas de l&apos;IA.<br/>Nous l&apos;utilisons pour <em style={{ color: 'var(--accent)' }}>vos résultats.</em>
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Auto</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Contenus sociaux <em style={{ color: 'var(--accent)' }}>automatisés</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Calendrier éditorial, rédaction de publications, visuels adaptés par plateforme — l&apos;IA génère vos contenus médias sociaux et vous n&apos;avez qu&apos;à approuver. Fini les heures perdues à chercher quoi publier.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Apps</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Applications <em style={{ color: 'var(--accent)' }}>sur mesure</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Tableaux de bord, outils internes, automatisations complexes — nous développons des applications web propulsées par l&apos;IA, taillées exactement pour vos besoins. Ce qui prenait des mois se construit maintenant en semaines.
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
              Le Big Data n&apos;est plus un <em style={{ color: 'var(--accent)' }}>problème</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Vos données clients, vos statistiques web, vos performances marketing — l&apos;IA les transforme en insights actionnables. Pas besoin d&apos;un département TI. Pas besoin d&apos;un data scientist. Juste une agence qui sait quoi en faire.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH BOLD STATEMENT — with image 2 bg */}
      <section style={{ borderTop: '0.5px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
        <img
          src="/images/services/ai/2.jpg"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'grayscale(100%)' }}
        />
        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
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
            Ce que vous <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>imaginez,</em><br/>
            rien ne vous empêche<br/>
            de le réaliser.
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
            Une séance<br/><em style={{ color: 'var(--accent)' }}>gratuite</em>
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
            Nous sommes tellement confiants dans la valeur que l&apos;IA peut apporter à votre entreprise que nous offrons une première séance d&apos;exploration gratuite. Aucune obligation. Aucun pitch de vente. Juste une conversation honnête sur vos besoins et comment l&apos;IA peut y répondre.
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
            Réserver ma séance gratuite →
          </Link>
        </div>
        <div style={{ padding: 'clamp(40px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/images/services/ai/3.jpg"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, filter: 'grayscale(100%)' }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Ce qui est inclus</div>
          {[
            'Audit de votre présence web actuelle',
            'Identification des opportunités IA',
            'Recommandations personnalisées',
            'Estimation budgétaire transparente',
            'Plan d\'action concret',
          ].map((item, i) => (
            <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', padding: '12px 0', borderBottom: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '16px' }}>+</span> {item}
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Prêt à prendre<br/>de l&apos;<em>avance?</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Téléphone</div>
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
