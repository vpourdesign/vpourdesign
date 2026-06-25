import PhoneLink from '../../../../components/PhoneLink';
import Image from 'next/image';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import ContactForm from '../../../../components/ContactForm';
import JsonLd from '../../../../components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../../../../data/schema';
import Link from 'next/link';

export const metadata = {
  title: 'AI Strategy for SMBs — AI-Powered Web Agency | V pour Design',
  description: 'Artificial intelligence at the service of your growth. Websites 5x more performant, content automation, custom applications and accessible Big Data for North Shore SMBs.',
  alternates: { canonical: 'https://vpourdesign.com/en/services/ai-strategy' },
};

export default function AIStrategyPage() {
  return (
    <>
      <JsonLd data={serviceSchema({name:'AI Strategy for SMBs',description:'Artificial intelligence at the service of your growth. Websites 5x more performant, automation and accessible Big Data for North Shore SMBs.',url:'/en/services/ai-strategy',features:['Websites 5x more performant','Performance monitoring','Social content automation','Custom applications','Accessible Big Data']})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Services',url:'/en/services'},{name:'AI Strategy'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO — FULL WIDTH STATEMENT */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 64px)' }}>
        <div className="eyebrow" style={{ marginBottom: '32px' }}>Service 02 · AI Strategy</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 90px)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          maxWidth: '1100px',
        }}>
          AI is not a <em style={{ color: 'var(--accent)' }}>gadget.</em><br/>
          It&apos;s your next<br/>
          competitive advantage.
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
            While your competitors hesitate, we integrate artificial intelligence directly into your business. No theory. No buzzwords. Measurable results that transform the way you work, communicate and sell.
          </p>
        </div>
        <div style={{ padding: 0, position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: 0.7 }}
          >
            <source src="/images/services/ai/main.webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* BIG NUMBERS — IMPACT STATEMENTS */}
      <section style={{ borderTop: '0.5px solid var(--line)' }}>
        {/* Statement 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>5x</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              A website <em style={{ color: 'var(--accent)' }}>5 times</em> more performant
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              For the same investment, AI allows us to deliver websites optimized from the start — intelligent SEO structure, targeted content, maximum technical performance. Your competitors pay the same price for a site 5 times less effective.
            </p>
          </div>
        </div>

        {/* Statement 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>24/7</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Continuous</em> performance monitoring
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              AI monitors your website, campaigns and Google ranking while you sleep. Proactive alerts, optimization recommendations, automated reports. You make the decisions, AI handles the monitoring.
            </p>
          </div>
        </div>

        {/* VISUAL BREAK — Image 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '0.5px solid var(--line)', minHeight: '320px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRight: '0.5px solid var(--line)' }}>
            <Image src="/images/services/ai/1.jpg" alt="Applied artificial intelligence" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) contrast(1.1)', opacity: 0.6 }} />
          </div>
          <div style={{ padding: 'clamp(32px, 4vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>What sets us apart</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.3, maxWidth: '35ch' }}>
              We don&apos;t sell AI.<br/>We use it for <em style={{ color: 'var(--accent)' }}>your results.</em>
            </p>
          </div>
        </div>

        {/* Statement 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Auto</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Automated</em> social content
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Editorial calendar, post writing, platform-adapted visuals — AI generates your social media content and all you have to do is approve. No more hours wasted figuring out what to publish.
            </p>
          </div>
        </div>

        {/* Statement 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '0.5px solid var(--line)' }}>
          <div style={{ padding: '48px 32px', borderRight: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Apps</span>
          </div>
          <div style={{ padding: '48px clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}>
              <em style={{ color: 'var(--accent)' }}>Custom</em> applications
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Dashboards, internal tools, complex automations — we develop AI-powered web applications tailored exactly to your needs. What used to take months now gets built in weeks.
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
              Big Data is no longer a <em style={{ color: 'var(--accent)' }}>problem</em>
            </h2>
            <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '60ch' }}>
              Your customer data, web statistics, marketing performance — AI transforms them into actionable insights. No IT department needed. No data scientist needed. Just an agency that knows what to do with it.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH BOLD STATEMENT — with image 2 bg */}
      <section style={{ borderTop: '0.5px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/services/ai/2.jpg"
          alt="Neural network and artificial intelligence for business"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.15, filter: 'grayscale(100%)' }}
        />
        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
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
            What you <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>imagine,</em><br/>
            nothing is stopping you<br/>
            from making it real.
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
            We are so confident in the value AI can bring to your business that we offer a free initial exploration session. No obligation. No sales pitch. Just an honest conversation about your needs and how AI can address them.
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
        <div style={{ padding: 'clamp(40px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px', position: 'relative', overflow: 'hidden' }}>
          <Image
            src="/images/services/ai/3.jpg"
            alt="AI strategy consultation for Quebec businesses"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', opacity: 0.08, filter: 'grayscale(100%)' }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>What&apos;s included</div>
          {[
            'Audit of your current web presence',
            'Identification of AI opportunities',
            'Personalized recommendations',
            'Transparent budget estimate',
            'Concrete action plan',
          ].map((item, i) => (
            <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', padding: '12px 0', borderBottom: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '16px' }}>+</span> {item}
            </div>
          ))}
          </div>
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
              <div className="contact-info-value"><PhoneLink /></div>
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
