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
              <div className="contact-info-label">Adresse</div>
              <div className="contact-info-value">400 Grande-Côte<br/>Rosemère, QC</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Téléphone</div>
              <div className="contact-info-value"><a href="tel:5145675763">(514) 567-5763</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Courriel</div>
              <div className="contact-info-value"><a href="mailto:info@vpourdesign.com">info@vpourdesign.com</a></div>
            </div>
          </div>
          <div style={{ marginTop: '24px', border: '0.5px solid var(--line)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5!2d-73.7967!3d45.6361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc922e0a1a1a1a1%3A0x0!2s400+Grande-C%C3%B4te%2C+Rosem%C3%A8re%2C+QC!5e0!3m2!1sfr!2sca!4v1"
              width="100%"
              height="250"
              style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(92%) contrast(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V pour Design — 400 Grande-Côte, Rosemère"
            ></iframe>
          </div>
          <div style={{ marginTop: '24px' }}>
            <div className="accent-line"></div>
            <div className="tag" style={{ marginTop: '12px' }}>Parlons-en</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
