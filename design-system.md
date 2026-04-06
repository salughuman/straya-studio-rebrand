# Straya Studio — Design System

> Single source of truth. Every value connects to `design-tokens.json`.
> Every token connects to a specific element. Every component is reusable.
> Naming follows Framer conventions for cross-platform familiarity.

---

## 1. Foundation

| Property | Value |
|----------|-------|
| Theme | Light Elevation |
| Framework | Astro 5.x + Tailwind CSS |
| Token source | `src/styles/design-tokens.json` |
| Tailwind config | `tailwind.config.mjs` (imports tokens) |
| Global CSS | `src/styles/global.css` |
| JS philosophy | Minimum. JS only for: IntersectionObserver triggers, mobile menu toggle, form validation. Everything else is CSS. |
| Animation philosophy | CSS `@keyframes` for all complex animations. Web Animations API for scroll-triggered entrances only. No animation libraries. |

### Principles
1. **Token-driven** — every value from `design-tokens.json`
2. **Hex-first** — use hex directly; CSS vars only for calculations
3. **Component-based** — reusable components for buttons, links, cards
4. **≥90% utility** — custom CSS only for keyframes, pseudo-elements, JS states
5. **0px radius** — no rounded corners (except `rounded-full`)
6. **No bold** — max weight 500. Exception: 600 on labels under 12px
7. **Light mode only**
8. **Crosshair cursor** globally

---

## 2. Fill (Colours)

Named by hierarchy, not by colour name. Maps directly to where each token is used.

### Surface Fills

| Token | Tailwind | Hex | Used On |
|-------|----------|-----|---------|
| `surface/primary` | `bg-background` | `#F9F9F9` | Page background, default sections |
| `surface/secondary` | `bg-surface-container` | `#EEEEEE` | Cards, panels, pricing cards |
| `surface/elevated` | `bg-surface-container-lowest` | `#FFFFFF` | Elevated sections (Trust Grid, FAQ, Our Difference) |
| `surface/dimmed` | `bg-surface-dim` | `#DADADA` | Disabled states, skeleton loaders |
| `surface/subdued` | `bg-surface-container-low` | `#F3F3F3` | Footer, sidebar |
| `surface/strong` | `bg-surface-container-high` | `#E8E8E8` | Higher elevation containers |
| `surface/inverted` | `bg-primary` | `#000000` | Final CTA section, dark blocks |

### Content Fills (Text)

| Token | Tailwind | Hex | Used On |
|-------|----------|-----|---------|
| `content/high` | `text-on-background` | `#1A1C1C` | Headings, primary body text |
| `content/medium` | `text-on-surface-variant` | `#474747` | Supporting text, descriptions |
| `content/low` | `text-on-background/40` | `rgba(26,28,28,0.4)` | Muted labels, metadata |
| `content/disabled` | — | `#777777` | Disabled inputs, inactive states |
| `content/on-inverted` | `text-on-primary` | `#E5E2E1` | Text on `surface/inverted` |
| `content/on-inverted-muted` | `text-on-primary/60` | `rgba(229,226,225,0.6)` | Muted text on dark |

### Accent Fills

| Token | Tailwind | Hex | Used On |
|-------|----------|-----|---------|
| `accent/primary` | `bg-accent` / `text-accent` | `#3CCD7F` | CTAs, status dots, highlights, active states |
| `accent/secondary` | `bg-secondary` | `#006D3D` | Hover states, focus rings, selection highlight |
| `accent/container` | `bg-secondary-container` | `#62ee9c` | Light green containers |
| `accent/on` | `text-on-secondary` | `#FFFFFF` | Text on green surfaces |

### Border Fills

| Token | Tailwind | Value | Used On |
|-------|----------|-------|---------|
| `border/default` | `border-black/5` | `rgba(0,0,0,0.05)` | Card borders, section dividers |
| `border/subtle` | `border-black/[0.04]` | `rgba(0,0,0,0.04)` | Grid overlay lines |
| `border/medium` | `border-black/10` | `rgba(0,0,0,0.10)` | Slightly visible borders |
| `border/strong` | `border-black/20` | `rgba(0,0,0,0.20)` | Strong dividers, focus states |
| `border/grid` | `border-black/[0.06]` | `rgba(0,0,0,0.06)` | 4-column baseline grid |
| `border/on-inverted` | `border-white/5` | `rgba(255,255,255,0.05)` | Borders on dark sections |

### Status Fills

