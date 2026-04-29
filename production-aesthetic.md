# Design System Addendum — Production Aesthetic

> **Status:** MANDATORY. Companion to `design-system.md` v2.1. Override in case of conflict.
>
> **Why this exists:** Sections being produced look like wireframes — typographically correct, asymmetrically arranged, but *visually thin*. They satisfy the design system rules without producing finished work. This addendum specifies the visual material that makes a section feel built, not sketched.

---

## A1. The Wireframe Test

A section is **failing the production aesthetic** if removing the following changes nothing:

- Background imagery
- Graphic devices (rules, marks, frames, blocks)
- Texture (grain, dither)
- Scroll-coupled motion
- Connection to neighboring sections

If you can delete every visual asset and only the type changes, you have shipped a wireframe with content in it. Type alone is not a section. **Type plus material is a section.**

---

## A2. Mandatory Visual Material (per section)

Every section must contain **at least three** of the following. Headers, footers, and pure-CTA bands have a relaxed minimum of two.

### Material catalog

| Material | What it is | Where it lives |
|---|---|---|
| **Image asset** | Photo, illustration, or video, full-color, treated. | At least one per content section. |
| **Typographic device** | Oversized numeral, vertical rail text, allcaps marquee, indexed mark `[01]`. | At least one per section. |
| **Hard graphic** | Hairline rule, axis line, hard-shadow block, color slab, sticker. | At least one per section. |
| **Textural ground** | Grain overlay, dither, halftone, scanline, inset noise. | At least once per page. |
| **Scroll-coupled element** | Image scrub, color shift, parallax, masked reveal. See A4. | Every content section gets at least one. |
| **Connection bridge** | Element that crosses the section boundary. See A6. | At least every second section pair. |

### Image treatment

Images are not decoration — they are *artifacts*. Every image gets one of these treatments; never raw and unstyled:

```css
/* 1. Brutalist treatment — desaturated, high-contrast, clipped */
.img-brutalist {
  filter: contrast(1.15) saturate(0.85) brightness(0.95);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%);
}

/* 2. Dithered — the 1-bit/duotone treatment */
.img-dithered {
  filter: contrast(1.4) saturate(0.4) brightness(0.95);
  image-rendering: pixelated;
  mix-blend-mode: luminosity;
}

/* 3. Duotone — accent + ink, no full color */
.img-duotone {
  filter: grayscale(1) contrast(1.2);
}
.img-duotone-wrap {
  position: relative;
  isolation: isolate;
}
.img-duotone-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* 4. Frame-cut — image with a hard-shadow frame, neobrutalist */
.img-frame-cut {
  border: 3px solid var(--color-fg);
  box-shadow: var(--shadow-hard-md);
  transform: rotate(-1.5deg);
}
```

**Stock photos rendered raw are banned.** If a real asset isn't available, use a textural placeholder — never a centered hero shot from Unsplash with the default color.

### Typographic devices (always available, always free to deploy)

These are the brutalist devices to reach for *before* writing more body copy:

```html
<!-- Oversized index numeral -->
<span class="numeral-display" aria-hidden="true">01</span>

<!-- Vertical rail text -->
<span class="rail" aria-hidden="true">SECTION / 03 / METHOD</span>

<!-- Allcaps marquee divider -->
<div class="marquee">
  <span>STRATEGY · DESIGN · ENGINEERING · STRATEGY · DESIGN · ENGINEERING · </span>
</div>

<!-- Coordinate annotation -->
<span class="coord meta">LAT 33.8688° S — LNG 151.2093° E</span>

<!-- Build version stamp -->
<span class="build-stamp meta">BUILD 2.1.0 / 2026.04</span>

<!-- Cross-mark (the "you are here" device) -->
<span class="x-mark" aria-hidden="true">+</span>
```

Each of these is **free real estate**. They cost no copy and add visual material instantly.

### Textural ground

A page without texture reads as a slide deck. Required somewhere on every page:

```css
/* Grain overlay — fixed, page-level */
.grain {
  position: fixed;
  inset: 0;
  z-index: var(--z-effects);
  pointer-events: none;
  opacity: 0.04;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

/* Section-level scanline (use sparingly — once per page) */
.scanlines::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 2px,
    rgba(225, 224, 204, 0.03) 2px,
    rgba(225, 224, 204, 0.03) 3px
  );
}
```

---

## A3. Banned Backgrounds

