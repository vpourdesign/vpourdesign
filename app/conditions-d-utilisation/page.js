import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import JsonLd from '../../components/JsonLd';
import { breadcrumbSchema } from '../../data/schema';
import Link from 'next/link';

const UPDATED = '14 septembre 2026';

export const metadata = {
  title: 'Conditions d’utilisation',
  description: 'Les conditions qui encadrent l’utilisation du site vpourdesign.com : propriété intellectuelle, contenu, soumissions, responsabilité et droit applicable.',
  alternates: { canonical: 'https://vpourdesign.com/conditions-d-utilisation' },
};

const link = { color: '#0C0B09', textDecoration: 'underline', textUnderlineOffset: '3px' };

const sections = [
  ['acceptation', 'Acceptation'],
  ['utilisation', 'Utilisation du site'],
  ['propriete', 'Propriété intellectuelle'],
  ['contenu', 'Contenu et exactitude'],
  ['soumissions', 'Soumissions et mandats'],
  ['liens', 'Liens externes'],
  ['responsabilite', 'Responsabilité'],
  ['confidentialite', 'Confidentialité'],
  ['droit', 'Droit applicable'],
  ['modifications', 'Modifications'],
];

export default function ConditionsUtilisationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', url: '/' }, { name: 'Conditions d’utilisation' }])} />
      <Nav />
      <ScrollReveal />

      {/* HERO GRID */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Mentions légales</div>
          <h1 className="h1">Conditions<br />d&apos;<em>utilisation</em></h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">vpourdesign.com</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">Mise à jour : {UPDATED}</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Les règles simples qui encadrent votre visite sur notre site.</p>
        </div>
        <div className="cell cell-d">
          <div className="deco-number">10</div>
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
                Le site vpourdesign.com est exploité par V pour Design inc., agence web établie au 400, Grande-Côte, Rosemère (Québec) J7A 1L3. Les présentes conditions encadrent l&apos;accès au site et son utilisation.
              </p>
            </section>

            <section id="acceptation">
              <h2>1. Acceptation des conditions</h2>
              <p>
                En naviguant sur le site, vous acceptez les présentes conditions d&apos;utilisation. Si vous ne les acceptez pas, veuillez cesser d&apos;utiliser le site.
              </p>
            </section>

            <section id="utilisation">
              <h2>2. Utilisation du site</h2>
              <p>Vous vous engagez à utiliser le site de façon légale et respectueuse. Il est notamment interdit :</p>
              <ul className="blog-list">
                <li>de tenter d&apos;accéder sans autorisation aux sections protégées du site, à ses serveurs ou à ses systèmes;</li>
                <li>de nuire à son fonctionnement, notamment par l&apos;envoi de code malveillant ou de requêtes massives;</li>
                <li>d&apos;aspirer ou d&apos;extraire son contenu de manière automatisée sans notre accord écrit;</li>
                <li>d&apos;utiliser nos formulaires pour envoyer des messages non sollicités, frauduleux ou illicites.</li>
              </ul>
            </section>

            <section id="propriete">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                Les textes, images, vidéos, logos, marques, éléments graphiques, projets présentés et code du site sont la propriété de V pour Design inc. ou de ses clients et partenaires, et sont protégés par les lois sur le droit d&apos;auteur et les marques de commerce.
              </p>
              <p>
                Vous pouvez consulter le site et partager ses pages pour un usage personnel et non commercial, en citant la source. Toute autre reproduction, modification ou diffusion, en tout ou en partie, requiert notre autorisation écrite préalable.
              </p>
            </section>

            <section id="contenu">
              <h2>4. Contenu et exactitude</h2>
              <p>
                On s&apos;efforce de garder l&apos;information du site exacte et à jour. Les articles, guides et exemples de prix sont toutefois fournis à titre informatif seulement. Ils ne constituent ni un avis juridique, fiscal ou professionnel, ni une offre ferme. On peut modifier ou retirer du contenu en tout temps, sans préavis.
              </p>
            </section>

            <section id="soumissions">
              <h2>5. Soumissions et mandats</h2>
              <p>
                L&apos;envoi d&apos;un formulaire de contact ou de soumission ne crée aucune relation contractuelle. Tout mandat est encadré par une soumission ou une entente écrite distincte, dont les modalités prévalent sur les présentes conditions.
              </p>
            </section>

            <section id="liens">
              <h2>6. Liens externes</h2>
              <p>
                Le site peut contenir des liens vers des sites de tiers, dont ceux de nos clients. On ne contrôle pas ces sites et on n&apos;est pas responsable de leur contenu, de leurs pratiques ni de leur disponibilité.
              </p>
            </section>

            <section id="responsabilite">
              <h2>7. Limitation de responsabilité</h2>
              <p>
                Le site est offert tel quel. On ne garantit pas qu&apos;il sera accessible en tout temps, sans interruption ni erreur. Dans la mesure permise par la loi, V pour Design inc. ne peut être tenue responsable des dommages découlant de l&apos;utilisation du site, de l&apos;impossibilité d&apos;y accéder ou de la confiance accordée à son contenu.
              </p>
              <p>
                Rien dans les présentes conditions ne limite les droits dont vous bénéficiez en vertu de la Loi sur la protection du consommateur ou d&apos;une autre loi d&apos;ordre public.
              </p>
            </section>

            <section id="confidentialite">
              <h2>8. Confidentialité</h2>
              <p>
                Le traitement de vos renseignements personnels est décrit dans notre <Link href="/politique-de-confidentialite" style={link}>politique de confidentialité</Link>, qui fait partie intégrante des présentes conditions.
              </p>
            </section>

            <section id="droit">
              <h2>9. Droit applicable</h2>
              <p>
                Les présentes conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s&apos;y appliquent. Tout litige relève des tribunaux compétents du Québec.
              </p>
            </section>

            <section id="modifications">
              <h2>10. Modifications</h2>
              <p>
                On peut mettre à jour ces conditions en tout temps. La version en vigueur est celle publiée sur cette page. Dernière mise à jour : {UPDATED}.
              </p>
              <p>
                Des questions? Écrivez-nous à <a href="mailto:info@vpourdesign.com" style={link}>info@vpourdesign.com</a> ou passez par la page <Link href="/contact" style={link}>contact</Link>.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
