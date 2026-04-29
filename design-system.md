# Straya Studio — Design System

> **Version:** 2.1 — The Brutalist Canvas
> **Stack:** Astro 5.x + Tailwind (token-driven) + minimal JS
> **Aesthetic:** Brutalism + Neobrutalism, asymmetric, canvas-first
> **Source of truth:** `src/styles/tokens.css`

---

## 0. The Three Laws

Pin these to the wall. If a decision violates one, the decision is wrong.

> **I. Tokens or it didn't happen.** Every value in every component traces back to `tokens.css`. No magic numbers. No `mt-[42px]`.
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
- Default background is `#0A0A0A`. The dark isn't a mood — it's the concrete.
- Asymmetric layouts that feel slightly *uncomfortable*. Composition is deliberate, not pleasant.
- Imagery is treated raw: high contrast, dithered, occasionally posterized. No softening.

### Neobrutalism (the punctuation)

The 2020s evolution: **playful, confident, color-shocked, three-dimensional through hard offsets**.

- The hard offset shadow is the signature: `8px 8px 0` of color, no blur.
- Saturated, almost ugly accent colors used with intent — they're *meant* to be loud.
- Chunky borders (2–3px) on key elements. Not always — and never on everything.
- "Stickers" — accent-colored blocks of type rotated 4–8 degrees, layered as if applied physically.
- Spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on interactive elements, where it can be playful without being toy-like.

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
| Background | `--color-bg` (ink) | `--color-bg-inverted` (bone) or `--color-accent` |
| Type weight | `--weight-black` for display | `--weight-bold` |
| Type tracking | `--tracking-display` (–0.04em) | `--tracking-tight` (–0.02em) |
| Borders | `--hairline` only | `--hairline-strong` or `--hairline-accent` (2–3px) |
| Shadows | None, or inset only | `--shadow-hard-md` mandatory on key elements |
| Color count | Ink + Bone, accent ≤ 5% | Bone + Accent + 1 secondary, accent ≥ 30% |
| Easing | `--ease-out` only | `--ease-spring` allowed |
| Rotation | 0deg, ever | 4–8deg on stickers permitted |
| Radius | `--radius-none` | `--radius-sm` to `--radius-md` |

---

## 2. The Canvas Philosophy

This site is **design-led, not content-led**. Content serves the composition. The reader navigates a series of *spatial moments*, not a stack of sections.

### Principles

1. **Asymmetric by default.** Use the 12-column grid as a starting frame, then break it. Content rarely sits in 12 of 12. Headings live in 7 of 12, offset right. Images bleed off the left edge. Negative space is a *placed* element, not what's left over.

2. **The grid is law; the breaks are signature.** We define a strict 12-column grid (Section 6). Every layout uses it. But every section breaks it in *one* deliberate way: a heading that overlaps an image, a column that runs off-canvas, a paragraph indented to column 8 while the image hangs in column 1–6.

3. **One loud thing per viewport.** Each scroll-stop has a single hero element — type, image, or color block. Everything else recedes. This is what keeps asymmetry *readable*: the eye always knows where to land.

4. **Reading order ≠ visual order.** A heading can be visually below its paragraph, as long as the DOM order is correct. We use `grid-template-areas`, `order`, and absolute positioning to compose freely while keeping the document linear and accessible.

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
| Styling | Tailwind (token-bound) + `tokens.css` |
| Token source | `src/styles/tokens.css` (single source of truth) |
| JS surface | <15KB gzipped for all design effects |
| Background mode | Dark-first (`--color-bg`) |
| Foreground | Cream (`--color-fg`) |
| Cursor | Native, with `crosshair` accent on key surfaces |
| Motion | CSS-first; IntersectionObserver for entry; GSAP only for orchestrated scroll-pinning |
| Reduced motion | Respected globally (Section 9) |

### Architecture

```
src/
├── styles/
│   ├── tokens.css       ← THE SOURCE OF TRUTH
│   ├── reset.css        ← Modern reset
│   ├── base.css         ← Element defaults consuming tokens
│   ├── utilities.css    ← Composable utilities (.reveal, .slab, .eyebrow, .sticker)
│   └── global.css       ← Imports all of the above, in order
├── components/
│   ├── primitives/      ← Stack, Cluster, Frame, Slab, Sticker, Marquee
│   └── design-effects/  ← PremiumSnake, etc. (consume tokens, never define values)
└── layouts/
    └── BaseLayout.astro
```