These produce the "AI startup template" aesthetic and are forbidden anywhere on the site.

### ❌ Round gradients (the orb)
```css
/* BANNED */
background: radial-gradient(circle at 50% 50%, rgba(60, 205, 127, 0.4), transparent 70%);
background: radial-gradient(ellipse, ...);
```
The soft glowing orb is the single most overused background device of the 2021–2024 SaaS era. It's banned regardless of color, position, or opacity. **No `radial-gradient`. No exceptions.**

### ❌ Mesh gradients
```css
/* BANNED */
background:
  radial-gradient(at 0% 0%, ...),
  radial-gradient(at 100% 100%, ...),
  radial-gradient(at 50% 50%, ...);
```
The "iOS wallpaper" look. Banned.

### ❌ Conic gradients
Banned for backgrounds. Allowed *only* as a deliberate graphic device (a sliced pie chart, a clock face), never as ambient atmosphere.

### ❌ Soft linear gradients across whole sections
```css
/* BANNED */
background: linear-gradient(180deg, #0A0A0A, #131313);
```
A section that fades from one near-black to another near-black is doing nothing visible — it's atmosphere theater. Use a hairline divider instead.

### ❌ Glassmorphism on cards
Backdrop-blur on every card surface. Banned per design system §16. Allowed only on the global navbar and modal overlays.

### ✅ What is allowed

```css
/* Solid color blocks */
background: var(--color-bg);
background: var(--color-accent);

/* Hard-edge two-tone (a slab divided into two halves) */
.split-bg {
  background:
    linear-gradient(to right, var(--color-bg) 50%, var(--color-bg-inverted) 50%);
}

/* Vertical accent strip — a structural color band */
.accent-strip {
  background:
    linear-gradient(to right,
      transparent 0,
      transparent calc(8.333% * 1),
      var(--color-accent) calc(8.333% * 1),
      var(--color-accent) calc(8.333% * 2),
      transparent calc(8.333% * 2));
}

/* Image-as-background, treated */
.img-bg {
  background-image: url(...);
  background-size: cover;
  filter: contrast(1.15) saturate(0.85);
}
```

The rule: **every gradient must have hard edges**. Soft transitions belong on photographs, not on UI surfaces.

---

## A4. Scroll-Based Motion (Mandatory Replacement for Triggered Fades)

> **The rule:** scroll-*triggered* animations are allowed **only on headings** (display type reveals on entry). Everything else uses scroll-*based* animation — progress coupled to scroll position.

### The distinction

| | Scroll-triggered (fire-once) | Scroll-based (scrubbed) |
|---|---|---|
| Timing | Plays full animation when element enters viewport | Animation progress = scroll progress |
| Reverse | Plays once, never reverses | Reverses when scrolling up |
| Feel | Slideshow | Film |
| Use for | Heading reveals only | Everything else |

### Where scroll-triggered is the *only* allowed pattern
- Hero headline word-by-word reveal (already implemented as `.reveal-stagger`)
- Section h2 / h3 reveals on first viewport entry
- Eyebrow tags fading in with their heading

That's the entire allowlist. Not body copy. Not images. Not lists.

### Where scroll-based is mandatory

Every content section must have at least one scroll-coupled element. Pick from:

#### B1 — Image scrub
The image's `transform`, `filter`, or `clip-path` advances with scroll. As you scroll past, the image desaturates → recolors, scales up → settles, rotates → straightens, etc.

```css
.scrub-image {
  --p: 0; /* progress 0 → 1, set by JS */
  filter:
    saturate(calc(0.4 + var(--p) * 0.6))
    contrast(calc(1.3 - var(--p) * 0.15));
  transform: scale(calc(1.1 - var(--p) * 0.1));
}
```

#### B2 — Color shift section
Section background lerps between two colors as the section moves through the viewport.

```css
.scrub-bg {
  --p: 0;
  background: color-mix(in oklch, var(--color-bg) calc((1 - var(--p)) * 100%), var(--color-bg-inverted) calc(var(--p) * 100%));
}
```

#### B3 — Parallax (offset, never displacement)
Elements move at different rates relative to scroll. Background moves slower than foreground; mid-ground floats.

```css
.parallax-slow { transform: translate3d(0, calc(var(--scrollY) * -0.15px), 0); }
.parallax-mid  { transform: translate3d(0, calc(var(--scrollY) * -0.3px), 0); }
.parallax-fast { transform: translate3d(0, calc(var(--scrollY) * -0.45px), 0); }
```

