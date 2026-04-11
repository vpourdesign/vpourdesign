import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import ScrollReveal from '../../../../components/ScrollReveal';
import JsonLd from '../../../../components/JsonLd';
import { blogPostSchema, breadcrumbSchema } from '../../../../data/schema';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'My Business Is in Rosemère — Why Can\'t My Clients in Lorraine Find Me on Google? — V pour Design',
  description: 'Your business is in Rosemère but clients from Lorraine, Boisbriand, or Bois-des-Filion can\'t find you on Google? Here\'s why — and what you can do about it.',
  alternates: { canonical: 'https://vpourdesign.com/en/blog/local-seo-rosemere-nearby-cities' },
  openGraph: {
    title: 'My Business Is in Rosemère — Why Can\'t My Clients in Lorraine Find Me on Google?',
    description: 'Your business is in Rosemère but clients from Lorraine, Boisbriand, or Bois-des-Filion can\'t find you on Google? Here\'s why — and what you can do about it.',
    type: 'article',
    publishedTime: '2026-04-11',
    authors: ['Vincent Lavoie'],
    images: [
      {
        url: 'https://vpourdesign.com/images/blog/rosemere.png',
        width: 1200,
        height: 630,
        alt: 'Local SEO Rosemère — visibility in nearby cities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Business Is in Rosemère — Why Can\'t My Clients in Lorraine Find Me on Google?',
    description: 'Your business is in Rosemère but clients from Lorraine, Boisbriand, or Bois-des-Filion can\'t find you on Google? Here\'s why — and what you can do about it.',
    images: ['https://vpourdesign.com/images/blog/rosemere.png'],
  },
};

const coupables = [
  {
    title: 'A website that talks about you — but not your territory',
    desc: 'Many local business websites have a nice homepage, a contact form, a few photos. But the text says: "Welcome to XYZ, your specialist in [service]." No city. No region. Google can\'t guess that you also serve Lorraine and Bois-des-Filion if you never mention it anywhere.',
    exemple: 'A physiotherapy clinic in Rosemère. Patients in Lorraine search "physiotherapy Lorraine" — but the site never mentions Lorraine. Result: the Sainte-Thérèse clinic that added "we also serve Lorraine and Bois-des-Filion" in its footer shows up first.',
  },
  {
    title: 'A poorly configured Google Business profile',
    desc: 'Google Business Profile is the listing that appears in Google Maps and in the "local results" block at the top of searches. If your profile doesn\'t clearly indicate your service area, you\'ll only appear for searches made in Rosemère itself — not for people in nearby cities.',
  },
  {
    title: 'No content that speaks to the region',
    desc: 'A blog is often seen as a luxury or a waste of time. In reality, it\'s one of the only ways to signal to Google that you\'re relevant for a wider area. An article that answers a real question from Basses-Laurentides residents creates strong geographic signals that Google uses to rank you. (By the way: the article you\'re reading right now is exactly this type of content. V pour Design has been mentioning Rosemère, Lorraine, and Boisbriand from the start — and Google knows it.)',
  },
];

const actions = [
  {
    title: 'Update your Google Business profile',
    desc: 'Define your service area clearly. If you serve Rosemère, Lorraine, Bois-des-Filion, and Boisbriand, say so explicitly in the listing. Google uses this directly to decide who to show you to.',
  },
  {
    title: 'Add geolocated service pages',
    desc: 'Not copy-paste with just the city name changed — that fools no one, especially not Google. But a page that genuinely addresses the local context, the specific needs of clients in that area, with relevant examples: that works.',
  },
  {
    title: 'Create blog content rooted in the region',
    desc: 'One article per quarter that answers a real question people in the Basses-Laurentides are asking, with concrete local references. It\'s long-term SEO — but it\'s the kind that lasts.',
  },
  {
    title: 'Encourage geolocated Google reviews',
    desc: 'When a client from Lorraine leaves you a review mentioning where they\'re from, that\'s a valuable geographic signal. As simple as asking them to include their city in their comment.',
  },
  {
    title: 'Optimize the title tags and descriptions of each page',
    desc: 'These elements — invisible to readers — are read first by Google. "Plumber Rosemère | Boisbriand | Bois-des-Filion — Fast response 7 days/7" tells Google exactly where you\'re relevant.',
  },
];

const citiesData = [
  { ville: 'Lorraine', distance: '~5 min', population: '~10,500 residents' },
  { ville: 'Bois-des-Filion', distance: '~7 min', population: '~10,000 residents' },
  { ville: 'Sainte-Thérèse', distance: '~10 min', population: '~27,000 residents' },
  { ville: 'Boisbriand', distance: '~12 min', population: '~28,000 residents' },
  { ville: 'Blainville', distance: '~15 min', population: '~60,000 residents' },
];

const ficheRows = [
  { element: 'Service area', mauvaise: 'Not filled in', bonne: 'Rosemère + Lorraine + Bois-des-Filion + Sainte-Thérèse' },
  { element: 'Category', mauvaise: 'Too generic ("Business")', bonne: 'Specific ("Plumber", "Hair Salon")' },
  { element: 'Description', mauvaise: 'Empty or copy-pasted', bonne: 'Natural local keywords' },
  { element: 'Client reviews', mauvaise: 'Few or no responses', bonne: 'Systematic responses, geolocated' },
  { element: 'Photos', mauvaise: 'Stock photos', bonne: 'Real photos of the business and team' },
];

const secteursData = [
  { secteur: 'Health & wellness', exemple: 'Psychologist, osteopath, naturopath', pourquoi: 'People search within a 20-min radius, not just their postal code' },
  { secteur: 'Renovation & construction', exemple: 'Electrician, plumber, painter', pourquoi: 'They often cover the whole area but don\'t say so' },
  { secteur: 'Professional services', exemple: 'Accountant, notary, lawyer', pourquoi: 'Clients come from across the region but the site doesn\'t reflect it' },
  { secteur: 'Beauty & esthetics', exemple: 'Hair salon, esthetician', pourquoi: 'Highly searched locally on Google Maps' },
  { secteur: 'Food & catering', exemple: 'Neighbourhood restaurant, event caterer', pourquoi: 'Huge volume of "near me" searches' },
];

function Timeline({ items }) {
  return (
    <div style={{ margin: '40px 0', borderLeft: '1px solid #c8c0b0', paddingLeft: '32px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: i < items.length - 1 ? '36px' : 0, position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-44px', top: '2px', width: '24px', height: '24px', border: '0.5px solid #c8c0b0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#9a7b2e', background: '#F0EAD6' }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4a4438', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
            {item.title}
          </div>
          <p style={{ margin: 0 }}>{item.desc}</p>
          {item.exemple && (
            <div style={{ marginTop: '16px', border: '0.5px solid #b06060', background: 'rgba(176, 96, 96, 0.06)', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Concrete example</div>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 1.5vw, 17px)', fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.5 }}>{item.exemple}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function BlogLocalSeoRosemereEN() {
  return (
    <>
      <JsonLd data={blogPostSchema({ title: 'My Business Is in Rosemère — Why Can\'t My Clients in Lorraine Find Me on Google?', description: 'Your business is in Rosemère but clients from Lorraine, Boisbriand, or Bois-des-Filion can\'t find you on Google? Here\'s why — and what you can do about it.', slug: 'en/blog/local-seo-rosemere-nearby-cities', datePublished: '2026-04-11', keywords: ['local SEO', 'Rosemère', 'Lorraine', 'Boisbriand', 'Google visibility', 'Basses-Laurentides'] })} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/en' }, { name: 'Blog', url: '/en/blog' }, { name: 'Local SEO Rosemère — Nearby Cities' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog &middot; Local SEO &middot; Basses-Laurentides</div>
          <h1 className="h1">My business is in Rosem&egrave;re &mdash;<br/>why can&rsquo;t my clients in Lorraine<br/>find me on <em>Google</em>&nbsp;?</h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/blog/rosemere.png" alt="Local SEO Rosemère — visibility in nearby cities" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', opacity: 0.35, zIndex: 0, filter: 'grayscale(100%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}><div className="page-num">Article 05</div></div>
          <div className="ai-icon-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="tag">April 2026</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">By Vincent Lavoie</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">05</div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="blog-article" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="blog-article-grid">
          <aside className="blog-sidebar">
            <div className="blog-sidebar-sticky">
              <div className="blog-meta-label">Contents</div>
              <nav className="blog-toc">
                <a href="#intro">The problem</a>
                <a href="#territoire">The overlooked territory</a>
                <a href="#coupables">The 3 culprits</a>
                <a href="#secteurs">Most affected sectors</a>
                <a href="#actions">What you can do</a>
                <a href="#concurrence">A word on competition</a>
                <a href="#cta">Where to start</a>
              </nav>
              <div className="blog-meta-label" style={{ marginTop: '32px' }}>Keywords</div>
              <div className="blog-tags-list">
                <span className="service-tag">Local SEO</span>
                <span className="service-tag">Rosem&egrave;re</span>
                <span className="service-tag">Basses-Laurentides</span>
                <span className="service-tag">Google Business</span>
                <span className="service-tag">Local visibility</span>
              </div>
            </div>
          </aside>

          <div className="blog-content">

            {/* INTRO */}
            <section id="intro">
              <p className="blog-lead">
                You have a business in Rosem&egrave;re. You have a website. Maybe even an active Facebook page. And yet, when someone in Lorraine searches for a plumber, an accountant, or a hair salon on Google, it&rsquo;s your competitor in Sainte-Th&eacute;r&egrave;se who shows up &mdash; not you.
              </p>
              <p>
                This isn&rsquo;t a question of service quality. It&rsquo;s a question of online geographic visibility. And it&rsquo;s far more common than people realize in the Basses-Laurentides.
              </p>
              <p>
                Here&rsquo;s what&rsquo;s really happening &mdash; and more importantly, what can be done about it.
              </p>

              {/* Info block */}
              <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.07)', padding: '28px', margin: '32px 0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>How it works</div>
                <p style={{ margin: 0 }}>
                  When someone types &ldquo;electrician near me&rdquo; or &ldquo;caf&eacute; Lorraine&rdquo; on their phone, Google does something very precise: it geolocates the user, then looks for businesses that match both the query <strong>and</strong>{' '}the geographic area. If your site only mentions Rosem&egrave;re (or worse, mentions no city at all), Google associates you exclusively with Rosem&egrave;re.
                </p>
              </div>
            </section>

            {/* PULL QUOTE */}
            <div style={{ borderTop: '0.5px solid #c8c0b0', borderBottom: '0.5px solid #c8c0b0', padding: '48px 0', margin: '48px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '600px', margin: 0 }}>
                Your neighbours in Lorraine, Bois-des-Filion, or Boisbriand are searching outside your &ldquo;<span style={{ color: '#9a7b2e' }}>digital territory</span>&rdquo; &mdash; and you simply don&rsquo;t exist for them.
              </p>
            </div>

            {/* SECTION 1 — Territory */}
            <section id="territoire">
              <h2>130,000 potential clients within 15 minutes of you</h2>
              <p>
                Rosem&egrave;re is surrounded by municipalities that share the same road networks, the same consumption habits, and often the same needs. Here&rsquo;s the overlooked potential.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>City</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Distance from Rosem&egrave;re</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {citiesData.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500 }}>{row.ville}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#4a4438' }}>{row.distance}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e' }}>{row.population}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={2} style={{ padding: '14px 16px', color: '#0C0B09', fontWeight: 500, fontFamily: 'var(--font-mono)', fontSize: '12px' }}>Total</td>
                      <td style={{ padding: '14px 16px', color: '#9a7b2e', fontWeight: 500 }}>~135,000 residents</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                That&rsquo;s easily <strong>130,000 potential clients within a 15-minute radius</strong> &mdash; and most Rosem&egrave;re businesses aren&rsquo;t reaching them at all on Google.
              </p>
            </section>

            {/* SECTION 2 — 3 culprits */}
            <section id="coupables">
              <h2>Why it happens: the 3 usual culprits</h2>
              <Timeline items={coupables} />

              {/* Google Business comparison table */}
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4a4438', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>What well-ranked businesses do differently</h3>

              <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Element</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Poorly configured</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #408040', color: '#408040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Well configured</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ficheRows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500 }}>{row.element}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#a04040' }}>{row.mauvaise}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#408040' }}>{row.bonne}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 — Sectors */}
            <section id="secteurs">
              <h2>Which type of business is most affected?</h2>
              <p>
                Some sectors suffer more than others from this problem. Generally, these are proximity services where people search for someone &ldquo;not too far away&rdquo; &mdash; but not necessarily in their exact city.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Sector</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Example in Rosem&egrave;re</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Why it&rsquo;s critical</th>
                    </tr>
                  </thead>
                  <tbody>
                    {secteursData.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500 }}>{row.secteur}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#4a4438' }}>{row.exemple}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#6a5e4e' }}>{row.pourquoi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 — Actions */}
            <section id="actions">
              <h2>What you can do concretely</h2>
              <p>
                The good news: ranking for multiple cities in the Basses-Laurentides isn&rsquo;t an endless project. It&rsquo;s a matter of method.
              </p>
              <Timeline items={actions} />
            </section>

            {/* SECTION 5 — Competition */}
            <section id="concurrence">
              <h2>A word on competition in the region</h2>

              <div style={{ border: '0.5px solid #b89a30', background: 'rgba(138, 112, 48, 0.07)', padding: '28px', margin: '24px 0 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9a7b2e', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Field observation</div>
                <p style={{ margin: 0 }}>
                  In the Basses-Laurentides, many SMEs still have websites with little or no local optimization. Larger cities like Blainville and Sainte-Th&eacute;r&egrave;se have more online competitors. But Rosem&egrave;re, Lorraine, Bois-des-Filion &mdash; these are still areas where a few well-executed adjustments can put you on Google&rsquo;s first page without having to fight dozens of others.
                </p>
              </div>

              {/* Google search mockup */}
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4a4438', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>What a Lorraine resident sees searching &ldquo;physiotherapy&rdquo;</h3>

              <div style={{ border: '0.5px solid #c8c0b0', margin: '0 0 32px', background: '#faf9f7' }}>
                {/* Search bar */}
                <div style={{ padding: '16px 20px', borderBottom: '0.5px solid #c8c0b0', display: 'flex', alignItems: 'center', gap: '12px', background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8a7e6a', letterSpacing: '0.08em' }}>🔍</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#0C0B09' }}>physiotherapy near me</div>
                  <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8a7e6a' }}>📍 Lorraine, QC</div>
                </div>

                {/* Result 1 — appears */}
                <div style={{ padding: '20px 24px', borderBottom: '0.5px solid #c8c0b0', background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#408040', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>&#10003; Appears first</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#1a4fbd', marginBottom: '4px' }}>Clinique Physio Sainte-Th&eacute;r&egrave;se</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#408040', marginBottom: '6px' }}>Serves Lorraine, Bois-des-Filion, Sainte-Th&eacute;r&egrave;se and Blainville</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#6a5e4e' }}>Physiotherapy and osteopathy for the entire Basses-Laurentides region. Book online.</div>
                </div>

                {/* Result 2 — doesn't appear */}
                <div style={{ padding: '20px 24px', background: 'rgba(176, 96, 96, 0.04)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>&#10007; Does not appear</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#8a7e6a', marginBottom: '4px' }}>Your clinic in Rosem&egrave;re</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#a04040', marginBottom: '6px' }}>Service area not filled in on Google Business</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8a7e6a' }}>Welcome to XYZ Physio, your rehabilitation specialist. [No mention of Lorraine or nearby cities]</div>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#6a5e4e', fontStyle: 'italic' }}>
                It&rsquo;s not that your clinic is worse. It&rsquo;s that Google doesn&rsquo;t know it serves Lorraine.
              </p>
            </section>

            {/* CTA FINAL */}
            <section id="cta">
              <h2>Where to start?</h2>
              <p>
                If you&rsquo;re not sure how your business appears (or doesn&rsquo;t appear) in local searches around Rosem&egrave;re, the first step is simple: test it yourself. Take your phone, enable location, and search for your type of service from Lorraine or Boisbriand. If you don&rsquo;t appear in the top results &mdash; or at all &mdash; there&rsquo;s work to be done.
              </p>
              <div className="blog-cta">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: '#F0EAD6', marginBottom: '16px' }}>Want to know how your business appears on Google in nearby cities?</h3>
                <p>We start with a free diagnostic of your local visibility. We look at where you stand, identify concrete gaps, and build a strategy that truly reflects the area you serve.</p>
                <Link href="/en/contact" className="blog-cta-link">Get my free diagnostic &rarr;</Link>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* BACK TO BLOG */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <Link href="/en/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          &larr; Back to blog
        </Link>
      </section>

      <Footer />
    </>
  );
}