**Tailwind config** consumes tokens — never the other way around:

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        bg:        'var(--color-bg)',
        'bg-raised': 'var(--color-bg-raised)',
        fg:        'var(--color-fg)',
        'fg-strong': 'var(--color-fg-strong)',
        'fg-muted':  'var(--color-fg-muted)',
        accent:    'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
        hairline:  'var(--color-hairline)',
      },
      spacing: {
        1: 'var(--space-1)', 2: 'var(--space-2)', 3: 'var(--space-3)',
        4: 'var(--space-4)', 5: 'var(--space-5)', 6: 'var(--space-6)',
        7: 'var(--space-7)', 8: 'var(--space-8)', 9: 'var(--space-9)',
        10: 'var(--space-10)', 11: 'var(--space-11)',
      },
    },
  },
};
```

---

## 4. Color System

Brutalism wants **more colors than a calm minimal palette, used with more discipline**. We expand to four families.

### Palette tokens

```css
:root {
  /* INK — the dark family (Brutalism's concrete) */
  --ink-900: #050505;   /* deepest void */
  --ink-800: #0A0A0A;   /* page background */
  --ink-700: #131313;   /* raised surface */
  --ink-600: #1C1C1C;   /* elevated surface */
  --ink-500: #2A2A2A;   /* hairline / inset */

  /* BONE — the cream family (the inverted slab) */
  --bone-100: #FFFEF7;  /* spotlight */
  --bone-200: #F5F3E4;  /* hover */
  --bone-300: #E1E0CC;  /* primary foreground */
  --bone-400: #B5B4A3;  /* muted */
  --bone-500: #7A7A6E;  /* metadata / disabled */

  /* ACCENT — primary, electric green (Neobrutalism shock #1) */
  --accent-300: #6FE3A4;
  --accent-500: #3CCD7F;
  --accent-700: #1F8F55;

  /* ACCENT-2 — secondary, signal red (Neobrutalism shock #2) */
  --accent2-300: #FF8A7E;
  --accent2-500: #FF4F3D;
  --accent2-700: #C42B1C;

  /* SIGNAL — used as design colors, not warnings */
  --signal-yellow: #FFE03A;  /* sticker, highlight, mark */
  --signal-blue:   #2D5BFF;  /* alt accent, used sparingly */
}
```

### Semantic roles (what components consume)

```css
:root {
  --color-bg:           var(--ink-800);
  --color-bg-raised:    var(--ink-700);
  --color-bg-elevated:  var(--ink-600);
  --color-bg-inverted:  var(--bone-300);

  --color-fg:           var(--bone-300);
  --color-fg-strong:    var(--bone-100);
  --color-fg-muted:     var(--bone-400);
  --color-fg-inverted:  var(--ink-900);

  --color-accent:       var(--accent-500);
  --color-accent-fg:    var(--ink-900);
  --color-accent-2:     var(--accent2-500);
  --color-accent-2-fg:  var(--bone-100);

  --color-mark:         var(--signal-yellow);   /* highlighting type */
  --color-mark-fg:      var(--ink-900);

  --color-hairline:     var(--ink-500);
  --color-focus-ring:   var(--accent-500);
  --color-shadow-hard:  var(--ink-900);          /* default shadow */
  --color-shadow-accent: var(--color-accent);    /* shadow that screams */
}
```

### Color rules — by mode

**Brutalism mode**
- Ink + Bone only as primary palette.
- Accent appears in ≤5% of pixels: focus rings, single CTA per viewport.
- Pure white is banned. `#FFFEF7` is the brightest. Pure black (`#050505`) is reserved for modal scrims.

**Neobrutalism mode**
- One accent dominates the section (≥30% of pixels acceptable).
- Up to **two** secondary colors per section (e.g., green primary + yellow stickers + red shadow).
- **Three or more saturated colors in one section is the line.** Cross it and you're in vaporwave, not Neobrutalism.

