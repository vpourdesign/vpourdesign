import Image from 'next/image';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import { collectionSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';
import { projects } from '../../../data/services';

export const metadata = {
  title: 'Projects & Portfolio',
  description: 'Discover our recent projects and achievements. Portfolio of our web, graphic, and video creations for our clients.',
  alternates: { canonical: 'https://vpourdesign.com/en/projects' },
};

const projectsEn = [
  {
    id: 'remax-crystal',
    num: '01',
    title: 'Remax Crystal',
    subtitle: 'Over 10 years of collaboration. Video productions, graphic design, and digital strategy for the real estate agency.',
    year: '2012 — present',
    tags: ['Video', 'Graphic Design', 'Web'],
    image: '/images/accueil-clients/remax.jpg',
  },
  {
    id: 'probaclac',
    num: '02',
    title: 'Probaclac',
    subtitle: 'Since 2012, the Probaclac probiotics brand has trusted us with their advertising and web projects.',
    year: '2012 — present',
    tags: ['Advertising', 'Web'],
    image: '/images/accueil-clients/probaclac.jpg',
  },
  {
    id: 'olivier-martineau',
    num: '03',
    title: 'Olivier Martineau',
    subtitle: 'Complete art direction for the show "C\'est pas moi, c\'est toi." Poster, billboards, highway panels, advertising campaign, and website.',
    year: '2024',
    tags: ['Art Direction', 'Campaign', 'Website'],
    image: '/images/accueil-clients/martineau.jpg',
  },
];

export default function ProjectPage() {
  return (
    <>
      <JsonLd data={collectionSchema({name:'Projects & Portfolio',description:'Discover our recent projects and achievements. Portfolio of our web, graphic, and video creations.',url:'/en/projects',items:projectsEn.map(p => ({name:p.title,url:`/en/projects/${p.id}`}))})} />
      <JsonLd data={breadcrumbSchema([{name:'Home',url:'/en'},{name:'Projects'}])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Portfolio</div>
          <h1 className="h1">Our recent<br/><em>work</em></h1>
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
          <p className="subline">A selection of our most remarkable creations: high-performing websites, digital strategies, and visual identities that deliver results.</p>
        </div>
        <div className="cell cell-d">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.2 }}>Results,<br/>not <em style={{ color: 'var(--accent)' }}>promises</em></div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section id="projects">
        {projectsEn.map((project) => (
          <Link href={`/en/projects/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
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
