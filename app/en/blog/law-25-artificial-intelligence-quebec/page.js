import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import JsonLd from '../../../../components/JsonLd';
import { breadcrumbSchema, faqSchema } from '../../../../data/schema';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Quebec Law 25 and Artificial Intelligence: What Changes for Your Business — V pour Design',
  description: 'Quebec Law 25 governs AI use in businesses: EFVP, consent, Shadow AI, cross-border data transfers. What it means in practice — and how V pour Design delivers in full compliance.',
  keywords: ['Law 25', 'Quebec privacy law', 'artificial intelligence', 'EFVP', 'Shadow AI', 'personal information protection', 'PIPEDA', 'AI compliance Quebec', 'Bill 64'],
  alternates: {
    canonical: 'https://vpourdesign.com/en/blog/law-25-artificial-intelligence-quebec',
    languages: {
      'fr-CA': 'https://vpourdesign.com/blog/loi-25-intelligence-artificielle-quebec',
      'en': 'https://vpourdesign.com/en/blog/law-25-artificial-intelligence-quebec',
    },
  },
  openGraph: {
    title: 'Quebec Law 25 and AI: What Changes for Your Business',
    description: 'EFVP, consent, Shadow AI, cross-border transfers: V pour Design breaks down Quebec Law 25 and explains its AI compliance framework.',
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Vincent Lavoie'],
    section: 'Compliance and Artificial Intelligence',
    tags: ['Law 25', 'AI', 'compliance', 'Quebec', 'EFVP', 'Shadow AI'],
    images: [
      {
        url: 'https://vpourdesign.com/images/blog/ia.jpg',
        width: 1200,
        height: 630,
        alt: 'Quebec Law 25 and Artificial Intelligence — V pour Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quebec Law 25 and AI: What Changes for Your Business',
    description: 'EFVP, Shadow AI, cross-border transfers: V pour Design breaks down Quebec Law 25 applied to artificial intelligence.',
    images: ['https://vpourdesign.com/images/blog/ia.jpg'],
  },
};

const obligationsRows = [
  { requirement: 'Privacy Impact Assessment (PIA)', summary: 'Required before any project involving AI, profiling, or cross-border data transfers.', vpd: 'Systematically conducted before any mandate involving client data.' },
  { requirement: 'Explicit Consent', summary: 'Required for the collection, use, and disclosure of personal information.', vpd: 'Consent mechanisms built in from the start (forms, cookies, newsletters).' },
  { requirement: 'Transparency on Automated Decisions', summary: 'Users must be informed when a decision affecting them is made by an algorithm.', vpd: 'No automated client decisions without clear disclosure and human review option.' },
  { requirement: 'Disclosure of Cross-Border Transfers', summary: 'Article 17: inform individuals and assess protections offered outside Quebec.', vpd: 'Full mapping of tools used, jurisdiction by jurisdiction, documented per mandate.' },
  { requirement: 'Privacy Officer', summary: 'Every organization must designate one.', vpd: 'Role held at V pour Design for internal operations and client guidance.' },
];

const compareRows = [
  { situation: 'Consumer AI tools (free accounts, personal logins)', risk: 'Data sent outside Quebec without a contract, PIA, or consent.', compliant: 'Professional tools with data processing agreements, logging, and confidentiality clauses.' },
  { situation: 'Content generation with real client data', risk: 'Personal information copy-pasted into a public prompt.', compliant: 'Data anonymized or processed in isolated environments — no identifiable info in any prompt.' },
  { situation: 'Marketing automation (segmentation, scoring)', risk: 'Automated decisions with no framework or disclosure to affected individuals.', compliant: 'Documented rules, human oversight, right of review communicated to users.' },
  { situation: 'Agency or freelance subcontracting', risk: 'No written agreement, no AI or confidentiality clauses.', compliant: 'Signed mandate agreement, AI-specific clauses, NDA where required.' },
];

const faqs = [
  {
    q: 'Does Quebec Law 25 ban artificial intelligence?',
    r: 'No. Law 25 does not ban AI. It governs the use of personal information — including when that information flows through an AI system. A business that structures its processes correctly can continue using AI and even gain a competitive advantage from doing so.',
  },
  {
    q: 'My agency uses ChatGPT to write my copy — is that legal?',
    r: 'It depends on what goes into the prompt. If the agency uses a free account and pastes identifiable client data into it, there is a problem. At V pour Design, prompts never contain personally identifiable information, and the professional AI tools we use are under written data processing agreements.',
  },
  {
    q: 'What is a Privacy Impact Assessment (PIA)?',
    r: 'A PIA is a mandatory exercise under Law 25: before launching any project involving personal information — especially with AI — the organization documents the risks, safeguards, and options considered. It has become an industry standard, not just a legal obligation.',
  },
  {
    q: 'What is "Shadow AI" and why does it matter?',
    r: 'Shadow AI is the undisclosed use of AI by employees — without their employer or IT team knowing. Studies suggest over 80% of employees use AI at work without telling anyone. The risk: confidential data flows through uncontracted tools. A solid internal policy and approved tools solve most of the problem.',
  },
  {
    q: 'How large are the fines under Law 25?',
    r: 'Administrative penalties can reach $10 million or 2% of worldwide turnover. Criminal sanctions go up to $25 million or 4% of worldwide turnover. It sounds severe, but enforcement primarily targets organizations that have taken no steps at all.',
  },
];

// ── GEO Schema — optimized for AI engines (ChatGPT, Perplexity, Gemini, AI Overviews) ──
const geoArticleSchema = {
  "@context": "https://schema.org",
  "@type": ["BlogPosting", "Article"],
  "@id": "https://vpourdesign.com/en/blog/law-25-artificial-intelligence-quebec#article",
  "headline": "Quebec Law 25 and Artificial Intelligence: What Changes for Your Business",
  "description": "Quebec Law 25 governs AI use in businesses: Privacy Impact Assessments, consent, Shadow AI, cross-border data transfers. V pour Design explains what this means in practice.",
  "url": "https://vpourdesign.com/en/blog/law-25-artificial-intelligence-quebec",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "inLanguage": "en-CA",
  "author": {
    "@type": "Person",
    "name": "Vincent Lavoie",
    "@id": "https://vpourdesign.com/#founder",
    "jobTitle": "Founder & President, V pour Design",
    "knowsAbout": ["Artificial Intelligence", "Law 25", "Web Compliance", "SEO", "Web Design"]
  },
  "publisher": { "@id": "https://vpourdesign.com/#organization" },
  "image": {
    "@type": "ImageObject",
    "url": "https://vpourdesign.com/images/blog/ia.jpg",
    "width": 1200,
    "height": 630
  },
  "keywords": "Law 25, artificial intelligence, EFVP, Privacy Impact Assessment, Shadow AI, personal information protection, Quebec, PIPEDA, Bill 64, AI compliance",
  "articleSection": "Compliance and Artificial Intelligence",
  "audience": {
    "@type": "Audience",
    "audienceType": "SMEs, entrepreneurs and business owners in Quebec"
  },
  "teaches": "How a Quebec business can use artificial intelligence in compliance with Law 25 on the protection of personal information.",
  "about": [
    {
      "@type": "Legislation",
      "name": "Law 25 — An Act to modernize legislative provisions as regards the protection of personal information",
      "alternateName": "Bill 64",
      "jurisdiction": { "@type": "AdministrativeArea", "name": "Quebec, Canada" },
      "url": "https://www.legisquebec.gouv.qc.ca/fr/document/lc/P-39.1"
    },
    {
      "@type": "DefinedTerm",
      "name": "Privacy Impact Assessment",
      "alternateName": "PIA",
      "description": "A mandatory analysis required by Law 25 before any project involving personal information, particularly those using AI."
    },
    {
      "@type": "DefinedTerm",
      "name": "Shadow AI",
      "description": "Undisclosed use of artificial intelligence by employees without the knowledge of their employer or IT department, potentially exposing confidential data."
    },
    {
      "@type": "DefinedTerm",
      "name": "Artificial Intelligence",
      "description": "Technologies enabling computer systems to simulate human capabilities such as language understanding, image recognition, and decision-making."
    }
  ],
  "mentions": [
    {
      "@type": "Organization",
      "name": "Commission d'accès à l'information du Québec",
      "alternateName": "CAI",
      "url": "https://www.cai.gouv.qc.ca/"
    },
    {
      "@type": "Organization",
      "name": "Quebec Human Rights Commission",
      "url": "https://www.cdpdj.qc.ca/"
    },
    {
      "@type": "Legislation",
      "name": "PIPEDA — Personal Information Protection and Electronic Documents Act",
      "jurisdiction": { "@type": "Country", "name": "Canada" }
    }
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".blog-lead", "#shadow-ai p", "#faq", "#vpd-cadre ul"]
  },
  "citation": [
    { "@type": "CreativeWork", "name": "Cloud Security Alliance — AI Shadow Usage Report 2026" },
    { "@type": "CreativeWork", "name": "La Presse — Using AI at work could be illegal (May 1, 2026)" }
  ],
  "translationOfWork": {
    "@type": "BlogPosting",
    "@id": "https://vpourdesign.com/blog/loi-25-intelligence-artificielle-quebec#article"
  },
  "isPartOf": { "@id": "https://vpourdesign.com/#website" },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://vpourdesign.com/en/blog/law-25-artificial-intelligence-quebec"
  }
};