### Contrast minimums
- Body text: WCAG AA (4.5:1).
- `--color-fg-muted` (B5B4A3) on `--color-bg` (0A0A0A) ≈ 9.2:1 ✅
- `--color-accent-fg` (ink-900) on `--color-accent` (3CCD7F) ≈ 11.4:1 ✅
- `--color-accent-2-fg` (bone-100) on `--color-accent-2` (FF4F3D) ≈ 4.6:1 ✅

---

## 5. Typography

Two scales running in parallel: a **Body scale** (Minor Third, 1.200) for calm readability, and a **Display scale** (Golden, 1.618) for explosive headlines. Both fluid via `clamp()`.

### Families

```css
:root {
  --font-display: "PP Mori", "Helvetica Neue", sans-serif;
  --font-body:    "Instrument Sans", "Inter", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
}
```

**Brutalist note:** Mono is a first-class face here, not a footnote. It's used for metadata, captions, code, numbers, and any "raw" text where the system itself shows through. This is the brutalist equivalent of exposed concrete.

### Fluid scale tokens

```css
:root {
  /* BODY scale (1.200) — 320px → 1440px viewport */
  --text-xs:   clamp(0.694rem, 0.66rem + 0.17vw, 0.79rem);
  --text-sm:   clamp(0.833rem, 0.79rem + 0.21vw, 0.95rem);
  --text-base: clamp(1.000rem, 0.95rem + 0.25vw, 1.14rem);
  --text-md:   clamp(1.200rem, 1.14rem + 0.30vw, 1.37rem);
  --text-lg:   clamp(1.440rem, 1.37rem + 0.36vw, 1.64rem);

  /* DISPLAY scale (1.618 — Golden) — for hero & section heads */
  --display-sm: clamp(2.000rem, 1.70rem + 1.50vw, 3.000rem);
  --display-md: clamp(3.236rem, 2.60rem + 3.18vw, 4.854rem);
  --display-lg: clamp(5.236rem, 4.10rem + 5.68vw, 7.854rem);
  --display-xl: clamp(8.472rem, 6.40rem + 10.36vw, 12.71rem);

  /* LEADING */
  --leading-display: 0.92;
  --leading-tight:   1.10;
  --leading-snug:    1.25;
  --leading-body:    1.55;
  --leading-loose:   1.80;

  /* TRACKING */
  --tracking-display: -0.04em;
  --tracking-tight:   -0.02em;
  --tracking-normal:   0;
  --tracking-wide:     0.04em;
  --tracking-allcaps:  0.08em;

  /* WEIGHT */
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-bold:    700;
  --weight-black:   900;
}
```

### Semantic type tokens

```css
:root {
  --type-hero:    var(--weight-black) var(--display-xl)/var(--leading-display) var(--font-display);
  --type-h1:      var(--weight-black) var(--display-lg)/var(--leading-display) var(--font-display);
  --type-h2:      var(--weight-bold)  var(--display-md)/var(--leading-tight)   var(--font-display);
  --type-h3:      var(--weight-bold)  var(--display-sm)/var(--leading-tight)   var(--font-display);
  --type-eyebrow: var(--weight-medium) var(--text-xs)/var(--leading-snug)      var(--font-mono);
  --type-body:    var(--weight-regular) var(--text-base)/var(--leading-body)   var(--font-body);
  --type-lead:    var(--weight-regular) var(--text-md)/var(--leading-snug)     var(--font-body);
  --type-caption: var(--weight-regular) var(--text-sm)/var(--leading-snug)     var(--font-mono);
  --type-meta:    var(--weight-regular) var(--text-xs)/var(--leading-snug)     var(--font-mono);
}
```

### Element defaults

```css
h1 { font: var(--type-h1); letter-spacing: var(--tracking-display); text-wrap: balance; }
h2 { font: var(--type-h2); letter-spacing: var(--tracking-tight);  text-wrap: balance; }
h3 { font: var(--type-h3); letter-spacing: var(--tracking-tight);  text-wrap: balance; }
p  { font: var(--type-body); max-width: 60ch; text-wrap: pretty; }

.eyebrow {
  font: var(--type-eyebrow);
  letter-spacing: var(--tracking-allcaps);
  text-transform: uppercase;
  color: var(--color-fg-muted);
}
.caption { font: var(--type-caption); color: var(--color-fg-muted); }
.lead    { font: var(--type-lead); }
.meta    { font: var(--type-meta); color: var(--color-fg-muted); }

/* Brutalist: index numbers prefix sections */
[data-index]::before {
  content: "[" attr(data-index) "]";
  display: inline-block;
  margin-right: var(--space-3);
  font: var(--type-meta);
  color: var(--color-fg-muted);
  vertical-align: top;
}

/* Neobrutalist: highlighter mark */
mark, .mark {
  background: var(--color-mark);
  color: var(--color-mark-fg);
  padding: 0 0.2em;
  font-weight: var(--weight-bold);
}
```

