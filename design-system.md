# Straya Studio — Design System

> **Version:** 2.1 — The Brutalist Canvas
> **Stack:** Astro 5.x + Tailwind (token-driven) + minimal JS
> **Aesthetic:** Brutalism + Neobrutalism, asymmetric, canvas-first
> **Token source:** `src/styles/design-tokens.json` — single source of truth. Tailwind reads from it. Never define a value outside this chain.

---

## 0. The Three Laws

Pin these to the wall. If a decision violates one, the decision is wrong.

> **I. Tokens or it didn't happen.** Every value in every component traces back to `design-tokens.json`. No magic numbers. No `mt-[42px]`.
>
> **II. CSS until proven otherwise.** JS earns its bytes; it never gets them by default. The site has a 15KB JS budget for design effects.
>
> **III. The page is a canvas, not a document.** Composition is asymmetric, deliberate, and signed. Symmetry is a fallback — we don't fall back.

---

## 1. The Aesthetic — Brutalism + Neobrutalism

This site runs on **two parallel modes** that intentionally collide.

### Brutalism (the foundation)

Architectural Brutalism's web translation: **raw, honest, structural**.

- Heavy, bold typography that *is* the design — type at 200px is normal here.
- Visible structure: hairlines, grid lines, monospace metadata, footnote markers.
- No decoration that hides function. If a button looks like a button, that's because it *is* a button.
- Default background is `--color-bg`. The dark isn't a mood — it's the concrete.
- Asymmetric layouts that feel slightly *uncomfortable*. Composition is deliberate, not pleasant.
- Imagery is treated raw: high contrast, dithered, occasionally posterized. No softening.

### Neobrutalism (the punctuation)

The 2020s evolution: **playful, confident, color-shocked, three-dimensional through hard offsets**.

- The hard offset shadow (`--shadow-hard-md`) is the signature: solid color, no blur.
- Saturated, almost ugly accent colors used with intent — they're *meant* to be loud.
- Chunky borders (2–3px) on key elements. Not always — and never on everything.
- "Stickers" — accent-colored blocks of type rotated 4–8 degrees, layered as if applied physically.
- `--ease-spring` on interactive elements, where it can be playful without being toy-like.

### How they coexist

Each section runs in **one mode at a time** — never both, never blended.

| Section role | Mode | Reason |
|---|---|---|
| Hero | Brutalism | First impression must be confident, not playful |
| About / Manifesto | Brutalism | Trust requires gravity |
| Services / Process | Neobrutalism | Engagement, color, "stickers" |
| Case studies | Brutalism | Work must speak for itself |
| Pricing / CTA | Neobrutalism | Action moments earn the loud move |
| Footer | Brutalism | Closes the document with weight |

**The collision is the brand.** When a Neobrutalist section follows a Brutalist one, the contrast itself becomes the visual signature. This is why we don't use both modes inside one section — the comparison only works at the section level.

### The decision matrix

When building a new section, decide its mode first. Then everything else follows:

| | Brutalism | Neobrutalism |
|---|---|---|
| Background | `--color-bg` | `--color-bg-inverted` or `--color-accent` |
| Type weight | `--weight-black` for display | `--weight-bold` |
| Type tracking | `--tracking-display` | `--tracking-tight` |
| Borders | `--hairline` only | `--hairline-strong` or `--hairline-accent` |
| Shadows | None, or inset only | `--shadow-hard-md` mandatory on key elements |
| Color count | Ink + Bone, accent ≤ 5% of pixels | Bone + Accent + 1 secondary, accent ≥ 30% |
| Easing | `--ease-out` only | `--ease-spring` allowed |
| Rotation | 0deg, ever | 4–8deg on stickers permitted |
| Radius | `--radius-none` | `--radius-sm` to `--radius-md` |

---

## 2. The Canvas Philosophy

This site is **design-led, not content-led**. Content serves the composition. The reader navigates a series of *spatial moments*, not a stack of sections.

### Principles

1. **Asymmetric by default.** Use the 12-column grid as a starting frame, then break it. Content rarely sits in 12 of 12. Headings live in 7 of 12, offset right. Images bleed off the left edge. Negative space is a *placed* element, not what's left over.

