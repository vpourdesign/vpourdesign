# Notes — TEST-VPD

> Auto-classé par Claude depuis le chat Cowork du projet.
> Convention : `_AGENCY/CTO/conventions/project-notes.md`

## 📅 Échéances

*(vide pour l'instant — ajoute "vendredi il faut envoyer X" et je classe)*

## ✅ À faire

- **Titres doublés sur 24 pages** (FR + EN). Le `title` de chaque page contient déjà « V pour Design », et le `template` des deux layouts (`app/layout.js`, `app/en/layout.js`) le rajoute. Résultat en SERP : « SEO & Référencement local — Rive-Nord & Laval | V pour Design | V pour Design — Agence web IA Rive-Nord ». Corrigé pour les 10 pages villes le 2026-08-03 ; les 24 autres attendent le feu vert. Correction : retirer le suffixe de marque de chaque `title`, le template s'en charge. Cas particulier : `app/en/page.js` a besoin de `title: { absolute: … }` comme les pages villes.

## 💭 Long shots

*(vide pour l'instant — "un jour on pourrait explorer ..." finit ici)*

## 📝 Notes client

*(vide pour l'instant — "le client préfère ..." finit ici)*

## 🔍 Précisions

*(vide pour l'instant — données factuelles, comptes, accès, contexte)*

## ✓ Fait

- **2026-08-03 — Poussée SEO `/agence-web-laval`** (note Cowork). Maillage interne contextuel depuis l'accueil, `/services/seo-referencement`, `/services/creation-site-web` et les 6 articles de blog. Titre nettoyé (`title: { absolute }` pour couper le template, les 10 metaTitle villes harmonisés). Balises OG et Twitter rendues spécifiques à la ville — elles héritaient de l'accueil. Build de production validé.
- **2026-08-03 — Header `/services` refait.** Sidebar et « Sur mesure » retirés, nouvelle classe `.page-header` (eyebrow + titre + sous-titre). `.hero-grid` intact pour les 10 autres pages qui l'utilisent.
- **2026-08-03 — `middleware.js` : exception localhost.** La redirection http → https s'appliquait aussi en local, ce qui rendait le site intestable en dev. Aucun effet en production, vérifié.
