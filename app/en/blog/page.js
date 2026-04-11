import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import { collectionSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Web Trends & AI',
  description: 'Articles and resources on artificial intelligence, web design, local SEO, and digital trends for North Shore SMEs.',
  alternates: { canonical: 'https://vpourdesign.com/en/blog' },
};

export default function BlogPage() {
  const articles = [
    {
      id: 8,
      num: '01',
      title: 'Local SEO · Basses-Laurentides',
      description: 'My Business Is in Rosemère — Why Can\'t My Clients in Lorraine Find Me on Google?',
      status: 'New',
      slug: '/blog/seo-local-rosemere-villes-voisines',
    },
    {
      id: 7,
      num: '02',
      title: 'Artificial Intelligence · Social Media',
      description: 'AI for Social Media: Stop Posting Into the Void',
      status: 'New',
      slug: '/blog/ia-pain-points-reseaux-sociaux',
    },
    {
      id: 6,
      num: '03',
      title: 'Web Marketing',
      description: 'February Changed Everything: Welcome to the New Era of Web Marketing',
      status: 'New',
      slug: '/en/blog/february-changed-everything-new-era-web-marketing',
    },
    {
      id: 1,
      num: '04',
      title: 'Artificial Intelligence',
      description: 'How AI Transforms Web Design for North Shore SMEs',
      status: 'New',
      slug: '/en/blog/ai-transforms-web-design-sme-north-shore',
    },
    {
      id: 4,
      num: '05',
      title: 'Practical Guides',
      description: 'How Much Does a Website Cost in Quebec in 2026?',
      status: 'New',
      slug: '/en/blog/website-cost-quebec-2026',
    },
    {
      id: 2,
      num: '06',
      title: 'Local SEO',
      description: 'Complete guide to search engine optimization for Laval and North Shore businesses',
      status: 'Coming soon',
    },
    {
      id: 3,
      num: '07',
      title: 'Case Studies',
      description: 'Real results: how we tripled our clients\' traffic',
      status: 'Coming soon',
    },
    {
      id: 5,
      num: '08',
      title: 'Web Trends',
      description: 'The 10 web design trends to watch this year',
      status: 'Coming soon',
    },
  ];

  return (
    <>
      <JsonLd data={collectionSchema({name:'Blog',description:'Articles and resources on artificial intelligence, web design, local SEO, and digital trends for North Shore SMEs.',url:'/en/blog',items:articles.filter(a => a.slug).map(a => ({name:a.description,url:a.slug}))})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Blog'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog</div>
          <h1 className="h1">Web trends<br/>& artificial <em>intelligence</em></h1>
        </div>
        <div className="cell cell-b" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
          <img
            src="/images/blog/accueil-blog.jpg"
            alt="V pour Design Blog"
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
          <p className="subline">Stay informed on the latest trends in web design, artificial intelligence, and digital marketing. Tips and strategies for SMEs.</p>
        </div>
        <div className="cell cell-d">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.15 }}>Knowledge is<br/><em style={{ color: 'var(--accent)' }}>power</em></div>
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
          <p className="about-body">The blog is coming soon. In the meantime, <a href="/en/contact" style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)' }}>contact us</a> to discuss your project.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
