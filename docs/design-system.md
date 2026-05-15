# Straya Studio — Design System

> **Version:** 3.0 · **Stack:** Astro 5.x + Tailwind (token-driven) + minimal JS
> **Token source:** `src/styles/design-tokens.json` — single source of truth

---

## Table of Contents

0. [Core Laws](#0-core-laws)
1. [Token Pipeline](#1-token-pipeline)
2. [Component Architecture](#2-component-architecture)
3. [HTML & Head](#3-html--head)
4. [CSS Rules](#4-css-rules)
5. [JavaScript Rules](#5-javascript-rules)
6. [States](#6-states)
7. [Motion Rules](#7-motion-rules)
8. [SEO & AEO](#8-seo--aeo)
9. [Performance Budget](#9-performance-budget)
10. [Don'ts](#10-donts)
11. [Quick Checks](#11-quick-checks)
12. [Companion Files](#12-companion-files)

---

## 0. Core Laws

> If a decision violates one of these, the decision is wrong.

**I. Tokens or it didn't happen.**
Every value traces to `design-tokens.json`. No magic numbers. No `mt-[42px]`.

**II. Tailwind first.**
All styling via Tailwind classes consuming tokens. `<style>` blocks only for `@keyframes` and scroll-driven transforms Tailwind cannot express. Must open with a justification comment.

**III. CSS until proven otherwise.**
JS earns its bytes. 15KB total budget for design effects.

**IV. Semantic HTML.**
`<section>`, `<nav>`, `<main>`, `<article>`. One `<h1>` per page. No skipped heading levels. No `<div>` soup.

---

## 1. Token Pipeline

```
design-tokens.json  →  tailwind.config.mjs  →  Components
```

3 steps. Traceable backward: component → class → config → token. Break in chain = illegal.

- Never `var(--*)` in components — use Tailwind classes
- Never define the same value in two places
- `global.css` only: `@font-face`, `@keyframes`, resets, permitted `<style>` blocks

---

## 2. Component Architecture

### Anatomy

```astro
---
// 1. Imports — Astro, UI, utils (each annotated with purpose)
// 2. Props interface — TypeScript, every component
// 3. Derived values — compute here, never in template
---

<!-- 4. Template — semantic HTML, only {value} interpolation -->

<style>
  /* 5. Only if §0 permits. Justification comment required. */
</style>

<script>
  // 6. Only if JS earns bytes. Budget annotation: /* ~X.XKB */
</script>
```

### Rules

| Rule | Detail |
|---|---|
| Props interface | At top. No prop drilling past 2 levels. |
| One job | Layout ≠ content. Split if both. |
| Compute in `---` | No filters/maps/ternaries in `{}`. Template needs `if` → extract subcomponent. |
| Named exports | Import name = file name. |
| Magic strings | → union types. `type Mode = 'brutalism' \| 'neobrutalism'` |
| Assets | From `@assets/` alias. No `../../public/images/`. |
| Class order | Prettier + `prettier-plugin-tailwindcss`. Unordered = rejected. |
| Dev marker | `data-component` in dev. Stripped in production. |

---

## 3. HTML & Head

### Fixed `<head>` order

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>...</title>
<meta name="description" content="...">
<link rel="preload" as="font" href="..." crossorigin>
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="llms" href="/llms.txt">
<link rel="llms-full" href="/llms-full.txt">
<link rel="canonical" href="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:image:alt" content="...">
<meta property="og:url" content="...">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image:alt" content="...">
<link rel="stylesheet" href="/global.css">
<script type="application/ld+json">...</script>
```

> Charset first. Preloads before CSS. JSON-LD before `</head>`.

### Image rules

- Every `<img>` has explicit `width` and `height` (CLS prevention)
- Every `<img>` has `alt` — meaningful or explicit `alt=""` for decorative
- `loading="lazy"` below fold; `fetchpriority="high"` on LCP image
- AVIF primary, WebP fallback

### Landmarks

Every page: `<header>`, `<main>`, `<footer>`. Every `<section>` has `aria-label`. Every `<nav>` has a unique `aria-label`.

---

## 4. CSS Rules

- No `!important` — fix specificity instead
- No dead CSS — audit `@keyframes` and custom props per release. 30KB gz budget
- No `text-align: justify`
- Tabular numerals on all data: `font-variant-numeric: tabular-nums`
- `text-wrap: balance` on `h1`–`h3`. `text-wrap: pretty` on `<p>`
- Font pipeline: subset Latin-1, preload display font, `size-adjust` in `@font-face`, `font-display: swap` everywhere
- Reduced motion: `@media (prefers-reduced-motion: reduce)` respected globally
- Focus-visible always: `outline: 2px solid var(--color-focus-ring); outline-offset: 2px`

---

## 5. JavaScript Rules

### Budget: 15KB gzipped total

| Tier | Size | Use |
|---|---|---|
| CSS-only | 0KB | Entrances, hovers, transitions |
| Native APIs | ~0KB | View Transitions, IntersectionObserver, ResizeObserver |
| Custom | ≤1KB | `.in-view` toggler, parallax variables |
| Medium | ≤5KB | Lenis smooth scroll |
| Heavy | ≤15KB | GSAP ScrollTrigger — one pin per page max |

### Rules

- No `setTimeout` for visual timing — use CSS delay, IO threshold, `rAF`, or GSAP
- Single scroll listener shared via `rAF`. No duplicate listeners
- `passive: true` on all scroll/touch listeners
- Cleanup on `astro:before-swap`. Re-init on `astro:after-swap`
- Reduced motion: skip all scroll-driven animation, set `--p: 1`

### Banned

`jQuery` · `Lodash` · `Moment` · Framer Motion + GSAP together · Three.js · Custom cursors blocking scroll · Unthrottled 60Hz parallax · `is:inline` without justification + byte size

---

## 6. States

Every interactive element defines all five states.

| State | Rule |
|---|---|
| Default | Visible affordance |
| Hover | Clear change — invert, lift, shadow grow. Never subtle opacity. |
| Focus-visible | `outline: 2px solid var(--color-focus-ring); outline-offset: 2px` |
| Active | Press-down: `translateY` + shadow collapse |
| Disabled | `opacity: 0.4; pointer-events: none` — never grayscale |

> Press is mandatory on every clickable. Keyboard-reachable: hoverable = focusable.

---

## 7. Motion Rules

- **Scroll-triggered** (fire once): headings only
- **Scroll-driven** (reversible): everything else — coupled to `--p` progress variable
- No looping except marquee, CSS breathe (6–8s), hairline drift (10–14s)
- Hover changes opacity/scale/shadow — never hue
- No two techniques use the same mechanism solely for variety
- GSAP: one scroll-pin per page maximum
- View Transitions on page navigation (native, 0KB)

---

## 8. SEO & AEO

> Full spec in `docs/SEO-AEO-rules.md`. This section summarises the non-negotiables.

### AI Discovery

- `/public/llms.txt` — short brand summary
- `/public/llms-full.txt` — comprehensive profile with review verification
- Both discoverable via `<link>` in `<head>`
- Both carry `# Last updated: YYYY-MM-DD` dateline

### Schema

- `Schema.astro` outputs `application/ld+json` on every page
- `@id` on every node — no anonymous nodes
- `aggregateRating` backed by verifiable review platforms
- Every `Review` includes `itemReviewed.provider`, `sdPublisher`, `sameAs` to source
- Must pass [validator.schema.org](https://validator.schema.org/)

### Meta

| Tag | Rule |
|---|---|
| `<title>` | Max 60 chars, ends with `\| Straya Studio` |
| `<meta name="description">` | Max 160 chars, unique per page |
| `<link rel="canonical">` | Always `strayastudio.com` — never staging/localhost |
| `og:image:alt` | Mandatory |

### Crawlers

- `robots.txt`: all AI crawlers allowed. Never remove. Add new ones quarterly.
- `AEOHeader.astro`: `sr-only` executive summary as first child of `<main>` on homepage
- Complex visual sections: `sr-only` summaries

### Content sync

Pricing/services/review changes → update `llms.txt`, `llms-full.txt`, `Schema.astro`, `AEOHeader.astro` in the same commit.

---

## 9. Performance Budget

| Metric | Target |
|---|---|
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 100ms |
| JS (design effects) | < 15KB gz |
| CSS | < 30KB gz |
| Hero image | AVIF + WebP, `fetchpriority="high"` |
| Images | AVIF + WebP, `loading="lazy"` below fold |
| Fonts | `font-display: swap`, subset to used glyphs |

---

## 10. Don'ts

| ❌ | Why |
|---|---|
| `radial-gradient` anywhere | Produces "AI startup template" look |
| `conic-gradient` as background | Same |
| Soft linear gradients across whole sections | Use hairline divider instead |
| Raw untreated images | Every image gets a treatment class |
| `<div>` where semantic element exists | Accessibility |
| `!important` | Fix specificity |
| `setTimeout` for visual timing | Use CSS delay or rAF |
| Console statements in production | Noise |
| Hardcoded strings | Use props, content collections, or `TODO: CONTENT` |
| Nested ternaries in templates | Extract subcomponent |
| Magic Tailwind arbitrary values | Use token or next token up/down |
| `<style>` without justification comment | Violates §0 |
| `is:inline` without justification + budget | Violates §5 |
| Dead CSS in production | Audit per release |
| Blocked AI crawlers in `robots.txt` | Violates §8 |

---

## 11. Quick Checks

Before merging any component:

- [ ] Token trace: component → class → config → token?
- [ ] `<style>` has justification comment?
- [ ] `<script>` has budget annotation?
- [ ] Every `<img>` has `width`, `height`, `alt`?
- [ ] Heading hierarchy: one `<h1>`, no skips?
- [ ] `aria-label` on every `<section>` and `<nav>`?
- [ ] Keyboard: every hoverable reachable via `Tab`?
- [ ] Reduced motion: all animation gated?
- [ ] `robots.txt`: all AI crawlers present?
- [ ] Schema passes validator?
- [ ] `og:image:alt` present?
- [ ] No dead `@keyframes` or unused custom props?

---

## 12. Companion Files

| File | Governs |
|---|---|
| `docs/content-instructions.md` | Brand voice, copy rules, pricing |
| `docs/SEO-AEO-rules.md` | Full SEO/AEO specification |
| `docs/case-study-template.md` | Work detail page architecture |

---

*End of rules. Every section is non-negotiable.*
