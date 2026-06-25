import PhoneLink from '../../../../components/PhoneLink';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import ContactForm from '../../../../components/ContactForm';
import JsonLd from '../../../../components/JsonLd';
import { cityLocalBusinessSchema, faqSchema, breadcrumbSchema } from '../../../../data/schema';
import { ServiceIcon } from '../../../../components/ServiceIcons';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { citiesEn } from '../../../../data/cities-en';
import { cities } from '../../../../data/cities';
import { servicesEn } from '../../../../data/services-en';

// Map of city slugs to their image filenames (shared with FR)
function getCityImage(slug) {
  const imageMap = {
    'laval': 'laval.jpg',
    'blainville': 'blainville.jpg',
    'boisbriand': 'boisbriand.jpg',
    'rosemere': 'rosemere.jpg',
  };
  return imageMap[slug] || null;
}

export async function generateStaticParams() {
  return citiesEn.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = citiesEn.find(c => c.slug === city);
  if (!cityData) return {};
  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    alternates: {
      canonical: `https://vpourdesign.com/en/web-agency-${city}`,
      languages: {
        'fr-CA': `https://vpourdesign.com/agence-web-${city}`,
        'en': `https://vpourdesign.com/en/web-agency-${city}`,
      },
    },
  };
}

export default async function CityPageEn({ params }) {
  const { city } = await params;
  const cityData = citiesEn.find(c => c.slug === city);
  if (!cityData) notFound();

  const cityImage = getCityImage(city);

  const h1Parts = cityData.h1.split(' — ');
  const h1Line1 = h1Parts[0];
  const h1Line2 = h1Parts.length > 1 ? h1Parts[1] : '';

  return (
    <>
      <JsonLd data={cityLocalBusinessSchema(cityData)} />
      <JsonLd data={faqSchema(cityData.faq)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/en' }, { name: cityData.name }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Web Agency · {cityData.name}</div>
          <h1 className="h1">{h1Line1.replace(cityData.name, '').trim()}<br/><em>{cityData.name}</em>{h1Line2 && <><br/><span style={{ fontSize: '0.5em', fontWeight: 300, color: 'var(--text-muted)' }}>{h1Line2}</span></>}</h1>
        </div>
        <div className="cell cell-b" style={cityImage ? { padding: 0, position: 'relative', overflow: 'hidden' } : {}}>
          {cityImage ? (
            <Image
              src={`/images/villes/${cityImage}`}
              alt={`${cityData.name} — V pour Design`}
              fill
              style={{ objectFit: 'cover', filter: 'grayscale(30%) contrast(1.1)', opacity: 0.75 }}
            />
          ) : (
            <>
              <div><div className="page-num">{cityData.region}</div></div>
              <div className="ai-icon-wrap">
                <div className="accent-line" style={{ height: '80px' }}></div>
              </div>
              <div>
                <div className="tag">Artificial Intelligence</div>
              </div>
            </>
          )}
        </div>
        <div className="cell cell-c">
          <p className="subline">{cityData.subline || cityData.intro.substring(0, 200) + '...'}</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>{cityData.stats.population}</div>
          <div className="body-text" style={{ marginTop: '8px' }}>residents</div>
        </div>
      </section>

      {/* CITY STATS + INTRO */}
      <section className="about-section">
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>{cityData.name} by the numbers</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="about-stat">
                <div className="about-stat-num">{cityData.stats.population}</div>
                <div className="about-stat-label">Population</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">{cityData.stats.businesses}</div>
                <div className="about-stat-label">Businesses</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>{cityData.stats.growth}</div>
                <div className="about-stat-label">Trend</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">Your web agency in<br/><em>{cityData.name}</em></h2>
          </div>
          <div className="reveal">
            <p className="about-body">{cityData.intro}</p>
          </div>
          {cityData.clients && cityData.clients.length > 0 && (
            <div className="reveal">
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Active clients in {cityData.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cityData.clients.map(c => (
                  <span key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>{c}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* EXTENDED INTRO — additional content sections for enriched cities */}
      {cityData.introSections && (
        <section style={{ borderTop: '0.5px solid var(--line)' }}>
          {cityData.introSections.map((section, i) => (
            <div key={i} className="about-section" style={{ borderTop: i > 0 ? '0.5px solid var(--line)' : 'none' }}>
              <div className="about-sidebar">
                <div>
                  <div className="eyebrow" style={{ marginBottom: '16px' }}>0{i + 1}</div>
                  <div className="accent-line"></div>
                </div>
              </div>
              <div className="about-main">
                <div className="reveal">
                  <h2 className="about-title" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>{section.title}</h2>
                </div>
                <div className="reveal">
                  <p className="about-body">{section.text}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* WHY US */}
      {cityData.whyUs && (
        <section style={{ borderTop: '0.5px solid var(--line)' }}>
          <div className="section-grid">
            <div className="section-header">
              <div className="section-label">Why V pour Design in {cityData.name}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', borderBottom: '0.5px solid var(--line)' }}>
            {cityData.whyUs.map((item, i) => (
              <div key={i} className="reveal" style={{ padding: 'clamp(24px, 4vw, 48px)', borderRight: '0.5px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LOCAL SEO */}
      {cityData.localSeo && (
        <section className="about-section" style={{ borderTop: '0.5px solid var(--line)' }}>
          <div className="about-sidebar">
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>Local SEO</div>
              <div className="accent-line"></div>
            </div>
          </div>
          <div className="about-main">
            <div className="reveal">
              <h2 className="about-title">Local SEO in<br/><em>{cityData.name}</em></h2>
            </div>
            <div className="reveal">
              <p className="about-body">{cityData.localSeo}</p>
            </div>
            {cityData.landmarks && cityData.landmarks.length > 0 && (
              <div className="reveal">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px', marginTop: '24px' }}>Areas served</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cityData.landmarks.map(l => (
                    <span key={l} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>{l}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* APPROACH */}
      {cityData.approach && (
        <section style={{ borderTop: '0.5px solid var(--line)' }}>
          <div className="section-grid">
            <div className="section-header">
              <div className="section-label">Our approach in {cityData.name}</div>
              <div className="section-num">{cityData.approach.length} steps</div>
            </div>
          </div>
          <div className="services-list">
            {cityData.approach.map((step, i) => (
              <div key={i} className="service-item reveal">
                <div className="service-num">0{i + 1}</div>
                <div className="service-content">
                  <div className="service-title">{step.title}</div>
                  <div className="service-desc">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section>
        <div className="section-grid">
          <div className="section-header">
            <div className="section-label">Services in {cityData.name}</div>
            <div className="section-num">{servicesEn.length} services</div>
          </div>
        </div>
        <div className="services-list">
          {servicesEn.map((service) => (
            <Link href={`/en/services/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-item reveal">
                <div className="service-num">{service.num}</div>
                <div className="service-content">
                  <div className="service-title">{service.title}</div>
                  <div className="service-desc">{service.description}</div>
                </div>
                <div className="service-icon-cell">
                  <ServiceIcon serviceId={service.frId} />
                </div>
                <div className="service-meta">
                  {service.tags.map(tag => <div key={tag} className="service-tag">{tag}</div>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="about-section" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>FAQ</div>
            <div className="accent-line"></div>
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">Frequently asked<br/><em>questions</em></h2>
          </div>
          {cityData.faq.map((item, i) => (
            <div key={i} className="reveal" style={{ borderBottom: '0.5px solid var(--line)', paddingBottom: '24px' }}>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.6', marginBottom: '8px' }}>{item.q}</h3>
              <p className="about-body">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP — for Rosemère (home base) */}
      {city === 'rosemere' && (
        <section style={{ borderTop: '0.5px solid var(--line)' }}>
          <div className="section-grid">
            <div className="section-header">
              <div className="section-label">Our office in Rosemère</div>
              <div className="section-num">400 Grande-Côte</div>
            </div>
          </div>
          <div style={{ borderTop: '0.5px solid var(--line)' }}>
            <iframe
              src="https://www.google.com/maps?q=400+Grande-C%C3%B4te,+Rosem%C3%A8re,+QC,+Canada&output=embed&hl=en"
              width="100%"
              height="350"
              style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(92%) contrast(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V pour Design — 400 Grande-Côte, Rosemère"
            ></iframe>
          </div>
        </section>
      )}

      {/* CTA + CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Your project in<br/><em>{cityData.name}</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-value"><PhoneLink /></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value"><a href="mailto:info@vpourdesign.com">info@vpourdesign.com</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Office</div>
              <div className="contact-info-value">400 Grande-Côte, Rosemère</div>
            </div>
          </div>
          {city !== 'rosemere' && (
            <div style={{ marginTop: '24px', border: '0.5px solid var(--line)' }}>
              <iframe
                src="https://www.google.com/maps?q=400+Grande-C%C3%B4te,+Rosem%C3%A8re,+QC,+Canada&output=embed&hl=en"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(92%) contrast(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="V pour Design — 400 Grande-Côte, Rosemère"
              ></iframe>
            </div>
          )}
        </div>
      </section>

      {/* LANG SWITCH — FR counterpart */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: '24px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Also available in</span>
          <Link href={`/agence-web-${city}`} className="nav-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em' }}>
            Version française — agence-web-{city}
          </Link>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="section-grid" style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <div className="eyebrow" style={{ marginBottom: '20px' }}>Other cities we serve</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {cities.filter(c => c.slug !== city).map(c => (
              <Link key={c.slug} href={`/en/web-agency-${c.slug}`} className="nav-link" style={{ padding: '8px 16px', border: '0.5px solid var(--line)', fontSize: '12px' }}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
