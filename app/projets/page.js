import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import { collectionSchema, breadcrumbSchema } from '../../data/schema';
import Link from 'next/link';
import { projects } from '../../data/services';

export const metadata = {
  title: 'Projets & réalisations',
  description: 'Découvrez nos projets et réalisations récentes. Portfolio de nos créations web, graphiques et vidéo pour nos clients.',
  alternates: { canonical: 'https://vpourdesign.com/projets' },
};

export default function ProjetPage() {
  return (
    <>
      <JsonLd data={collectionSchema({name:'Projets & r\u00e9alisations',description:'D\u00e9couvrez nos projets et r\u00e9alisations r\u00e9centes. Portfolio de nos cr\u00e9ations web, graphiques et vid\u00e9o.',url:'/projets',items:projects.map(p => ({name:p.title,url:`/projets/${p.id}`}))})} />
      <JsonLd data={breadcrumbSchema([{name:'Accueil',url:'/'},{name:'Projets'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Portfolio</div>
          <h1 className="h1">Nos réalisations<br/><em>récentes</em></h1>
        </div>
        <div className="cell cell-b" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(30%) contrast(1.1)' }}
          >
            <source src="/VPD_DEMO_web.webm" type="video/webm" />
            <source src="/VPD_DEMO_web.webm" type="video/webm" />
              <source src="/VPD_DEMO_web.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="cell cell-c">
          <p className="subline">Une sélection de nos créations les plus remarquables : sites web performants, stratégies numériques et identités visuelles qui génèrent des résultats.</p>
        </div>
        <div className="cell cell-d">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.2 }}>Des résultats,<br/>pas des <em style={{ color: 'var(--accent)' }}>promesses</em></div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section id="projets">
        {projects.map((project) => (
          <Link href={`/projets/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-row reveal" style={{ cursor: 'pointer' }}>
              <div className="project-index">{project.num}</div>
              <div className="project-image-cell">
                <Image src={project.image} alt={project.title} width={400} height={300} sizes="(max-width: 768px) 100vw, 33vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="project-image-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-subtitle">{project.subtitle}</div>
              </div>
              <div className="project-detail">
                <div className="project-year">{project.year}</div>
                <div className="project-tags">
                  {project.tags.map(tag => <div key={tag} className="project-tag">{tag}</div>)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}