2. **The grid is law; the breaks are signature.** Every layout uses the 12-column grid. But every section breaks it in *one* deliberate way: a heading that overlaps an image, a column that runs off-canvas, a paragraph indented to column 8 while the image hangs in column 1–6.

3. **One loud thing per viewport.** Each scroll-stop has a single hero element — type, image, or color block. Everything else recedes. This is what keeps asymmetry *readable*: the eye always knows where to land.

4. **Reading order ≠ visual order.** A heading can be visually below its paragraph, as long as the DOM order is correct. Use `grid-template-areas`, `order`, and absolute positioning to compose freely while keeping the document linear and accessible.

5. **White space is a primary element.** A column of nothing, 400px wide, is a deliberate placement — not laziness. Treat empty grid cells as visible.

6. **Type *is* the artwork.** When in doubt, make the type bigger, tighter, and more confident. Display sizes go up to ~200px. The type carries the page.

7. **Bleed, overlap, hang.** Images bleed past container edges. Type overlaps images. Captions hang in the margin. Nothing is timidly inset.

### What this is *not*

- ❌ A grid of cards. (Cards are a content-management pattern, not a design pattern.)
- ❌ Hero → Features → Testimonials → CTA. (That's a SaaS template.)
- ❌ Centered everything. (Center is the most boring axis.)
- ❌ Random. Asymmetry is *composed*; it is not chaos.

---

## 3. Foundation

| Property | Value |
|---|---|
| Framework | Astro 5.x |
| Styling | Tailwind (token-bound) + `global.css` |
| Token source | `src/styles/design-tokens.json` |
| JS surface | <15KB gzipped for all design effects |
| Background mode | Dark-first (`--color-bg`) |
| Foreground | Cream (`--color-fg`) |
| Cursor | Native, with `crosshair` accent on key surfaces |
| Motion | CSS-first; IntersectionObserver for entry; GSAP only for orchestrated scroll-pinning |
| Reduced motion | Respected globally |

**Tailwind and `global.css` both consume tokens — never the other way around.** Add a value to `design-tokens.json` first, then reference it by token name in components. Never write a raw hex, rem, or timing value directly into a component.

---

## 4. Color System

Full palette defined in `design-tokens.json`. Four families: **Ink** (dark), **Bone** (cream), **Accent** (electric green), **Accent-2** (signal red). Plus signal colors for marks and highlights.

Components consume **semantic tokens** only — never primitive palette values directly:
- Backgrounds: `--color-bg`, `--color-bg-raised`, `--color-bg-elevated`, `--color-bg-inverted`
- Foregrounds: `--color-fg`, `--color-fg-strong`, `--color-fg-muted`, `--color-fg-inverted`
- Accents: `--color-accent`, `--color-accent-fg`, `--color-accent-2`, `--color-accent-2-fg`
- Utility: `--color-mark`, `--color-hairline`, `--color-focus-ring`, `--color-shadow-hard`

### Color rules — by mode

**Brutalism mode**
- Ink + Bone only as primary palette.
- Accent appears in ≤5% of pixels: focus rings, single CTA per viewport.
- Pure white is banned. `--color-fg-strong` is the brightest allowed. Pure black is reserved for modal scrims.

**Neobrutalism mode**
- One accent dominates the section (≥30% of pixels acceptable).
- Up to **two** secondary colors per section (e.g., green primary + yellow stickers + red shadow).
- **Three or more saturated colors in one section is the line.** Cross it and you're in vaporwave, not Neobrutalism.

### Contrast minimums

All semantic foreground/background pairings in `design-tokens.json` are verified at WCAG AA (4.5:1). The key pairs:
- `--color-fg-muted` on `--color-bg` ≈ 9.2:1 ✅
- `--color-accent-fg` on `--color-accent` ≈ 11.4:1 ✅
- `--color-accent-2-fg` on `--color-accent-2` ≈ 4.6:1 ✅

Do not introduce new foreground/background pairings without testing contrast.

---

## 5. Typography

Two scales: a **Body scale** (Minor Third, 1.200) for calm readability, and a **Display scale** (Golden, 1.618) for explosive headlines. Both fluid. All values in `design-tokens.json`.

Three families — all first-class:
- `--font-display` — Bricolage Grotesque. Used for all headings and display type.
- `--font-body` — Instrument Sans. Used for body, lead, and interface copy.
- `--font-mono` — JetBrains Mono. **First-class face.** Used for metadata, captions, code, numbers, eyebrows, and any "raw" text where the system shows through. This is the brutalist equivalent of exposed concrete.

Reference type by semantic token name: `--type-hero`, `--type-h1`, `--type-h2`, `--type-h3`, `--type-body`, `--type-lead`, `--type-eyebrow`, `--type-caption`, `--type-meta`.

Reference scale by token name: `--display-xl`, `--display-lg`, `--display-md`, `--display-sm`, `--text-lg`, `--text-base`, `--text-sm`, `--text-xs`.

### Typography rules

- **Line length cap: 60ch** for body. Display can break this on purpose.
- **Tabular numerals** (`font-variant-numeric: tabular-nums`) on all data: prices, dates, stats, version numbers.
- **OpenType features** on by default: `font-feature-settings: "kern", "liga", "ss01"`.
- **No `text-align: justify`.** Ever. Brutalism is left-aligned and unapologetic.
- **Allcaps only with tracking.** `--tracking-allcaps` is mandatory whenever `text-transform: uppercase` is used.
- **Index sections numerically.** Brutalism shows its structure: `[01]`, `[02]`, `[03]` prefix every major section.
- **Use `<mark>`.** Neobrutalism's highlighter is a real semantic element. Use it on key phrases inside body copy.

---

## 6. The Asymmetric Grid System

Strict structure → deliberate breaks. This is the engine of the canvas philosophy.

Container and gutter tokens are in `design-tokens.json`. The grid is always 12 columns at `--container-wide` max, with `--gutter-lg` padding inline.

### The asymmetric placement system

Every section picks **one** asymmetric posture from this catalog. Don't invent new ones — variety comes from sequencing, not from one-offs.

| Posture | Heading | Body | Image | Effect |
|---|---|---|---|---|
| `posture-left-heavy` | cols 1–7 | cols 9–12 | cols 1–5, bleed left | Anchor weight on left, paragraph hangs right |
| `posture-right-heavy` | cols 6–12 | cols 1–4 | cols 8–12, bleed right | Mirror of above |
| `posture-stacked-offset` | cols 1–9 | cols 4–9 | cols 7–12, hangs into next section | Title stretches wide, body indents |
| `posture-margin-note` | cols 3–10 | cols 11–12 (vertical) | cols 1–2 (square) | Body becomes a sidebar annotation |
| `posture-overlap` | cols 1–8, z-2 | cols 7–12, z-1 | cols 5–11, z-0 | Layered overlap, intentional collision |
| `posture-bleed-left` | cols 4–10 | cols 4–8 | cols 1–6, –10vw left | Image escapes left container edge |
| `posture-bleed-right` | cols 2–8 | cols 2–6 | cols 7–12, +10vw right | Image escapes right container edge |
| `posture-vertical-axis` | rotated 90°, col 1 | cols 3–10 | cols 8–12 | Heading runs vertically up the gutter |

**Note on `posture-overlap`:** The heading must use `mix-blend-mode: difference`. Type should fight the image beneath it — this is the deliberate brutalist collision, not a contrast failure.

### Sequencing rule

Across a page, **never repeat a posture twice in a row**. The rhythm itself becomes a composition.

```
Hero (custom)
→ posture-bleed-left      (Brutalism)
→ posture-margin-note     (Neobrutalism)
→ posture-overlap         (Brutalism)
→ posture-stacked-offset  (Neobrutalism)
→ posture-vertical-axis   (Brutalism)
→ Footer (slab)
```

The page becomes a **rhythmic alternation** of postures *and* modes. Two layers of variation, both bounded.

---

## 7. Spacing, Radius, Shadows

Full scale in `design-tokens.json`. 4pt grid, `--space-4` (16px) is the base unit.

### The hard shadow — the Neobrutalist core move

The hard offset shadow (`--shadow-hard-sm`, `--shadow-hard-md`, `--shadow-hard-lg`) is **the** signature of this system. Reserved for:

- Primary CTAs (`btn-magnetic`)
- Sticker elements (`.sticker`)
- Cards in Neobrutalism-mode sections
- Pricing tiles
- Any element that *must* be clicked

**Never** apply to:
- Body text
- Section containers
- Decorative images
- Anything in a Brutalism-mode section

The double-stack shadow (`--shadow-stack`) is the absolute loudest move. Use **once per page, maximum**. It's the design equivalent of underlining a sentence — the more you do it, the less it means.

### Spacing rules

- **Default to one tier larger than feels comfortable.** When in doubt between `--space-7` and `--space-8`, pick `--space-8`. Brutalism breathes.
- **Section padding is always `--space-10` minimum** on block axis.
- **No half-tokens.** If you find yourself reaching for a custom value, the answer is the next token up or down, not a new value.

---

## 8. Motion System

Motion is the difference between a $2K site and a $10K site. It is a **first-class system**, not decoration.

All motion tokens are in `design-tokens.json`: five durations (`--dur-instant` through `--dur-cinematic`), five easings, four stagger steps, and a delay ramp.

### Motion by mode

| Mode | Allowed easings | Character |
|---|---|---|
| Brutalism | `--ease-out`, `--ease-snap` | Decisive, no overshoot |
| Neobrutalism | `--ease-out`, `--ease-spring` | Playful, slight bounce on hover |

### Motion patterns

| Pattern | Use | Mode | Component / Class |
|---|---|---|---|
| Word-by-word reveal | Hero headline | Brutalism | `WordsPullUp.astro` |
| Section clip-reveal | h2 / h3 on entry | Both | `.reveal-clip` + IntersectionObserver |
| Section entrance | All slabs | Both | `.reveal` + IntersectionObserver |
| Magnetic CTA | Primary buttons | Neobrutalism | `[data-magnet]` — see `micro-interactions.md` |
| Image hover scale | Hero images | Brutalism | CSS-only via `.frame:hover` |
| Sticker bounce-in | Neobrutalism stickers | Neobrutalism | `--ease-spring` rotation entrance |
| Cursor parallax | Specific accent images | Both | `[data-parallax]` CSS variable feed |
| Marquee | Section dividers | Brutalism | `ServicesMarquee.astro`, CSS `@keyframes` |
| Press-down | All buttons | Both | `:active` translate + shadow collapse |

### Motion rules

- **One signature curve per mode.** `--ease-out` is the house curve everywhere; `--ease-spring` is permitted only in Neobrutalism sections.
- **Trigger once.** Entry animations never replay. Unobserve after first trigger.
- **No looping animations** except marquees and the background snake.
- **Hover changes opacity, scale, or shadow — never hue.**
- **Press is mandatory.** Every clickable element must visibly depress on `:active`. This is the brutalist tactility.

---

## 9. The JS Budget

> **Total budget: 15KB gzipped for all design effects, site-wide.**

### Hierarchy

1. **CSS-only** — entrances, hovers, transitions, scroll-snap, sticky, marquee, stickers.
2. **Native APIs** — View Transitions, IntersectionObserver, ResizeObserver, `loading="lazy"`.
3. **Tiny custom JS (~1KB)** — `.in-view` toggler, magnetic buttons, cursor parallax variables.
4. **Medium JS (~5KB)** — Lenis smooth scroll, **only if** the brand calls for inertia.
5. **Heavy JS (~15KB)** — GSAP ScrollTrigger, **only** for one orchestrated scroll-pin per page.

### Banned by default

- jQuery, Lodash, Moment
- Framer Motion + GSAP simultaneously
- Full Three.js scenes (use SVG/Canvas with rAF instead)
- Custom cursors that block native scroll
- Parallax that runs at 60Hz on scroll without throttling

### Audit checklist

| Current | Verdict | Action |
|---|---|---|
| GSAP for entrance fades | ❌ Cut | Replace with `.reveal` / `.reveal-stagger` |
| `requestAnimationFrame` snake | ✅ Keep | `pointer-events: none`, disable below 60fps |
| Custom cursor | ⚠️ Conditional | Only on `(hover: hover) and (pointer: fine)` |
| `<GlobalSpatialEffect />` | ⚠️ Audit | Move to CSS if possible |
| Smooth scroll | ⚠️ Conditional | Native `scroll-behavior: smooth` first |

---

## 10. Component Contracts

These are the nine layout primitives. Implementation lives in `global.css` and `tailwind.config.mjs`. This section defines their **design intent and constraints** — what they are for and what rules govern their use.

### Stack
**Purpose:** Establishes vertical rhythm between child elements.
**Tokens:** `--space-5` (default gap), `--space-7` (lg), `--space-10` (xl)
**Rule:** Never add `margin-top` or `margin-bottom` to children of a Stack. Let the gap do the work.

### Cluster
**Purpose:** Wraps horizontal items that may reflow across lines.
**Tokens:** `--space-3` (row gap), `--space-4` (column gap)
**Rule:** Use for tag groups, metadata clusters, icon+label pairs. Not for navigation.

### Frame
**Purpose:** Locks media to an aspect ratio and applies image treatments.
**Tokens:** `--dur-slow` + `--ease-out` for hover scale transition
**Rules:**
- Every image on the site must live in a Frame. No bare `<img>` tags outside a Frame.
- The image is an artifact — never render it raw. See `asset-direction.md` for the treatment catalog.
- On hover, the image scales to `scale(1.06)`. This is the only image hover animation.

### Slab
**Purpose:** Full-width section container with correct block padding.
**Token:** `--space-10` minimum block padding
**Rules:**
- Every page section must be a Slab or match its block padding minimum.
- Variants: `slab-inverted` (bone bg + ink text, Neobrutalism), `slab-accent` (green, for CTAs), `slab-accent-2` (red, loudest move).

### Eyebrow
**Purpose:** Section-level label. Always precedes a heading.
**Tokens:** `--type-eyebrow`, `--tracking-allcaps`, `--color-fg-muted`, `--color-accent` (rule), `--space-4` (rule width)
**Rules:**
- Always uppercase. Always with `--tracking-allcaps`. Always mono. Never styled as a heading.
- The accent rule that precedes it grows from 0 on viewport entry — see `production-aesthetic.md` §A5.

### Sticker
**Purpose:** Neobrutalist accent. A rotating label applied like a physical tag.
**Tokens:** `--color-accent` (bg), `--color-accent-fg` (text), `--shadow-hard-sm`, `--hairline-thick`, `--dur-fast` + `--ease-spring` (hover)
**Rules:**
- Maximum 2 stickers per section.
- Rotation must be between 4–8 degrees. Never 0. Never on sections.
- Never in a Brutalism-mode section.
- Variants: `sticker-yellow` (`--color-mark` bg), `sticker-red` (`--color-accent-2` bg)

### Marquee
**Purpose:** Looping text band. Used as section dividers and capability lists.
**Tokens:** `--hairline` (border), `--space-4` (block padding), `--space-7` (item gap)
**Rules:**
- Used in Brutalism mode as a structural divider.
- Speed may be coupled to scroll velocity — see `production-aesthetic.md` §A4/B6.
- Never pause on hover unless the content is interactive (links).

### MagneticButton
**Purpose:** Primary CTA in Neobrutalism sections.
**Tokens:** `--color-accent` (bg), `--color-accent-fg` (text), `--shadow-hard-md`, `--hairline-thick`, `--dur-fast` + `--ease-spring`
**Rules:**
- Must always carry `--shadow-hard-md`. On `:active`, the shadow collapses and the element translates to the shadow offset — tactile press.
- The magnetic label movement requires `[data-magnet]` and `(hover: hover) and (pointer: fine)`. Degrades gracefully without JS.
- One per viewport maximum.

### BrutalistButton
**Purpose:** Secondary CTA in Brutalism sections.
**Tokens:** `--color-fg` (text), `--hairline-strong`, `--dur-fast` + `--ease-snap`
**Rules:**
- No shadow. No spring. No radius.
- On hover: hard inversion — background becomes `--color-fg`, text becomes `--color-bg`. This stark flip is the entire interaction.
- On `:active`: `translateY(2px)`. Small, tactile, honest.

---

## 11. States

Every interactive element defines all five states using tokens.

| State | Brutalism mode | Neobrutalism mode |
|---|---|---|
| Default | hairline border | thick border + hard shadow |
| Hover | invert (bg↔fg) | shadow grows, lift `translate(-2px,-2px)` |
| Focus-visible | `outline: 2px solid var(--color-focus-ring); outline-offset: 2px;` | same |
| Active | `translate(0, 2px)` | `translate(8px, 8px)` + shadow collapse |
| Disabled | `opacity: 0.4; pointer-events: none;` | same — never grayscale |

**The state rule:** state changes are *visible*. No 5% opacity hover. No subtle border shift. The user must *feel* the click.

---

## 12. Layering & Z-Index Scale

The full scale is in `design-tokens.json`. In order: `--z-base → --z-effects → --z-content → --z-overlap → --z-sticky → --z-overlay → --z-modal → --z-toast → --z-cursor`.

**Never use a number outside this scale.** If you need something between two steps, the design is wrong.

---

## 13. Hero & Background Surface

The hero is the only section with a fully custom layout. Everything else uses `<Slab>`.

### Brutalist hero treatments

These details cost nothing and anchor the brutalist identity in *content*, not just style:
- **Index mark** — `[01]` mono prefix, top-left corner
- **Coordinate annotation** — `LAT 33.8688° S` style text in a corner, mono, muted
- **Vertical title** — heading runs up the right gutter, rotated 90°
- **Build version** — `v2.1.0 / 2026.04` in footer corner

### The signature technical showpiece — `PremiumSnake`

Every premium agency site has *one* signature interactive moment. On this site, that moment is `PremiumSnake`: a generative, scroll-coupled line that threads through the design like a watermark with a pulse.

**The brief:**
- A 1px `--color-accent` line at 0.6 opacity, tracing a continuous curve anchored to the right gutter.
- Generated procedurally — never hand-animated.
- Advances with scroll position (not time). When the user stops, the snake stops.
- Breathes subtly near the cursor — control points within 200px lerp toward the pointer by 6%.

**Non-negotiable constraints:**
| Property | Rule |
|---|---|
| Layer | `--z-effects` — behind all content |
| Interaction | `pointer-events: none` always |
| Visibility | Hidden in hero; fades in after `scrollY > viewport-height` |
| Breakpoint | Disabled below 768px |
| Reduced motion | Renders as a static curve; no animation |
| FPS | Self-disables if frame budget drops below 50fps for 1s |
| JS cost | ≤4KB of the 15KB total budget |
| Rendering | SVG `<path>` updated in `requestAnimationFrame`. No Canvas, no WebGL. |

**Component spec:** `src/components/design-effects/PremiumSnake.astro`. This section is the brief; the component is the realization.

### Hero stack composition (bottom-up layer order)

1. `<video>` — autoplay, loop, muted, playsinline, `object-cover`
2. **Noise overlay** — SVG fractal noise, `mix-blend-mode: overlay`, low opacity (the brutalist grain)
3. **Gradient scrim** — hard-edge fallback per `production-aesthetic.md` §A3
4. **PremiumSnake** — layer slot reserved even when hidden
5. UI content layer (heading, eyebrow, build stamp, coordinate annotation)

---

## 14. Accessibility

Non-negotiable. Brutalism is not an excuse.

- **Skip link** is the first focusable element in `BaseLayout`.
- **Focus-visible** outlines retained globally (Section 11).
- **Contrast minimum**: WCAG AA (4.5:1 body, 3:1 large text).
- **Reduced motion** respected globally via `@media (prefers-reduced-motion: reduce)`.
- **Reading order** matches DOM order, regardless of visual posture.
- **Alt text** on every meaningful image. Decorative images get `alt=""` and `aria-hidden="true"`.
- **Semantic HTML** — `<section>`, `<article>`, `<nav>`, `<main>`, never just `<div>`s.
- **Heading hierarchy** — one `<h1>` per page, no skipped levels.
- **Sticker rotation does not break a11y** — content is still in DOM order, just visually rotated.

---

## 15. Performance Budget

| Metric | Target |
|---|---|
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 100ms |
| Total JS (design effects) | < 15KB gz |
| Total CSS | < 30KB gz |
| Hero video | < 1.5MB, AV1/WebM with MP4 fallback |
| Images | AVIF with WebP fallback, `loading="lazy"` below fold |
| Fonts | `font-display: swap`, subset to used glyphs |

---

## 16. The Brutalist & Neobrutalist Don'ts

### Brutalism don'ts
- ❌ Drop shadows that aren't hard-offset
- ❌ Rounded corners on hero elements
- ❌ Glass morphism on cards (only the global `.section-frosted` blur)
- ❌ Gradient mesh backgrounds
- ❌ Pastel color washes
- ❌ Centered hero content
- ❌ Symmetric two-column layouts (50/50)
- ❌ Sans-serif numbers in data tables (use mono)
- ❌ Animations that loop infinitely on focal content

### Neobrutalism don'ts
- ❌ Cute illustrations of mascots, blobs, or characters (this isn't Gumroad)
- ❌ More than 3 saturated colors in one section
- ❌ Hard shadows on body text or paragraph blocks
- ❌ Stickers everywhere (≤2 per section)
- ❌ Comic Sans or "fun" fonts as a joke
- ❌ Heart icons, star ratings, emoji as decoration
- ❌ Borders thicker than 3px
- ❌ Excessive rotation (>8° on stickers, ever on sections)
- ❌ Mixing Brutalism and Neobrutalism *inside* one section

### Universal don'ts
- ❌ Identical sections back-to-back
- ❌ More than one accent color used at once in Brutalism mode
- ❌ Modal popups within 5 seconds of page load
- ❌ Lorem ipsum that *looks like* lorem ipsum (write better)

---

## 17. Quick-Win Checklist

Things that take an hour and add 30% perceived polish:

- [ ] `font-display: swap` on every `@font-face`
- [ ] `text-rendering: optimizeLegibility` + `font-feature-settings: "kern", "liga"` on `body`
- [ ] `font-variant-numeric: tabular-nums` on every `[data-numeric]`
- [ ] `text-wrap: balance` on h1–h3
- [ ] `text-wrap: pretty` on `p`
- [ ] `image-rendering: -webkit-optimize-contrast` on hero images
- [ ] Lock `<html>` font-size to `100%` (let fluid scale work)
- [ ] `prefers-contrast: more` overrides for hairlines
- [ ] Audit `PremiumSnake` for `pointer-events: none` and breakpoint guard
- [ ] Add `view-transition-name` to hero elements for native page transitions
- [ ] Add `[data-index]` numbering to all major sections
- [ ] Add a build version stamp in footer (mono, muted)

---

## 18. Companion Documents

Every section you build is governed by six documents. This file defines the visual *system*; the others define what fills the canvas, how it speaks, how it's discovered, what it's made of, how it feels under the cursor, and how the work itself is presented.

| # | Document | Governs | Status |
|---|---|---|---|
| 1 | [`production-aesthetic.md`](production-aesthetic.md) | Visual material standards — image treatments, scroll-based motion, section bridges, banned backgrounds, material budget per section type. Overrides this document in case of conflict. | **MANDATORY** |
| 2 | [`content-instructions.md`](content-instructions.md) | Brand voice, copy length limits, forbidden words, service definitions, pricing tiers, page-specific copy rules, conversion pathways. Governs every heading, CTA, and paragraph on the site. | **MANDATORY** |
| 3 | [`SEO-AEO-rules.md`](SEO-AEO-rules.md) | AI discovery (`llms.txt`, `llms-full.txt`), JSON-LD schema, `AEOHeader.astro`, meta/OG tags, `robots.txt`, `sr-only` summary requirements. Non-negotiable regardless of design changes. | **MANDATORY** |
| 4 | [`asset-direction.md`](asset-direction.md) | Image categories, treatments, the placeholder-with-mark strategy, curated source list, asset manifest, file/format/size standards, video usage. | **MANDATORY** |
| 5 | [`micro-interactions.md`](micro-interactions.md) | The eight required interaction patterns (M1–M8) — hover, focus, active states across buttons, links, cards, images, marquees, stickers. Tied to motion tokens. | **MANDATORY** |
| 6 | [`case-study-template.md`](case-study-template.md) | The work-detail page architecture — eight sections in fixed order, mode alternation, posture choices, budgets, the one allowed scroll-pin, routing, and pre-flight checklist. | **MANDATORY** |

### When to reach for each

- **This file (`design-system.md`)** — choosing tokens, modes, postures, motion primitives, components, JS budget.
- **`production-aesthetic.md`** — a section passes the design check but still feels like a wireframe. Consult the material budget and scroll-coupling rules.
- **`content-instructions.md`** — writing or reviewing any heading, body copy, CTA label, or service mention. Also check before naming a tier, choosing a platform order, or using first-person.
- **`SEO-AEO-rules.md`** — touching `BaseLayout.astro`, `Schema.astro`, `AEOHeader.astro`, `robots.txt`, any meta tag, or any primarily-visual section that needs an `sr-only` summary.
- **`asset-direction.md`** — sourcing, treating, or replacing any image, video, or texture. Reach for it *every time* an `<img>` is added.
- **`micro-interactions.md`** — building any new interactive element, or auditing whether an existing one has a complete state set.
- **`case-study-template.md`** — building, editing, or reviewing any page under `/work/<slug>`. The single most important document for the agency-tier proof.

### Cross-document update rules

> Changing pricing, services, or positioning triggers updates across **`content-instructions.md`**, **`SEO-AEO-rules.md`** (and the `llms.txt` / `llms-full.txt` / `Schema.astro` / `AEOHeader.astro` files it governs), and any affected copy in components.
>
> Adding a new image to the site triggers an entry in **`asset-direction.md`**'s manifest, with status, treatment, and spec.
>
> Building a new interactive element triggers a state-set audit against **`micro-interactions.md`** §6.
>
> Publishing a new case study triggers the full pre-flight checklist in **`case-study-template.md`** §8.

The six documents together define the studio. No piece is optional.

---

## 19. Change Log

**v2.1 — The Brutalist Canvas**
- Added Section 1: explicit Brutalism + Neobrutalism dual-mode identity, decision matrix, alternation strategy.
- Expanded color system with `--accent-2` (signal red), `--signal-yellow`, `--signal-blue` for Neobrutalist palette.
- Added `--shadow-accent-*`, `--shadow-accent2-md`, `--shadow-stack` (double-stack shadow signature).
- Added `--hairline-thick` (3px) for Neobrutalist chunky borders.
- Added `--ease-snap` for hard Brutalist transitions.
- Added `<Sticker>` primitive (Neobrutalist accent block with rotation).
- Added `<BrutalistButton>` (austere counterpart to `<MagneticButton>`).
- Added `[data-index]` brutalist section numbering.
- Added `<mark>` semantic styling for highlighted phrases.
- Added `frame-dithered` image treatment.
- Added Brutalist hero treatments: index mark, coordinate annotation, vertical title, build version.
- Split don'ts into Brutalism / Neobrutalism / Universal.
- Added per-mode color, type, motion, and state matrices.

**v2.1.1 — Instruction-First Rewrite**
- Removed all `:root {}` CSS blocks, code examples, and JS snippets — values live in `design-tokens.json`.
- Replaced §10 Component Primitives (CSS) with §10 Component Contracts (design intent + rules).
- Removed §18 Migration Plan (complete).
- Fixed token source reference: `tokens.css` → `design-tokens.json`.
- Fixed display font reference: `PP Mori` → `Bricolage Grotesque`.
- Decision matrix now references token names only, no raw values.

**v2.0 — The Canvas Edition**
- The Three Laws.
- Canvas Philosophy: asymmetric, design-led, signed composition.
- Three-family color system + semantic role layer.
- Fluid type scale: Minor Third (body) + Golden (display).
- Spacing, radius, hairline tokens on a 4pt grid.
- Motion tokens: 5 durations, 4 easings, stagger ramp, reduced-motion global.
- Asymmetric Grid System with 8 named postures.
- JS Budget: 15KB hard cap, hierarchy of allowed JS.
- Component Primitives: Stack, Cluster, Frame, Slab, Eyebrow, Marquee, MagneticButton, parallax.
- States, Z-Index scale, Quick-Win Checklist.

**v1.0 — Initial Live Spec**
- Documented dark-first global background.
- Documented blur-only frosted sections.
- Documented PremiumSnake.