### Typography rules

- **Line length cap: 60ch** for body. Display can break this on purpose.
- **Tabular numerals** (`font-variant-numeric: tabular-nums`) on all data: prices, dates, stats, version numbers.
- **OpenType features** on by default: `font-feature-settings: "kern", "liga", "ss01"`.
- **No `text-align: justify`.** Ever. Brutalism is left-aligned and unapologetic.
- **Allcaps only with tracking.** `letter-spacing: var(--tracking-allcaps)` is mandatory whenever `text-transform: uppercase` is used.
- **Index sections numerically.** Brutalism shows its structure: `[01]`, `[02]`, `[03]` prefix every major section.
- **Use `<mark>`.** Neobrutalism's highlighter is a real semantic element. Use it on key phrases inside body copy.

---

## 6. The Asymmetric Grid System

Strict structure → deliberate breaks. This is the engine of the canvas philosophy.

### Container & gutters

```css
:root {
  --container-narrow: 64rem;
  --container-base:   80rem;
  --container-wide:   96rem;
  --container-bleed:  100vw;       /* edge-to-edge */

  --gutter:    var(--space-5);     /* 24px */
  --gutter-lg: var(--space-7);     /* 48px */
}
```

### The 12-column grid

```css
.canvas {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
  max-width: var(--container-wide);
  margin-inline: auto;
  padding-inline: var(--gutter-lg);
}
```

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

### Implementation example

```css
.posture-bleed-left .canvas-img {
  grid-column: 1 / 7;
  margin-left: calc(-1 * var(--gutter-lg) - 10vw);
}

.posture-overlap {
  position: relative;
}
.posture-overlap .canvas-heading {
  grid-column: 1 / 9;
  grid-row: 1;
  z-index: 2;
  mix-blend-mode: difference; /* The brutalist "fight the image" move */
}
.posture-overlap .canvas-img {
  grid-column: 5 / 12;
  grid-row: 1;
  z-index: 0;
}
```

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

```css
:root {
  /* SPACING — 4pt grid */
  --space-0:  0;
  --space-1:  0.25rem;   /*  4 */
  --space-2:  0.5rem;    /*  8 */
  --space-3:  0.75rem;   /* 12 */
  --space-4:  1rem;      /* 16 — base unit */
  --space-5:  1.5rem;    /* 24 */
  --space-6:  2rem;      /* 32 */
  --space-7:  3rem;      /* 48 */
  --space-8:  4rem;      /* 64 */
  --space-9:  6rem;      /* 96 */
  --space-10: 8rem;      /* 128 — section block padding */
  --space-11: 12rem;     /* 192 — hero block padding */

  /* RADIUS — brutalism prefers hard, allows precise */
  --radius-none: 0;
  --radius-sm:   2px;
  --radius-md:   6px;
  --radius-lg:   12px;
  --radius-pill: 9999px;
  /* No --radius-xl. Brutalism doesn't do blob corners. */

  /* HAIRLINES — brutalism's borders */
  --hairline:        1px solid var(--color-hairline);
  --hairline-strong: 2px solid var(--bone-300);
  --hairline-accent: 2px solid var(--color-accent);
  --hairline-thick:  3px solid var(--color-fg);    /* Neobrutalist chunk */

  /* HARD SHADOW — the Neobrutalist signature */
  --shadow-hard-sm: 4px 4px 0 var(--color-shadow-hard);
  --shadow-hard-md: 8px 8px 0 var(--color-shadow-hard);
  --shadow-hard-lg: 12px 12px 0 var(--color-shadow-hard);

  /* HARD SHADOW IN ACCENT — the loudest move */
  --shadow-accent-sm: 4px 4px 0 var(--color-shadow-accent);
  --shadow-accent-md: 8px 8px 0 var(--color-shadow-accent);
  --shadow-accent-lg: 12px 12px 0 var(--color-shadow-accent);

  /* HARD SHADOW IN ACCENT-2 — for the rare double-stack */
  --shadow-accent2-md: 8px 8px 0 var(--color-accent-2);

  /* DOUBLE-STACK — Neobrutalist signature offset shadow with two colors */
  --shadow-stack: 8px 8px 0 var(--color-fg), 16px 16px 0 var(--color-accent);
}
```