#### B4 — Masked reveal
A horizontal or diagonal mask wipes across an image or block as you scroll past it.

```css
.scrub-mask {
  --p: 0;
  clip-path: inset(0 calc((1 - var(--p)) * 100%) 0 0);
}
```

#### B5 — Counting numerals
A large display number counts from one value to another as the section is in view. Use for stats.

```js
el.textContent = Math.round(start + (end - start) * progress);
```

#### B6 — Marquee speed coupled to scroll
The marquee's translation rate increases with scroll velocity, decreases when stopped. Adds physical weight to scrolling.

```js
marquee.style.setProperty('--speed', `${1 + Math.abs(scrollVelocity) * 0.02}`);
```

### The scroll-coupling primitive (small, no library)

```js
// scroll-coupling.js — ~2KB. The whole scroll-based system is built on this.
const SCROLLABLES = new Map(); // element → config

function register(el, { from = 0, to = 1, range = [0, 1] } = {}) {
  SCROLLABLES.set(el, { from, to, range });
}

function update() {
  const vh = window.innerHeight;
  for (const [el, cfg] of SCROLLABLES) {
    const r = el.getBoundingClientRect();
    // Progress: 0 when element is just entering the bottom, 1 when leaving the top
    const raw = 1 - (r.top + r.height) / (vh + r.height);
    const clamped = Math.max(0, Math.min(1, raw));
    // Apply easing range
    const [a, b] = cfg.range;
    const ranged = Math.max(0, Math.min(1, (clamped - a) / (b - a)));
    el.style.setProperty('--p', ranged.toFixed(4));
  }
  requestAnimationFrame(update);
}

// Auto-register elements with [data-scrub]
document.querySelectorAll('[data-scrub]').forEach((el) => {
  const range = el.dataset.scrubRange?.split(',').map(Number) ?? [0, 1];
  register(el, { range });
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  requestAnimationFrame(update);
}
```

```html
<!-- Usage: just add data-scrub. Range optional. -->
<div data-scrub data-scrub-range="0.2,0.8" class="scrub-image">
  <img src="..." />
</div>
```

This single primitive — **a CSS variable `--p` that tracks scroll progress 0→1** — replaces every Lenis/GSAP scroll integration for 90% of cases. Total JS cost: ~1.5KB.

### When you may use GSAP ScrollTrigger

Exactly **one** orchestrated scroll-pinning sequence per page. Allowed for:
- A hero pin that holds while content scrubs
- A horizontal-scroll case study viewer
- A timeline that pins and advances

That's the entire allowlist for GSAP. Anything else → use the primitive above.

---

## A5. Heading Animation (the only fire-once allowed)

Headings get the cinematic treatment — they earn it. Three patterns:

### H1 — Hero word-by-word reveal
Already in design system §8. `<span>` per word, staggered translateY+opacity on `.in-view`.

### H2 — Section heading clip-reveal
Heading sits inside `overflow: hidden`; on enter, the line slides up from below.

```css
.reveal-clip { display: inline-block; overflow: hidden; }
.reveal-clip > span {
  display: inline-block;
  transform: translateY(110%);
  transition: transform var(--dur-cinematic) var(--ease-out);
}
.reveal-clip.in-view > span { transform: translateY(0); }
```

### H3 — Eyebrow + rule grow
The accent rule that prefixes the eyebrow grows from 0 to its full width.

```css
.eyebrow::before {
  width: 0;
  transition: width var(--dur-cinematic) var(--ease-out);
}
.eyebrow.in-view::before { width: var(--space-4); }
```

These three patterns are the **only** scroll-triggered animations on the site. If you're tempted to fade in a paragraph, a card, or a list — don't. Use scroll-based scrubbing instead.

---

## A6. Section Connection (Bridges)

Sections must not feel like separate slides. At minimum every *second* section pair has a **bridge** — an element that begins in section N and resolves in section N+1.

### Bridge catalog

#### C1 — Image bleed-down
An image in section N has `margin-bottom: -10rem` so it physically extends into section N+1. Section N+1 starts its content lower to accommodate.

```css
.bleed-down {
  margin-bottom: -8rem;
  position: relative;
  z-index: 2;
}
.section-after-bleed {
  padding-top: calc(var(--space-10) + 8rem);
}
```

