# CLAUDE.md — Editorial Grille Décalée

## ⚡ Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Load `layout-editorial-grille-decalee.md` and `reference-editorial-grille-decalee.css`** from the `design/` folder before writing a single line of HTML. Every token, rule, and NEVER constraint in those files is law.
- **Run the Pre-Build Design Brief** (see section below) before writing a single line of HTML. No exceptions.

---

## 🎨 Active Layout System — Editorial Grille Décalée

**This project uses the Editorial Grille Décalée layout system.**

### What this means
- The page structure is a **CSS Grid: 3 columns × 2 rows**. Never flexbox for the main layout.
- Cells are separated by **0.5px lines (`#2a2820`)**. No gap. No padding between cells.
- **Text anchors to the bottom of its cell** (`justify-content: flex-end`). Never top, never centered.
- The headline uses **Cormorant Garamond 300** at `clamp(36px, 5vw, 56px)`, `line-height: 0.93`.
- **One italic word in `#C9A84C`** in the H1. Nothing else gets that color.
- A **decorative number** (52–80px, `#2a2520`, DM Mono) occupies one cell as pure visual texture.
- The **sidebar column (cell B)** runs full height and holds only meta — never the main content.
- `cursor: crosshair` on the body. Always.

### Aesthetic keyword
> "Magazine d'art suisse des années 70, digitalisé"

### Fonts — import exactly this
```
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Mono:wght@400;500&display=swap');
```

### Palette — use only these values
```
--bg-primary:   #0C0B09
--line:         #2a2820
--text-primary: #F0EAD6
--text-muted:   #8a7e6a
--text-ghost:   #4a4438
--text-ultra:   #2a2520
--accent:       #C9A84C
```

### Hard NEVER list for this layout
- ❌ NEVER use Inter, Roboto, Space Grotesk, or any sans-serif for headings
- ❌ NEVER use `border-radius` > 2px on layout containers
- ❌ NEVER use `box-shadow` anywhere
- ❌ NEVER use a different background per grid cell — all cells are `#0C0B09`
- ❌ NEVER use flexbox for the main page layout
- ❌ NEVER use `padding-top` to anchor text — use `justify-content: flex-end`
- ❌ NEVER use more than one accent color
- ❌ NEVER use white (`#ffffff`) — `#F0EAD6` is the maximum lightness
- ❌ NEVER center the H1 — always left-aligned, bottom-anchored
- ❌ NEVER add `gap` to the grid — lines are the separators

---

## 🎯 Pre-Build Design Brief — Ask Every Time

Before starting, ask only these questions. Layout, typography, palette, and hero style are already defined by this system — do not ask about them, do not offer alternatives, do not deviate.

### BLOCK 1 — Purpose & Audience
1. **What is this website for?** (portfolio, studio, editorial, service, event, other)
2. **Who is the primary audience?** (be specific — age range, mindset, profession)
3. **What is the ONE action you want visitors to take?**

### BLOCK 2 — Content
4. **What sections does this site need?** (e.g. work, about, contact, services, press)
5. **What goes in the decorative number cell?** (year founded, project count, an index number — pick one)
6. **What is the headline?** (or should Claude write it?)
7. **Any copy or content to use, or should Claude write placeholder content?**
8. **What should NOT be on this site?**

Use these answers to drive content and copy decisions only. All visual decisions — grid, fonts, palette, spacing, motion — are fixed by this CLAUDE.md and the design files. Do not reinterpret them based on user answers.

---

## 🦸 Hero — Editorial Grille Décalée Standards

The hero IS the grid. It is not a banner above the grid.

- The hero occupies the **first grid instance** (3 col × 2 row). No separate hero section.
- **Cell A (col 1–2, row 1):** Main headline, bottom-anchored. Eyebrow above it.
- **Cell B (col 3, full height):** Sidebar. Holds page number, accent line, meta tag. `justify-content: space-between`.
- **Cell C (col 1, row 2):** Italic subline or citation in Cormorant Garamond.
- **Cell D (col 2, row 2):** Giant decorative number — 52px+, `#2a2520`, purely visual.
- **On-load animation:** Cells fade in staggered — A at 0s, B at 0.1s, C at 0.2s, D at 0.3s. `fadeInUp` 0.7s `ease`.
- The **accent line** (1px × 48px, `#C9A84C`, opacity 0.4) must appear somewhere in the sidebar.

### Hero NEVER list
- ❌ NEVER use a separate `<section class="hero">` above the grid
- ❌ NEVER center the headline
- ❌ NEVER use a CTA button in the hero — the invitation is typographic
- ❌ NEVER use imagery in the hero — the grid IS the visual

---

## 🚫 Anti-Generic Layout Rules