### The hard shadow — the Neobrutalist core move

The hard offset shadow is **the** signature of this system. Reserved for:

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

The double-stack (`--shadow-stack`) is the absolute loudest move. Use **once per page, maximum**. It's the design equivalent of underlining a sentence — the more you do it, the less it means.

### Spacing rules

- **Default to one tier larger than feels comfortable.** When in doubt between `--space-7` and `--space-8`, pick `--space-8`. Brutalism breathes.
- **Section padding is always `--space-10` minimum** on block axis.
- **No half-tokens.** If you find yourself reaching for `1.25rem`, the answer is `--space-5` or `--space-6`, not a new value.

---

## 8. Motion System

Motion is the difference between a $2K site and a $10K site. It is a **first-class system**, not decoration.

### Tokens

```css
:root {
  /* DURATION */
  --dur-instant:   80ms;
  --dur-fast:     160ms;
  --dur-base:     240ms;
  --dur-slow:     420ms;
  --dur-cinematic: 720ms;

  /* EASING — each curve has one job */
  --ease-out:    cubic-bezier(0.16, 1, 0.30, 1);    /* entrances (signature) */
  --ease-in:     cubic-bezier(0.50, 0, 0.95, 0.30); /* exits */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);    /* loops */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Neobrutalist spring */
  --ease-snap:   cubic-bezier(0.7, 0, 0.3, 1);      /* Brutalist hard cut */

  /* STAGGER */
  --stagger-tight:  60ms;
  --stagger-base:  120ms;
  --stagger-loose: 220ms;
  --stagger-wide:  400ms;

  /* DELAY ramp */
  --delay-1: calc(var(--stagger-base) * 1);
  --delay-2: calc(var(--stagger-base) * 2);
  --delay-3: calc(var(--stagger-base) * 3);
  --delay-4: calc(var(--stagger-base) * 4);
  --delay-5: calc(var(--stagger-base) * 5);
}
```

### Motion by mode

| Mode | Allowed easings | Character |
|---|---|---|
| Brutalism | `--ease-out`, `--ease-snap` | Decisive, no overshoot |
| Neobrutalism | `--ease-out`, `--ease-spring` | Playful, slight bounce on hover |

### Reduced motion (mandatory, global)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### The reveal pattern (CSS-only entrances)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
}
.reveal.in-view {
  animation: revealUp var(--dur-cinematic) var(--ease-out) forwards;
  animation-delay: var(--reveal-delay, 0ms);
}

@keyframes revealUp {
  to { opacity: 1; transform: translateY(0); }
}