#### C2 — Color carry
Section N ends with a sliver of the next section's accent color (a 2px band, a thick rule, a sticker) that "previews" what's coming.

#### C3 — Vertical thread
A 1px vertical line runs through 2–3 consecutive sections, anchored to a specific column. Visually stitches them together.

```css
.thread {
  position: absolute;
  top: 0; bottom: 0;
  left: calc((100% / 12) * 2); /* column 2 */
  width: 1px;
  background: var(--color-hairline);
  pointer-events: none;
}
```

#### C4 — Counting carryover
A numeral or progress indicator that increments across sections. `01 / 04` in section N becomes `02 / 04` in section N+1, in the same screen position. The user feels the count.

#### C5 — Marquee bridge
A full-bleed marquee strip sits *between* two sections, technically belonging to neither. It uses the upcoming section's accent color as a preview.

#### C6 — Type sentence wrap
A sentence begins as a heading in section N and concludes as a heading in section N+1. Risky, but spectacular when it lands.

```
[ Section N — h2 ]   We design websites
[ Section N+1 — h2 ] that don't apologize.
```

### Connection rule

**At least 2 of every 3 consecutive section pairs must use a bridge.** Hero → next, and last → footer always do. The middle section pairs may relax to hairline-only dividers, but they cannot all be unbridged.

---

## A7. The Production Material Budget

For each section, allocate visual material against this budget. Sections that under-spend feel like wireframes; sections that over-spend feel chaotic.

| Section type | Material spend |
|---|---|
| Hero | 5 (image asset, typographic device, hard graphic, texture, scroll-based) |
| Manifesto | 3 (typographic device, hard graphic, scroll-based) |
| Services | 4 (image, typographic device, hard graphic, scroll-based) |
| Method/process | 4 (typographic device ×2, hard graphic, scroll-based) |
| Case studies | 5 (image, typographic device, hard graphic, scroll-based, bridge) |
| Pricing | 3 (typographic device, hard graphic, scroll-based) |
| CTA | 3 (typographic device, hard graphic, texture) |
| Footer | 2 (typographic device, hard graphic) |

A section that scores below its budget by 2+ items is a wireframe. Reject and redesign.

---

## A8. Updated Pre-Flight Checklist

Append to the existing pre-flight from `section-contract.md`:

```astro
---
/*
  ── SECTION CONTRACT (v2) ─────────────────────────────────────────
  Section name:      [ ... ]
  Mode:              [brutalism | neobrutalism]
  Posture:           [ ... ]
  Hero element:      [ ... ]
  Word count:        [ ... ]
  Anti-shape:        [ ... ]

  ── PRODUCTION MATERIAL ──
  Image asset:       [yes — treatment used: brutalist|dithered|duotone|frame-cut | n/a + reason]
  Typographic device:[which one(s) deployed]
  Hard graphic:      [which one(s)]
  Texture:           [grain | scanlines | none — only if page has texture elsewhere]
  Scroll-based:      [B1|B2|B3|B4|B5|B6 — at least one required]
  Bridge to next:    [C1|C2|C3|C4|C5|C6 | none — must be filled in for at least 2/3 transitions]

  Material budget:   [score / target]
  ─────────────────────────────────────────────────────────────────
*/
---
```

---

## A9. The Updated Rejection List

Add these items to the rejection protocol from `section-contract.md` §7:

- [ ] Section contains zero image assets *and* zero typographic devices.
- [ ] Section contains a `radial-gradient`, `conic-gradient`, or full-section soft linear gradient.
- [ ] Section uses scroll-triggered animation on a non-heading element.
- [ ] Section has zero scroll-based motion.
- [ ] Section is the second of a pair with no bridge AND the previous pair also had no bridge (= 2 unbridged in a row).
- [ ] Material budget score is more than 2 below the target for the section type.
- [ ] An image asset is rendered without a treatment (raw photo).

---

## A10. Worked Example — From Wireframe to Production

### ❌ WIREFRAME version of a Services section

```astro
<section data-mode="brutalism">
  <header>
    <span class="eyebrow">Services</span>
    <h2>Three things. Done well.</h2>
  </header>
  <ol>
    <li><h3>Strategy</h3></li>
    <li><h3>Design</h3></li>
    <li><h3>Engineering</h3></li>
  </ol>
</section>
```

This passes the section contract (postures could be added, word count is fine) but it's a **wireframe**. No image, no scroll motion, no texture, no bridge.