| Token | Hex | Used On |
|-------|-----|---------|
| `status/success` | `#3CCD7F` | Same as accent |
| `status/error` | `#BA1A1A` | Form errors |
| `status/warning` | `#FFC107` | Warnings |
| `status/info` | `#2196F3` | Info states |

---

## 3. Typography

### Font Stack

| Role | Font | Fallback | Variable |
|------|------|----------|----------|
| Display | PP_Mori | Helvetica Neue, Arial, sans-serif | `var(--font-display)` |
| Body | Instrument Sans | system-ui, -apple-system, sans-serif | `var(--font-body)` |
| Mono | ui-monospace | SFMono-Regular, Menlo | — |

Self-hosted WOFF2. `font-display: swap`.

### Letter Spacing

| Token | Value | Used On |
|-------|-------|---------|
| `tracking/tight` | `-0.04em` | All headings |
| `tracking/blueprint` | `0.05em` | Labels, metadata, buttons |

### Type Scale

Every text element on the site maps to one of these classes. **Never set custom font sizes.**

| Class | Font | Size | Weight | Line Height | Tracking | Element |
|-------|------|------|--------|-------------|----------|---------|
| `.type-h1` | PP_Mori | `clamp(2.5rem, 5vw, 4rem)` | 500 | 0.9 | -0.04em | Hero headline |
| `.type-h2` | PP_Mori | `clamp(1.75rem, 4vw, 2.75rem)` | 500 | 1.0 | -0.04em | Section headings |
| `.type-h3` | PP_Mori | `1.25rem` | 500 | 1.1 | -0.04em | Card headings, tier names |
| `.type-h4` | PP_Mori | `1.125rem` | 500 | 1.2 | -0.01em | Minor headings |
| `.type-h5` | PP_Mori | `1rem` | 500 | 1.3 | -0.01em | Small headings |
| `.type-body` | Instrument Sans | `1rem` | 400 | 1.625 | 0 | Body paragraphs |
| `.type-body-large` | Instrument Sans | `1.125rem` | 400 | 1.65 | 0 | Intro paragraphs |
| `.type-body-small` | Instrument Sans | `0.875rem` | 400 | 1.5 | 0 | Supporting copy, features |
| `.type-caption` | Instrument Sans | `0.75rem` | 400 | 1.5 | 0 | Captions, timestamps |
| `.type-label` | Instrument Sans | `0.6875rem` | 500 | 1.4 | 0.05em | Section labels (always uppercase) |
| `.type-label-small` | Instrument Sans | `0.625rem` | 500 | 1.4 | 0.05em | Micro-metadata |
| `.type-button` | Instrument Sans | `0.75rem` | 500 | 1.4 | 0.05em | All buttons (uppercase, nowrap) |
| `.type-mono` | ui-monospace | `0.875rem` | 400 | 1.5 | 0 | Code, versions |

### Weight Rules
- **500** — headings, labels, buttons
- **400** — body, captions, mono
- **600** — only on labels under 12px
- **700 (bold) — NEVER**

---

## 4. Layout

### Breakpoints (3 only)

| Name | Value | Target |
|------|-------|--------|
| `sm` | `390px` | Mobile |
| `md` | `810px` | Tablet / desktop |
| `lg` | `1200px` | Wide desktop |

### Container

| Token | Class | Value |
|-------|-------|-------|
| `layout/container-max` | `max-w-container` | `1400px` |
| `layout/container-padding-mobile` | `.main-container` | `1.25rem (20px)` |
| `layout/container-padding-tablet` | `.main-container` | `3rem (48px)` |
| `layout/container-padding-desktop` | `.main-container` | `2rem (32px)` |

### Section Spacing

| Token | Class | Value |
|-------|-------|-------|
| `spacing/section-mobile` | `.section-y` | `5rem (80px)` |
| `spacing/section-desktop` | `.section-y` | `8rem (128px)` |

### Card Padding

| Token | Class | Value |
|-------|-------|-------|
| `spacing/card-mobile` | `.card-pad` | `1.25rem (20px)` |
| `spacing/card-desktop` | `.card-pad` | `2rem (32px)` |

### Gap Scale
`gap-1` (4px) · `gap-2` (8px) · `gap-3` (12px) · `gap-4` (16px) · `gap-6` (24px) · `gap-8` (32px) · `gap-12` (48px) · `gap-16` (64px)

All on 8px base grid.

---

## 5. Effects

### Radius
All `0px`. No rounded corners except `rounded-full` for pills/dots.

### Shadows
Minimal. Prefer `border` over `box-shadow`.

### Blur
- `backdrop-blur-xl` on navbar only
- No layer blur on other elements

