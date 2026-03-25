import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import ContactForm from '../../../../components/ContactForm';
import JsonLd from '../../../../components/JsonLd';
import PortfolioGrid from '../../../../components/PortfolioGrid';
import { serviceSchema, breadcrumbSchema } from '../../../../data/schema';
export const metadata = {
  title: 'Custom Website Creation — AI Web Agency | V pour Design',
  description: 'High-performance websites, SEO-optimized and AI-powered. Custom design for SMBs on Montreal\u0027s North Shore. From showcase to e-commerce.',
  alternates: { canonical: 'https://vpourdesign.com/en/services/website-creation' },
};

export default function WebsiteCreationPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'Custom Website Creation',description:'High-performance websites, SEO-optimized and AI-powered for North Shore SMBs.',url:'/en/services/website-creation',features:['Showcase website','E-commerce','Custom website','SEO optimization','Responsive design','AI integration']})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Services',url:'/en/services'},{name:'Websites'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 01 &middot; Websites</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          Your website is your<br/>
          best <em style={{ color: 'var(--accent)' }}>salesperson.</em><br/>
          It works 24/7.
        </h1>
      </section>

      {/* MANIFESTO GRID */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '0.5px solid var(--line)' }}>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', borderRight: '0.5px solid var(--line)' }}>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}>
            Every pixel, every line of code, every interaction is designed to convert your visitors into customers. Not a showcase site. A growth tool.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg viewBox="0 0 80 80" fill="none" style={{ width: '200px', height: '200px' }}>
            <rect x="12" y="16" width="56" height="48" rx="1" stroke="var(--text-muted)" strokeWidth="1"/>
            <line x1="12" y1="26" x2="68" y2="26" stroke="var(--text-muted)" strokeWidth="1"/>
            <circle cx="19" cy="21" r="1.5" fill="var(--text-muted)" opacity="0.9"/>
            <circle cx="25" cy="21" r="1.5" fill="var(--text-muted)" opacity="0.9"/>
            <circle cx="31" cy="21" r="1.5" fill="var(--text-muted)" opacity="0.9"/>
            <line x1="20" y1="34" x2="36" y2="34" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
            <line x1="24" y1="40" x2="46" y2="40" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
            <line x1="24" y1="46" x2="40" y2="46" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
            <line x1="20" y1="52" x2="34" y2="52" stroke="var(--text-muted)" strokeWidth="0.8" opacity="0.7"/>
            <rect x="48" y="33" width="8" height="10" stroke="var(--accent)" strokeWidth="0.8" opacity="0.7"/>
          </svg>
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>100%</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Custom-built, <em style={{ color: 'var(--accent)' }}>always</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Zero templates. Every site is designed from scratch, tailored to your brand, your market and your goals. From e-commerce to showcase sites, every project is unique.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>SEO</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Optimized from <em style={{ color: 'var(--accent)' }}>day one</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Technical structure, meta tags, loading speed, content &mdash; SEO is integrated into every design decision. Not an afterthought.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Mobile</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Flawless</em> mobile experience
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              70% of your visitors are on mobile. Every site is designed mobile-first with fluid touch interactions and load times under 2 seconds.
            </p>
          </div>
        </div>

        {/* Statement 5 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>AI</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Built-in</em> artificial intelligence
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Chatbots, personalized recommendations, dynamic content &mdash; AI makes your website smarter and more performant than the competition.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH BOLD STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        <div style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            A website that doesn&apos;t convert is a website that&apos;s <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>costing you money.</em>
          </h2>
        </div>
      </section>

      {/* OUR WORK */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Portfolio</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05 }}>
            Our <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>work</em>
          </h2>
        </div>
        <PortfolioGrid />
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Ready to get<br/>a head <em>start?</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-value"><a href="tel:5145675763">(514) 567-5763</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value"><a href="mailto:info@vpourdesign.com">info@vpourdesign.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
