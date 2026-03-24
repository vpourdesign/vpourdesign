import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import { founderProfileSchema, localBusinessSchema, breadcrumbSchema } from '../../data/schema';
import Link from 'next/link';
import { ServiceIcon } from '../../components/ServiceIcons';
import { services } from '../../data/services';

export const metadata = {
  title: 'À propos',
  description: 'Découvrez l\'histoire de V pour Design, agence web spécialisée en intelligence artificielle sur la Rive-Nord de Montréal. 17+ années d\'expérience.',
  alternates: { canonical: 'https://vpourdesign.com/a-propos' },
};

export default function AproposPage() {
  return (
    <>
      <JsonLd data={founderProfileSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'\u00C0 propos'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">À propos</div>
          <h1 className="h1">Une agence qui pense<br/><em>autrement</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">Depuis 2014</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">Rive-Nord de Montréal</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Nous réinventons le web design avec l&apos;intelligence artificielle. Notre vision : amplifier le talent humain, pas le remplacer.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">12<span>+</span></div>
          <div className="body-text" style={{ marginTop: '8px' }}>années</div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Les chiffres</div>
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
            <p className="about-body">Chez V pour Design, nous avons fait le pari de l&apos;intelligence artificielle bien avant qu&apos;elle ne devienne un mot à la mode. Notre fondateur, Vincent Lavoie, a bâti cette agence sur une conviction simple : le meilleur design naît à l&apos;intersection de la créativité humaine et de la puissance technologique.</p>
          </div>
          <div className="reveal">
            <p className="about-body">L&apos;IA ne remplace pas le talent — elle l&apos;amplifie. Nos designers, développeurs et stratèges utilisent les outils les plus avancés pour livrer des résultats supérieurs, plus rapides, plus intelligents. Chaque projet bénéficie de notre expertise en apprentissage automatique, traitement du langage naturel et optimisation prédictive.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Basés sur la Rive-Nord de Montréal, nous accompagnons des entreprises de toutes tailles — de la PME locale de Blainville aux marques nationales comme Probaclac et Remax Crystal. Nos clients nous choisissent pour notre approche : écouter d&apos;abord, concevoir ensuite, livrer toujours des résultats qui dépassent les attentes.</p>
          </div>
        </div>
      </section>

      {/* FONDATEUR */}
      <section className="about-section" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Fondateur</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '32px', position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
            <img
              src="/images/apropos/vincentlavoie.jpeg"
              alt="Vincent Lavoie — Fondateur de V pour Design"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.05)' }}
            />
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">Vincent <em>Lavoie</em></h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>Président fondateur</p>
          </div>
          <div className="reveal">
            <p className="about-body">Avant le design, il y a eu l&apos;histoire et la politique. Vincent Lavoie a d&apos;abord étudié les sciences humaines avant de bifurquer vers le graphisme au Collège Salette — un parcours atypique qui lui a donné une compréhension unique de la communication, de la stratégie et du pouvoir des idées.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Après 17 ans dans le graphisme, le web et les campagnes publicitaires, Vincent a fondé V pour Design avec une vision claire : utiliser la technologie pour amplifier la créativité, pas la remplacer. Ses années à concevoir des identités visuelles, orchestrer des campagnes nationales et bâtir des écosystèmes numériques lui ont donné un regard transversal rare dans l&apos;industrie.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Aujourd&apos;hui, cet horizon de connaissances — du design à la stratégie, de l&apos;histoire à la technologie — fait de lui un leader naturel en intelligence artificielle appliquée au web. Il ne s&apos;agit pas de maîtriser un outil, mais de comprendre pourquoi et comment l&apos;utiliser. C&apos;est exactement ce que Vincent apporte à chaque projet.</p>
          </div>
          <div className="reveal" style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>Collège Salette — Graphisme</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>Histoire &amp; Politique</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>17+ ans d&apos;expérience</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>Spécialiste IA</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section>
        <div className="section-grid">
          <div className="section-header">
            <div className="section-label">Nos services</div>
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

      <Footer />
    </>
  );
}
