import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import Link from 'next/link';

export const metadata = {
  title: 'Combien coûte un site web au Québec en 2026? — V pour Design',
  description: 'Guide complet des prix pour la création d\'un site web professionnel au Québec en 2026. Fourchettes de prix, facteurs qui influencent le coût et ce qui distingue un investissement rentable.',
  alternates: { canonical: 'https://vpourdesign.com/blog/combien-coute-site-web-quebec-2026' },
  openGraph: {
    title: 'Combien coûte un site web au Québec en 2026?',
    description: 'Les vrais prix du marché, sans tabou. Ce que vous devez savoir avant d\'investir dans votre présence web.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Vincent Lavoie'],
  },
};

export default function BlogArticleCout() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Combien coûte un site web au Québec en 2026?",
    "description": "Guide complet des prix pour la création d'un site web professionnel au Québec en 2026.",
    "author": { "@type": "Person", "name": "Vincent Lavoie" },
    "publisher": { "@type": "Organization", "name": "V pour Design", "url": "https://vpourdesign.com" },
    "datePublished": "2026-03-24",
    "dateModified": "2026-03-24",
    "mainEntityOfPage": "https://vpourdesign.com/blog/combien-coute-site-web-quebec-2026",
    "keywords": "prix site web, coût site web Québec, combien coûte un site web, création site web prix, agence web Rive-Nord"
  };

  return (
    <>
      <Nav />
      <ScrollReveal />
      <JsonLd data={articleSchema} />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog · Guides pratiques</div>
          <h1 className="h1">Combien coûte un site web au Québec en <em>2026?</em></h1>
        </div>
        <div className="cell cell-b" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
          <img
            src="/images/blog/combien-site.jpg"
            alt="Combien coûte un site web au Québec"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'grayscale(30%)' }}
          />
        </div>
        <div className="cell cell-c">
          <p className="subline">Par Vincent Lavoie · 10 min de lecture</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">04</div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="blog-article" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="blog-article-grid">
          <aside className="blog-sidebar">
            <div className="blog-sidebar-sticky">
              <div className="blog-meta-label">Sommaire</div>
              <nav className="blog-toc">
                <a href="#intro">Introduction</a>
                <a href="#facteurs">Ce qui influence le prix</a>
                <a href="#fourchettes">Les fourchettes de prix</a>
                <a href="#pas-cher">Le piège du site à bas prix</a>
                <a href="#investissement">Un site web, c&apos;est un investissement</a>
                <a href="#ia">L&apos;impact de l&apos;IA sur les prix</a>
                <a href="#questions">Les bonnes questions à poser</a>
                <a href="#conclusion">En résumé</a>
              </nav>
              <div className="blog-meta-label" style={{ marginTop: '32px' }}>Mots-clés</div>
              <div className="blog-tags-list">
                <span className="service-tag">Prix site web</span>
                <span className="service-tag">Québec</span>
                <span className="service-tag">PME</span>
                <span className="service-tag">2026</span>
              </div>
            </div>
          </aside>

          <div className="blog-content">

            <section id="intro">
              <p className="blog-lead">
                C&apos;est probablement la question qu&apos;on nous pose le plus souvent : « Combien ça coûte, un site web? » La réponse honnête, c&apos;est que ça dépend. Mais on sait que cette réponse ne vous aide pas beaucoup. Alors voici un tour d&apos;horizon réaliste du marché québécois en 2026.
              </p>
              <p>
                On ne va pas vous donner de prix au dollar près — chaque projet est unique. Mais on va vous donner les fourchettes réelles du marché, les facteurs qui font varier le prix, et surtout, ce qui distingue un site web qui rapporte d&apos;un site web qui ramasse la poussière numérique.
              </p>
            </section>

            <section id="facteurs">
              <h2>Ce qui influence le prix d&apos;un site web</h2>
              <p>
                Avant de parler de chiffres, il faut comprendre ce qui entre dans le prix d&apos;un site web. Ce n&apos;est pas juste du code et des images — c&apos;est un ensemble de décisions stratégiques, de compétences techniques et de temps humain qualifié.
              </p>
              <ul className="blog-list">
                <li><strong>La complexité du projet :</strong> Un site vitrine de 5 pages et un site e-commerce avec 500 produits ne demandent pas le même effort. La fonctionnalité — réservation en ligne, formulaires complexes, espace membre, intégrations — fait grimper le prix.</li>
                <li><strong>Le design sur mesure :</strong> Un template personnalisé et un design créé de zéro pour votre marque, ce n&apos;est pas la même chose. Le sur-mesure demande de la recherche, des maquettes, des itérations et une direction artistique.</li>
                <li><strong>La stratégie de contenu :</strong> Est-ce que vous fournissez les textes et les photos, ou est-ce que l&apos;agence doit tout créer? La rédaction professionnelle, la photographie et la vidéo ajoutent de la valeur — et du coût.</li>
                <li><strong>Le référencement (SEO) :</strong> Un site beau mais invisible sur Google ne sert pas à grand-chose. La recherche de mots-clés, l&apos;optimisation technique, les données structurées et la stratégie de contenu SEO sont des investissements à part entière.</li>
                <li><strong>L&apos;hébergement et la maintenance :</strong> Un site web vit et respire. Il a besoin de mises à jour de sécurité, de sauvegardes, de monitoring de performance. Certaines agences incluent ça dans un forfait mensuel, d&apos;autres le facturent séparément.</li>
              </ul>
            </section>

            <section id="fourchettes">
              <h2>Les fourchettes de prix en 2026</h2>
              <p>
                Voici ce que vous pouvez vous attendre à payer au Québec en 2026 pour un site web professionnel. Ces chiffres sont approximatifs et varient selon la complexité, la région et l&apos;agence choisie.
              </p>

              <div className="blog-stats-grid">
                <div className="blog-stat">
                  <div className="blog-stat-number">5-10k</div>
                  <div className="blog-stat-label">Site vitrine professionnel</div>
                  <p>Un site de 5 à 10 pages avec un design soigné, optimisé pour mobile et les moteurs de recherche. Idéal pour les professionnels, les PME locales et les entreprises de services. C&apos;est le point d&apos;entrée pour une présence web sérieuse.</p>
                </div>
                <div className="blog-stat">
                  <div className="blog-stat-number">10-25k</div>
                  <div className="blog-stat-label">Site d&apos;entreprise avancé</div>
                  <p>Design sur mesure, stratégie de contenu, SEO approfondi, fonctionnalités avancées (réservation, formulaires complexes, blog, multilingue). Pour les entreprises qui veulent se démarquer et générer des résultats mesurables.</p>
                </div>
                <div className="blog-stat">
                  <div className="blog-stat-number">25k+</div>
                  <div className="blog-stat-label">E-commerce &amp; plateformes</div>
                  <p>Boutique en ligne complète, intégrations de paiement, gestion d&apos;inventaire, portails clients, applications web sur mesure. Pour les projets à grande envergure qui nécessitent une architecture technique robuste.</p>
                </div>
              </div>

              <p>
                Ces fourchettes incluent généralement le design, le développement, l&apos;intégration de contenu et un minimum de SEO. Les extras — photographie professionnelle, vidéo, rédaction, campagnes publicitaires — sont habituellement facturés en plus.
              </p>
            </section>

            <section id="pas-cher">
              <h2>Le piège du site à bas prix</h2>
              <p>
                On ne va pas se mentir : vous pouvez trouver quelqu&apos;un pour vous faire un site à 500$ ou 1 500$. Peut-être un ami qui « connaît ça », un freelance sur une plateforme internationale, ou un forfait « site web en 48 heures » vu sur Facebook.
              </p>
              <p>
                Le problème, c&apos;est que ces sites coûtent cher à long terme. Un site mal conçu, c&apos;est un site que Google ignore, que vos clients potentiels quittent en 3 secondes, et que vous devrez refaire dans un an. On voit ça constamment — des entrepreneurs qui ont « économisé » sur leur premier site et qui viennent nous voir six mois plus tard parce qu&apos;il ne génère aucun résultat.
              </p>
              <p>
                Un site web professionnel n&apos;est pas une dépense, c&apos;est un outil de vente. Si cet outil ne fonctionne pas, il n&apos;a aucune valeur, peu importe combien vous l&apos;avez payé.
              </p>
            </section>

            <section id="investissement">
              <h2>Un site web, c&apos;est un investissement</h2>
              <p>
                La vraie question n&apos;est pas « combien ça coûte? » mais plutôt « combien ça rapporte? ». Un site web bien conçu pour une entreprise de la Rive-Nord, c&apos;est un vendeur qui travaille 24 heures sur 24, 7 jours sur 7. C&apos;est votre premier point de contact avec la majorité de vos futurs clients.
              </p>
              <p>
                Pensez-y : si votre site web génère ne serait-ce qu&apos;un ou deux nouveaux clients par mois que vous n&apos;auriez pas eus autrement, l&apos;investissement se rembourse en quelques mois. Et contrairement à la publicité, un site web bien référencé continue de performer année après année.
              </p>
              <p>
                Nos clients sur la Rive-Nord — que ce soit à Blainville, Laval, Terrebonne ou Boisbriand — voient typiquement leur investissement web se rentabiliser dans les 6 à 12 premiers mois grâce à une combinaison de design professionnel, de SEO local et de contenu stratégique.
              </p>
            </section>

            <section id="ia">
              <h2>L&apos;impact de l&apos;IA sur les prix en 2026</h2>
              <p>
                L&apos;intelligence artificielle change la donne dans notre industrie. Chez V pour Design, l&apos;IA nous permet d&apos;être plus efficaces — ce qui se traduit par un meilleur rapport qualité-prix pour nos clients.
              </p>
              <p className="blog-lead" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.45 }}>
                Concrètement, l&apos;IA accélère certaines phases du projet (recherche, prototypage, optimisation de contenu) sans compromettre la qualité. Le temps gagné nous permet de consacrer plus d&apos;énergie à la stratégie et au design — les aspects qui font vraiment la différence entre un site ordinaire et un site qui performe.
              </p>
              <p>
                Est-ce que l&apos;IA rend les sites web moins chers? Pas nécessairement. Mais elle rend chaque dollar investi plus rentable. Vous obtenez plus de valeur pour le même budget — meilleur SEO, contenu plus ciblé, performance technique supérieure.
              </p>
            </section>

            <section id="questions">
              <h2>Les bonnes questions à poser à votre agence</h2>
              <p>
                Quand vous comparez des soumissions, ne regardez pas juste le chiffre en bas de la page. Voici les questions qui vous aideront à faire un choix éclairé :
              </p>
              <ul className="blog-list">
                <li><strong>Qu&apos;est-ce qui est inclus exactement?</strong> Design, développement, contenu, SEO, hébergement, maintenance — assurez-vous de comparer des pommes avec des pommes.</li>
                <li><strong>Qui sera propriétaire du site?</strong> Certaines agences gardent le contrôle de votre site et de votre nom de domaine. Assurez-vous que tout vous appartient.</li>
                <li><strong>Quel est le processus après la mise en ligne?</strong> Un bon site évolue. Demandez ce qui est prévu pour la maintenance, les mises à jour et l&apos;optimisation continue.</li>
                <li><strong>Avez-vous des exemples de résultats?</strong> Pas juste des sites beaux — des sites qui ont généré du trafic, des appels, des ventes pour des clients similaires à vous.</li>
                <li><strong>Comment gérez-vous le SEO local?</strong> Si votre clientèle est locale — et pour la majorité des PME de la Rive-Nord, elle l&apos;est — le SEO local devrait être au coeur de la stratégie, pas un ajout optionnel.</li>
              </ul>
            </section>

            <section id="conclusion">
              <h2>En résumé</h2>
              <p>
                Un site web professionnel au Québec en 2026, c&apos;est un investissement qui commence autour de 5 000$ pour un site vitrine bien fait et qui peut monter bien au-delà pour des projets plus ambitieux. Le prix dépend de la complexité, du niveau de design, de la stratégie de contenu et du SEO.
              </p>
              <p>
                L&apos;important, ce n&apos;est pas de trouver le prix le plus bas — c&apos;est de trouver le meilleur retour sur investissement. Un site à 8 000$ qui génère 50 000$ de revenus vaut infiniment plus qu&apos;un site à 1 500$ qui ne génère rien.
              </p>
              <div className="blog-cta">
                <p><strong>Besoin d&apos;une soumission pour votre projet?</strong> On offre une consultation gratuite pour évaluer vos besoins et vous proposer une solution adaptée à votre budget et vos objectifs.</p>
                <Link href="/contact" className="blog-cta-link">Demander une soumission gratuite →</Link>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* BACK TO BLOG */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: '32px' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          ← Retour au blog
        </Link>
      </section>

      <Footer />
    </>
  );
}
