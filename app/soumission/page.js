import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ContactForm from '../../components/ContactForm';
import JsonLd from '../../components/JsonLd';
import { breadcrumbSchema } from '../../data/schema';

export const metadata = {
  title: 'Soumission gratuite',
  description: 'Obtenez votre soumission gratuite pour votre projet web, stratégie IA ou identité visuelle. Réponse en 24h, sans engagement.',
  alternates: { canonical: 'https://vpourdesign.com/soumission' },
};

export default function SoumissionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Soumission'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Soumission</div>
          <h1 className="h1">Obtenez votre<br/>soumission <em>gratuite</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">Sans engagement</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">Réponse 24h</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Décrivez votre projet et recevez une soumission détaillée adaptée à vos besoins. Aucuns frais cachés, aucun engagement. Parlons-en!</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">24h</div>
          <div className="body-text" style={{ marginTop: '8px' }}>délai de réponse</div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Décrivez votre<br/><em>projet</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Processus</div>
              <div className="contact-info-value">Remplissez le formulaire · Nous analysons · Soumission personnalisée</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Engagement</div>
              <div className="contact-info-value">Zéro engagement. Votre soumission, vos conditions.</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Délai</div>
              <div className="contact-info-value">Réponse sous 24 heures</div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <div className="accent-line"></div>
            <div className="tag" style={{ marginTop: '12px' }}>C&apos;est gratuit</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