.reveal-stagger.in-view > * {
  animation: revealUp var(--dur-cinematic) var(--ease-out) backwards;
}
.reveal-stagger.in-view > *:nth-child(1) { animation-delay: var(--delay-1); }
.reveal-stagger.in-view > *:nth-child(2) { animation-delay: var(--delay-2); }
.reveal-stagger.in-view > *:nth-child(3) { animation-delay: var(--delay-3); }
.reveal-stagger.in-view > *:nth-child(4) { animation-delay: var(--delay-4); }
.reveal-stagger.in-view > *:nth-child(5) { animation-delay: var(--delay-5); }
```

```js
// ~1KB total. Add `.in-view` once when an element enters viewport.
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));
```

### Motion patterns

| Pattern | Use | Mode | Implementation |
|---|---|---|---|
| Word-by-word reveal | Hero headline | Brutalism | `.reveal-stagger` with `--ease-out` |
| Section entrance | All slabs | Both | `.reveal` |
| Magnetic CTA | Primary buttons | Neobrutalism | `[data-magnet]` (Section 10) |
| Image hover scale | Hero images | Brutalism | CSS-only, `transform: scale(1.06)` |
| Sticker bounce-in | Neobrutalism stickers | Neobrutalism | `--ease-spring` rotation entrance |
| Cursor parallax | Specific accent images | Both | CSS variables fed by ~10 lines of JS |
| Marquee | Section dividers, partner logos | Brutalism | CSS `@keyframes` |
| Press-down | All buttons | Both | `:active` translate + shadow collapse |

### Motion rules

- **One signature curve per mode.** `--ease-out` is the house curve everywhere; `--ease-spring` is permitted only in Neobrutalism sections.
- **Trigger once.** Entry animations never replay. `io.unobserve(el)`.
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

## 10. Component Primitives

### `<Stack>` — vertical rhythm
```css
.stack    { display: flex; flex-direction: column; gap: var(--space-5); }
.stack-lg { gap: var(--space-7); }
.stack-xl { gap: var(--space-10); }
```

### `<Cluster>` — wrapped horizontal items
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-4);
  align-items: center;
}
```

### `<Frame>` — aspect-locked media
```css
.frame { position: relative; overflow: hidden; }
.frame-square   { aspect-ratio: 1 / 1; }
.frame-video    { aspect-ratio: 16 / 9; }
.frame-portrait { aspect-ratio: 3 / 4; }
.frame > img, .frame > video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-out);
}
.frame:hover > img { transform: scale(1.06); }

/* Brutalist: dithered/posterized image treatment */
.frame-dithered > img {
  filter: contrast(1.2) saturate(0.7);
  image-rendering: pixelated;
}
```

### `<Slab>` — full-width section
```css
.slab {
  padding-block: var(--space-10);
  border-top: var(--hairline);
}
.slab-inverted {
  background: var(--color-bg-inverted);
  color: var(--color-fg-inverted);
}
.slab-accent {
  background: var(--color-accent);
  color: var(--color-accent-fg);
}
.slab-accent-2 {
  background: var(--color-accent-2);
  color: var(--color-accent-2-fg);
}
.slab-inner {
  max-width: var(--container-wide);
  margin-inline: auto;
  padding-inline: var(--gutter-lg);
}
```

### `<Eyebrow>` — section labels (brutalist index marks)
```css
.eyebrow {
  font: var(--type-eyebrow);
  letter-spacing: var(--tracking-allcaps);
  text-transform: uppercase;
  color: var(--color-fg-muted);
}
.eyebrow::before {
  content: '';
  display: inline-block;
  width: var(--space-4);
  height: 2px;
  background: var(--color-accent);
  margin-right: var(--space-2);
  vertical-align: middle;
}
```

### `<Sticker>` — Neobrutalist accent block
```css
.sticker {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background: var(--color-accent);
  color: var(--color-accent-fg);
  font: var(--type-eyebrow);
  letter-spacing: var(--tracking-allcaps);
  text-transform: uppercase;
  border: var(--hairline-thick);
  box-shadow: var(--shadow-hard-sm);
  transform: rotate(-4deg);
  transition: transform var(--dur-fast) var(--ease-spring);
}
.sticker:hover { transform: rotate(-2deg) scale(1.04); }
.sticker-yellow { background: var(--color-mark); color: var(--color-mark-fg); }
.sticker-red    { background: var(--color-accent-2); color: var(--color-accent-2-fg); }
```

### `<Marquee>` — looping band
```css
.marquee {
  overflow: hidden;
  white-space: nowrap;
  border-block: var(--hairline);
  padding-block: var(--space-4);
}
.marquee-track {
  display: inline-flex;
  gap: var(--space-7);
  animation: marquee 30s linear infinite;
}
@keyframes marquee {
  to { transform: translateX(-50%); }
}
```

