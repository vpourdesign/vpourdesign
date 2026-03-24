import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import ContactForm from '../../../components/ContactForm';
import JsonLd from '../../../components/JsonLd';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/services';

const projectDetails = {
  'remax-crystal': {
    metaTitle: 'Remax Crystal — Étude de cas | V pour Design',
    metaDescription: 'Plus de 10 ans de collaboration avec Remax Crystal. Créations vidéos, graphiques, stratégie numérique et web pour l\'agence immobilière de la Rive-Nord.',
    heroSubtitle: 'Vidéo · Graphisme · Web',
    intro: 'Remax Crystal est l\'un de nos partenaires les plus fidèles. Depuis 2012, nous accompagnons cette agence immobilière de la Rive-Nord dans l\'ensemble de sa stratégie numérique — de la création vidéo à la conception de son écosystème web.',
    sections: [
      {
        title: 'Le mandat',
        body: 'Campagnes et présence médias sociaux, tournages vidéos, stratégie IA et accompagnement marketing.',
      },
      {
        title: 'Notre approche',
        body: 'Nous avons développé un système visuel complet pour Remax Crystal — un langage graphique qui se décline de la carte d\'affaires à la vidéo immobilière 4K. Chaque élément est pensé pour renforcer la crédibilité de l\'agence et attirer des propriétés haut de gamme.',
      },
      {
        title: 'Les résultats',
        body: 'Plus de 10 ans de collaboration continue. Des centaines de vidéos produites, une présence web robuste et une marque reconnue sur la Rive-Nord. Remax Crystal est devenue une référence en immobilier dans la région, en partie grâce à une stratégie numérique cohérente et constante.',
      },
    ],
    stats: [
      { num: '10+', label: 'Années de collaboration' },
      { num: '100+', label: 'Vidéos produites' },
      { num: null, label: null, services: ['Stratégie IA', 'Stratégie médias sociaux', 'Présence web', 'Capsules vidéos'] },
    ],
    videos: [
      {
        embedUrl: 'https://drive.google.com/file/d/1DuKFBB8jlA5rDAEuXtp17-cz4rSIu5Xj/preview',
        title: 'Showreel Remax Crystal',
        ratio: '9/16',
      },
      {
        embedUrl: 'https://drive.google.com/file/d/1svSYmN9BZjKMZrG8jUU31Bx7-_AW9inB/preview',
        title: 'Vidéo promotionnelle',
        ratio: '9/16',
      },
      {
        embedUrl: 'https://drive.google.com/file/d/1AfBMMpiuP6OuX2xRUdT2zFa5mETzXa3y/preview',
        title: 'Campagne publicitaire',
        ratio: '9/16',
      },
      {
        embedUrl: 'https://drive.google.com/file/d/1mI5SijsCrawX6PNAsMAAbg0fdXjT7CBy/preview',
        title: 'Tournage immobilier',
        ratio: '9/16',
      },
    ],
  },
  'probaclac': {
    metaTitle: 'Probaclac — Étude de cas | V pour Design',
    metaDescription: 'Refonte du site web probaclac.ca, stratégie SEO, publicités télé, gestion des médias sociaux, image de marque et packaging pour Probaclac. Plus de 12 ans de collaboration.',
    heroSubtitle: 'Web · SEO · Télé · Réseaux sociaux · Packaging',
    heroImage: '/images/projets/probaclac/pbl-sociaux1.jpg',
    heroVideo: '/images/projets/probaclac/animationpbl-nosound-v2.webm',
    intro: 'Probaclac, leader canadien des probiotiques, nous fait confiance depuis 2012. Refonte web, stratégie SEO, publicités télé, médias sociaux, image de marque et packaging — un partenariat complet qui allie rigueur scientifique et créativité visuelle.',
    heroLink: { label: 'probaclac.ca', url: 'https://probaclac.ca' },
    galleryImages: [
      '/images/projets/probaclac/pbl-sociaux1.jpg',
      '/images/projets/probaclac/pbl-sociaux2.jpg',
      '/images/projets/probaclac/pbl-sociaux3.jpg',
    ],
    sections: [
      {
        title: 'Le mandat',
        body: 'Probaclac nous a confié l\'ensemble de sa stratégie numérique et visuelle : refonte complète du site web probaclac.ca, stratégie SEO nationale, conception et production de publicités télé, gestion des médias sociaux, refonte de l\'image de marque et conception de packaging pour les gammes de produits.',
      },
      {
        title: 'Refonte web & SEO',
        body: 'Nous avons repensé probaclac.ca de fond en comble — architecture d\'information, design, développement et stratégie SEO. Le site est devenu une référence en santé naturelle au Canada, avec un contenu optimisé pour chaque gamme de produits et une expérience utilisateur pensée pour éduquer et convertir.',
      },
      {
        title: 'Publicités télé & médias sociaux',
        body: 'De la conception créative à la production, nous avons réalisé les publicités télé nationales de Probaclac. En parallèle, notre équipe gère les médias sociaux de la marque — calendrier éditorial, visuels, vidéos et stratégie de contenu pour bâtir une communauté engagée.',
      },
      {
        title: 'Image de marque & packaging',
        body: 'Évolution de l\'identité visuelle de Probaclac et conception du packaging pour l\'ensemble des gammes de produits. Chaque emballage doit communiquer la fiabilité scientifique tout en se démarquant en tablette — un équilibre entre rigueur pharmaceutique et attrait visuel.',
      },
      {
        title: 'Les résultats',
        body: 'Plus de 12 ans de collaboration continue. Un site web qui performe en SEO national, des campagnes télé diffusées à grande échelle, une présence sociale constante et une image de marque qui inspire confiance. Probaclac est devenue une référence incontournable en probiotiques au Canada.',
      },
    ],
    stats: [
      { num: '12+', label: 'Années de confiance' },
      { num: null, label: null, services: ['Refonte du site web probaclac.ca', 'Stratégie SEO complète', 'Pubs télé', 'Gestion des médias sociaux', 'Image de marque', 'Packaging'] },
      { num: 'National', label: 'Rayonnement' },
    ],
  },
  'olivier-martineau': {
    metaTitle: 'Olivier Martineau — Étude de cas | V pour Design',
    metaDescription: 'Conception graphique complète pour le spectacle « C\'est pas moi, c\'est toi » d\'Olivier Martineau : poster, affiches, panneaux d\'autoroute, campagne publicitaire et site web olivier-martineau.com.',
    heroSubtitle: 'Direction artistique · Campagne · Site web',
    heroImage: '/images/projets/olivier-martineau/olivier-spectacle.jpg',
    intro: 'Pour le lancement de son nouveau spectacle « C\'est pas moi, c\'est toi », Olivier Martineau nous a confié la conception graphique complète de sa campagne publicitaire — du poster aux panneaux d\'autoroute — ainsi que la refonte de son site web.',
    heroLink: { label: 'olivier-martineau.com', url: 'https://olivier-martineau.com' },
    sections: [
      {
        title: 'Le mandat',
        body: 'Concevoir l\'ensemble de l\'identité visuelle du spectacle « C\'est pas moi, c\'est toi » : poster officiel, affiches promotionnelles, panneaux d\'autoroute, visuels pour les réseaux sociaux et toute la campagne publicitaire. En parallèle, refondre entièrement le site web olivier-martineau.com pour accompagner le lancement.',
      },
      {
        title: 'Direction artistique',
        body: 'Recherche visuelle approfondie pour trouver le ton juste — un univers graphique qui reflète l\'humour d\'Olivier tout en respectant les codes du spectacle professionnel. Du choix typographique aux traitements photo, chaque détail a été pensé pour créer une campagne cohérente et mémorable, du panneau d\'autoroute au post Instagram.',
      },
      {
        title: 'Le site web',
        body: 'Refonte complète de olivier-martineau.com : design moderne, navigation fluide, intégration billetterie et calendrier de tournée. Un site performant qui sert autant les fans que les promoteurs et diffuseurs de spectacles.',
      },
      {
        title: 'Les résultats',
        body: 'Une campagne publicitaire omnicanale déployée sur tout le Québec — affiches, panneaux, web et réseaux sociaux — avec une identité visuelle forte et reconnaissable. Le site web est devenu la plateforme centrale de communication d\'Olivier pour sa tournée.',
      },
    ],
    stats: [
      { num: null, label: null, services: ['Poster officiel', 'Affiches & panneaux d\'autoroute', 'Campagne publicitaire', 'Site web olivier-martineau.com'] },
      { num: '2024', label: 'Lancement du spectacle' },
      { num: '100%', label: 'Direction artistique V pour Design' },
    ],
  },
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const details = projectDetails[slug];
  if (!details) return {};
  return {
    title: details.metaTitle,
    description: details.metaDescription,
    alternates: { canonical: `https://vpourdesign.com/projets/${slug}` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  const details = projectDetails[slug];
  if (!project || !details) notFound();

  return (
    <>
      <Nav />
      <ScrollReveal />

      {/* HERO */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Projet · {details.heroSubtitle}</div>
          <h1 className="h1">{project.title}</h1>
        </div>
        <div className="cell cell-b video-embed" style={{ padding: 0, position: 'relative', overflow: 'hidden', minHeight: (details.videos || details.heroVideo || details.heroImage) ? '300px' : undefined }}>
          {details.videos && details.videos[0] ? (
            <iframe
              src={details.videos[0].embedUrl}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={details.videos[0].title}
            />
          ) : details.heroVideo ? (
            <>
              {details.heroImage && (
                <img
                  src={details.heroImage}
                  alt={project.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
              )}
              <video
                autoPlay muted loop playsInline preload="auto"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
              >
                <source src={details.heroVideo} type="video/webm" />
              </video>
            </>
          ) : details.heroImage ? (
            <img
              src={details.heroImage}
              alt={project.title}
              className="hero-project-img"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center top' }}
            />
          ) : (
            <>
              <div style={{ padding: '28px 24px' }}><div className="page-num">{project.year}</div></div>
              <div className="ai-icon-wrap" style={{ padding: '0 24px' }}>
                <div className="accent-line" style={{ height: '80px' }}></div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <div className="tag">Étude de cas</div>
              </div>
            </>
          )}
        </div>
        <div className="cell cell-c">
          <p className="subline">{details.intro}</p>
          {details.heroLink && (
            <a href={details.heroLink.url} target="_blank" rel="noopener noreferrer" className="hero-link-btn">{details.heroLink.label} →</a>
          )}
        </div>
        <div className="cell cell-d">
          <div className="body-text" style={{ marginBottom: '8px' }}>Client depuis</div>
          <div className="deco-number">{project.year.split(' ')[0]}</div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-grid" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {details.stats.map((stat, i) => (
            <div key={i} style={{ padding: '32px', borderRight: i < 2 ? '0.5px solid var(--line)' : 'none' }}>
              {stat.services ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {stat.services.map((s, j) => (
                    <div key={j} className="about-stat-label" style={{ fontSize: '13px' }}>{s}</div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="about-stat-num">{stat.num}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS — skip first since it's in the hero cell-b */}
      {details.videos && details.videos.length > 1 && (() => {
        const remainingVideos = details.videos.slice(1);
        const horizontal = remainingVideos.filter(v => v.ratio === '16/9');
        const vertical = remainingVideos.filter(v => v.ratio === '9/16');
        return (
          <section style={{ borderTop: '0.5px solid var(--line)' }}>
            {/* Section header */}
            <div className="section-grid">
              <div className="section-header">
                <div className="section-label">Vidéos</div>
                <div className="section-num">{remainingVideos.length} vidéos</div>
              </div>
            </div>

            {/* Horizontal videos — full width cinematic */}
            {horizontal.map((vid, i) => (
              <div key={`h-${i}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '0.5px solid var(--line)' }}>
                <div className="video-embed" style={{ gridColumn: '1 / 3', borderRight: '0.5px solid var(--line)', position: 'relative', aspectRatio: '16/9' }}>
                  <iframe
                    src={vid.embedUrl}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={vid.title}
                  />
                </div>
                <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    {String(i + 1).padStart(2, '0')} / {String(remainingVideos.length).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.15 }}>{vid.title}</div>
                  <p className="about-body" style={{ maxWidth: '35ch', fontSize: '13px' }}>Réalisations vidéo pour {project.title}. Tournages, montage et direction créative par V pour Design.</p>
                </div>
              </div>
            ))}

            {/* Vertical videos — editorial staggered row */}
            {vertical.length > 0 && (
              <div className="video-grid-vertical" style={{ gridTemplateColumns: `80px repeat(${vertical.length}, 1fr) 1fr` }}>
                {/* Sidebar label */}
                <div className="video-grid-vertical-sidebar">
                  <span>Réseaux sociaux</span>
                </div>

                {/* Vertical video cards — staggered */}
                {vertical.map((vid, i) => (
                  <div key={`v-${i}`} className="video-card">
                    <div className="video-card-player">
                      <iframe
                        src={vid.embedUrl}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={vid.title}
                      />
                    </div>
                    <div className="video-card-label">
                      {String(horizontal.length + i + 1).padStart(2, '0')} / {String(remainingVideos.length).padStart(2, '0')} — {vid.title}
                    </div>
                  </div>
                ))}

                {/* Info column */}
                <div className="video-grid-info">
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Format vertical</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.15 }}>Contenu pensé pour<br/>les réseaux sociaux</div>
                  <p className="about-body" style={{ maxWidth: '30ch', fontSize: '13px' }}>Vidéos optimisées pour Instagram, TikTok et Facebook Stories. Format 9:16 natif.</p>
                </div>
              </div>
            )}
          </section>
        );
      })()}

      {/* GALLERY */}
      {details.galleryImages && details.galleryImages.length > 0 && (
        <section style={{ borderTop: '0.5px solid var(--line)' }}>
          <div className="section-grid">
            <div className="section-header">
              <div className="section-label">Galerie</div>
              <div className="section-num">{details.galleryImages.length} visuels</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${details.galleryImages.length}, 1fr)`, borderTop: '0.5px solid var(--line)' }}>
            {details.galleryImages.map((img, i) => (
              <div key={i} style={{ borderRight: i < details.galleryImages.length - 1 ? '0.5px solid var(--line)' : 'none', overflow: 'hidden' }}>
                <img
                  src={img}
                  alt={`${project.title} — visuel ${i + 1}`}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTENT SECTIONS */}
      <section className="about-section" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="about-sidebar">
          <div>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Détails du projet</div>
            <div className="accent-line"></div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', padding: '6px 12px', border: '0.5px solid var(--line)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="about-main">
          {details.sections.map((section, i) => (
            <div key={i} className="reveal" style={{ marginBottom: '40px' }}>
              <h2 className="about-title" style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '16px' }}>{section.title}</h2>
              <p className="about-body">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="section-grid" style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <div className="eyebrow" style={{ marginBottom: '20px' }}>Autres projets</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {projects.filter(p => p.id !== slug).map(p => (
              <Link key={p.id} href={`/projets/${p.id}`} className="nav-link" style={{ padding: '8px 16px', border: '0.5px solid var(--line)', fontSize: '12px' }}>
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2 className="contact-title reveal">Un projet<br/>similaire en <em>tête?</em></h2>
          <ContactForm />
        </div>
        <div className="contact-sidebar">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Téléphone</div>
              <div className="contact-info-value"><a href="tel:5145675763">(514) 567-5763</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Courriel</div>
              <div className="contact-info-value"><a href="mailto:info@vpourdesign.com">info@vpourdesign.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