export default function BlogLaw25AI() {
  return (
    <>
      <JsonLd data={geoArticleSchema} />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.r })))} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/en' }, { name: 'Blog', url: '/en/blog' }, { name: 'Law 25 and Artificial Intelligence' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog &middot; Compliance &middot; Artificial Intelligence</div>
          <h1 className="h1">Law 25 and <em>artificial intelligence</em>&nbsp;: what changes for your business</h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/blog/ia.jpg" alt="Quebec Law 25 and Artificial Intelligence" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0, filter: 'grayscale(100%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}><div className="page-num">Article 06</div></div>
          <div className="ai-icon-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="tag">May 2026</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">By Vincent Lavoie</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">06</div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="blog-article" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="blog-article-grid">
          <aside className="blog-sidebar">
            <div className="blog-sidebar-sticky">
              <div className="blog-meta-label">Contents</div>
              <nav className="blog-toc">
                <a href="#intro">Context</a>
                <a href="#obligations">What Law 25 Requires</a>
                <a href="#shadow-ai">The Shadow AI Risk</a>
                <a href="#vpd-cadre">Our Compliance Framework</a>
                <a href="#comparaison">Risky vs Compliant</a>
                <a href="#continuer">Delivering Without Legal Risk</a>
                <a href="#faq">FAQ</a>
                <a href="#cta">Next Steps</a>
              </nav>
              <div className="blog-meta-label" style={{ marginTop: '32px' }}>Keywords</div>
              <div className="blog-tags-list">
                <span className="service-tag">Law 25</span>
                <span className="service-tag">AI</span>
                <span className="service-tag">Compliance</span>
                <span className="service-tag">PIA</span>
                <span className="service-tag">Privacy</span>
              </div>
            </div>
          </aside>

          <div className="blog-content">

            {/* INTRO */}
            <section id="intro">
              <p className="blog-lead">
                The conversation is everywhere: the Quebec Human Rights Commission is reminding businesses of AI&apos;s ethical boundaries, and La Presse ran a headline on May 1, 2026 stating that &ldquo;your use of AI at work could be illegal.&rdquo; The question is no longer whether Law 25 applies to artificial intelligence &mdash; it already does.
              </p>
              <p>
                The good news: Law 25 does not ban AI. It requires that AI be used correctly. At V pour Design, we have been working with AI for years, and our compliance framework was built to meet these obligations without slowing down delivery. Here&apos;s what that means in practice for you.
              </p>

              {/* Context block */}
              <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.07)', padding: '28px', margin: '32px 0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Quick recap</div>
                <p style={{ margin: 0 }}>
                  <strong>Law 25</strong>{' '}(formerly Bill 64) modernizes Quebec&apos;s rules on the protection of personal information. In force progressively since 2022, it requires any organization processing data about individuals in Quebec to follow a clear framework: consent, transparency, impact assessments, controlled transfers. AI is not excluded &mdash; it is explicitly covered when it processes personal information.
                </p>
              </div>
            </section>

            {/* PULL QUOTE */}
            <div style={{ borderTop: '0.5px solid #c8c0b0', borderBottom: '0.5px solid #c8c0b0', padding: '48px 0', margin: '48px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '600px', margin: 0 }}>
                Law 25 is not a barrier to AI. It&apos;s a <span style={{ color: '#9a7b2e' }}>professional standard</span>&nbsp;&mdash; and a competitive advantage for businesses that embrace it.
              </p>
            </div>

            {/* SECTION — Obligations */}
            <section id="obligations">
              <h2>What Law 25 requires when AI enters the picture</h2>
              <p>
                Five obligations come up repeatedly in web, marketing, and automation projects. Here is how they translate in practice.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Requirement</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>What the law says</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>What we do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {obligationsRows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500, verticalAlign: 'top' }}>{row.requirement}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#4a4438', verticalAlign: 'top' }}>{row.summary}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', verticalAlign: 'top' }}>{row.vpd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION — Shadow AI */}
            <section id="shadow-ai">
              <h2>The real risk: &ldquo;Shadow AI&rdquo;</h2>
              <p>
                According to recent data cited by La Presse and the Cloud Security Alliance, nearly <strong>82%</strong> of employees use AI at work without telling their employer. A presentation generated in ChatGPT from client notes. An email rewritten in a free tool. A client file uploaded to Gemini to save time.
              </p>
              <p>
                This is what is called <strong>Shadow AI</strong>. And it&apos;s where most Law 25 violations occur &mdash; not out of bad faith, but out of habit.
              </p>

              <div className="blog-stats-grid">
                <div className="blog-stat">
                  <div className="blog-stat-number">82%</div>
                  <div className="blog-stat-label">of employees use AI</div>
                  <p>Often without telling their employer or clients (Cloud Security Alliance, 2026).</p>
                </div>
                <div className="blog-stat">
                  <div className="blog-stat-number">93%</div>
                  <div className="blog-stat-label">enter company data into it</div>
                  <p>According to a Kiteworks study reported in the press in 2026.</p>
                </div>
                <div className="blog-stat">
                  <div className="blog-stat-number">$25M</div>
                  <div className="blog-stat-label">potential fine</div>
                  <p>Criminal ceiling under Law 25, or 4% of worldwide revenue.</p>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: '#8a7e6a', marginTop: '12px', fontStyle: 'italic' }}>* Sources: La Presse, Commission d&apos;accès à l&apos;information du Québec, Cloud Security Alliance.</p>
            </section>

            {/* SECTION — VPD Framework */}
            <section id="vpd-cadre">
              <h2>Our compliance framework: why you can trust us with your data</h2>
              <p>
                V pour Design is not an agency that &ldquo;discovered&rdquo; AI this year. We have been integrating it into our processes for years, within a framework designed to respect Law 25 from the ground up. Concretely:
              </p>
              <ul className="blog-list">
                <li><strong>Signed agreements before any project begins.</strong> Written mandate, confidentiality clauses, and AI-specific provisions. No client data is processed without a contract.</li>
                <li><strong>Professional AI tools only.</strong> No free accounts, no public prompts. The services we use offer data processing agreements and non-training commitments.</li>
                <li><strong>No personally identifiable information in any prompt.</strong> Sensitive data is anonymized or processed in isolated environments. This is an internal rule, not a suggestion.</li>
                <li><strong>Documentation of cross-border transfers.</strong> When a tool processes data outside Quebec, we know it, evaluate it, and explain it to the client.</li>
                <li><strong>Systematic human review.</strong> AI proposes, we decide. No client deliverable goes live without human sign-off.</li>
              </ul>
            </section>

            {/* SECTION — Comparison */}
            <section id="comparaison">
              <h2>Risky vs compliant: the concrete difference</h2>
              <p>
                The same AI tools can be a legal liability or a strategic asset. Everything depends on the framework. Here are the four situations we encounter most often.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Situation</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Risky</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #408040', color: '#408040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Compliant &mdash; our approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500, verticalAlign: 'top' }}>{row.situation}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', verticalAlign: 'top' }}>{row.risk}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#408040', verticalAlign: 'top' }}>{row.compliant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION — Delivering without legal risk */}
            <section id="continuer">
              <h2>Delivering results without legal exposure</h2>
              <p>
                Law 25 has not slowed our pace. On the contrary: it has clarified our processes and reassured our clients. Here are the types of mandates we continue to deliver in full, in compliance with the law:
              </p>
              <ul className="blog-list">
                <li><strong>Websites and redesigns:</strong> AI-assisted design, SEO optimization, content structure &mdash; without ever exposing client data.</li>
                <li><strong>Digital marketing:</strong> ad production, newsletters, segmentation &mdash; with clear consent and functional opt-out mechanisms.</li>
                <li><strong>Automation:</strong> chatbot integration, smart forms, scoring &mdash; always under human supervision.</li>
                <li><strong>Content production:</strong> text, visuals, video &mdash; with a workflow that respects individual rights and intellectual property.</li>
              </ul>
              <p>
                In other words: we stopped nothing. We simply structured what we were already doing so that Law 25 becomes a selling point rather than a grey area.
              </p>
            </section>

            {/* SECTION — FAQ */}
            <section id="faq">
              <h2>Frequently asked questions</h2>
              <p>
                The questions we receive most often right now, and our straight answers.
              </p>

              <div style={{ margin: '24px 0 32px', border: '0.5px solid #c8c0b0' }}>
                {faqs.map((faq, i) => (
                  <details key={i} style={{ borderBottom: i < faqs.length - 1 ? '0.5px solid #c8c0b0' : 'none', padding: '0' }}>
                    <summary style={{ cursor: 'pointer', padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, color: '#0C0B09', listStyle: 'none', position: 'relative', paddingRight: '48px', letterSpacing: '0.01em', lineHeight: 1.5 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9a7b2e', letterSpacing: '0.15em', marginRight: '12px' }}>{String(i + 1).padStart(2, '0')}</span>
                      {faq.q}
                      <span style={{ position: 'absolute', right: '24px', top: '20px', color: '#9a7b2e', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>+</span>
                    </summary>
                    <div style={{ padding: '0 24px 24px 60px' }}>
                      <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#4a4438', lineHeight: 1.8 }}>{faq.r}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA FINAL */}
            <section id="cta">
              <h2>Next steps</h2>
              <p>
                Already using AI in your business, or looking to integrate it properly? We can support you on three fronts: mapping your current usage, building a Law 25-compliant framework, and continuing to deliver web and marketing results at the same pace.
              </p>
              <div className="blog-cta">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: '#F0EAD6', marginBottom: '16px' }}>Want to use AI in your business &mdash; without breaching Law 25?</h3>
                <p>We start with a free conversation. We review your current tools, identify risk areas, and propose a simple, signed framework that lets you keep delivering without legal anxiety.</p>
                <Link href="/en/contact" className="blog-cta-link">Book a confidential consultation &rarr;</Link>
              </div>
              <p style={{ fontSize: '11px', color: '#8a7e6a', marginTop: '24px', fontStyle: 'italic' }}>
                Disclaimer: this article is informational in nature and does not constitute legal advice. For a formal Law 25 compliance analysis, consult a specialized legal advisor.
              </p>
            </section>

          </div>
        </div>
      </article>

      {/* LANGUAGE ALTERNATE */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <Link href="/en/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          &larr; Back to blog
        </Link>
        <Link href="/blog/loi-25-intelligence-artificielle-quebec" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.1em', border: '0.5px solid var(--line)', padding: '8px 16px' }}>
          Lire en fran&ccedil;ais &rarr;
        </Link>
      </section>

      <Footer />
    </>
  );
}