### `<MagneticButton>` — primary CTA (Neobrutalist)
```css
.btn-magnetic {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  background: var(--color-accent);
  color: var(--color-accent-fg);
  font: var(--type-eyebrow);
  letter-spacing: var(--tracking-allcaps);
  text-transform: uppercase;
  border: var(--hairline-thick);
  cursor: pointer;
  box-shadow: var(--shadow-hard-md);
  transition:
    transform var(--dur-fast) var(--ease-spring),
    box-shadow var(--dur-fast) var(--ease-spring);
}
.btn-magnetic:hover  { box-shadow: var(--shadow-hard-lg); transform: translate(-2px, -2px); }
.btn-magnetic:active { transform: translate(8px, 8px); box-shadow: 0 0 0 var(--color-shadow-hard); }
.btn-magnetic__label {
  display: inline-block;
  transition: transform var(--dur-fast) var(--ease-spring);
  will-change: transform;
}
```

```js
// ~40 lines, no library
const STRENGTH = 0.35;
const canMagnet = matchMedia('(hover: hover) and (pointer: fine)').matches
              && !matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canMagnet) {
  document.querySelectorAll('[data-magnet]').forEach((el) => {
    const label = el.querySelector('.btn-magnetic__label') ?? el;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * STRENGTH;
      const y = (e.clientY - r.top - r.height / 2) * STRENGTH;
      label.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => { label.style.transform = ''; });
  });
}
```

### `<BrutalistButton>` — secondary CTA (Brutalist)
```css
.btn-brutalist {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: transparent;
  color: var(--color-fg);
  font: var(--type-eyebrow);
  letter-spacing: var(--tracking-allcaps);
  text-transform: uppercase;
  border: var(--hairline-strong);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-snap),
              color var(--dur-fast) var(--ease-snap);
}
.btn-brutalist:hover  { background: var(--color-fg); color: var(--color-bg); }
.btn-brutalist:active { transform: translateY(2px); }
```

The Brutalist button is **stark inversion on hover**. No shadow, no spring — just a hard color flip. This is the contrast move that makes the Neobrutalist button feel even louder when it appears.

### Cursor parallax
```css
.parallax-track {
  --px: 0; --py: 0;
  transform: translate3d(calc(var(--px) * 12px), calc(var(--py) * 12px), 0);
  transition: transform var(--dur-base) var(--ease-out);
  will-change: transform;
}
```

```js
document.querySelectorAll('[data-parallax]').forEach((el) => {
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--px', (e.clientX - r.left) / r.width - 0.5);
    el.style.setProperty('--py', (e.clientY - r.top) / r.height - 0.5);
  });
  el.addEventListener('pointerleave', () => {
    el.style.setProperty('--px', 0);
    el.style.setProperty('--py', 0);
  });
});
```

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

```css
:root {
  --z-base:      0;
  --z-effects:   1;
  --z-content:  10;
  --z-overlap:  20;
  --z-sticky:   30;
  --z-overlay:  40;
  --z-modal:    50;
  --z-toast:    60;
  --z-cursor:   70;
}
```

Never use a number outside this scale. If you need something between `--z-content` and `--z-overlap`, the design is wrong.

---

## 13. Hero & Background Surface

The hero is the only section with an explicit background and a custom layout. Everything else uses `<Slab>`.

### Brutalist hero treatments
- **Index mark** — `[01]` mono prefix, top-left corner
- **Coordinate annotation** — `LAT 33.8688° S` style text in a corner, mono, muted
- **Vertical title** — heading runs up the right gutter, rotated 90°
- **Build version** — `v2.1.0 / 2026.04` in footer corner

These details cost nothing and anchor the brutalist identity in *content*, not just style.

### The signature technical showpiece — `PremiumSnake`

Every premium agency site has *one* signature interactive moment — the thing that proves the studio can build, not just compose. On this site, that moment is `PremiumSnake`: a generative, scroll-coupled mark that lives at the page level and threads through the design like a watermark with a pulse.

**The brief.**
- A 1px accent-colored line that traces a continuous curve across the viewport, anchored to the right gutter.
- Curve is generated procedurally (Catmull-Rom or Bezier through scroll-anchored control points) — never hand-animated.
- Reacts to scroll position (not time) — it *advances* as the page advances. When the user stops scrolling, the snake stops.
- Reacts subtly to cursor proximity — control points within 200px of the cursor lerp toward the cursor by 6%, so the line "breathes" near the pointer.
- Color: `--color-accent` at `0.6` opacity. Never full opacity — it's a watermark, not a foreground element.