### ✅ PRODUCTION version

```astro
---
/*
  Section name:     Services
  Mode:             brutalism
  Posture:          per-service: margin-note → vertical-axis → bleed-right
  Hero element:     scrubbed full-bleed image that desaturates as you scroll
  Word count:       28
  Anti-shape:       3-card service grid

  Image asset:      yes — duotone treatment on background photo
  Typographic device: oversized service numerals (S/01, S/02, S/03), vertical rail on S/02
  Hard graphic:     vertical thread runs through all three services + hairline rules
  Texture:          grain (page-level)
  Scroll-based:     B1 (image scrub on bg) + B3 (parallax on numerals) + B5 (counting "03 / 03")
  Bridge to next:   C3 (vertical thread continues into next section)

  Material budget:  6 / 4 — passes
*/
---
<section class="services" data-mode="brutalism">

  <!-- Scrubbed background image -->
  <div class="services__bg" data-scrub data-scrub-range="0,0.8" aria-hidden="true">
    <img src="/img/studio.jpg" class="img-duotone" alt="" />
  </div>

  <!-- Vertical thread bridge (continues into next section) -->
  <div class="thread" aria-hidden="true"></div>

  <div class="services__inner">
    <header class="services__header">
      <span class="eyebrow reveal-clip"><span>[03] / Services</span></span>
      <h2 class="services__title reveal-clip"><span>Three things. <em>Done well.</em></span></h2>
      <span class="services__count meta" data-scrub-count data-from="0" data-to="3">0</span>
      <span class="meta">/ 03</span>
    </header>

    <ol class="services__list">
      <!-- S/01 — margin-note posture -->
      <li class="service service--margin-note">
        <span class="service__numeral parallax-slow" data-parallax aria-hidden="true">S/01</span>
        <h3 class="service__headline reveal-clip"><span>Strategy.</span></h3>
        <aside class="service__sidebar">
          <span>positioning</span>
          <span>research</span>
          <span>direction</span>
        </aside>
      </li>

      <!-- S/02 — vertical-axis posture -->
      <li class="service service--vertical-axis">
        <span class="service__rail" aria-hidden="true">S/02 / DESIGN</span>
        <h3 class="service__headline reveal-clip">
          <span>Identity systems<br/>that survive contact<br/>with reality.</span>
        </h3>
      </li>

      <!-- S/03 — bleed-right posture, with scrubbed image -->
      <li class="service service--bleed-right">
        <h3 class="service__headline reveal-clip"><span>Engineering.</span></h3>
        <div class="service__media" data-scrub data-scrub-range="0.3,0.9">
          <img src="/img/code.jpg" class="img-frame-cut" alt="Code editor showing component source" />
        </div>
        <span class="service__numeral parallax-fast" aria-hidden="true">S/03</span>
      </li>
    </ol>
  </div>
</section>
```

The same content, the same word budget — but now there's a treated image scrubbing in the background, three typographic numerals at parallax-different speeds, a counting indicator in the corner, a vertical thread connecting to the next section, and clip-reveal on every heading.

That's the difference between wireframe and production.

---

## A11. The Three Updated Laws

Reaffirm and extend:

> **I. Tokens or it didn't happen.**
>
> **II. CSS until proven otherwise.** Scroll motion uses the `--p` primitive (~1.5KB). GSAP ScrollTrigger allowed for one pin per page, max.
>
> **III. The page is a canvas, not a document.** Sections do not stand alone — they bridge. Every second pair, minimum. The page reads as one continuous composition.
>
> **IV. (NEW) Material or it's a wireframe.** Type alone is not a section. Every section spends its material budget on imagery, devices, texture, and scroll-based motion. Sections under-budget by 2+ are rejected.

---

## Appendix — The Quick-Reference Card

```
PER SECTION, MINIMUM:
  ✓ One image asset (treated)
  ✓ One typographic device
  ✓ One hard graphic
  ✓ One scroll-based motion
  ✓ Mode-specific styling that actually shows

PAGE-WIDE:
  ✓ Texture present somewhere (grain at minimum)
  ✓ At least 2/3 section pairs bridged
  ✓ Headings get scroll-triggered reveal
  ✓ Everything else gets scroll-based scrubbing
  ✗ No radial gradients. Anywhere. Ever.
  ✗ No conic gradients as background.
  ✗ No soft linear gradients across whole sections.
```
