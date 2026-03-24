import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ContactForm from '../../components/ContactForm';
import JsonLd from '../../components/JsonLd';
import { contactPageSchema, localBusinessSchema, breadcrumbSchema } from '../../data/schema';

export const metadata = {
  title: 'Contactez-nous',
  description: 'Parlons de votre projet. Contactez V pour Design par téléphone, courriel ou via notre formulaire de contact. Réponse en 24h.',
  alternates: { canonical: 'https://vpourdesign.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Contact'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Contact</div>
          <h1 className="h1">Parlons de votre<br/>prochain <em>projet</em></h1>
        </div>
        <div className="cell cell-b" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
          <img
            src="/images/contact/contact.jpg"
            alt="Contactez V pour Design"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, filter: 'grayscale(30%)' }}
          />
        </div>
        <div className="cell cell-c">
          <p className="subline">Que vous ayez un projet web, une stratégie IA en tête ou simplement des questions, notre équipe est là pour vous écouter et vous proposer des solutions adaptées.</p>
        </div>
        <div className="cell cell-d">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.15 }}>Chaque grand projet<br/>commence par un<br/><em style={{ color: 'var(--accent)' }}>simple message</em></div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Parlons de votre<br/>prochain <em>projet</em></h2>
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
            <div className="contact-info-item">
              <div className="contact-info-label">Localisation</div>
              <div className="contact-info-value">Rive-Nord de Montréal, Québec</div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <div className="accent-line"></div>
            <div className="tag" style={{ marginTop: '12px' }}>Parlons-en</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
