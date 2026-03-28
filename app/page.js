import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import JsonLd from '../components/JsonLd';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceIcon } from '../components/ServiceIcons';
import { services, projects, clients } from '../data/services';
import { cities } from '../data/cities';
import { localBusinessSchema, breadcrumbSchema } from '../data/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Agence web · Rive-Nord de Montréal</div>
          <h1 className="h1">L&apos;intelligence artificielle,<br/>au service de votre <em>croissance</em></h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/accueil/ai.jpg" alt="Intelligence artificielle abstraite" fill sizes="(max-width: 768px) 100vw, 33vw" priority style={{ objectFit: 'cover', opacity: 0.3, zIndex: 0, filter: 'grayscale(100%)' }}/>
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
            <div className="tag" style={{ marginTop: '12px' }}>Intelligence artificielle</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Spécialistes en <strong>intelligence artificielle appliquée au web</strong>, nous concevons des sites web performants et des publicités web ciblées qui génèrent de vrais résultats pour les entreprises de la <strong>Rive-Nord et Laval.</strong></p>
        </div>
        <div className="cell cell-d">
          <div className="body-text" style={{ marginBottom: '8px' }}>Spécialiste web depuis</div>
          <div className="deco-number">2009</div>
        </div>
      </section>

      {/* CTA — IA CONSULTATION */}
      <div className="cta-ia-band-wrap">
        <section className="cta-ia-band">
          <div className="cta-ia-inner">
            <div className="cta-ia-img">
              <Image src="/images/accueil/meeting-ai.jpg" alt="Réunion stratégique sur l'intelligence artificielle" width={600} height={400} sizes="(max-width: 768px) 100vw, 50vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="cta-ia-content">
              <p className="cta-ia-eyebrow">Intelligence artificielle</p>
              <h2 className="cta-ia-headline">Vous dites <em>« IA »</em> en réunion,<br/>mais personne ne sait par où commencer&nbsp;?</h2>
              <p className="cta-ia-body">On passe du jargon à l&apos;action. Nous identifions les gains concrets que l&apos;intelligence artificielle peut apporter à <strong>votre</strong> workflow — puis on les implante avec vous, étape par étape.</p>
              <p className="cta-ia-offer">Première consultation gratuite.</p>
              <a href="#contact" className="cta-ia-btn">Prendre rendez-vous →</a>
            </div>
          </div>
        </section>
      </div>

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

      {/* SHOWREEL - simplified for SSR (video needs client component) */}
      <section className="showreel reveal">
        <div className="showreel-grid">
          <div className="showreel-label">
            <div className="showreel-label-text">Showreel</div>
            <div className="page-num" style={{ writingMode: 'vertical-rl' }}>2026</div>
          </div>
          <div className="showreel-video-wrap">
            <video muted autoPlay loop playsInline preload="none">
              <source src="/VPD_DEMO_web.webm" type="video/webm" />
              <source src="/VPD_DEMO_web.mp4" type="video/mp4" />
            </video>
            <div className="showreel-overlay"></div>
          </div>
          <div className="showreel-info">
            <div className="showreel-info-tag">Demo reel 2026</div>
            <div className="showreel-info-title">Nos créations<br/>en mouvement</div>
            <div className="showreel-info-body">Une sélection de nos projets vidéo, web et identité visuelle réalisés pour nos clients au fil des années.</div>
            <div className="showreel-info-meta">
              <span>56 secondes</span>
              <span>Sites · Vidéos · Logos</span>
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

      {/* À PROPOS */}
      <section id="apropos" className="about-section">
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>À propos</div>
            <div className="section-num" style={{ marginBottom: '24px' }}>03 / 04</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div className="about-stats-row" style={{ flexDirection: 'column', gap: '24px' }}>
              <div className="about-stat">
                <div className="about-stat-num">17+</div>
                <div className="about-stat-label">+ de 17 ans d&apos;expérience dans la stratégie de sites web</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">500+</div>
                <div className="about-stat-label">Projets complétés</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">Une agence qui pense<br/><em>autrement</em></h2>
          </div>
          <div className="reveal">
            <p className="about-body">Chez V pour Design, nous avons fait le pari de l&apos;intelligence artificielle bien avant qu&apos;elle ne devienne un mot à la mode. Notre fondateur, Vincent Lavoie, a bâti cette agence sur une conviction simple : le meilleur design naît à l&apos;intersection de la créativité humaine et de la puissance technologique.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Basés sur la Rive-Nord de Montréal, nous accompagnons des entreprises de toutes tailles — de la PME locale de Blainville aux marques nationales comme Probaclac et Remax Crystal. Notre approche : écouter d&apos;abord, concevoir ensuite, livrer toujours.</p>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets">
        <div className="section-grid">
          <div className="section-header">
            <div className="section-label">Travaux récents</div>
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

      {/* CITIES SEO SECTION */}
      <section className="section-grid" style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <div className="eyebrow" style={{ marginBottom: '20px' }}>Nous desservons</div>
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
