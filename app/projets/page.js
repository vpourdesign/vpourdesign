import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
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
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Portfolio</div>
          <h1 className="h1">Nos réalisations<br/><em>récentes</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">Projets</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">V pour Design</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Une sélection de nos créations les plus remarquables : sites web performants, stratégies numériques et identités visuelles qui génèrent des résultats.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">{projects.length}<span>projets</span></div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section id="projets">
        {projects.map((project) => (
          <Link href={`/projets/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-row reveal" style={{ cursor: 'pointer' }}>
              <div className="project-index">{project.num}</div>
              <div className="project-image-cell">
                <img src={project.image} alt={project.title} />
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
