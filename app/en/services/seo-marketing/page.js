import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import ContactForm from '../../../../components/ContactForm';
import JsonLd from '../../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'SEO & Local Marketing — North Shore & Laval | V pour Design',
  description: 'Local SEO and marketing for SMBs on Montreal\u0027s North Shore. First page of Google powered by artificial intelligence. Laval, Blainville, Terrebonne.',
  alternates: { canonical: 'https://vpourdesign.com/en/services/seo-marketing' },
};

export default function SeoMarketingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'SEO and Local Marketing',description:'Local SEO and marketing for SMBs on Montreal\u0027s North Shore. First page of Google powered by artificial intelligence.',url:'/en/services/seo-marketing',features:['Local SEO North Shore','Technical optimization','SEO content strategy','Google Ads','Reports and transparency']})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Services',url:'/en/services'},{name:'SEO & Marketing'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 05 &middot; SEO &amp; Marketing</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          Being invisible on Google<br/>
          is like <em style={{ color: 'var(--accent)' }}>not existing.</em>
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
            SEO is not black magic. It&apos;s strategy, rigor and artificial intelligence applied to your visibility. We position North Shore SMBs on the first page — and keep them there.
          </p>
        </div>
        <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <svg className="service-icon-svg float" viewBox="0 0 80 80" fill="none" width="200" height="200">
            <circle cx="36" cy="36" r="18" stroke="var(--text-muted)" strokeWidth="1"/>
            <line x1="49" y1="49" x2="64" y2="64" stroke="var(--text-muted)" strokeWidth="1.5"/>
            <line x1="28" y1="36" x2="44" y2="36" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
            <line x1="36" y1="28" x2="36" y2="44" stroke="var(--accent)" strokeWidth="1" opacity="0.85"/>
            <circle cx="36" cy="36" r="10" stroke="var(--text-ghost)" strokeWidth="0.6" opacity="0.7" strokeDasharray="3 3"/>
          </svg>
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Local</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Dominant</em> local SEO
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Dedicated city pages (Laval, Blainville, Terrebonne, Boisbriand, Sainte-Th&eacute;r&egrave;se), optimized Google Business Profile, consistent NAP citations &mdash; you appear where your customers are searching.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Tech</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Technical</em> optimization
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Loading speed, Core Web Vitals, schema.org structured data, site architecture &mdash; the invisible foundations that make all the difference on Google.
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Content</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>SEO</em> content strategy
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Optimized blog articles, targeted service pages, structured FAQs &mdash; content that answers your customers&apos; real questions and positions your expertise.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Ads</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Smart</em> Google Ads
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Search, Display and Local Services campaigns &mdash; precise geographic targeting on the North Shore with continuous AI optimization of budget and bids.
            </p>
          </div>
        </div>

        {/* Statement 5 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Data</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Reports and <em style={{ color: 'var(--accent)' }}>transparency</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Real-time dashboards, clear monthly reports, metrics that matter &mdash; you know exactly where every dollar goes and what return it generates.
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
            The first page of Google<br/>
            is not a luxury.<br/>
            It&apos;s a <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>necessity.</em>
          </h2>
        </div>
      </section>

      {/* CTA — FREE SESSION */}
      <section style={{ borderTop: '0.5px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: 'clamp(40px, 5vw, 80px)', borderRight: '0.5px solid var(--line)' }}>
          <div className="eyebrow" style={{ marginBottom: '24px', color: 'var(--accent)' }}>Exclusive offer</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            A <em style={{ color: 'var(--accent)' }}>free</em><br/>session
          </h2>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '45ch',
          }}>
            We are so confident in the value SEO can bring to your business that we offer a free initial exploration session. No obligation. No sales pitch. Just an honest conversation about your visibility and how to boost it.
          </p>
          <Link href="/en/contact" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--bg-primary)',
            background: 'var(--accent)',
            padding: '14px 32px',
            textDecoration: 'none',
            transition: 'opacity 0.3s',
          }}>
            Book my free session &rarr;
          </Link>
        </div>
        <div style={{ padding: 'clamp(40px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>What&apos;s included</div>
          {[
            'Complete SEO audit of your website',
            'Local keyword analysis',
            'North Shore competition study',
            '90-day SEO action plan',
            'Google Business Profile setup',
          ].map((item, i) => (
            <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', padding: '12px 0', borderBottom: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '16px' }}>+</span> {item}
            </div>
          ))}
        </div>
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