### Grain Overlay
- Opacity: `0.02`
- Position: fixed, full viewport
- Z-index: `9999`
- Pointer-events: none
- SVG fractalNoise, baseFrequency 0.65, 3 octaves

### Cursor
- Global: `crosshair`
- Interactive elements: `cursor-pointer`
- Text inputs: `cursor-text`

---

## 6. Motion

### Entrance Animation (LOCKED)

| Property | Value |
|----------|-------|
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Duration | `900ms` |
| Start | `opacity: 0` + `translateY(28px)` |
| End | `opacity: 1` + `translateY(0)` |
| Trigger | `IntersectionObserver`, `rootMargin: '0px 0px -80px 0px'`, `threshold: 0` |
| Above-fold | Double `requestAnimationFrame` |

### Headline Clip Reveal
```html
<span class="block overflow-hidden">
  <span class="inline-block" style="transform: translateY(100%)">Word</span>
</span>
```

### Stagger Sequence

| Element | Delay |
|---------|-------|
| Label | 0ms |
| Heading line 1 | 80ms |
| Heading line 2 | 140ms |
| Heading line 3 | 200ms |
| Body text | 240ms |
| Supporting | 360ms |
| Cards | 360ms + idx × 60ms |
| CTA | last + 80ms |

### Hover

| Property | Value |
|----------|-------|
| Easing | `cubic-bezier(0.19, 1, 0.22, 1)` |
| Duration | `300ms` |
| Scale | `scale(1.02)` max |
| Lift | `translateY(-4px)` |

### Magnetic CTA
`transform: translateZ(20px) scale(1.02)` on hover.

### Marquee
`@keyframes marquee { from { translateX(0) } to { translateX(-50%) } }` at 20s linear infinite.

### Complex Animations
All complex animations use CSS `@keyframes`. No JS animation libraries. Examples:
- Availability dot pulse → `@keyframes pulse-dot`
- Card hover glow → CSS `transition` on `box-shadow`
- Clip reveals → CSS `transform` with JS trigger only

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
Non-negotiable.

### GPU Rule
Only animate `transform` + `opacity`. Never `height`, `width`, `top`, `left`.

---

## 7. Depth

### Z-Depth (3D)
Requires `perspective-1k` on parent.

| Class | Transform | Used On |
|-------|-----------|---------|
| `.z-depth-1` | `translateZ(10px)` | Cards |
| `.z-depth-2` | `translateZ(20px)` | CTAs |
| `.z-depth-3` | `translateZ(30px)` | Modals |

### Z-Index Stack

| Layer | Z-Index |
|-------|---------|
| Page content | `auto` |
| Section content | `10` |
| Navbar | `50` |
| Grain overlay | `9999` |

### Surface Elevation (by colour)
```
surface/primary (#F9F9F9)         ← page bg
  surface/subdued (#F3F3F3)       ← footer
    surface/secondary (#EEEEEE)   ← cards
      surface/elevated (#FFFFFF)  ← highest elevation
```

---

## 8. Component System

### 8.1 — Button Component (`Button.astro`)

**Variants:**

