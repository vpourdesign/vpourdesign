import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import { collectionSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';
import { ServiceIcon } from '../../../components/ServiceIcons';

const servicesEn = [
  {
    id: 'website-creation',
    num: '01',
    title: 'Websites',
    description: 'Custom website design and development, optimized for performance and search engines. From showcase to e-commerce.',
    tags: ['Design', 'Development', 'SEO'],
  },
  {
    id: 'ai-strategy',
    num: '02',
    title: 'AI Strategy',
    description: 'Integrating artificial intelligence into your workflow. Automation, content generation, predictive analysis.',
    tags: ['Automation', 'Content', 'Analytics'],
  },
  {
    id: 'brand-identity',
    num: '03',
    title: 'Brand Identity',
    description: 'Logos, brand guidelines and complete visual systems. Every brand deserves an identity of its own.',
    tags: ['Logo', 'Branding', 'Guidelines'],
  },
  {
    id: 'content-media',
    num: '04',
    title: 'Content & Media',
    description: 'Videos, photography, social media management. From concept to publication, we tell your story.',
    tags: ['Video', 'Photo', 'Social'],
  },
  {
    id: 'seo-marketing',
    num: '05',
    title: 'SEO & Marketing',
    description: 'Search engine optimization, local SEO, Google Business Profile. Dominate search results.',
    tags: ['Local SEO', 'Google Ads', 'Analytics'],
  },
];

// Map English IDs to French IDs for ServiceIcon lookup
const iconIdMap = {
  'website-creation': 'creation-site-web',
  'ai-strategy': 'strategie-ia',
  'brand-identity': 'identite-visuelle',
  'content-media': 'contenu-medias',
  'seo-marketing': 'seo-referencement',
};

export const metadata = {
  title: 'Web & AI Services',
  description: 'Discover our services: custom website creation, AI strategy, brand identity, content & media, SEO & marketing. AI-powered web agency on Montreal\u0027s North Shore.',
  alternates: { canonical: 'https://vpourdesign.com/en/services' },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={collectionSchema({name:'Services',description:'Our web and AI services',url:'/en/services',items:[{name:'Websites',url:'/en/services/website-creation'},{name:'AI Strategy',url:'/en/services/ai-strategy'},{name:'Brand Identity',url:'/en/services/brand-identity'},{name:'Content & Media',url:'/en/services/content-media'},{name:'SEO & Marketing',url:'/en/services/seo-marketing'}]})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Services'}])} />
      <Nav />
      <ScrollReveal />
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Our expertise</div>
          <h1 className="h1">Web services<br/>powered by <em>AI</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">Services</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">V pour Design</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Every service benefits from our artificial intelligence expertise for superior, faster and smarter results.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">5<span>services</span></div>
        </div>
      </section>

      <section>
        <div className="services-list">
          {servicesEn.map((service) => (
            <Link href={`/en/services/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-item reveal">
                <div className="service-num">{service.num}</div>
                <div className="service-content">
                  <div className="service-title">{service.title}</div>
                  <div className="service-desc">{service.description}</div>
                </div>
                <div className="service-icon-cell">
                  <ServiceIcon serviceId={iconIdMap[service.id] || service.id} />
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
