import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import ScrollReveal from '../../../components/ScrollReveal';
import JsonLd from '../../../components/JsonLd';
import { blogPostSchema, breadcrumbSchema } from '../../../data/schema';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Loi 25 et intelligence artificielle au Québec : ce que ça change, et comment V pour Design protège vos données — V pour Design',
  description: 'La Loi 25 encadre l\'usage de l\'IA dans les entreprises du Québec. Voici ce que ça implique concrètement — et comment V pour Design continue de livrer en toute conformité.',
  alternates: { canonical: 'https://vpourdesign.com/blog/loi-25-intelligence-artificielle-quebec' },
  openGraph: {
    title: 'Loi 25 et intelligence artificielle : ce que ça change pour votre entreprise',
    description: 'Évaluation des facteurs vie privée, consentement, transferts hors-Québec, Shadow AI : V pour Design fait le tour de la Loi 25 et explique son cadre de travail.',
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Vincent Lavoie'],
    images: [
      {
        url: 'https://vpourdesign.com/images/blog/ia.jpg',
        width: 1200,
        height: 630,
        alt: 'Loi 25 et intelligence artificielle au Québec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loi 25 et intelligence artificielle : ce que ça change pour votre entreprise',
    description: 'V pour Design fait le tour de la Loi 25 et explique son cadre de travail en IA.',
    images: ['https://vpourdesign.com/images/blog/ia.jpg'],
  },
};

const obligationsRows = [
  { exigence: 'Évaluation des facteurs vie privée (EFVP)', resume: 'Obligatoire avant tout projet utilisant l\'IA, le profilage ou un transfert de données hors Québec.', vpd: 'Réalisée systématiquement avant chaque mandat impliquant des données client.' },
  { exigence: 'Consentement explicite', resume: 'Exigé pour la collecte, l\'usage et la communication de renseignements personnels.', vpd: 'Mécanismes de consentement intégrés dès la conception (formulaires, cookies, infolettres).' },
  { exigence: 'Transparence sur les décisions automatisées', resume: 'L\'utilisateur doit savoir quand une décision le concernant est prise par un algorithme.', vpd: 'Aucune décision client automatisée sans information claire et possibilité de révision humaine.' },
  { exigence: 'Information sur les transferts hors Québec', resume: 'Article 17 : informer les personnes concernées et évaluer les protections offertes.', vpd: 'Cartographie complète des outils utilisés, juridiction par juridiction, documentée par mandat.' },
  { exigence: 'Responsable de la protection des renseignements personnels', resume: 'Toute organisation doit en désigner un.', vpd: 'Rôle assumé chez V pour Design pour ses propres opérations et accompagnement client.' },
];

const compareRows = [
  { situation: 'Outils d\'IA grand public (gratuits, comptes personnels)', risque: 'Données envoyées hors Québec sans contrat, sans EFVP, sans consentement.', conforme: 'Outils professionnels avec entente de traitement, journalisation et clauses de confidentialité.' },
  { situation: 'Génération de contenu avec données clients réelles', risque: 'Renseignements personnels copiés-collés dans un prompt public.', conforme: 'Données anonymisées ou environnements isolés, jamais d\'informations identifiables dans un prompt.' },
  { situation: 'Automatisation marketing (segmentation, scoring)', risque: 'Décisions automatisées sans encadrement ni information aux personnes concernées.', conforme: 'Règles documentées, supervision humaine, droit de révision communiqué.' },
  { situation: 'Sous-traitance d\'agence ou pigistes', risque: 'Aucune entente écrite, aucune clause sur l\'IA ou la confidentialité.', conforme: 'Entente de mandat signée, clauses IA spécifiques, NDA si requis.' },
];

const faqs = [
  {
    q: 'Est-ce que la Loi 25 interdit l\'intelligence artificielle au Québec?',
    r: 'Non. La Loi 25 n\'interdit pas l\'IA. Elle encadre l\'usage des renseignements personnels — y compris quand ces renseignements transitent par un système d\'intelligence artificielle. Une entreprise qui structure ses processus correctement peut continuer à utiliser l\'IA et même en tirer un avantage concurrentiel.',
  },
  {
    q: 'Mon agence utilise ChatGPT pour rédiger mes textes — est-ce légal?',
    r: 'Ça dépend de ce qui est envoyé dans le prompt. Si l\'agence utilise un compte gratuit et y copie-colle des données clients identifiables, il y a un problème. Chez V pour Design, les prompts ne contiennent jamais de renseignements personnels identifiables, et les outils d\'IA professionnels que nous utilisons sont sous entente écrite.',
  },
  {
    q: 'Qu\'est-ce qu\'une évaluation des facteurs vie privée (EFVP)?',
    r: 'C\'est un exercice obligatoire prévu à la Loi 25 : avant de lancer un projet impliquant des renseignements personnels — surtout en IA — l\'organisation documente les risques, les mesures de protection et les options envisagées. C\'est devenu un standard de marché, pas juste une obligation légale.',
  },
  {
    q: 'Qu\'est-ce que le « Shadow AI » et pourquoi c\'est un enjeu?',
    r: 'Le Shadow AI, c\'est l\'usage clandestin de l\'IA par les employés — sans que l\'employeur ou les TI le sachent. Selon plusieurs études, plus de 80 % des employés y ont recours. Le risque : des données confidentielles transitent par des outils non contractés. Une bonne politique interne et des outils approuvés règlent une grande partie du problème.',
  },
  {
    q: 'Combien peuvent atteindre les sanctions sous la Loi 25?',
    r: 'Les amendes administratives peuvent atteindre 10 millions $ ou 2 % du chiffre d\'affaires mondial. Les sanctions pénales montent jusqu\'à 25 millions $ ou 4 % du chiffre d\'affaires. C\'est sérieux, mais ça vise d\'abord les organisations qui n\'ont rien mis en place.',
  },
];

export default function BlogLoi25IA() {
  return (
    <>
      <JsonLd data={blogPostSchema({
        title: 'Loi 25 et intelligence artificielle au Québec : ce que ça change, et comment V pour Design protège vos données',
        description: 'La Loi 25 encadre l\'usage de l\'IA dans les entreprises du Québec. Voici ce que ça implique concrètement — et comment V pour Design continue de livrer en toute conformité.',
        slug: 'loi-25-intelligence-artificielle-quebec',
        datePublished: '2026-05-04',
        keywords: ['Loi 25', 'intelligence artificielle', 'protection des renseignements personnels', 'EFVP', 'conformité', 'Québec'],
      })} />
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Loi 25 et intelligence artificielle' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Blog &middot; Conformit&eacute; &middot; Intelligence artificielle</div>
          <h1 className="h1">Loi 25 et <em>intelligence artificielle</em>&nbsp;: ce que &ccedil;a change pour votre entreprise</h1>
        </div>
        <div className="cell cell-b" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/blog/ia.jpg" alt="Loi 25 et intelligence artificielle au Qu&eacute;bec" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0, filter: 'grayscale(100%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}><div className="page-num">Article 06</div></div>
          <div className="ai-icon-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="tag">Mai 2026</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Par Vincent Lavoie</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">06</div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="blog-article" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="blog-article-grid">
          <aside className="blog-sidebar">
            <div className="blog-sidebar-sticky">
              <div className="blog-meta-label">Sommaire</div>
              <nav className="blog-toc">
                <a href="#intro">Le contexte</a>
                <a href="#obligations">Ce que la Loi 25 exige</a>
                <a href="#shadow-ai">Le risque du Shadow AI</a>
                <a href="#vpd-cadre">Notre cadre de travail</a>
                <a href="#comparaison">Risqu&eacute; vs conforme</a>
                <a href="#continuer">Continuer &agrave; livrer, sans risque</a>
                <a href="#faq">FAQ</a>
                <a href="#cta">Prochaines &eacute;tapes</a>
              </nav>
              <div className="blog-meta-label" style={{ marginTop: '32px' }}>Mots-cl&eacute;s</div>
              <div className="blog-tags-list">
                <span className="service-tag">Loi 25</span>
                <span className="service-tag">IA</span>
                <span className="service-tag">Conformit&eacute;</span>
                <span className="service-tag">EFVP</span>
                <span className="service-tag">Vie priv&eacute;e</span>
              </div>
            </div>
          </aside>

          <div className="blog-content">

            {/* INTRO */}
            <section id="intro">
              <p className="blog-lead">
                Depuis quelques semaines, la conversation est partout&nbsp;: la Commission des droits de la personne du Qu&eacute;bec rappelle les balises &eacute;thiques de l&apos;IA, et La Presse titrait le 1<sup>er</sup> mai 2026 que &laquo;&nbsp;votre recours &agrave; l&apos;IA au boulot pourrait &ecirc;tre ill&eacute;gal&nbsp;&raquo;. La question n&apos;est plus de savoir si la Loi 25 s&apos;applique &agrave; l&apos;intelligence artificielle &mdash; elle s&apos;applique d&eacute;j&agrave;.
              </p>
              <p>
                La bonne nouvelle&nbsp;: la Loi 25 n&apos;interdit pas l&apos;IA. Elle exige qu&apos;on l&apos;utilise correctement. Chez V pour Design, on travaille avec l&apos;IA depuis longtemps, et notre cadre de travail a &eacute;t&eacute; b&acirc;ti pour respecter ces obligations sans freiner la livraison. Voici ce que &ccedil;a veut dire concr&egrave;tement pour vous.
              </p>

              {/* Context block */}
              <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.07)', padding: '28px', margin: '32px 0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Le rappel rapide</div>
                <p style={{ margin: 0 }}>
                  La <strong>Loi 25</strong> (anciennement projet de loi 64) modernise les r&egrave;gles qu&eacute;b&eacute;coises sur la protection des renseignements personnels. En vigueur progressivement depuis 2022, elle impose &agrave; toute organisation qui traite des donn&eacute;es de personnes au Qu&eacute;bec un cadre clair&nbsp;: consentement, transparence, &eacute;valuations d&apos;impact, transferts contr&ocirc;l&eacute;s. L&apos;IA n&apos;est pas exclue &mdash; elle est explicitement vis&eacute;e quand elle traite des renseignements personnels.
                </p>
              </div>
            </section>

            {/* PULL QUOTE */}
            <div style={{ borderTop: '0.5px solid #c8c0b0', borderBottom: '0.5px solid #c8c0b0', padding: '48px 0', margin: '48px 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '600px', margin: 0 }}>
                La Loi 25 n&apos;est pas un obstacle &agrave; l&apos;IA. C&apos;est un <span style={{ color: '#9a7b2e' }}>standard de m&eacute;tier</span>&nbsp;&mdash; et un avantage pour les entreprises qui le respectent.
              </p>
            </div>

            {/* SECTION — Obligations */}
            <section id="obligations">
              <h2>Ce que la Loi 25 exige quand l&apos;IA entre en jeu</h2>
              <p>
                Cinq obligations reviennent constamment dans les projets web, marketing et automatisation. Voici comment elles se traduisent chez nous.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Exigence</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Ce que dit la loi</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Ce qu&apos;on fait</th>
                    </tr>
                  </thead>
                  <tbody>
                    {obligationsRows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500, verticalAlign: 'top' }}>{row.exigence}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#4a4438', verticalAlign: 'top' }}>{row.resume}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#9a7b2e', verticalAlign: 'top' }}>{row.vpd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION — Shadow AI */}
            <section id="shadow-ai">
              <h2>Le vrai risque&nbsp;: le &laquo;&nbsp;Shadow AI&nbsp;&raquo;</h2>
              <p>
                Selon des donn&eacute;es r&eacute;centes cit&eacute;es par La Presse et la Cloud Security Alliance, pr&egrave;s de <strong>82 %</strong> des employ&eacute;s utilisent l&apos;IA au travail sans en parler &agrave; leur employeur. Une pr&eacute;sentation g&eacute;n&eacute;r&eacute;e dans ChatGPT &agrave; partir de notes client. Un courriel reformul&eacute; dans un outil gratuit. Un fichier client charg&eacute; dans Gemini pour gagner du temps.
              </p>
              <p>
                C&apos;est ce qu&apos;on appelle le <strong>Shadow AI</strong>. Et c&apos;est l&agrave; que la majorit&eacute; des entorses &agrave; la Loi 25 se produisent &mdash; pas par mauvaise foi, mais par habitude.
              </p>

              <div className="blog-stats-grid">
                <div className="blog-stat">
                  <div className="blog-stat-number">82%</div>
                  <div className="blog-stat-label">d&apos;employ&eacute;s utilisent l&apos;IA</div>
                  <p>Souvent sans en informer leur employeur ni leurs clients (Cloud Security Alliance, 2026).</p>
                </div>
                <div className="blog-stat">
                  <div className="blog-stat-number">93%</div>
                  <div className="blog-stat-label">y entrent des donn&eacute;es de l&apos;entreprise</div>
                  <p>Selon une &eacute;tude Kiteworks cit&eacute;e dans la presse en 2026.</p>
                </div>
                <div className="blog-stat">
                  <div className="blog-stat-number">25M$</div>
                  <div className="blog-stat-label">d&apos;amende potentielle</div>
                  <p>Plafond p&eacute;nal pr&eacute;vu par la Loi 25, ou 4&nbsp;% du chiffre d&apos;affaires mondial.</p>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: '#8a7e6a', marginTop: '12px', fontStyle: 'italic' }}>* Sources&nbsp;: La Presse, Commission d&apos;acc&egrave;s &agrave; l&apos;information du Qu&eacute;bec, Cloud Security Alliance.</p>
            </section>

            {/* SECTION — Cadre VPD */}
            <section id="vpd-cadre">
              <h2>Notre cadre de travail&nbsp;: pourquoi vous pouvez nous confier vos donn&eacute;es</h2>
              <p>
                V pour Design n&apos;est pas une agence qui &laquo;&nbsp;d&eacute;couvre&nbsp;&raquo; l&apos;IA cette ann&eacute;e. On l&apos;int&egrave;gre &agrave; nos processus depuis plusieurs ann&eacute;es, dans un cadre con&ccedil;u pour respecter la Loi 25 d&egrave;s la conception. Concr&egrave;tement&nbsp;:
              </p>
              <ul className="blog-list">
                <li><strong>Ententes sign&eacute;es avant tout d&eacute;but de mandat.</strong> Mandat &eacute;crit, clauses de confidentialit&eacute;, et clauses sp&eacute;cifiques sur l&apos;usage de l&apos;IA. Aucune donn&eacute;e client n&apos;est trait&eacute;e sans contrat.</li>
                <li><strong>Outils d&apos;IA professionnels uniquement.</strong> Pas de comptes gratuits, pas de prompts publics. Les services utilis&eacute;s offrent des ententes de traitement des donn&eacute;es et des engagements de non-utilisation pour l&apos;entra&icirc;nement.</li>
                <li><strong>Aucun renseignement personnel identifiable dans un prompt.</strong> Les donn&eacute;es sensibles sont anonymis&eacute;es ou trait&eacute;es dans des environnements isol&eacute;s. C&apos;est une r&egrave;gle interne, pas une suggestion.</li>
                <li><strong>Documentation des transferts hors Qu&eacute;bec.</strong> Quand un outil traite des donn&eacute;es &agrave; l&apos;ext&eacute;rieur de la province, on le sait, on l&apos;&eacute;value, et on l&apos;explique au client.</li>
                <li><strong>R&eacute;vision humaine syst&eacute;matique.</strong> L&apos;IA propose, on d&eacute;cide. Aucun livrable client n&apos;est mis en ligne sans relecture humaine.</li>
              </ul>
            </section>

            {/* SECTION — Comparaison */}
            <section id="comparaison">
              <h2>Risqu&eacute; vs conforme&nbsp;: la diff&eacute;rence concr&egrave;te</h2>
              <p>
                Les m&ecirc;mes outils d&apos;IA peuvent &ecirc;tre une bombe juridique ou un actif strat&eacute;gique. Tout d&eacute;pend du cadre. Voici les quatre situations qu&apos;on rencontre le plus souvent.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Situation</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Risqu&eacute;</th>
                      <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #408040', color: '#408040', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 }}>Conforme &mdash; notre approche</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#0C0B09', fontWeight: 500, verticalAlign: 'top' }}>{row.situation}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#a04040', verticalAlign: 'top' }}>{row.risque}</td>
                        <td style={{ padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#408040', verticalAlign: 'top' }}>{row.conforme}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION — Continuer à livrer */}
            <section id="continuer">
              <h2>Continuer &agrave; livrer, sans risque juridique</h2>
              <p>
                La Loi 25 n&apos;a pas ralenti notre cadence. Au contraire&nbsp;: elle a clarifi&eacute; nos processus et rassur&eacute; nos clients. Voici les types de mandats qu&apos;on continue de livrer pleinement, en respectant la loi&nbsp;:
              </p>
              <ul className="blog-list">
                <li><strong>Sites web et refontes&nbsp;:</strong> conception assist&eacute;e par IA, optimisation SEO, structure de contenu &mdash; sans jamais exposer les donn&eacute;es client.</li>
                <li><strong>Marketing num&eacute;rique&nbsp;:</strong> production publicitaire, infolettres, segmentation &mdash; avec consentement clair et m&eacute;canismes de retrait fonctionnels.</li>
                <li><strong>Automatisation&nbsp;:</strong> int&eacute;gration de chatbots, formulaires intelligents, scoring &mdash; toujours encadr&eacute;s par une supervision humaine.</li>
                <li><strong>Production de contenu&nbsp;:</strong> textes, visuels, vid&eacute;os &mdash; avec un workflow qui respecte les droits des personnes et la propri&eacute;t&eacute; intellectuelle.</li>
              </ul>
              <p>
                Autrement dit&nbsp;: on n&apos;a rien arr&ecirc;t&eacute;. On a simplement structur&eacute; ce qu&apos;on faisait d&eacute;j&agrave; pour que la Loi 25 devienne un argument de vente plut&ocirc;t qu&apos;une zone grise.
              </p>
            </section>

            {/* SECTION — FAQ */}
            <section id="faq">
              <h2>Questions fr&eacute;quentes</h2>
              <p>
                Les questions qu&apos;on re&ccedil;oit le plus souvent en ce moment, et nos r&eacute;ponses directes.
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
              <h2>Prochaines &eacute;tapes</h2>
              <p>
                Vous utilisez d&eacute;j&agrave; l&apos;IA dans votre entreprise, ou vous voulez l&apos;int&eacute;grer correctement&nbsp;? On peut vous accompagner sur trois fronts&nbsp;: cartographier vos usages actuels, mettre en place un cadre conforme &agrave; la Loi 25, et continuer &agrave; livrer des r&eacute;sultats web et marketing au m&ecirc;me rythme.
              </p>
              <div className="blog-cta">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: '#F0EAD6', marginBottom: '16px' }}>Vous voulez utiliser l&apos;IA dans votre entreprise &mdash; sans entorse &agrave; la Loi 25&nbsp;?</h3>
                <p>On commence par une discussion gratuite. On regarde vos outils actuels, on identifie les zones &agrave; risque, et on vous propose un cadre simple, sign&eacute;, qui vous permet de continuer &agrave; livrer sans inqui&eacute;tude juridique.</p>
                <Link href="/contact" className="blog-cta-link">R&eacute;server une discussion confidentielle &rarr;</Link>
              </div>
              <p style={{ fontSize: '11px', color: '#8a7e6a', marginTop: '24px', fontStyle: 'italic' }}>
                Avis&nbsp;: cet article est de nature informative et ne constitue pas un avis juridique. Pour une analyse formelle de votre conformit&eacute; &agrave; la Loi 25, consultez un conseiller juridique sp&eacute;cialis&eacute;.
              </p>
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
