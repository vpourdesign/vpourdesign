import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import ContactForm from '../../../../components/ContactForm';
import JsonLd from '../../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../../data/schema';
export const metadata = {
  title: 'Brand Identity & Branding — Brand Design | V pour Design',
  description: 'Logos, brand guidelines and complete visual systems for North Shore SMBs. Brand design enhanced by artificial intelligence.',
  alternates: { canonical: 'https://vpourdesign.com/en/services/brand-identity' },
};

export default function BrandIdentityPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'Brand Identity and Branding',description:'Logos, brand guidelines and complete visual systems for North Shore SMBs. Brand design enhanced by artificial intelligence.',url:'/en/services/brand-identity',features:['Logo and brand','Brand guidelines','Print materials','Social media templates','AI-enhanced design']})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Services',url:'/en/services'},{name:'Brand Identity'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 03 &middot; Brand Identity</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          Your brand deserves<br/>
          more than a logo.<br/>
          It deserves an <em style={{ color: 'var(--accent)' }}>identity.</em>
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
            A strong visual identity is what makes people recognize you before they even read your name. It&apos;s the silent promise you make to every potential customer.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg className="service-icon-svg pen-draw" viewBox="0 0 80 80" fill="none" width="200" height="200">
            <line x1="22" y1="58" x2="56" y2="18" stroke="var(--text-muted)" strokeWidth="1.2"/>
            <line x1="26" y1="60" x2="60" y2="20" stroke="var(--text-muted)" strokeWidth="1.2"/>
            <polygon points="22,58 26,60 20,66" fill="var(--accent)" opacity="0.85"/>
            <line x1="56" y1="18" x2="60" y2="20" stroke="var(--text-muted)" strokeWidth="1"/>
            <line x1="56" y1="18" x2="59" y2="14" stroke="var(--text-muted)" strokeWidth="1"/>
            <line x1="60" y1="20" x2="63" y2="16" stroke="var(--text-muted)" strokeWidth="1"/>
            <line x1="59" y1="14" x2="63" y2="16" stroke="var(--text-muted)" strokeWidth="1"/>
            <path d="M20,66 Q18,68 16,67 Q13,66 14,63 Q15,60 18,58" stroke="var(--accent)" strokeWidth="0.9" fill="none" opacity="0.7"/>
            <circle cx="19" cy="67" r="1.2" fill="var(--accent)" opacity="0.85"/>
            <path d="M20,66 Q28,72 36,68 Q44,64 48,68" stroke="var(--text-muted)" strokeWidth="0.7" fill="none" opacity="0.6" strokeDasharray="2 2"/>
          </svg>
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Logo</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              A logo that <em style={{ color: 'var(--accent)' }}>stands out</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Not a generic logo from a template. A brand designed from your business DNA, tested in real-world contexts, adapted across all your touchpoints.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Guide</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Complete visual <em style={{ color: 'var(--accent)' }}>system</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Colors, typography, iconography, usage rules &mdash; a comprehensive brand guide ensuring every touchpoint is consistent and professional.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Print</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              From digital to <em style={{ color: 'var(--accent)' }}>tangible</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Business cards, stationery, packaging, signage, vehicle wraps &mdash; your identity comes to life across all physical touchpoints.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Social</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Social media <em style={{ color: 'var(--accent)' }}>templates</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Ready-to-use Instagram, Facebook, LinkedIn templates. Your team publishes on-brand content in minutes, without a designer.
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
              Design enhanced by <em style={{ color: 'var(--accent)' }}>AI</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Artificial intelligence allows us to explore 10x more creative directions. You receive stronger proposals, faster, with more variations to choose from.
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
            A great visual identity<br/>
            isn&apos;t noticed.<br/>
            It&apos;s <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>felt.</em>
          </h2>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Ready to define<br/>your <em>identity?</em></h2>
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
