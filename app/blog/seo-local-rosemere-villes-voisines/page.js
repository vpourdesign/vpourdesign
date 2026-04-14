import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import { blogPostSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Mon commerce est à Rosemère — pourquoi mes clients de Lorraine et Boisbriand ne me trouvent pas sur Google ? — V pour Design',
  description: 'Votre commerce est à Rosemère mais vos clients de Lorraine, Boisbriand ou Bois-des-Filion ne vous trouvent pas sur Google ? Voici pourquoi — et ce qu\'on peut faire concrètement.',
  alternates: { canonical: 'https://vpourdesign.com/blog/seo-local-rosemere-villes-voisines' },
  openGraph: {
    title: 'Mon commerce est à Rosemère — pourquoi mes clients de Lorraine ne me trouvent pas sur Google ?',
    description: 'Votre commerce est à Rosemère mais vos clients de Lorraine, Boisbriand ou Bois-des-Filion ne vous trouvent pas sur Google ? Voici pourquoi — et ce qu\'on peut faire concrètement.',
    type: 'article',
    publishedTime: '2026-04-11',
    authors: ['Vincent Lavoie'],
    images: [
      {
        url: 'https://vpourdesign.com/images/blog/rosemere.png',
        width: 1200,
        height: 630,
        alt: 'SEO local Rosemère — visibilité dans les villes voisines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mon commerce est à Rosemère — pourquoi mes clients de Lorraine ne me trouvent pas sur Google ?',
    description: 'Votre commerce est à Rosemère mais vos clients de Lorraine, Boisbriand ou Bois-des-Filion ne vous trouvent pas sur Google ? Voici pourquoi — et ce qu\'on peut faire concrètement.',
    images: ['https://vpourdesign.com/images/blog/rosemere.png'],
  },
};

const coupables = [
  {
    title: 'Un site web qui parle de vous, mais pas de votre territoire',
    desc: 'Beaucoup de sites d\'entreprises locales ont une belle page d\'accueil, un formulaire de contact, quelques photos. Mais le texte dit : « Bienvenue chez XYZ, votre spécialiste en [service]. » Pas de ville. Pas de région. Google ne peut pas deviner que vous servez aussi Lorraine et Bois-des-Filion si vous ne le dites nulle part.',
    exemple: 'Un cabinet de physiothérapie à Rosemère. Les patients de Lorraine cherchent « physiothérapie Lorraine » — mais le site ne mentionne jamais Lorraine. Résultat : la clinique de Sainte-Thérèse qui a ajouté « nous servons aussi Lorraine et Bois-des-Filion » dans son pied de page apparaît en premier.',
  },
  {
    title: 'Une fiche Google Business mal configurée',
    desc: 'Google Business Profile, c\'est la fiche qui apparaît dans Google Maps et dans le bloc « résultats locaux » en haut des recherches. Si votre fiche n\'indique pas clairement votre zone de service, vous n\'apparaîtrez que pour les recherches faites à Rosemère même — pas pour les gens des villes voisines.',
  },
  {
    title: 'Aucun contenu qui parle de la région',
    desc: 'Un blog est souvent vu comme un luxe ou une perte de temps. En réalité, c\'est l\'un des seuls moyens de signaler à Google que vous êtes pertinent pour une zone élargie. Un article qui répond à une vraie question des gens des Basses-Laurentides crée des signaux géographiques forts que Google utilise pour vous classer. (En passant : l\'article que vous lisez présentement est exactement ce type de contenu. V pour Design parle de Rosemère, Lorraine et Boisbriand depuis le début — et Google le sait.)',
  },
];

const actions = [
  {
    title: 'Mettre à jour votre fiche Google Business',
    desc: 'Définissez clairement votre zone de service. Si vous servez Rosemère, Lorraine, Bois-des-Filion et Boisbriand, dites-le explicitement dans la fiche. Google s\'en sert directement pour décider à qui vous montrer.',
  },
  {
    title: 'Ajouter des pages de service géolocalisées',
    desc: 'Pas du copier-coller avec juste le nom de la ville qui change — ça ne trompe personne, surtout pas Google. Mais une page qui parle vraiment du contexte local, des besoins spécifiques de la clientèle de cette zone, avec des exemples pertinents : ça, ça fonctionne.',
  },
  {
    title: 'Créer du contenu de blog ancré dans la région',
    desc: 'Un article par trimestre qui répond à une vraie question que les gens des Basses-Laurentides se posent, avec des références locales concrètes. C\'est du référencement à long terme — mais c\'est celui qui dure.',
  },
  {
    title: 'Encourager les avis Google géolocalisés',
    desc: 'Quand un client de Lorraine vous laisse un avis en mentionnant d\'où il vient, c\'est un signal géographique précieux. Aussi simple que de lui demander d\'inclure sa ville dans son commentaire.',
  },
  {
    title: 'Optimiser les balises title et description de chaque page',
    desc: 'Ces éléments invisibles pour le lecteur sont lus en premier par Google. « Plombier Rosemère | Boisbriand | Bois-des-Filion — Interventions rapides 7j/7 » dit à Google exactement où vous êtes pertinent.',
  },
];

const citiesData = [
  { ville: 'Lorraine', distance: '~5 min', population: '~10 500 hab.' },
  { ville: 'Bois-des-Filion', distance: '~7 min', population: '~10 000 hab.' },
  { ville: 'Sainte-Thérèse', distance: '~10 min', population: '~27 000 hab.' },
  { ville: 'Boisbriand', distance: '~12 min', population: '~28 000 hab.' },
  { ville: 'Blainville', distance: '~15 min', population: '~60 000 hab.' },
];

const ficheRows = [
  { element: 'Zone de service', mauvaise: 'Non renseignée', bonne: 'Rosemère + Lorraine + Bois-des-Filion + Sainte-Thérèse' },
  { element: 'Catégorie', mauvaise: 'Trop générique (« Entreprise »)', bonne: 'Précise (« Plombier », « Salon de coiffure »)' },
  { element: 'Description', mauvaise: 'Vide ou copiée-collée', bonne: 'Mots-clés locaux naturels' },
  { element: 'Avis clients', mauvaise: 'Peu ou pas de réponses', bonne: 'Réponses systématiques, géolocalisées' },
  { element: 'Photos', mauvaise: 'Stock photos', bonne: 'Photos réelles du commerce et de l\'équipe' },
];

const secteursData = [
  { secteur: 'Santé et bien-être', exemple: 'Psychologue, ostéopathe, naturopathe', pourquoi: 'Les gens cherchent dans un rayon de 20 min, pas juste leur code postal' },
  { secteur: 'Rénovation et construction', exemple: 'Électricien, plombier, peintre', pourquoi: 'Ils couvrent souvent tout le secteur mais ne le disent pas' },
  { secteur: 'Services professionnels', exemple: 'Comptable, notaire, avocat', pourquoi: 'La clientèle vient de toute la région mais le site ne le reflète pas' },
  { secteur: 'Beauté et esthétique', exemple: 'Salon de coiffure, esthéticienne', pourquoi: 'Très cherchés localement sur Google Maps' },
  { secteur: 'Restauration et traiteur', exemple: 'Restaurant de quartier, traiteur événementiel', pourquoi: 'Énorme volume de recherches « près de moi »' },
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
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Exemple concret</div>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 1.5vw, 17px)', fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.5 }}>{item.exemple}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function BlogSeoLocalRosemere() {
  return (
    <>
      <JsonLd data={blogPostSchema({ title: 'Mon commerce est à Rosemère — pourquoi mes clients de Lorraine et Boisbriand ne me trouvent pas sur Google ?', description: 'Votre commerce est à Rosemère mais vos clients de Lorraine, Boisbriand ou Bois-des-Filion ne vous trouvent pas sur Google ? Voici pourquoi — et ce qu\'on peut faire concrètement.', slug: 'seo-local-rosemere-villes-voisines', datePublished: '2026-04-11', keywords: ['SEO local', 'Rosemère', 'Lorraine', 'Boisbriand', 'visibilité Google', 'Basses-Laurentides'] })} />
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'SEO local Rosemère — villes voisines' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog &middot; SEO local &middot; Basses-Laurentides</div>
          <h1 className="h1">Mon commerce est à Rosemère —<br/>pourquoi mes clients de Lorraine ne me<br/>trouvent pas sur <em>Google</em>&nbsp;?</h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/blog/rosemere.png" alt="SEO local Rosemère — visibilité dans les villes voisines" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', opacity: 0.35, zIndex: 0, filter: 'grayscale(100%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}><div className="page-num">Article 05</div></div>
          <div className="ai-icon-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="tag">Avril 2026</div>
          </div>
          <div style={{ position: 'absolute', bottom: '8px', left: 0, right: 0, zIndex: 2, textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>Photo : Ville de Rosem&egrave;re</span>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Par Vincent Lavoie</p>
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
              <div className="blog-meta-label">Sommaire</div>
              <nav className="blog-toc">
                <a href="#intro">Le problème</a>
                <a href="#territoire">Le territoire ignoré</a>
                <a href="#coupables">Les 3 coupables</a>
                <a href="#secteurs">Secteurs les plus touchés</a>
                <a href="#actions">Ce qu&apos;on peut faire</a>
                <a href="#concurrence">Un mot sur la concurrence</a>
                <a href="#cta">Par où commencer</a>
              </nav>
              <div className="blog-meta-label" style={{ marginTop: '32px' }}>Mots-cl&eacute;s</div>
              <div className="blog-tags-list">
                <span className="service-tag">SEO local</span>
                <span className="service-tag">Rosem&egrave;re</span>
                <span className="service-tag">Basses-Laurentides</span>
                <span className="service-tag">Google Business</span>
                <span className="service-tag">Visibilit&eacute; locale</span>
              </div>
            </div>
          </aside>

          <div className="blog-content">

            {/* INTRO */}
            <section id="intro">
              <p className="blog-lead">
                Vous avez un commerce &agrave; Rosem&egrave;re. Vous avez un site web. Peut-&ecirc;tre m&ecirc;me une page Facebook active. Et pourtant, quand quelqu&apos;un &agrave; Lorraine cherche un plombier, un comptable ou un salon de coiffure sur Google, c&apos;est votre concurrent de Sainte-Th&eacute;r&egrave;se qui appara&icirc;t &mdash; pas vous.
              </p>
              <p>
                Ce n&apos;est pas une question de qualit&eacute; de service. C&apos;est une question de visibilit&eacute; g&eacute;ographique en ligne. Et c&apos;est beaucoup plus courant qu&apos;on ne le pense dans les Basses-Laurentides.
              </p>
              <p>
                Voici ce qui se passe r&eacute;ellement &mdash; et surtout, ce qu&apos;on peut faire.
              </p>

              {/* Warning block */}
              <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.07)', padding: '28px', margin: '32px 0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Comment &ccedil;a marche</div>
                <p style={{ margin: 0 }}>
                  Quand quelqu&apos;un tape &laquo;&nbsp;&eacute;lectricien pr&egrave;s de chez moi&nbsp;&raquo; ou &laquo;&nbsp;caf&eacute; Lorraine&nbsp;&raquo; sur son t&eacute;l&eacute;phone, Google fait quelque chose de tr&egrave;s pr&eacute;cis&nbsp;: il g&eacute;olocalise l&apos;utilisateur, puis cherche des entreprises qui correspondent &agrave; la fois &agrave; la requ&ecirc;te <strong>et</strong>{' '}&agrave; la zone g&eacute;ographique. Si votre site ne mentionne que Rosem&egrave;re (ou pire, ne mentionne aucune ville du tout), Google vous associe uniquement &agrave; Rosem&egrave;re.
                </p>
              </div>
            </section>

            {/* PULL QUOTE */}
            <div style={{ borderTop: '0.5px solid #c8c0b0', borderBottom: '0.5px solid #c8c0b0', padding: '48px 0', margin: '48px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '600px', margin: 0 }}>
                Vos voisins de Lorraine, Bois-des-Filion ou Boisbriand cherchent en dehors de votre &laquo;&nbsp;<span style={{ color: '#9a7b2e' }}>territoire num&eacute;rique</span>&nbsp;&raquo; &mdash; et vous n&apos;existez tout simplement pas pour eux.
              </p>
            </div>

            {/* SECTION 1 — Territoire */}
            <section id="territoire">
              <h2>130 000 clients potentiels &agrave; 15 minutes de vous</h2>
              <p>
                Rosem&egrave;re est entour&eacute;e de municipalit&eacute;s qui partagent les m&ecirc;mes axes routiers, les m&ecirc;mes habitudes de consommation, et souvent les m&ecirc;mes besoins. Voici le potentiel ignor&eacute;.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Ville</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Distance de Rosem&egrave;re</th>
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
                      <td style={{ padding: '14px 16px', color: '#9a7b2e', fontWeight: 500 }}>~135 000 hab.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                C&apos;est facilement <strong>130 000 clients potentiels dans un rayon de 15 minutes</strong> &mdash; et la plupart des commerces de Rosem&egrave;re ne les atteignent pas du tout sur Google.
              </p>
            </section>

            {/* SECTION 2 — 3 coupables */}
            <section id="coupables">
              <h2>Pourquoi &ccedil;a arrive : les 3 coupables habituels</h2>
              <Timeline items={coupables} />

              {/* Google Business comparison table */}
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4a4438', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '40px', marginBottom: '16px' }}>Ce que les entreprises bien positionn&eacute;es font diff&eacute;remment</h3>

              <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Élément</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Fiche mal configur&eacute;e</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #408040', color: '#408040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Fiche bien configur&eacute;e</th>
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

            {/* SECTION 3 — Secteurs */}
            <section id="secteurs">
              <h2>Quel type de commerce est le plus touch&eacute;&nbsp;?</h2>
              <p>
                Certains secteurs souffrent plus que d&apos;autres de ce probl&egrave;me. En g&eacute;n&eacute;ral, ce sont les services de proximit&eacute; o&ugrave; les gens cherchent quelqu&apos;un &laquo;&nbsp;pas trop loin&nbsp;&raquo; &mdash; mais pas n&eacute;cessairement dans leur ville exacte.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Secteur</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Exemple &agrave; Rosem&egrave;re</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Pourquoi c&apos;est critique</th>
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
              <h2>Ce qu&apos;on peut faire concr&egrave;tement</h2>
              <p>
                La bonne nouvelle&nbsp;: se positionner pour plusieurs villes dans les Basses-Laurentides n&apos;est pas un chantier interminable. C&apos;est une question de m&eacute;thode.
              </p>
              <Timeline items={actions} />
            </section>

            {/* SECTION 5 — Concurrence */}
            <section id="concurrence">
              <h2>Un mot sur la concurrence dans la r&eacute;gion</h2>

              <div style={{ border: '0.5px solid #b89a30', background: 'rgba(138, 112, 48, 0.07)', padding: '28px', margin: '24px 0 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9a7b2e', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Le constat terrain</div>
                <p style={{ margin: 0 }}>
                  Dans les Basses-Laurentides, beaucoup de PME ont encore des sites web avec peu ou pas d&apos;optimisation locale. Les grandes villes comme Blainville et Sainte-Th&eacute;r&egrave;se ont plus de concurrents en ligne. Mais Rosem&egrave;re, Lorraine, Bois-des-Filion &mdash; c&apos;est encore un terrain o&ugrave; quelques ajustements bien faits peuvent vous mettre en premi&egrave;re page de Google sans avoir &agrave; se battre contre des dizaines d&apos;autres.
                </p>
              </div>

              {/* Google search mockup */}
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4a4438', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Ce que voit un r&eacute;sident de Lorraine qui cherche &laquo;&nbsp;physioth&eacute;rapie&nbsp;&raquo;</h3>

              <div style={{ border: '0.5px solid #c8c0b0', margin: '0 0 32px', background: '#faf9f7' }}>
                {/* Search bar */}
                <div style={{ padding: '16px 20px', borderBottom: '0.5px solid #c8c0b0', display: 'flex', alignItems: 'center', gap: '12px', background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8a7e6a', letterSpacing: '0.08em' }}>🔍</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#0C0B09' }}>physioth&eacute;rapie pr&egrave;s de chez moi</div>
                  <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8a7e6a' }}>📍 Lorraine, QC</div>
                </div>

                {/* Result 1 — appears */}
                <div style={{ padding: '20px 24px', borderBottom: '0.5px solid #c8c0b0', background: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#408040', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>✓ Appara&icirc;t en premier</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#1a4fbd', marginBottom: '4px' }}>Clinique Physio Sainte-Th&eacute;r&egrave;se</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#408040', marginBottom: '6px' }}>Dessert Lorraine, Bois-des-Filion, Sainte-Th&eacute;r&egrave;se et Blainville</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#6a5e4e' }}>Physiothérapie et ostéopathie pour toute la région des Basses-Laurentides. Prenez rendez-vous en ligne.</div>
                </div>

                {/* Result 2 — doesn't appear */}
                <div style={{ padding: '20px 24px', background: 'rgba(176, 96, 96, 0.04)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>✗ N&apos;appara&icirc;t pas</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#8a7e6a', marginBottom: '4px' }}>Votre clinique &agrave; Rosem&egrave;re</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#a04040', marginBottom: '6px' }}>Zone de service non renseign&eacute;e dans Google Business</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8a7e6a' }}>Bienvenue chez XYZ Physio, votre sp&eacute;cialiste en r&eacute;&eacute;ducation. [Aucune mention de Lorraine ou des villes voisines]</div>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#6a5e4e', fontStyle: 'italic' }}>
                Ce n&apos;est pas que votre clinique est moins bonne. C&apos;est que Google ne sait pas qu&apos;elle dessert Lorraine.
              </p>
            </section>

            {/* CTA FINAL */}
            <section id="cta">
              <h2>Par o&ugrave; commencer&nbsp;?</h2>
              <p>
                Si vous n&apos;&ecirc;tes pas certain de savoir comment votre commerce appara&icirc;t (ou n&apos;appara&icirc;t pas) dans les recherches locales autour de Rosem&egrave;re, la premi&egrave;re &eacute;tape est simple&nbsp;: faites le test vous-m&ecirc;me. Prenez votre t&eacute;l&eacute;phone, activez la localisation, et cherchez votre type de service depuis Lorraine ou Boisbriand. Si vous n&apos;apparaissez pas dans les premiers r&eacute;sultats &mdash; ou pas du tout &mdash; c&apos;est qu&apos;il y a du travail &agrave; faire.
              </p>
              <div className="blog-cta">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: '#F0EAD6', marginBottom: '16px' }}>Vous voulez savoir comment votre commerce appara&icirc;t sur Google dans les villes voisines&nbsp;?</h3>
                <p>On commence par un diagnostic gratuit de votre visibilit&eacute; locale. On regarde o&ugrave; vous en &ecirc;tes, on identifie les lacunes concr&egrave;tes, et on b&acirc;tit une strat&eacute;gie qui refl&egrave;te r&eacute;ellement la zone que vous servez.</p>
                <Link href="/contact" className="blog-cta-link">Obtenir mon diagnostic gratuit &rarr;</Link>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* BACK TO BLOG */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          &larr; Retour au blog
        </Link>
      </section>

      <Footer />
    </>
  );
}
