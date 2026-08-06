import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import LeviersPerformance from '../../../components/LeviersPerformance';
import MultiplicateurPerf from '../../../components/MultiplicateurPerf';
import DashboardDemo from '../../../components/DashboardDemo';
import { blogPostSchema, breadcrumbSchema, faqSchema } from '../../../data/schema';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Même prix, 4 fois plus de performance pour votre site web — V pour Design',
  description: 'Depuis la nouvelle génération de modèles IA, on ne baisse pas nos prix — on multiplie la performance de votre site. Positionnement, analyse concurrentielle, SEO et GEO, dashboard de suivi : quatre leviers qui se multiplient au lieu de s’additionner.',
  keywords: ['performance site web', 'prix site web 2026', 'SEO GEO', 'taux de conversion site web', 'positionnement web', 'dashboard performance', 'agence web Rive-Nord', 'agence web IA'],
  alternates: { canonical: 'https://vpourdesign.com/blog/meme-prix-4x-plus-performance-site-web' },
  openGraph: {
    title: 'Même prix, 4 fois plus de performance pour votre site web',
    description: 'On ne baisse pas nos prix — on multiplie la performance. Quatre leviers qui se multiplient : visibilité, pertinence, conversion, itération.',
    type: 'article',
    publishedTime: '2026-08-04',
    authors: ['Vincent Lavoie'],
    images: [
      {
        url: 'https://vpourdesign.com/images/blog/ia.jpg',
        width: 1200,
        height: 630,
        alt: 'Même prix, 4 fois plus de performance pour votre site web — V pour Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Même prix, 4 fois plus de performance pour votre site web',
    description: 'On ne baisse pas nos prix — on multiplie la performance. Quatre leviers qui se multiplient : visibilité, pertinence, conversion, itération.',
    images: ['https://vpourdesign.com/images/blog/ia.jpg'],
  },
};

const comparatifRows = [
  {
    question: 'Est-ce que vos clients vous trouvent?',
    avant: 'SEO de base — balises, mots-clés, sitemap. Google seulement.',
    maintenant: 'SEO technique complet + GEO : vous existez aussi quand la recherche passe par une IA.',
  },
  {
    question: 'Est-ce qu’ils comprennent pourquoi vous?',
    avant: 'Un message écrit à l’instinct, souvent calqué sur ce que font les concurrents.',
    maintenant: 'Un positionnement documenté, testé contre le marché réel, intégré à chaque page.',
  },
  {
    question: 'Est-ce que vous vous battez aux bons endroits?',
    avant: 'On vise les mots-clés évidents — ceux que tout le monde vise.',
    maintenant: 'Analyse concurrentielle : on cible ce qui est réellement gagnable dans votre région.',
  },
  {
    question: 'Est-ce que vous le sauriez si ça décrochait?',
    avant: 'Un rapport PDF par trimestre. Si vous le demandez.',
    maintenant: 'Un dashboard vivant : un décrochage se voit dans la semaine, pas dans trois mois.',
  },
];

const faqs = [
  {
    q: 'Concrètement, « 4 fois plus de performance », ça veut dire quoi?',
    r: 'Ça vient de la multiplication de quatre leviers qui agissent sur des choses différentes : la visibilité (combien de gens vous trouvent), la pertinence du trafic (est-ce que ce sont les bonnes personnes), la conversion (combien passent à l’action) et l’itération (à quelle vitesse vous corrigez ce qui ne marche pas). Doublez seulement la visibilité et le taux de conversion, et vous avez déjà quadruplé les demandes reçues — sans avoir ajouté une seule page à votre site.',
  },
  {
    q: 'Est-ce que ça veut dire que vous êtes moins chers qu’avant?',
    r: 'Non, et c’est volontaire. Nos prix n’ont pas bougé. Ce qui a changé, c’est ce que le même budget permet d’accomplir : le temps que l’IA nous fait gagner sur l’exécution est réinvesti dans les leviers qui font performer le site, pas retranché de la facture.',
  },
  {
    q: 'Est-ce que vous garantissez ces résultats?',
    r: 'Non. Personne d’honnête ne peut garantir un chiffre de performance web — ça dépend de votre secteur, de votre concurrence, de votre offre et du marché. Ce qu’on garantit, c’est la méthode : les quatre leviers sont travaillés sur chaque mandat, et le dashboard vous montre exactement ce qu’ils produisent. Vous n’avez pas à nous croire sur parole, vous avez les chiffres.',
  },
  {
    q: 'C’est quoi la différence entre le SEO et le GEO?',
    r: 'Le SEO optimise votre site pour les moteurs de recherche classiques comme Google. Le GEO — Generative Engine Optimization — structure votre contenu pour qu’il soit compris et cité par les moteurs d’IA générative : ChatGPT, Perplexity, les AI Overviews de Google. De plus en plus de gens posent leur question à une IA plutôt que de faire une recherche. Un site invisible sur ce canal perd du volume sans jamais s’en rendre compte.',
  },
  {
    q: 'Mon site est récent et il fonctionne bien. Est-ce que ça s’applique quand même?',
    r: 'Souvent, oui — et c’est justement le cas le plus intéressant. Un site déjà bien construit part avec de bonnes fondations : les gains viennent alors surtout du positionnement, du GEO et de la mesure continue. Pas besoin de tout refaire pour aller chercher une bonne partie de l’effet.',
  },
];

export default function BlogMemePrix4xPerformance() {
  return (
    <>
      <JsonLd data={blogPostSchema({ title: 'Même prix, 4 fois plus de performance pour votre site web', description: 'Depuis la nouvelle génération de modèles IA, on ne baisse pas nos prix — on multiplie la performance du site. Quatre leviers qui se multiplient : visibilité, pertinence, conversion, itération.', slug: 'meme-prix-4x-plus-performance-site-web', datePublished: '2026-08-04', keywords: ['performance site web', 'prix site web 2026', 'SEO GEO', 'taux de conversion', 'positionnement web', 'dashboard performance', 'agence web Rive-Nord'] })} />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.r })))} />
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Même prix, 4 fois plus de performance' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog · Intelligence artificielle · Performance</div>
          <h1 className="h1">Même prix.<br/>4 fois plus de <em>performance</em>.</h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/blog/ia.jpg" alt="Performance web multipliée par l’intelligence artificielle" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0, filter: 'grayscale(100%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}><div className="page-num">Article 07</div></div>
          <div className="ai-icon-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="tag">Août 2026</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Par Vincent Lavoie</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">07</div>
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
                <a href="#plus-gros">Plus gros n’est pas plus performant</a>
                <a href="#multiplication">Pourquoi ça se multiplie</a>
                <a href="#leviers">Les 4 leviers, un par un</a>
                <a href="#avant-apres">Les questions qui changent</a>
                <a href="#dashboard">Voir la performance en direct</a>
                <a href="#democratisation">Ce qui était réservé aux grosses agences</a>
                <a href="#honnete">Ce qu’on ne vous promet pas</a>
                <a href="#faq">Questions fréquentes</a>
                <a href="#cta">Prochaines étapes</a>
              </nav>
              <div className="blog-meta-label" style={{ marginTop: '32px' }}>Mots-clés</div>
              <div className="blog-tags-list">
                <span className="service-tag">Performance web</span>
                <span className="service-tag">SEO &amp; GEO</span>
                <span className="service-tag">Conversion</span>
                <span className="service-tag">Dashboards</span>
                <span className="service-tag">IA</span>
              </div>
            </div>
          </aside>

          <div className="blog-content">

            {/* INTRO */}
            <section id="intro">
              <p className="blog-lead">
                En mars, on écrivait que février avait tout changé. Cinq mois plus tard, la question qu’on nous pose le plus souvent n’est plus « c’est quoi, l’IA? » — c’est « si vous êtes quatre fois plus rapides, pourquoi mon prix n’a pas baissé de quatre fois? »
              </p>
              <p>
                Bonne question. Et la réponse tient en une phrase : parce que le gain n’est pas allé dans le rabais. Il est allé dans la performance.
              </p>
              <p>
                Pour le même budget qu’il y a un an, vous ne repartez pas avec un site plus gros. Vous repartez avec un site qui travaille beaucoup plus fort : qui est trouvé sur plus de canaux, par des gens plus qualifiés, qui comprend mieux pourquoi vous choisir, et qui se corrige en continu au lieu de dériver pendant six mois.
              </p>
              <p>
                Voici comment ça fonctionne, et pourquoi le chiffre de quatre n’est pas sorti d’un chapeau.
              </p>
            </section>

            {/* PULL QUOTE */}
            <div style={{ borderTop: '0.5px solid #c8c0b0', borderBottom: '0.5px solid #c8c0b0', padding: '48px 0', margin: '48px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '640px', margin: 0 }}>
                Un site quatre fois plus gros ne sert à rien. Un site quatre fois plus <span style={{ color: '#9a7b2e' }}>performant</span>, ça change une entreprise.
              </p>
            </div>

            {/* SECTION — Plus gros ≠ plus performant */}
            <section id="plus-gros">
              <h2>Plus gros n’est pas plus performant</h2>
              <p>
                C’est la confusion la plus répandue dans notre industrie, et elle coûte cher aux PME. On vend des pages. On vend des fonctionnalités. On vend du volume — quarante pages plutôt que douze, un carrousel de plus, une section d’équipe avec des photos.
              </p>
              <p>
                Sauf qu’un site de quarante pages que personne ne trouve ne vaut pas plus qu’un site de douze pages que personne ne trouve. Il vaut même moins : il coûte plus cher à maintenir, il dilue votre message, et il donne l’illusion d’avoir réglé le problème.
              </p>
              <p>
                La performance d’un site web, ce n’est pas sa taille. C’est le nombre de bonnes personnes qui le trouvent, multiplié par la proportion d’entre elles qui passent à l’action. Tout le reste est de la décoration.
              </p>

              <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.07)', padding: '28px', margin: '32px 0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>La seule équation qui compte</div>
                <p style={{ margin: 0 }}>
                  <strong>Performance = (nombre de bonnes personnes qui vous trouvent) × (proportion qui passe à l’action)</strong>. Deux facteurs. Un site qui grossit sans toucher à l’un des deux n’a pas gagné un gramme de performance.
                </p>
              </div>
            </section>

            {/* SECTION — La multiplication */}
            <section id="multiplication">
              <h2>Pourquoi ça se multiplie au lieu de s’additionner</h2>
              <p>
                C’est le point qui échappe à presque tout le monde, et c’est pourtant là que tout se joue.
              </p>
              <p>
                Si vous doublez votre visibilité, vous avez deux fois plus de visiteurs. Bien. Si vous doublez votre taux de conversion, vous transformez deux fois mieux ceux qui arrivent. Bien aussi. Mais si vous faites les deux en même temps, vous n’avez pas amélioré votre site de cent pour cent — vous l’avez amélioré de trois cents pour cent. Deux fois deux font quatre.
              </p>
              <p>
                C’est pour ça qu’on parle de quatre. Pas parce qu’on a additionné quatre livrables sur une soumission, mais parce que les leviers qu’on travaille se multiplient entre eux. Bougez les curseurs ci-dessous, vous allez le voir immédiatement.
              </p>

              <MultiplicateurPerf />

              <p>
                Et c’est aussi pour ça qu’un seul levier travaillé isolément déçoit presque toujours. Du SEO sans positionnement amène du trafic sur un message qui ne convainc pas. Un beau message sans SEO ne se rend à personne. C’est la combinaison qui produit l’effet, pas les pièces prises séparément.
              </p>
            </section>

            {/* SECTION — Les 4 leviers */}
            <section id="leviers">
              <h2>Les quatre leviers, un par un</h2>
              <p>
                Chacun agit sur une partie différente de l’équation. Trois augmentent la performance directement; le quatrième fait tenir les trois autres dans le temps. Sélectionnez un levier pour voir ce qu’il change concrètement.
              </p>
              <LeviersPerformance />
              <p>
                Ces quatre-là étaient, il y a encore dix-huit mois, le genre de mandat qu’une PME ne pouvait pas s’offrir : chacun demandait un spécialiste dédié et sa propre facture. C’est exactement ce qui a changé.
              </p>
            </section>

            {/* SECTION — Avant / après */}
            <section id="avant-apres">
              <h2>Les questions qui changent de réponse</h2>
              <p>
                Plutôt que de comparer des listes de livrables, comparons ce qui compte vraiment : les questions que vous devriez pouvoir poser sur votre site web, et la réponse que vous obtenez selon l’approche.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>La question</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Site standard</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #408040', color: '#408040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Site optimisé pour la performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatifRows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500, verticalAlign: 'top' }}>{row.question}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', verticalAlign: 'top' }}>{row.avant}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#408040', verticalAlign: 'top' }}>{row.maintenant}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ padding: '16px', color: '#0C0B09', fontWeight: 500, background: 'rgba(154, 123, 46, 0.08)' }}>Investissement</td>
                      <td style={{ padding: '16px', color: '#0C0B09', fontWeight: 500, background: 'rgba(154, 123, 46, 0.08)' }}>5 000 $ – 10 000 $</td>
                      <td style={{ padding: '16px', color: '#0C0B09', fontWeight: 500, background: 'rgba(154, 123, 46, 0.08)' }}>5 000 $ – 10 000 $</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '12px', color: '#8a7e6a', fontStyle: 'italic', marginTop: '4px' }}>
                La dernière ligne n’est pas une coquille. C’est tout le point de cet article.
              </p>
            </section>

            {/* SECTION — Dashboard */}
            <section id="dashboard">
              <h2>Voir la performance, pas la deviner</h2>
              <p>
                Le quatrième levier mérite qu’on s’y arrête, parce que c’est celui qu’on prend le plus facilement pour acquis — jusqu’au jour où on réalise qu’on n’a jamais vraiment su ce qui se passait sur son propre site entre deux rapports trimestriels.
              </p>
              <p>
                Une stratégie web qu’on ne mesure pas ne reste pas stable : elle se dégrade. Les concurrents bougent, Google ajuste, une page perd ses positions. Sans mesure, vous l’apprenez au moment où le téléphone arrête de sonner. Voici à quoi ressemble un suivi en continu — essayez les trois périodes.
              </p>
              <DashboardDemo />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#6a5e4e', fontStyle: 'italic' }}>
                Les chiffres ci-dessus sont une démonstration. Le dashboard livré à chaque client suit ses propres données, en continu.
              </p>
            </section>

            {/* SECTION — Démocratisation */}
            <section id="democratisation">
              <h2>Ce qui était réservé aux grosses agences</h2>
              <p>
                Il faut nommer les choses clairement : ce niveau de performance n’était pas inaccessible pour des raisons techniques. Il était inaccessible pour des raisons de facture.
              </p>
              <p>
                Une analyse de positionnement demandait un stratège. Une étude concurrentielle sérieuse demandait un analyste. Le SEO technique demandait un spécialiste. Un tableau de bord sur mesure demandait un développeur. Quatre personnes, quatre mandats, quatre factures — un budget que seules les entreprises avec un vrai département marketing pouvaient absorber. Les PME, elles, recevaient un site. Point.
              </p>
              <p>
                Ce qui a changé, ce n’est pas le niveau d’exigence. C’est le coût de production de ce niveau d’exigence. Et on a choisi de transférer ce gain dans ce que le site accomplit plutôt que dans notre marge.
              </p>
              <ul className="blog-list">
                <li><strong>Le positionnement stratégique</strong> — autrefois un mandat de firme-conseil, aujourd’hui la première étape de chaque projet.</li>
                <li><strong>L’intelligence concurrentielle</strong> — autrefois une étude de marché facturée à part, aujourd’hui la base sur laquelle on décide où se battre.</li>
                <li><strong>Le SEO technique et le GEO</strong> — autrefois un service spécialisé, aujourd’hui le standard sur chaque page qu’on livre.</li>
                <li><strong>La mesure continue</strong> — autrefois un outil d’entreprise avec l’abonnement mensuel qui vient avec, aujourd’hui inclus au mandat.</li>
              </ul>
              <p>
                On en parlait dans <Link href="/blog/fevrier-nouvelle-ere-marketing-web" className="inline-link">février a tout changé</Link> : ce n’est pas une évolution graduelle, c’est une rupture. Ce texte-ci en est la suite — ce que la rupture donne, concrètement, dans un mandat.
              </p>
            </section>

            {/* SECTION — Honnêteté */}
            <section id="honnete">
              <h2>Ce qu’on ne vous promet pas</h2>

              <div style={{ border: '0.5px solid #b89a30', background: 'rgba(138, 112, 48, 0.08)', padding: '28px', margin: '24px 0 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9a7b2e', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Mise au point</div>
                <p style={{ margin: 0 }}>
                  Le « 4x » est un ordre de grandeur, pas une garantie contractuelle. Un secteur très concurrentiel, une offre mal différenciée ou un marché en contraction changent l’équation. Méfiez-vous de quiconque vous promet un chiffre précis avant d’avoir regardé vos données.
                </p>
              </div>

              <p>
                Ce qu’on peut affirmer sans réserve, par contre : les quatre leviers sont travaillés sur chaque mandat, et le dashboard vous montre exactement ce qu’ils produisent chez vous. Vous n’avez pas à nous croire sur parole — vous avez les chiffres, en continu, et vous pouvez juger vous-même.
              </p>
              <p>
                L’autre limite, on l’a déjà écrite ailleurs et elle reste vraie : l’IA amplifie une équipe compétente, elle ne la remplace pas. La stratégie derrière les quatre leviers, c’est encore un travail humain. L’IA nous permet simplement de l’offrir à des entreprises qui n’y avaient pas accès.
              </p>
            </section>

            {/* SECTION — FAQ */}
            <section id="faq">
              <h2>Questions fréquentes</h2>
              <p>
                Les questions qu’on reçoit le plus souvent depuis qu’on explique ce changement à nos clients.
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
              <h2>Prochaines étapes</h2>
              <p>
                Si votre site date d’avant cette bascule, la question à se poser n’est pas « est-ce qu’il est encore beau? ». C’est « est-ce qu’il performe? ». Les deux n’ont rien à voir, et seule la deuxième se traduit en clients.
              </p>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                Basé à Laval ou dans les environs? Voyez ce qu’on fait comme <Link href="/agence-web-laval" className="inline-link">agence web Laval</Link>.
              </p>
              <div className="blog-cta">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: '#F0EAD6', marginBottom: '16px' }}>Où en est la performance de votre site, réellement?</h3>
                <p>On regarde vos positions, votre visibilité sur les moteurs IA, votre positionnement et vos compétiteurs — et on vous montre lequel des quatre leviers vous coûte le plus cher en ce moment. Sans obligation.</p>
                <Link href="/contact" className="blog-cta-link">Obtenir mon diagnostic de performance →</Link>
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
