import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import PhoneLink from '../../components/PhoneLink';
import ConsentReset from '../../components/ConsentReset';
import { breadcrumbSchema } from '../../data/schema';
import Link from 'next/link';

const UPDATED = '14 septembre 2026';

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment V pour Design recueille, utilise et protège vos renseignements personnels sur vpourdesign.com, conformément à la Loi 25 du Québec et à la LPRPDE.',
  alternates: { canonical: 'https://vpourdesign.com/politique-de-confidentialite' },
};

const link = { color: '#0C0B09', textDecoration: 'underline', textUnderlineOffset: '3px' };

const tableHead = { padding: '14px 16px', textAlign: 'left', borderBottom: '0.5px solid #c8c0b0', color: '#8a7e6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 400 };
const tableCell = { padding: '12px 16px', borderBottom: '0.5px solid #c8c0b0', color: '#4a4438', verticalAlign: 'top' };

const providers = [
  { name: 'Formspree', role: 'Acheminement des messages envoyés par nos formulaires', where: 'États-Unis' },
  { name: 'Google Analytics', role: 'Statistiques de fréquentation (si vous y consentez)', where: 'États-Unis' },
  { name: 'Meta (pixel Facebook)', role: 'Mesure et publicité ciblée (si vous y consentez)', where: 'États-Unis' },
  { name: 'Vercel', role: 'Hébergement du site et journaux techniques du serveur', where: 'États-Unis' },
  { name: 'Google Fonts', role: 'Chargement des polices de caractères', where: 'États-Unis' },
];

const sections = [
  ['responsable', 'Responsable'],
  ['collecte', 'Ce qu’on recueille'],
  ['utilisation', 'Pourquoi'],
  ['temoins', 'Témoins (cookies)'],
  ['communication', 'Fournisseurs'],
  ['conservation', 'Conservation'],
  ['securite', 'Sécurité'],
  ['droits', 'Vos droits'],
  ['modifications', 'Modifications'],
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', url: '/' }, { name: 'Politique de confidentialité' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Confidentialité</div>
          <h1 className="h1">Vos données,<br />traitées avec <em>respect</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">Loi 25 · LPRPDE</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">Mise à jour : {UPDATED}</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Ce qu&apos;on recueille, pourquoi on le fait et comment vous gardez le contrôle.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">25</div>
        </div>
      </section>

      <article className="blog-article" style={{ borderTop: '0.5px solid var(--line)' }}>
        <div className="blog-article-grid">
          <aside className="blog-sidebar">
            <div className="blog-sidebar-sticky">
              <div className="blog-meta-label">Sommaire</div>
              <nav className="blog-toc">
                {sections.map(([id, label]) => (
                  <a key={id} href={`#${id}`}>{label}</a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="blog-content">
            <section>
              <p className="blog-lead">
                V pour Design inc. accorde une grande importance à la protection de vos renseignements personnels. Cette politique explique comment on les traite quand vous visitez vpourdesign.com ou que vous communiquez avec nous, conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25) et à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE).
              </p>
            </section>

            <section id="responsable">
              <h2>Responsable de la protection des renseignements personnels</h2>
              <p>
                Le responsable de la protection des renseignements personnels chez V pour Design est <strong>Vincent Lavoie</strong>, président fondateur. Pour toute question, demande ou plainte :
              </p>
              <ul className="blog-list">
                <li><strong>Courriel :</strong> <a href="mailto:info@vpourdesign.com" style={link}>info@vpourdesign.com</a></li>
                <li><strong>Téléphone :</strong> <PhoneLink /></li>
                <li><strong>Adresse :</strong> 400, Grande-Côte, Rosemère (Québec) J7A 1L3</li>
              </ul>
            </section>

            <section id="collecte">
              <h2>Les renseignements qu&apos;on recueille</h2>
              <h3>Ce que vous nous transmettez</h3>
              <p>
                Quand vous remplissez un formulaire de contact ou de soumission, on recueille votre nom, votre adresse courriel, votre numéro de téléphone (facultatif), le contenu de votre message et la page du site d&apos;où vous l&apos;avez envoyé. Si vous nous écrivez ou nous appelez directement, on conserve les renseignements que vous choisissez de nous donner.
              </p>
              <h3>Ce qui est recueilli automatiquement</h3>
              <p>
                Seulement si vous y consentez, des outils de mesure recueillent des données de navigation : pages consultées, durée de la visite, provenance, type d&apos;appareil et de navigateur, région approximative. Notre hébergeur conserve aussi des journaux techniques (adresse IP, date et heure des requêtes) nécessaires au fonctionnement et à la sécurité du site.
              </p>
              <p>
                On ne recueille aucun renseignement sensible, et le site ne s&apos;adresse pas aux personnes de moins de 14 ans.
              </p>
            </section>

            <section id="utilisation">
              <h2>Pourquoi on les utilise</h2>
              <ul className="blog-list">
                <li>Répondre à vos questions et préparer une soumission.</li>
                <li>Assurer le suivi d&apos;un mandat si vous devenez client.</li>
                <li>Comprendre comment le site est utilisé afin de l&apos;améliorer (avec votre consentement).</li>
                <li>Mesurer l&apos;efficacité de nos publicités (avec votre consentement).</li>
                <li>Protéger le site contre les abus et respecter nos obligations légales.</li>
              </ul>
              <p>
                On ne vend pas vos renseignements personnels et on ne les utilise pas à d&apos;autres fins sans votre consentement. Aucune décision vous concernant n&apos;est prise uniquement par un traitement automatisé.
              </p>
            </section>

            <section id="temoins">
              <h2>Témoins (cookies) et technologies semblables</h2>
              <p>
                À votre première visite, un bandeau vous permet d&apos;accepter, de refuser ou de personnaliser les témoins. Tant que vous n&apos;avez pas fait de choix, les témoins non essentiels restent désactivés.
              </p>
              <ul className="blog-list">
                <li><strong>Essentiels :</strong> nécessaires au fonctionnement du site, dont l&apos;enregistrement de votre choix de témoins dans votre navigateur. Toujours actifs.</li>
                <li><strong>Analytiques :</strong> Google Analytics, pour produire des statistiques de fréquentation.</li>
                <li><strong>Marketing :</strong> pixel Meta (Facebook) et Google Ads, pour mesurer nos campagnes et vous montrer des publicités pertinentes.</li>
              </ul>
              <p>
                Vous pouvez retirer ou modifier votre consentement en tout temps :
              </p>
              <ConsentReset />
              <p>
                Vous pouvez aussi bloquer ou supprimer les témoins dans les réglages de votre navigateur.
              </p>
            </section>

            <section id="communication">
              <h2>Fournisseurs et communication hors Québec</h2>
              <p>
                Pour exploiter le site, on fait appel à des fournisseurs de services qui peuvent traiter vos renseignements pour notre compte. Certains sont situés à l&apos;extérieur du Québec. Avant de leur confier des renseignements, on évalue les protections qu&apos;ils offrent, et on ne leur transmet que ce qui est nécessaire.
              </p>
              <div style={{ overflowX: 'auto', margin: '24px 0 32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th style={tableHead}>Fournisseur</th>
                      <th style={tableHead}>Utilisation</th>
                      <th style={tableHead}>Lieu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providers.map((p) => (
                      <tr key={p.name}>
                        <td style={{ ...tableCell, color: '#0C0B09', fontWeight: 500 }}>{p.name}</td>
                        <td style={tableCell}>{p.role}</td>
                        <td style={tableCell}>{p.where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                On peut aussi communiquer des renseignements lorsque la loi l&apos;exige, par exemple à la suite d&apos;une ordonnance d&apos;un tribunal.
              </p>
            </section>

            <section id="conservation">
              <h2>Conservation</h2>
              <p>
                On conserve vos renseignements seulement le temps nécessaire aux fins pour lesquelles ils ont été recueillis. Les demandes restées sans suite sont détruites ou anonymisées au plus tard trois ans après notre dernier échange. Les renseignements liés à un mandat sont conservés pendant la durée exigée par nos obligations comptables et fiscales. Les données de Google Analytics sont conservées au maximum 14 mois.
              </p>
            </section>

            <section id="securite">
              <h2>Sécurité</h2>
              <p>
                Le site est servi exclusivement en HTTPS. L&apos;accès aux renseignements est limité aux personnes qui en ont besoin dans le cadre de leurs fonctions, et nos comptes sont protégés par une authentification forte. En cas d&apos;incident de confidentialité présentant un risque de préjudice sérieux, on avise la Commission d&apos;accès à l&apos;information et les personnes concernées, comme la loi le prévoit.
              </p>
            </section>

            <section id="droits">
              <h2>Vos droits</h2>
              <p>Vous pouvez en tout temps :</p>
              <ul className="blog-list">
                <li>Demander l&apos;accès aux renseignements personnels qu&apos;on détient à votre sujet.</li>
                <li>Faire corriger des renseignements inexacts, incomplets ou équivoques.</li>
                <li>Retirer votre consentement à leur utilisation.</li>
                <li>Demander qu&apos;on cesse de les diffuser ou qu&apos;on les supprime lorsque la loi le permet.</li>
                <li>Obtenir vos renseignements dans un format technologique structuré et couramment utilisé.</li>
              </ul>
              <p>
                Écrivez-nous à <a href="mailto:info@vpourdesign.com" style={link}>info@vpourdesign.com</a>. On répond dans un délai de 30 jours. Si vous n&apos;êtes pas satisfait de notre réponse, vous pouvez porter plainte auprès de la <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer" style={link}>Commission d&apos;accès à l&apos;information du Québec</a>.
              </p>
            </section>

            <section id="modifications">
              <h2>Modifications</h2>
              <p>
                Cette politique peut être mise à jour pour refléter l&apos;évolution de nos pratiques ou de la loi. La date de la dernière mise à jour figure en haut de la page. Dernière mise à jour : {UPDATED}.
              </p>
              <p>
                Des questions? <Link href="/contact" style={link}>Contactez-nous</Link>.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
