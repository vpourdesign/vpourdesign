# Layout 01 — Grille Éditoriale Décalée

## Identité visuelle

**Mot-clé esthétique :** "Magazine d'art suisse des années 70, digitalisé"  
**Registre :** Luxe archival · Editorial · Intemporel  
**Usage idéal :** Studio de design, agence créative, portfolio photographe, maison d'édition

---

## Typographie

```
Display  : Cormorant Garamond, serif
           weights: 300 (normal), 300 italic, 600 (bold)
           → Pour tous les titres H1, H2, citations

Utility  : DM Mono, monospace
           weights: 400, 500
           → Pour labels, numéros, eyebrows, metadata

Google Fonts import :
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Mono:wght@400;500&display=swap');
```

---

## Palette

```
--bg-primary   : #0C0B09   → fond principal (noir archival chaud)
--bg-secondary : #111009   → zones légèrement relevées
--line         : #2a2820   → lignes de grille (très subtiles)
--text-primary : #F0EAD6   → texte principal (ivoire)
--text-muted   : #8a7e6a   → texte secondaire
--text-ghost   : #4a4438   → texte tertiaire / numéros déco
--accent       : #C9A84C   → or unique (utiliser avec parcimonie)
--accent-dim   : rgba(201,168,76,0.15) → lueur accent
```

---

## Structure de grille

```
PRINCIPE : CSS Grid asymétrique sur 2 rangées × 3 colonnes.
Aucune cellule n'a la même taille. Tout est décalé.

grid-template-columns : 1fr 1fr 1fr
grid-template-rows    : 180px 200px  (ou 47% 53%)

Cellule A : col 1-3 / row 1  → Titre principal, ancré en bas-gauche
Cellule B : col 3   / row 1-3 → Colonne latérale, du haut en bas
Cellule C : col 1   / row 2  → Citation ou sous-titre
Cellule D : col 2   / row 2  → Chiffre décoratif géant

SÉPARATION : border 0.5px solid var(--line) entre cellules.
Jamais de gap. Les lignes sont la séparation.
```

---

## Règles de layout — NON-NÉGOCIABLES

1. **Ancrage bas :** Le texte principal est TOUJOURS `justify-content: flex-end` dans sa cellule. Jamais centré, jamais en haut.

2. **Chiffre comme typographie :** Un élément numérique (année, numéro de projet, stat) doit être traité comme décor visuel — font-size 52-80px, color très atténuée `var(--text-ghost)`.

3. **La colonne B (latérale) est structurelle :** Elle court sur toute la hauteur. Elle contient navigation, numéro de page, ou méta-info — jamais le contenu principal.

4. **L'accent doré est rare :** `var(--accent)` s'utilise sur 1 seul élément par écran max. Italic en Cormorant Garamond est le deuxième accent possible.

5. **Aucun border-radius sur les conteneurs :** `border-radius: 0` partout. Les arrondis vont sur les badges inline uniquement (2px max).

6. **Pas de background différent par cellule :** Tout est `#0C0B09`. La séparation vient uniquement des lignes.

---

## Composants typographiques

```
Eyebrow  : DM Mono 9px / #6b6456 / letter-spacing: 0.15em / uppercase
H1       : Cormorant Garamond 300 / 44-72px / #F0EAD6 / line-height: 0.92
H1 em    : Cormorant Garamond 300 italic / color: var(--accent)
H2       : Cormorant Garamond 300 italic / 22px / #8a7e6a
Body     : DM Mono 400 / 10-11px / #8a7e6a / line-height: 1.7
Number   : DM Mono 500 / 9px / #4a4438  (numéros 01/04)
Big deco : DM Mono 500 / 52-80px / #2a2520  (chiffres décor)
Tag      : DM Mono 400 / 8px / var(--accent) / letter-spacing: 0.2em / uppercase
```

---

## Micro-détails obligatoires

- **Ligne verticale accent :** Un `<div>` de `width: 1px; height: 48px; background: var(--accent); opacity: 0.4` quelque part dans la colonne B.
- **Curseur custom :** `cursor: crosshair` sur le body.
- **Letter-spacing sur les eyebrows :** Minimum `0.15em`, idéalement `0.18em`.
- **Line-height serré sur H1 :** `0.92` à `0.95`. Jamais 1.0+ sur un grand titre.
- **Pas de transition sur les couleurs de fond** — les hovers changent `opacity` ou `color` uniquement.

---

## Ce qu'il faut INTERDIRE à Claude

```
NEVER use: Inter, Roboto, Space Grotesk, or any sans-serif for headings
NEVER use: border-radius > 2px on layout containers
NEVER use: CSS box-shadow anywhere
NEVER use: background-color different between grid cells
NEVER use: flexbox for the main page layout (use CSS Grid)
NEVER use: padding-top to anchor text (use justify-content: flex-end)
NEVER use: more than one accent color
NEVER use: white (#ffffff) — use #F0EAD6 maximum for light text
NEVER center the H1 — always left-aligned, bottom-anchored
```

---

## Prompt de démarrage pour Claude Code

```
Build a page using layout-01-editorial system. 
Reference: LAYOUT.md + reference.css.

The page is a CSS Grid: 3 columns × 2 rows.
Columns equal width. Rows: 180px / 200px.
Cells separated by 0.5px lines (#2a2820), no gap.

Cell A (col 1-2, row 1): Main headline bottom-anchored.
Cell B (col 3, row 1-2): Sidebar, full height, content space-between.
Cell C (col 1, row 2): Italic subline, bottom-anchored.
Cell D (col 2, row 2): Giant decorative number, bottom-aligned.

Import fonts from Google Fonts exactly as specified in LAYOUT.md.
Apply ALL CSS variables from reference.css.
Follow all NEVER rules above without exception.
```
