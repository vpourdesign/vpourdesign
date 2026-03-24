import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import { founderProfileSchema, localBusinessSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';
import { ServiceIcon } from '../../../components/ServiceIcons';
import { services } from '../../../data/services';

export const metadata = {
  title: 'About Us',
  description: 'Discover the story of V pour Design, a web agency specializing in artificial intelligence on Montreal&apos;s North Shore. 17+ years of experience.',
  alternates: { canonical: 'https://vpourdesign.com/en/about' },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={founderProfileSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'About'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">About</div>
          <h1 className="h1">An agency that thinks<br/><em>differently</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">Since 2014</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">Montreal North Shore</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">We are reinventing web design with artificial intelligence. Our vision: amplify human talent, not replace it.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">12<span>+</span></div>
          <div className="body-text" style={{ marginTop: '8px' }}>years</div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>The numbers</div>
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
                <div className="about-stat-label">Projects completed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <p className="about-body">At V pour Design, we bet on artificial intelligence long before it became a buzzword. Our founder, Vincent Lavoie, built this agency on a simple conviction: the best design is born at the intersection of human creativity and technological power.</p>
          </div>
          <div className="reveal">
            <p className="about-body">AI doesn&apos;t replace talent — it amplifies it. Our designers, developers and strategists use the most advanced tools to deliver superior results, faster and smarter. Every project benefits from our expertise in machine learning, natural language processing and predictive optimization.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Based on Montreal&apos;s North Shore, we support businesses of all sizes — from local SMBs in Blainville to national brands like Probaclac and Remax Crystal. Our clients choose us for our approach: listen first, design second, always deliver results that exceed expectations.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-section" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Founder</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '32px', position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
            <img
              src="/images/apropos/vincentlavoie.jpeg"
              alt="Vincent Lavoie — Founder of V pour Design"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.05)' }}
            />
          </div>
        </div>
        <div className="about-main">
          <div className="reveal">
            <h2 className="about-title">Vincent <em>Lavoie</em></h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>Founding President</p>
          </div>
          <div className="reveal">
            <p className="about-body">Before design, there was history and politics. Vincent Lavoie first studied humanities before pivoting to graphic design at College Salette — an atypical path that gave him a unique understanding of communication, strategy and the power of ideas.</p>
          </div>
          <div className="reveal">
            <p className="about-body">After 17 years in graphic design, web and advertising campaigns, Vincent founded V pour Design with a clear vision: use technology to amplify creativity, not replace it. His years designing visual identities, orchestrating national campaigns and building digital ecosystems gave him a cross-disciplinary perspective that is rare in the industry.</p>
          </div>
          <div className="reveal">
            <p className="about-body">Today, this breadth of knowledge — from design to strategy, from history to technology — makes him a natural leader in artificial intelligence applied to the web. It&apos;s not about mastering a tool, but understanding why and how to use it. That is exactly what Vincent brings to every project.</p>
          </div>
          <div className="reveal" style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>College Salette — Graphic Design</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>History &amp; Politics</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>17+ years experience</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>AI Specialist</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section>
        <div className="section-grid">
          <div className="section-header">
            <div className="section-label">Our services</div>
          </div>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <Link href={`/en/services/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
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
