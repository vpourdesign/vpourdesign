import PhoneLink from '../../../components/PhoneLink';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '../../../data/services';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Agence web IA Rive-Nord`,
    description: service.longDescription?.substring(0, 160) || service.description,
    alternates: { canonical: `https://vpourdesign.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.id === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.longDescription || service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "V pour Design",
      "url": "https://vpourdesign.com",
    },
    "areaServed": [
      { "@type": "City", "name": "Laval" },
      { "@type": "City", "name": "Blainville" },
      { "@type": "City", "name": "Boisbriand" },
      { "@type": "City", "name": "Terrebonne" },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <Nav />
      <ScrollReveal />

      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Services · {service.num}</div>
          <h1 className="h1">{service.title.split(' ').slice(0, -1).join(' ')} <em>{service.title.split(' ').slice(-1)}</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">{service.num} / 05</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">{service.tags[0]}</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">{service.description}</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">{service.num}</div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Détails</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {service.tags.map(tag => (
                <div key={tag} className="service-tag">{tag}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">{service.title} augmenté(s)<br/>par l&apos;<em>IA</em></h2>
          </div>
          <div className="reveal">
            <p className="about-body">{service.longDescription}</p>
          </div>
          {service.features && (
            <div className="reveal">
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Ce que nous offrons</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {service.features.map((f, i) => (
                  <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', padding: '12px 0', borderBottom: '0.5px solid var(--line)' }}>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Besoin de {service.title.toLowerCase()}?<br/>Parlons de votre <em>projet</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Téléphone</div>
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