| Variant | Fill | Text | Border | Hover | Used On |
|---------|------|------|--------|-------|---------|
| `primary` | `#000000` | `#E5E2E1` | none | `bg-accent` (#3CCD7F), `text-on-secondary` | Main CTAs |
| `accent` | `#3CCD7F` | `#000000` | none | darken 10% | Pricing popular CTA, Final CTA |
| `ghost` | transparent | `#1A1C1C` | `border-black/20` bottom only | `border-on-background` | Secondary actions |
| `ghost-inverted` | transparent | `#E5E2E1` | `border-white/20` bottom only | `border-white/60` | CTAs on dark sections |

**All buttons:**
- Class: `.type-button` (0.75rem, 500, uppercase, 0.05em tracking)
- Include `.magnetic-cta` for hover lift
- Padding: `px-8 py-4` (primary/accent), `pb-px` (ghost)
- Arrow icon: 16×16 SVG, `transition-transform` on hover
- Cursor: `pointer`
- No border-radius (0px)

**Props:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'accent' | 'ghost' | 'ghost-inverted';
  href: string;
  label: string;
  icon?: boolean;  // show arrow, default true
}
```

### 8.2 — Link Component (`NavLink.astro`)

**Variants:**

| Variant | Text | Active State | Used On |
|---------|------|-------------|---------|
| `nav` | `text-on-background/40` | `text-on-background` + `border-b border-on-background pb-px` | Navbar links |
| `footer` | `text-on-background/40` | `opacity-100` | Footer links |
| `inline` | `text-accent` | underline on hover | Body text links |

**Props:**
```typescript
interface NavLinkProps {
  variant: 'nav' | 'footer' | 'inline';
  href: string;
  label: string;
  isActive?: boolean;
}
```

### 8.3 — Card Component (`Card.astro`)

Reusable across: Selected Work, WhyStraya Bento, Our Difference, Pricing, Testimonials.

**Variants:**

| Variant | Fill | Border | Hover | Used On |
|---------|------|--------|-------|---------|
| `default` | `surface/secondary` (#EEEEEE) | `border-black/5` | `translateY(-4px)` + scale(1.02) | General cards |
| `elevated` | `surface/elevated` (#FFFFFF) | `border-black/5` | same | Featured cards, elevated sections |
| `bento` | `surface/primary` (#F9F9F9) | none (gap-px creates dividers) | colour transition | Bento grid cells |
| `inverted` | `surface/inverted` (#000000) | `border-white/5` | accent bg transition | Dark CTA cards |
| `testimonial` | `surface/secondary` (#EEEEEE) | `border-black/5` | subtle lift | Review cards |

**Structure (all variants):**
```html
<article class="card-component overflow-hidden group">
  <!-- Optional: media/mockup area -->
  <div class="card-media relative overflow-hidden border-b border-black/5">
    <slot name="media" />
  </div>
  <!-- Text area -->
  <div class="card-pad flex flex-col gap-3">
    <slot name="label" />   <!-- type-label -->
    <slot name="heading" /> <!-- type-h3 -->
    <slot name="body" />    <!-- type-body-small -->
    <slot name="cta" />     <!-- Button ghost variant -->
  </div>
</article>
```

**Props:**
```typescript
interface CardProps {
  variant: 'default' | 'elevated' | 'bento' | 'inverted' | 'testimonial';
  hasMedia?: boolean;
  href?: string;  // if provided, entire card is clickable
}
```

### 8.4 — Section Header Component (`SectionHeader.astro`)

Used on every section. Enforces the label → heading → optional CTA pattern.

```html
<div class="main-container mb-16">
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 pb-8">
    <div>
      <span class="type-label text-on-background/40 block mb-3">{label}</span>
      <h2 class="type-h2 text-on-background max-w-lg">{heading}</h2>
    </div>
    {cta && <Button variant="ghost" href={cta.href} label={cta.label} />}
  </div>
</div>
```

**Props:**
```typescript
interface SectionHeaderProps {
  label: string;
  heading: string;
  cta?: { label: string; href: string };
}
```

### 8.5 — Status Badge Component (`StatusBadge.astro`)

The availability indicator used in pricing and hero.

```html
<div class="flex items-center gap-2 border border-accent/20 bg-accent/5 px-4 py-2">
  <span class="w-1.5 h-1.5 rounded-full bg-accent availability-dot"></span>
  <span class="type-label text-accent">{text}</span>
</div>
```

### 8.6 — Metrics Card Component (`MetricsCard.astro`)

Used in trust grid / hero metrics.

**Variants:**

| Variant | Fill | Text |
|---------|------|------|
| `light` | `surface/elevated` (#FFFFFF) | `content/high` |
| `dark` | `surface/inverted` (#000000) | `content/on-inverted` |

---

## 9. Grid System

### 4-Column Baseline (background)
```html
<div class="absolute inset-0 grid grid-cols-4 pointer-events-none" aria-hidden="true">
  <div class="border-r border-black/[0.06]"></div>
  <div class="border-r border-black/[0.06]"></div>
  <div class="border-r border-black/[0.06]"></div>
  <div></div>
</div>
```

### 12-Column Bento (content)
`gap-px bg-black/5` creates hairline separators.

---

## 10. Section Background Rhythm

| Section | Surface Token | Hex | Role |
|---------|--------------|-----|------|
| Hero | `surface/primary` | `#F9F9F9` | Default |
| Trust Grid | `surface/elevated` | `#FFFFFF` | Elevated |
| Services Marquee | `surface/primary` | `#F9F9F9` | Default |
| Selected Work | `surface/secondary` | `#EEEEEE` | Cards |
| The Straya Method | `surface/primary` | `#F9F9F9` | Default |
| Our Difference | `surface/elevated` | `#FFFFFF` | Elevated |
| WhyStraya Bento | `surface/primary` | `#F9F9F9` | Default |
| Pricing | `surface/secondary` | `#EEEEEE` | Cards |
| Testimonials | `surface/primary` | `#F9F9F9` | Default |
| FAQ | `surface/elevated` | `#FFFFFF` | Elevated |
| Final CTA | `surface/inverted` | `#000000` | Dark contrast |
| Footer | `surface/subdued` | `#F3F3F3` | Subdued |

