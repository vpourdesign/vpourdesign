import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import { collectionSchema, breadcrumbSchema } from '../../data/schema';
import Link from 'next/link';
import { ServiceIcon } from '../../components/ServiceIcons';
import { services } from '../../data/services';

export const metadata = {
  title: 'Services web & IA',
  description: 'Découvrez nos services : création de sites web, stratégie IA, identité visuelle, contenu & médias, SEO & référencement. Agence web Rive-Nord spécialisée en intelligence artificielle.',
  alternates: { canonical: 'https://vpourdesign.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={collectionSchema({name:'Services',description:'Nos services web et IA',url:'/services',items:[{name:'Sites web',url:'/services/creation-site-web'},{name:'Strat\u00e9gie IA',url:'/services/strategie-ia'},{name:'Identit\u00e9 visuelle',url:'/services/identite-visuelle'},{name:'Contenu & m\u00e9dias',url:'/services/contenu-medias'},{name:'SEO & R\u00e9f\u00e9rencement',url:'/services/seo-referencement'}]})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Services'}])} />
      <Nav />
      <ScrollReveal />
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Nos expertises</div>
          <h1 className="h1">Des services web<br/>augmentés par l&apos;<em>IA</em></h1>
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
          <p className="subline">Chaque service bénéficie de notre expertise en intelligence artificielle pour des résultats supérieurs, plus rapides et plus intelligents.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">5<span>services</span></div>
        </div>
      </section>

      <section>
        <div className="services-list">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
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