The 3×2 equal card grid is banned. So is the centered hero + alternating rows pattern.

### Banned
- ❌ 3-column equal card grid for features/services
- ❌ Alternating text-left / image-right rows
- ❌ Icon + title + 2-line description repeated N times
- ❌ Full-width CTA banner with centered button
- ❌ Footer with 4 equal columns of links

### Approved alternatives for sections beyond the hero grid
- ✅ **Numbered editorial list** — 01, 02, 03... large type, ruled lines, expanding detail on hover
- ✅ **Stacked full-width moments** — each project/service gets a full-width row with its own grid instance
- ✅ **Marquee text band** — scrolling horizontal text for clients, values, or social proof
- ✅ **Text-image overlap** — type and visual share z-space, not side by side
- ✅ **Sticky sidebar narrative** — left column fixed, right column scrolls

### Additional grid cells for content sections
When adding sections below the hero, extend the grid pattern:
```css
/* New section = new grid instance, same column structure */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 0.5px solid var(--line);
}
```

---

## Animation Stack

**Build stable first, animate second.** Screenshot the static layout before adding any motion.

### Tier 1 — Always safe
- CSS `@keyframes` on `transform` and `opacity` only
- Intersection Observer for scroll-triggered class additions
- The staggered cell entrance (`fadeInUp`) is mandatory on page load

### Tier 2 — When needed
- GSAP core for complex timeline sequences
- GSAP ScrollTrigger for scroll-driven reveals

### Principles
- Spring easing always: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger siblings — never animate in unison
- Animate only `transform` and `opacity` — never layout properties
- Never `transition-all`
- `will-change: transform` only on actively animating elements

---

## CSS Stack

```css
/* Always use these patterns */
grid-template-areas   /* named zones, never anonymous spans */
clamp()               /* all font sizes and spacing */
aspect-ratio          /* lock proportions */
position: sticky      /* within grid areas */
```

- No hardcoded px for font sizes — always `clamp()`
- No `transition-all`
- No anonymous `grid-column: span 2` — use named areas

---

## Typography Stack

This layout uses a strict two-font system. No substitutions.

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / H1 | Cormorant Garamond | 300 | `clamp(36px, 5vw, 56px)` |
| Display italic accent | Cormorant Garamond | 300 italic | same |
| Display bold | Cormorant Garamond | 600 | for emphasis only |
| All other text | DM Mono | 400 | 9–13px |
| Decorative number | DM Mono | 500 | 52–80px |

**letter-spacing on H1:** `-0.02em`
**line-height on H1:** `0.93`
**letter-spacing on eyebrows:** `0.15em` minimum

---

## Visual Depth

There are no elevation layers in this system. Everything sits at the same z-plane, separated only by lines and color.

- No `box-shadow` — depth is created by `color` contrast and cell borders
- No `backdrop-filter`
- No gradient backgrounds
- Depth = the difference between `#F0EAD6` and `#2a2520`

---

## Output Defaults
- Single `index.html`, all styles inline `<style>` tag in `<head>`
- Google Fonts CDN import at top of `<style>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT` (use sparingly — this layout is primarily typographic)
- Mobile-first responsive: at `max-width: 768px`, stack grid to single column

---

## Local Server & Screenshots
- Always serve on localhost — never screenshot a `file:///` URL
- Start dev server: `node serve.mjs` (serves root at `http://localhost:3000`)
- Puppeteer at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`
- Screenshot: `node screenshot.mjs http://localhost:3000`
- Screenshots saved to `./temporary screenshots/screenshot-N.png`
- After screenshotting, read the PNG with the Read tool — analyze directly
- Minimum 2 screenshot + review rounds before declaring done

---

## Brand Assets
- Always check `brand_assets/` folder before designing
- If a logo exists, use it. If brand colors are defined, use those exact values — the layout palette tokens are structure, brand colors override the accent

---

## Hard Rules — Full List
- ❌ Do not start building before running the Pre-Build Design Brief (content questions only — never ask about layout, fonts, colors, or hero style)
- ❌ Do not load fonts other than Cormorant Garamond + DM Mono
- ❌ Do not use flexbox for the main page layout
- ❌ Do not add `gap` to the grid — lines are the separators
- ❌ Do not place text at the top of cells — always bottom-anchored
- ❌ Do not use `box-shadow` anywhere
- ❌ Do not use `border-radius` > 2px on containers
- ❌ Do not use more than one element in `#C9A84C` per screen
- ❌ Do not use `transition-all`
- ❌ Do not use fixed px font sizes — always `clamp()`
- ❌ Do not animate before layout is stable and screenshotted
- ❌ Do not use white — `#F0EAD6` is the ceiling
- ✅ A still, polished grid beats an animated, broken one
