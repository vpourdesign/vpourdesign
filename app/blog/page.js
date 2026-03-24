import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import { collectionSchema, breadcrumbSchema } from '../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Tendances web & IA',
  description: 'Articles et ressources sur l\'intelligence artificielle, le web design, le SEO local et les tendances numériques pour les PME de la Rive-Nord.',
  alternates: { canonical: 'https://vpourdesign.com/blog' },
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      num: '01',
      title: 'Intelligence artificielle',
      description: 'Comment l\'IA transforme le web design pour les PME de la Rive-Nord',
      status: 'Nouveau',
      slug: '/blog/ia-transforme-web-design-pme-rive-nord',
    },
    {
      id: 2,
      num: '02',
      title: 'SEO local',
      description: 'Guide complet du référencement pour les entreprises de Laval et la Rive-Nord',
      status: 'À venir',
    },
    {
      id: 3,
      num: '03',
      title: 'Études de cas',
      description: 'Résultats concrets : comment nous avons triplé le trafic de nos clients',
      status: 'À venir',
    },
    {
      id: 4,
      num: '04',
      title: 'Guides pratiques',
      description: 'Combien coûte un site web au Québec en 2026?',
      status: 'Nouveau',
      slug: '/blog/combien-coute-site-web-quebec-2026',
    },
    {
      id: 5,
      num: '05',
      title: 'Tendances web',
      description: 'Les 10 tendances web design à surveiller cette année',
      status: 'À venir',
    },
  ];

  return (
    <>
      <JsonLd data={collectionSchema({name:'Blog',description:'Articles et ressources sur l\u0027intelligence artificielle, le web design, le SEO local et les tendances num\u00e9riques pour les PME de la Rive-Nord.',url:'/blog',items:articles.filter(a => a.slug).map(a => ({name:a.description,url:a.slug}))})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Blog'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog</div>
          <h1 className="h1">Tendances web<br/>& intelligence <em>artificielle</em></h1>
        </div>
        <div className="cell cell-b" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
          <img
            src="/images/blog/accueil-blog.jpg"
            alt="Blog V pour Design"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(100%)' }}
          />
          {/* Animated AI icon — same as homepage */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', minHeight: '300px' }}>
            <svg viewBox="0 0 120 120" width="140" height="140" style={{ opacity: 0.9 }}>
              <style>{`
                @keyframes blogNodePulse { 0%, 100% { r: 4; opacity: 0.6; } 50% { r: 6; opacity: 1; } }
                @keyframes blogCoreGlow { 0%, 100% { r: 8; opacity: 0.8; } 50% { r: 10; opacity: 1; } }
                @keyframes blogRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .blog-node { animation: blogNodePulse 3s ease-in-out infinite; }
                .blog-core { animation: blogCoreGlow 2s ease-in-out infinite; }
                .blog-orbit { animation: blogRotate 20s linear infinite; transform-origin: 60px 60px; }
              `}</style>
              <g className="blog-orbit">
                <line x1="60" y1="60" x2="30" y2="25" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.4"/>
                <line x1="60" y1="60" x2="90" y2="25" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.4"/>
                <line x1="60" y1="60" x2="95" y2="65" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.4"/>
                <line x1="60" y1="60" x2="85" y2="100" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.4"/>
                <line x1="60" y1="60" x2="35" y2="100" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.4"/>
                <line x1="60" y1="60" x2="25" y2="65" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.4"/>
                <line x1="30" y1="25" x2="90" y2="25" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="90" y1="25" x2="95" y2="65" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="95" y1="65" x2="85" y2="100" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="85" y1="100" x2="35" y2="100" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="35" y1="100" x2="25" y2="65" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="25" y1="65" x2="30" y2="25" stroke="#8a7e6a" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="30" cy="25" r="4" fill="none" stroke="#8a7e6a" strokeWidth="1" className="blog-node"/>
                <circle cx="90" cy="25" r="4" fill="none" stroke="#8a7e6a" strokeWidth="1" className="blog-node" style={{animationDelay: '0.5s'}}/>
                <circle cx="95" cy="65" r="4" fill="none" stroke="#8a7e6a" strokeWidth="1" className="blog-node" style={{animationDelay: '1s'}}/>
                <circle cx="85" cy="100" r="4" fill="none" stroke="#8a7e6a" strokeWidth="1" className="blog-node" style={{animationDelay: '1.5s'}}/>
                <circle cx="35" cy="100" r="4" fill="none" stroke="#8a7e6a" strokeWidth="1" className="blog-node" style={{animationDelay: '2s'}}/>
                <circle cx="25" cy="65" r="4" fill="none" stroke="#8a7e6a" strokeWidth="1" className="blog-node" style={{animationDelay: '2.5s'}}/>
              </g>
              <circle cx="60" cy="60" r="8" fill="none" stroke="#f7cd46" strokeWidth="1.5" className="blog-core"/>
              <circle cx="60" cy="60" r="3" fill="#f7cd46" opacity="0.8"/>
            </svg>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Restez informé des dernières tendances en web design, intelligence artificielle et marketing numérique. Conseils et stratégies pour les PME.</p>
        </div>
        <div className="cell cell-d">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.15 }}>Savoir, c&apos;est<br/><em style={{ color: 'var(--accent)' }}>dominer</em></div>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section>
        <div className="services-list">
          {articles.map((article) => {
            const Wrapper = article.slug ? Link : 'div';
            const wrapperProps = article.slug ? { href: article.slug, style: { textDecoration: 'none', color: 'inherit' } } : {};
            return (
              <Wrapper key={article.id} {...wrapperProps}>
                <div className="service-item reveal" style={article.slug ? { cursor: 'pointer' } : {}}>
                  <div className="service-num">{article.num}</div>
                  <div className="service-content">
                    <div className="service-title">{article.title}</div>
                    <div className="service-desc">{article.description}</div>
                  </div>
                  <div className="service-icon-cell">
                    <div style={{ width: '80px', height: '80px' }}></div>
                  </div>
                  <div className="service-meta">
                    <div className="service-tag" style={article.slug ? { color: 'var(--accent)' } : {}}>{article.status}</div>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section className="section-grid" style={{ padding: '48px 32px', textAlign: 'center', borderTop: '0.5px solid var(--line)' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <p className="about-body">Le blog arrive bientôt. En attendant, <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)' }}>contactez-nous</a> pour discuter de votre projet.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