Max 3–4 elevated sections. Final CTA is the only inverted section.

---

## 11. Forbidden UI Patterns

1. Generic 3-column icon grids
2. Heavy `box-shadow` — use `border` instead
3. `border-radius` > 0px (except `rounded-full`)
4. Template-style hero (centred text + stock image + gradient)
5. Stock card layouts (identical icon + title + desc grids)
6. Carousels without UX justification
7. "Read More" links on homepage
8. Chat widgets or popups in initial build
9. Auto-playing video with sound
10. `font-bold` (700) anywhere
11. CSS variables where hex would suffice

---

## 12. Asset Rules

| Rule | Requirement |
|------|-------------|
| Format | `.webp` / `.avif` only (`.svg` for icons) |
| Serving | Astro `<Image>` component |
| Below fold | `loading="lazy"` |
| LCP image | `loading="eager"` + `fetchpriority="high"` |
| Alt text | 8–15 words. `alt=""` + `aria-hidden="true"` for decorative |
| Video | Muted autoplay only. `poster` required. |
| Dimensions | Explicit `width`/`height` or `aspect-ratio` on all media |
| Max size | Images <500KB, videos <3MB |

---

## 13. Accessibility

| Requirement | Implementation |
|-------------|---------------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| Landmarks | `aria-label` on every `<section>` and `<nav>` |
| Skip link | First focusable → "Skip to main content" |
| Focus | `outline: 2px solid #006D3D`, `outline-offset: 2px` |
| Keyboard | All interactive via Tab. No traps. |
| Contrast | Normal ≥4.5:1, large ≥3:1. Verify. |
| Forms | Visible `<label>` on every `<input>` |
| Screen reader | `sr-only` on complex visual sections |
| Motion | `prefers-reduced-motion` kills all animation |
| Tap targets | ≥44×44px mobile |

---

## 14. Performance

| Metric | Target | Floor |
|--------|--------|-------|
| Desktop Performance | ≥95 | 90 |
| Mobile Performance | ≥90 | 85 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| CLS | ≤0.05 | ≤0.1 |
| FCP | ≤1.2s | ≤1.8s |
| TBT | ≤150ms | ≤200ms |
| JS bundle | ≤150KB/page | — |
| CSS bundle | ≤50KB/page | — |

---

## 15. Quality Gate

- [ ] No forbidden patterns (§11)
- [ ] All values from tokens — no hardcoded hex that isn't in the token table
- [ ] Component ≥90% utility-based
- [ ] Images use `<Image>` with webp/avif
- [ ] All `<section>` have `aria-label`
- [ ] `prefers-reduced-motion` on every animation
- [ ] Max one primary CTA per viewport
- [ ] Headings use `.type-*` classes
- [ ] No `!important`
- [ ] No unused CSS
- [ ] No console errors
- [ ] No layout shifts
- [ ] Border radius 0px everywhere
- [ ] Font weight ≤500 (600 only on tiny labels)
- [ ] Grain at 0.02 opacity
- [ ] Cursor crosshair
- [ ] Reusable components used (Button, Card, SectionHeader)
- [ ] Motion: entrance = luxury bezier, hover = custom bezier

---


---

## 16. Do / Don't

| Do | Don't |
|----|-------|
| Use `.type-*` classes | Custom font sizes |
| Use `.main-container` | `px-8` or `max-w-7xl` |
| Use `.section-y` | Custom section padding |
| Use `.card-pad` | `p-8` directly on cards |
| Use `border-black/5` | `border-gray-100` |
| Use `text-on-background/40` | `text-gray-400` |
| Use `bg-surface-container-lowest` | `bg-white` |
| Use `<Button variant="primary">` | Custom button styles |
| Use `<Card variant="default">` | Custom card markup |
| Use `<SectionHeader>` | Custom header patterns |
| Use `gap-px bg-black/5` for bento | `gap-4` between cells |
| Use CSS `@keyframes` for animations | JS animation libraries |
| Use `rootMargin: '0px 0px -80px 0px'` | `threshold: 0.15` |
| Animate `transform` + `opacity` | Animate `height`, `width`, `top` |
| Use `font-medium` (500) | `font-bold` (700) |
| Use hex from token table | Random hex values |