**Constraints (non-negotiable).**
| Property | Value |
|---|---|
| Layer | `z-index: var(--z-effects)` (z=1, behind all content) |
| Interaction | `pointer-events: none` (never blocks scroll, never catches clicks) |
| Visibility | Hidden in hero (`opacity: 0`); fades in once `scrollY > viewport-height` |
| Breakpoint | Disabled below `768px` (mobile gets a static accent rule instead) |
| Reduced motion | `prefers-reduced-motion: reduce` → renders as a *static* curve at scroll position 0.5; no animation |
| FPS | If frame budget drops below 50fps for 1s, the effect self-disables for the session |
| JS cost | ≤4KB gzipped of the 15KB total budget (§9) |
| Rendering | SVG path with `d` attribute updated in `requestAnimationFrame`. No Canvas, no WebGL. |

**Why SVG, not Canvas/WebGL.** The brief calls for *one* line, not a particle system. SVG renders crisply at any zoom, scales with the viewport, and costs nothing on the GPU. Canvas would be heavier; WebGL would be theatrical for the payload.

**Why a snake (not a 3D scene, not a particle field).** The brutalist canvas is type-driven and deliberately *flat*. A 3D scene would fight the hierarchy. A single, restrained generative line stays in the gutter, signs the page, and demonstrates technical capability without competing with content. It's the visual equivalent of a watermark on heavyweight paper.

**Component spec** lives in `src/components/design-effects/PremiumSnake.astro`. Implementation details (control point distribution, easing on cursor proximity, FPS guard) live there — **not in this doc**. This section is the *brief*; the component is the realization.

### Hero stack composition (final order, bottom-up)

The hero is the only section with a custom stack. Once the snake is built, this is the layered composition:

1. `<video>` — autoplay, loop, muted, playsinline, `object-cover`
2. **Noise overlay** — SVG fractal noise, `mix-blend-overlay`, opacity `0.7` (the brutalist grain)
3. **Gradient scrim** — `from-bg/30 via-transparent to-bg/60` (hard-edge fallback per `production-aesthetic.md` §A3)
4. **PremiumSnake** — generative line (hidden until past hero, but layer slot reserved)
5. UI content layer (heading, eyebrow, build stamp, coordinate annotation)

---

## 14. Accessibility

Non-negotiable. Brutalism is not an excuse.

- **Skip link** is the first focusable element in `BaseLayout`.
- **Focus-visible** outlines retained globally (Section 11).
- **Contrast minimum**: WCAG AA (4.5:1 body, 3:1 large text).
- **Reduced motion** respected globally.
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
- [ ] Lock `<html>` font-size to `100%` (let `clamp()` work)
- [ ] `prefers-contrast: more` overrides for hairlines
- [ ] Audit `PremiumSnake` for `pointer-events: none` and breakpoint guard
- [ ] Add `view-transition-name` to hero elements for native page transitions
- [ ] Add `[data-index]` numbering to all major sections
- [ ] Add a build version stamp in footer (mono, muted)

---

## 18. Migration Plan

1. **Create `tokens.css`** — port everything from `design-tokens.json` and `global.css`. Delete the JSON file.
2. **Wire Tailwind to tokens** via `theme.extend` reading `var(--…)`.
3. **Build the type scale** — apply `--type-*` in `base.css`. Audit components, replace hard sizes.
4. **Build the spacing scale** — replace ad-hoc Tailwind values.
5. **Build motion tokens** — port the snake to consume them.
6. **Cut GSAP from entrances** — replace with `.reveal` + IO observer.
7. **Build the primitives** — `Stack`, `Cluster`, `Frame`, `Slab`, `Eyebrow`, `Sticker`, `Marquee`, `MagneticButton`, `BrutalistButton`.
8. **Build posture utilities** — implement the 8 asymmetric postures from Section 6.
9. **Tag every section with its mode** — `data-mode="brutalism"` or `data-mode="neobrutalism"`.
10. **Audit JS** — confirm bundle is under 15KB gz.
11. **Document and lock** — this file becomes read-only law.

---

## 19. Companion Documents

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

## 20. Change Log

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
- States, Z-Index scale, Quick-Win Checklist, Migration Plan.

**v1.0 — Initial Live Spec**
- Documented dark-first global background.
- Documented blur-only frosted sections.
- Documented PremiumSnake.