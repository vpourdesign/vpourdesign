import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ContactForm from '../../components/ContactForm';
import JsonLd from '../../components/JsonLd';
import Link from 'next/link';
import { ServiceIcon } from '../../components/ServiceIcons';
import { services, projects, clients } from '../../data/services';
import { cities } from '../../data/cities';
import { localBusinessSchema, breadcrumbSchema } from '../../data/schema';

export default function HomePageEn() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Web Agency · Montreal North Shore</div>
          <h1 className="h1">Artificial intelligence,<br/>driving your <em>growth</em></h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/accueil/ai.jpg" alt="Artificial intelligence abstract" fill priority sizes="(max-width: 768px) 100vw, 33vw" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, zIndex: 0, filter: 'grayscale(100%)' }}/>
          <div style={{ position: 'relative', zIndex: 1 }}></div>
          <div className="ai-icon-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <svg className="ai-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="6" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
              <circle cx="40" cy="40" r="2.5" fill="var(--accent)" opacity="0.7"/>
              <circle cx="40" cy="14" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
              <circle cx="62" cy="27" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
              <circle cx="62" cy="53" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
              <circle cx="40" cy="66" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
              <circle cx="18" cy="53" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
              <circle cx="18" cy="27" r="3.5" stroke="var(--text-muted)" strokeWidth="0.9"/>
              <line x1="40" y1="17.5" x2="40" y2="34" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
              <line x1="58.5" y1="28.5" x2="46" y2="37" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
              <line x1="58.5" y1="51.5" x2="46" y2="43" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
              <line x1="40" y1="62.5" x2="40" y2="46" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
              <line x1="21.5" y1="51.5" x2="34" y2="43" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
              <line x1="21.5" y1="28.5" x2="34" y2="37" stroke="var(--text-muted)" strokeWidth="0.7" opacity="0.7"/>
              <line x1="40" y1="17.5" x2="58.5" y2="28.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
              <line x1="58.5" y1="28.5" x2="58.5" y2="51.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
              <line x1="58.5" y1="51.5" x2="40" y2="62.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
              <line x1="40" y1="62.5" x2="21.5" y2="51.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
              <line x1="21.5" y1="51.5" x2="21.5" y2="28.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
              <line x1="21.5" y1="28.5" x2="40" y2="17.5" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.8"/>
              <circle cx="40" cy="14" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
              <circle cx="62" cy="27" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
              <circle cx="62" cy="53" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
              <circle cx="40" cy="66" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
              <circle cx="18" cy="53" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
              <circle cx="18" cy="27" r="1.5" fill="var(--text-muted)" opacity="0.8"/>
            </svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="accent-line"></div>
            <div className="tag" style={{ marginTop: '12px' }}>Artificial Intelligence</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Specialists in <strong>AI-powered web solutions</strong>, we build high-performance websites and targeted web advertising that deliver real results for businesses on the <strong>North Shore and Laval.</strong></p>
        </div>
        <div className="cell cell-d">
          <div className="body-text" style={{ marginBottom: '8px' }}>Web specialist since</div>
          <div className="deco-number">2009</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-grid">
          <div className="section-header">
            <div className="section-label">Services</div>
            <div className="section-num">02 / 04</div>
          </div>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-item reveal">
                <div className="service-num">{service.num}</div>
                <div className="service-content">
                  <div className="service-title">{service.title}</div>
                  <div className="service-desc">{service.description}</div>
                </div>
                <div className="service-icon-cell">
                  <ServiceIcon serviceId={service.id} />
                </div>
                <div className="service-meta">
                  {service.tags.map(tag => <div key={tag} className="service-tag">{tag}</div>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="showreel reveal">
        <div className="showreel-grid">
          <div className="showreel-label">
            <div className="showreel-label-text">Showreel</div>
            <div className="page-num" style={{ writingMode: 'vertical-rl' }}>2026</div>
          </div>
          <div className="showreel-video-wrap">
            <video muted autoPlay loop playsInline preload="auto">
              <source src="/VPD_DEMO_web.webm" type="video/webm" />
              <source src="/VPD_DEMO_web.mp4" type="video/mp4" />
            </video>
            <div className="showreel-overlay"></div>
          </div>
          <div className="showreel-info">
            <div className="showreel-info-tag">Demo reel 2026</div>
            <div className="showreel-info-title">Our work<br/>in motion</div>
            <div className="showreel-info-body">A selection of our video, web, and brand identity projects created for our clients over the years.</div>
            <div className="showreel-info-meta">
              <span>56 seconds</span>
              <span>Websites · Videos · Logos</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-band">
        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <span key={i}>
              <span className="marquee-item">{client}</span>
              <span className="marquee-item marquee-dot"> · </span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="apropos" className="about-section">
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>About</div>
            <div className="section-num" style={{ marginBottom: '24px' }}>03 / 04</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div className="about-stats-row" style={{ flexDirection: 'column', gap: '24px' }}>
              <div className="about-stat">
                <div className="about-stat-num">17+</div>
                <div className="about-stat-label">Over 17 years of experience in website strategy</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">500+</div>
                <div className="about-stat-label">Completed projects</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">An agency that thinks<br/><em>differently</em></h2>
          </div>
          <div className="reveal">
            <p className="about-body">At V pour Design, we embraced artificial intelligence long before it became a buzzword. Our founder, Vincent Lavoie, built this agency on a simple conviction: the best design is born at the intersection of human creativity and technological power.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Based on Montreal&apos;s North Shore, we support businesses of all sizes — from local SMBs in Blainville to national brands like Probaclac and Remax Crystal. Our approach: listen first, design second, always deliver.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projets">
        <div className="section-grid">
          <div className="section-header">
            <div className="section-label">Recent work</div>
            <div className="section-num">04 / 03</div>
          </div>
        </div>
        {projects.map((project) => (
          <Link href={`/projets/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-row reveal" style={{ cursor: 'pointer' }}>
              <div className="project-index">{project.num}</div>
              <div className="project-image-cell">
                <Image src={project.image} alt={project.title} width={400} height={300} sizes="(max-width: 768px) 100vw, 33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="project-image-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-subtitle">{project.subtitle}</div>
              </div>
              <div className="project-detail">
                <div className="project-year">{project.year}</div>
                <div className="project-tags">
                  {project.tags.map(tag => <div key={tag} className="project-tag">{tag}</div>)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Let&apos;s talk about your<br/>next <em>project</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Office</div>
              <div className="contact-info-value">400 Grande-Côte<br/>Rosemère, QC</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-value"><a href="tel:5145675763">(514) 567-5763</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value"><a href="mailto:info@vpourdesign.com">info@vpourdesign.com</a></div>
            </div>
          </div>
          <div style={{ marginTop: '24px', border: '0.5px solid var(--line)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5!2d-73.7967!3d45.6361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc922e0a1a1a1a1%3A0x0!2s400+Grande-C%C3%B4te%2C+Rosem%C3%A8re%2C+QC!5e0!3m2!1sen!2sca!4v1"
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
            <div className="tag" style={{ marginTop: '12px' }}>Let&apos;s talk</div>
          </div>
        </div>
      </section>

      {/* CITIES SEO SECTION */}
      <section className="section-grid" style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <div className="eyebrow" style={{ marginBottom: '20px' }}>We serve</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {cities.map(c => (
              <Link key={c.slug} href={`/agence-web-${c.slug}`} className="nav-link" style={{ padding: '8px 16px', border: '0.5px solid var(--line)', fontSize: '12px' }}>
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
