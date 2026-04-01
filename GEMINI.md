# Project Memory: Straya Studio

## 1. Core Identity & Positioning

- **Studio Name:** Straya Studio (`strayastudio.com`)
- **Founder:** Salman Ali
- **Position:** Boutique Technical Studio — Selective, Senior-Led, Global
- **The Hook:** We only take 2–3 projects at a time. That's not a limitation — it's the product.
- **Credentials:** Official Certified Framer Expert, Advanced Webflow Architect, Shopify Developer, WordPress Engineer.
- **Primary Markets:** US, Canada, UK, Europe, Australia.
- **Trust Signals:** 100+ successful deployments; 5.0★ average rating; Certified by Framer.com; Lead Developer for Globaltize.

### Platform Hierarchy (always in this order)

| Tier | Platforms |
|------|-----------|
| **Premium** | Framer → Webflow → Shopify |
| **Accessible** | Wix → WordPress |

Framer always first. WordPress always last. Never position WordPress or Wix alongside Premium platforms as equals.

---

## 2. Brand Voice & Messaging

### Tone
- Confident, not arrogant
- Technical, not jargon-heavy
- Direct, not salesy
- Premium through restraint, not through showing off

### Voice Rules
- **Site-wide:** "We" / "The Studio" / "Straya Studio" — always
- **About page only:** "Salman" / "Founder" — first person allowed here only
- **Never say:** "I", "my services", "hire me", or any freelancer language
- **Never say:** "cheap", "affordable", "budget", "discount", "outsource"
- **Never say:** price comparisons to other agencies in marketing copy
- **Never say:** "Silicon Valley standards" or "without the agency tax"
- **Instead of** "Silicon Valley standards" → "Built to the same standards as the platforms your users already trust"
- **Instead of** "without the agency tax" → "Predictable pricing, no overhead passed on to you"
- **Elevation narrative:** Frame all services as elevating brands, not just delivering work

### Where Pakistan Appears
- **About page:** "Founded in Pakistan, serving clients across the US, UK, Europe, and Australia." — stated proudly, no qualification.
- **Footer:** City/country in studio address. Normal, confident.
- **Nowhere else.** It's not hidden. It's just not the pitch.

---

## 3. Services (3 Core Disciplines)

### What We Do

1. **Web Design** — responsive layouts, wireframes, creative direction, brand-led visual design
2. **Web Development** — Framer, Webflow, Shopify, Wix, WordPress, CMS architecture, custom interactions
3. **Graphic Design** — social media kits, pitch decks, brand assets, marketing collateral, ad creatives

### Adjacent Services (within projects, not sold standalone)
- Brand identity and visual direction
- SEO and performance tuning
- E-commerce setup and optimisation

### What We Don't Do
- Marketing strategy or campaign management
- Copywriting (we structure content, client provides copy)
- Ongoing retainers or maintenance contracts
- App development or SaaS product engineering

---

## 4. Pricing (Project-Based — No Subscriptions, No Retainers)

Every engagement is scoped, quoted, and delivered as a complete project. Final quote confirmed after a free 15-minute scoping call.

### Tier 1 — Starter

| | |
|---|---|
| **Price** | $2,500 – $5,000 |
| **Timeline** | 1–2 weeks |
| **Best for** | Landing pages, single-page sites, Shopify theme customisations, or standalone graphic design projects. |

**What's included:**
- Custom design — no templates, ever
- Development on Framer, Webflow, Shopify, Wix, or WordPress
- Mobile-first responsive build
- On-page SEO setup
- 2 rounds of revisions
- Launch support and file handoff

### Tier 2 — Growth *(most popular)*

| | |
|---|---|
| **Price** | $5,000 – $12,000 |
| **Timeline** | 2–4 weeks |
| **Best for** | Multi-page websites, brand-led redesigns, e-commerce stores, or marketing sites that need to perform. |

**What's included:**
- Everything in Starter
- Up to 10 custom-designed pages
- CMS setup and content architecture
- Custom interactions and animations
- Brand identity and visual direction
- Performance tuning — 90+ Lighthouse scores
- Unlimited revisions until you sign off

### Tier 3 — Premium

| | |
|---|---|
| **Price** | $12,000 – $25,000+ |
| **Timeline** | 4–8 weeks |
| **Best for** | Complex platforms, full brand overhauls, custom web applications, or high-traffic e-commerce builds. |

**What's included:**
- Everything in Growth
- Discovery workshop and technical strategy
- Unlimited pages and custom components
- Advanced SEO and analytics integration
- Graphic design — social kits, pitch decks, brand assets
- Dedicated Slack channel with priority response
- 60 days of post-launch support included

### Payment & Trust
- 50% upfront, 50% on delivery
- Every project includes a clear scope document — no surprise invoices
- Availability badge on the site (updated monthly): "1 spot open for [Month Year]"

---

## 5. Technical & Design Standards

### A. Stack
- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS (utility-first, global config is source of truth)
- **Hosting:** Cloudflare Pages
- **Theme:** "Deep Space Elevation" — Dark Mode
- **Design Tokens:** `src/styles/design-tokens.json` — single source of truth for all values

### B. Layout & Responsiveness
- **Breakpoints:** 390px (sm) · 810px (md) · 1200px (lg) — these three only, no others
- **Max Content Width:** 1400px, centrally aligned
- **Container Padding:** Mobile: 1.25rem (20px) · Tablet: 2.5rem (40px) · Desktop: 4rem (64px)
- **Section Spacing:** Mobile: 5rem (80px) · Desktop: 8rem (128px)

### C. Colour Tokens & Tailwind Integration

Colours are defined both as CSS custom properties AND as Tailwind config values for direct class usage. Hex-first approach for better IDE previews and opacity support (e.g. `text-brand-accent/80`).

| Token / Tailwind Class | Value | Usage |
|------------------------|-------|-------|
| `--color-background-base` / `bg-brand-base` | `#050505` | Page background (Deep Space) |
| `--color-background-surface` / `bg-brand-surface` | `#0A0A0A` | Card/panel backgrounds |
| `--color-background-elevated` / `bg-brand-elevated` | `#0F1115` | Trust anchor sections |
| `--color-accent` / `text-brand-accent`, `bg-brand-accent` | `#3CCD7F` | Straya Green — CTAs, highlights |
| `--color-text-primary` / `text-brand-primary` | `#FFFFFF` | Main text |
| `--color-text-secondary` / `text-brand-secondary` | `#9CA3AF` | Supporting text |
| `--color-text-muted` / `text-brand-muted` | `#6B7280` | Tertiary text |
| `--color-border-default` / `border-brand-default` | `rgba(255,255,255,0.05)` | Card borders, dividers |

Both approaches are valid. **Hex values are preferred** — use them directly in Tailwind classes and scoped CSS. CSS variables (`var(--color-accent)`) are only necessary when doing dynamic calculations, `color-mix()`, opacity blending that Tailwind can't handle, or when a value needs to be inherited across deeply nested selectors. If in doubt, use the hex code.

### D. Typography
- **Display font:** Bricolage Grotesque → `var(--font-display)`
- **Body font:** Inter → `var(--font-body)`
- **Rule:** Always use the CSS variable as primary, hardcoded name as fallback:
  ```css
  font-family: var(--font-display, "Bricolage Grotesque", sans-serif);
  ```

### E. Master Utility Classes

These are the global utility classes that lock in the Straya aesthetic. **Components must use these instead of writing custom CSS for the same property.** If a utility class exists for it, custom CSS is a violation.

| Class | What it does | Use instead of... |
|-------|-------------|-------------------|
| `.type-h1` | Display heading, clamp(2.5rem, 5vw, 4rem), font-display, -0.02em tracking | Custom font-size on h1 |
| `.type-h2` | Section heading, clamp(1.75rem, 4vw, 2.75rem), font-display | Custom font-size on h2 |
| `.type-h3` | Card/subsection heading, 1.25rem, font-display | Custom font-size on h3 |
| `.type-body` | Body text, 0.875rem, font-body, 1.6 line-height | Custom body text styling |
| `.type-caption` | Small text, 0.75rem, font-body, muted colour | Custom caption styling |
| `.type-label` | Uppercase label, 0.75rem, 500 weight, 0.1em tracking, accent colour | Custom label styling |
| `.type-mono` | Monospace, 0.8125rem | Custom code text styling |
| `.section-y` | Section vertical padding: 5rem mobile, 8rem desktop | Custom section padding |
| `.main-container` | Max-width 1400px, centered, responsive horizontal padding | Custom container widths |
| `.glass-elevated` | Elevated surface: bg-elevated + border-default + subtle shadow | Custom card backgrounds |
| `.glass-surface` | Surface card: bg-surface + border-default | Custom card backgrounds |

### F. Component CSS Budget — The 90% Rule

**Components must be 90% utility-based.** Custom scoped CSS is allowed only for:
- Complex animations (`@keyframes`, multi-step transitions)
- Pseudo-elements (`::before`, `::after`)
- States that Tailwind can't express (e.g. `.is-active` toggled by JS)
- Canvas/SVG rendering logic

**If a margin, padding, font-size, colour, or border exists as a utility class or Tailwind config value, writing custom CSS for it is a Critical Failure.**

How to audit: Open any `.astro` component's `<style>` block. If you see `font-size:`, `padding:`, `margin:`, `color:`, `background-color:`, or `border-radius:` with hardcoded values that could be replaced by a utility class — it's a violation. Fix it.

### G. Spacing
- **8pt grid system.** All spacing must be multiples of 8px (0.5rem).
- Valid values: 0.25rem (4px exception), 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem, 5rem, 8rem.
- No off-grid values like 10px, 14px, 28px.

### H. Motion Physics

All transitions and animations use the same easing curve — no exceptions.

| Property | Value |
|----------|-------|
| **Global easing** | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Reveal Y-offset** | `20px` (starting translateY for scroll reveals) |
| **Reveal blur** | `8px` (starting `filter: blur(8px)`, fades to 0) |
| **Reveal opacity** | `0 → 1` |
| **Reveal duration** | `600ms` per element |
| **Stagger delay** | `80ms` between sibling elements |
| **Trigger** | `IntersectionObserver`, threshold: 0.15, rootMargin: `0px 0px -60px 0px` |

**Never use** `0.3s ease`, `ease-in-out`, or any other generic timing function. The luxury bezier curve is what makes animations feel premium.

Tailwind config should include:
```
transitionTimingFunction: {
  'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
```

`prefers-reduced-motion: reduce` → disable all transforms, blur, and opacity transitions. Content appears immediately. Non-negotiable.

### I. Card & Surface Rules
- Cards use inner border (`border: 1px solid`), NOT `box-shadow` for outlines
- Default border: `var(--color-border-default)` → `rgba(255,255,255,0.05)`
- Green glow effects use `radial-gradient`, NOT CSS `blur()`
- Hover treatment: `translateY(-4px)`, layered shadow, border brightens to `rgba(255,255,255,0.1)`
- Border radius: `4px` for cards, use token values for other elements
- Hover easing: always `cubic-bezier(0.16, 1, 0.3, 1)` — never generic `ease`

### J. Engineering Rules
- **No inline styles** for static properties — Tailwind classes or scoped CSS only
- **No hardcoded values** — everything references tokens via CSS variables or Tailwind config
- **Zero JS where possible** — prefer CSS (`@keyframes`, `transition`, `:hover`, `scroll-behavior`)
- **Semantic HTML** — correct use of `<section>`, `<header>`, `<nav>`, `<h2>`, `<blockquote>`
- **Accessibility** — `aria-label` on every `<section>`, `prefers-reduced-motion` on all animations
- **90% utility rule** — if a utility class or Tailwind value exists, use it. Custom CSS only for animation, pseudo-elements, and JS-toggled states.
- **No filler content** — if a section has insufficient data to build properly, insert a `<!-- TODO: [what's needed] -->` comment. Never pad with placeholder copy.

### K. Forbidden UI Patterns

The agent must never produce any of the following. If it catches itself generating one, it must stop and redesign.

- Pill-shaped buttons (max `border-radius: 8px`)
- Generic 3-column icon grids (the "features" section every template ships with)
- Heavy `box-shadow` (use `border` or subtle shadow with low spread)
- Border radius exceeding `12px` on any element
- Template-style hero (centered text + stock image + gradient overlay)
- Stock card layouts (uniform cards in a grid with icon + title + description — same height, same structure)
- Carousels or sliders without a clear UX justification
- "Read More" truncation links on homepage sections
- Floating chat widgets or popups in the initial build
- Oversaturated or neon colour treatments
- Auto-playing video with sound

### L. Performance Targets

| Metric | Target | Acceptable Floor |
|--------|--------|-----------------|
| Lighthouse Performance | 98+ | 95 (documented reason for each lost point) |
| Lighthouse Accessibility | 100 | 100 (no exceptions) |
| Lighthouse Best Practices | 100 | 98 |
| Lighthouse SEO | 100 | 100 (no exceptions) |
| LCP | < 2.5s | < 3.0s |
| CLS | < 0.05 | < 0.1 |
| INP | < 100ms | < 200ms |

Rules:
- Third-party scripts (analytics, etc.) must use `defer` or `async` — never render-blocking
- If a third-party embed causes a score drop, document which metric dropped and why. Do not silently ship below-target scores.
- `font-display: swap` on all `@font-face` declarations — no invisible text during load

### M. Copy Length Constraints

| Element | Max Length | Rule |
|---------|-----------|------|
| H1 headline | 8 words | Punchy, no filler |
| H2 section heading | 12 words | Supports H1, adds context |
| Section body paragraph | 2–3 sentences | Say it once, say it well |
| CTA button text | 3 words | Action-first (e.g. "Start a project") |
| Meta description | 155 characters | Includes primary keyword + value prop |
| `<title>` tag | 60 characters | Includes "Straya Studio" |

### N. Asset Rules

| Rule | Requirement |
|------|-------------|
| Image format | `.webp` or `.avif` only (`.svg` for icons/logos) |
| Image serving | Always use Astro `<Image>` component |
| Below-fold images | `loading="lazy"` |
| Above-fold / LCP image | `loading="eager"` + `fetchpriority="high"` |
| Alt text | Descriptive, 8–15 words. Empty `alt=""` + `aria-hidden="true"` only for decorative images |
| Video | Autoplay muted inline only. Always provide `poster` frame. No autoplay with sound. |
| No layout shifts | All `<img>` and `<video>` must have explicit `width`/`height` or `aspect-ratio` CSS |

### O. Accessibility Standards

These are non-negotiable. Every component must meet all of them.

| Requirement | Implementation |
|-------------|---------------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` — no `<div>` soup |
| Landmark labels | `aria-label` on every `<section>` and `<nav>` |
| Skip link | First focusable element on the page: "Skip to main content" link |
| Focus indicators | Visible `:focus-visible` ring on all interactive elements (min 2px, contrasting colour) |
| Keyboard navigation | All interactive elements reachable via Tab. No keyboard traps. |
| Colour contrast | Normal text: WCAG AA 4.5:1 minimum. Large text (18px+ bold or 24px+): 3:1 minimum. Verify — don't assume. |
| Form labels | Every `<input>` has a visible `<label>`. No placeholder-only labels. |
| Screen reader summaries | Complex visual sections (timelines, comparison tables, process steps) must include `sr-only` text summarising the content |
| Reduced motion | See §5.H Motion Physics |

### P. Quality Gate (Pre-Delivery Checklist)

Before delivering any component or page, the agent must self-check against all of the following. If any check fails, fix it before shipping.

- [ ] No forbidden UI patterns from §5.K
- [ ] No hardcoded colours, spacing, or font values
- [ ] No forbidden vocabulary from §2 Voice Rules
- [ ] All images use Astro `<Image>` with webp/avif
- [ ] All `<section>` elements have `aria-label`
- [ ] `prefers-reduced-motion` covers every animation
- [ ] Max one primary CTA per viewport
- [ ] All headings use `clamp()` fluid type
- [ ] No `!important` overrides
- [ ] No unused CSS in `<style>` blocks
- [ ] No console errors
- [ ] No layout shifts (all media has dimensions)
- [ ] JSON-LD is valid if page includes Schema
- [ ] Component is 90%+ utility-based (§5.F rule)
- [ ] Motion uses luxury bezier, never generic ease

---

## 6. Homepage Sections & Conversion Pipeline

Every section serves a specific stage in the conversion pipeline.

| # | Section | Status | Pipeline Stage | What It Does |
|---|---------|--------|---------------|-------------|
| 01 | Hero | ✅ Done | Qualify | Headline + subtext filter for the right audience |
| 02 | Trust Bar | ✅ Done | Anchor | Platform logos signal technical credibility |
| 03 | Services Marquee | ✅ Done | Scope | Shows exactly what we do |
| 04 | The Straya Method | ✅ Done (v4) | Trust | Transparent process builds confidence |
| 05 | Comparison Table | ✅ Done | Differentiate | Positions studio vs alternatives |
| 06 | Why Straya (Bento) | ✅ Done | Justify | Proves speed, quality, communication, ownership |
| 07 | Pricing | ✅ Done | Commit | Clear tiers remove price anxiety |
| 08 | Testimonials | ✅ Done | Validate | Social proof from similar founders |
| 09 | Selected Work | ❌ Not started | Validate | Portfolio / case studies |
| 10 | FAQ | ❌ Not started | Reassure | Common objections answered |
| 11 | Final CTA | ❌ Not started | Convert | Last push with scarcity badge |
| 12 | Navbar | ✅ Done | Navigation | Floating pill, scroll blur, mobile menu |

### Section Header Pattern (follow for all sections)
```
[ Green uppercase label ]            [ Ghost CTA button → ]
[ Large display heading ]
[ Optional muted subtitle ]
```
- Label: `0.75rem`, `500`, `0.1em` letter-spacing, uppercase, `--color-accent`
- Title: `clamp(1.75rem, 4vw, 2.75rem)`, `500`, `--font-display`
- CTA: ghost button (transparent bg, `--color-border-default` border), arrow shifts on hover

### Section Background Rhythm

Alternate backgrounds to create visual depth and guide the eye. Max 2–3 elevated sections per page. Stay within the token range — never introduce new background colours.

| Section | Background | Token | Role |
|---------|-----------|-------|------|
| Hero | `#050505` | `--color-background-base` | Dark, lets effects breathe |
| Trust Bar | `#050505` | `--color-background-base` | Thin divider, no change |
| Services | `#0A0A0A` | `--color-background-surface` | Subtle lift |
| Straya Method | `#050505` | `--color-background-base` | Back to dark |
| Comparison | `#0F1115` | `--color-background-elevated` | **Anchor section** — visually distinct |
| WhyStraya | `#050505` | `--color-background-base` | Back to dark |
| Pricing | `#0A0A0A` | `--color-background-surface` | Subtle lift |
| Testimonials | `#0F1115` | `--color-background-elevated` | **Anchor section** — visually distinct |
| Final CTA | Green-tinted | `rgba(60,205,127, 0.03)` over base | Closing accent moment |

**Rules:**
- The pattern is: dark → subtle → dark → elevated → dark → subtle → elevated → accent
- Elevated sections (`#0F1115`) are reserved for trust-building moments (Comparison, Testimonials)
- Never use more than 2–3 elevated sections or the rhythm breaks
- Never use fully opaque greys like `#1a1a1a` — stay within `#050505` / `#0A0A0A` / `#0F1115`
- Never add coloured tints (green, blue) to regular sections — save colour for the Final CTA only

---

## 7. Visual Effects (Global)

| Component | Scope | Z-Index | Description |
|-----------|-------|---------|-------------|
| `CursorGlow.astro` | Site-wide (BaseLayout, first child of body) | 0 | Light beam that trails cursor behind all content |
| `GlobalGrain.astro` | Site-wide (BaseLayout, before `</body>`) | 1 | Subtle film grain overlay, 4% opacity, overlay blend |
| `HeroEffects.astro` | Hero section only (first child of hero `<section>`) | 0 | Light beam from top-right + mouse-reactive gradient orb |

### Z-Index Stack
```
Cursor beam canvas          z-index: 0
Hero effects (beam + orb)   z-index: 0   (inside hero, relative)
Global grain                z-index: 1
Hero content                z-index: 1   (inside hero, relative)
Page sections               z-index: 10
Navbar                      z-index: 50
```

---

## 8. Conversion Pathways

**Pathway A — "Start a project" (Direct)**
- For founders who know what they need
- Brief form: project type, platform preference, timeline, budget range
- Quick qualification → scoping call → quote → kickoff

**Pathway B — "Book a call" (Consultative)**
- For larger or complex projects that need scoping
- 15-minute video call with Salman directly
- Discovery → proposal → kickoff

---

## 9. Operational Rules

- Maximum 2–3 active projects at any time — no exceptions
- Every project gets a scope document before work begins
- Client communicates directly with Salman — no intermediaries
- 50/50 payment split — no work starts without the first payment
- All deliverables transferred to client-owned infrastructure — zero lock-in
- Post-project: request testimonial, publish case study, update portfolio

---

## 10. Inbound Brief Conversion Pipeline

When a brief arrives in ANY format (text description, screenshot, raw HTML, Figma spec, reference from another site), run this pipeline before writing code.

### Step 1 — Extract the Intent
Identify the functional goal. Ignore all visual decisions from the source — colours, fonts, spacing, layout. Keep only structural logic and content hierarchy.

### Step 2 — Remap to Design Tokens
Replace every visual value with the token from `design-tokens.json`:
- Backgrounds → background tokens
- Text colours → text tokens
- Borders → border tokens
- Spacing → 8pt grid multiples
- Radius → radius tokens
- Typography → font-size and weight tokens
- Transitions → transition tokens

### Step 3 — Apply Brand Voice
Rewrite copy to match Straya Studio voice:
- Studio "We / The Studio" voice — never solo freelancer
- Elevation narrative — services elevate brands
- Platform hierarchy respected in any service mentions
- No founder voice outside the About page
- Follow the "never say" rules from Section 2

### Step 4 — Apply Deep Space Elevation Theme
- Background: base (#050505) or surface (#0A0A0A)
- Cards: border (`rgba(255,255,255,0.05)`), no heavy shadows
- Accent: #3CCD7F for CTAs, active states, highlights
- Hover: green accent border + translateY(-4px) + layered shadow
- Typography: `--font-display` for headings, `--font-body` for body
- Pills/badges: dark background + green accent text

### Step 5 — Enforce Layout Rules
- Container: `main-container` values (1400px max, responsive padding)
- Spacing: 8pt grid, section padding 5rem/8rem
- Responsive: all three breakpoints (390/810/1200)

### Step 6 — Clean the Code
- No inline styles — Tailwind or scoped CSS
- Hex values from the token table are fine — CSS variables only when doing calculations or dynamic blending
- No off-grid spacing values — must match 8pt grid
- No new dependencies without approval
- Semantic HTML verified
- `prefers-reduced-motion` on all animations
- `aria-label` on all sections

### Step 7 — AEO Check
- Does the section need a visually hidden `sr-only` summary for AI crawlers? Add if yes.
- Do new service mentions match the platform hierarchy and `llms-full.txt`?

### Quick Reference

| Source Element | Always Replaced With |
|---|---|
| Any background colour | Hex value from token table (e.g. `#050505`, `#0A0A0A`) |
| Any accent colour | `#3CCD7F` (hex preferred, `var(--color-accent)` only for calculations) |
| Any font family | `--font-body` (Inter) / `--font-display` (Bricolage Grotesque) |
| Any border-radius | Token from `design-tokens.json` |
| Any spacing | Nearest 8pt grid multiple |
| Any shadow (static) | `border: 1px solid` inner border |
| Any copy | Straya Studio voice |
| Any inline style | Tailwind class or scoped CSS |

---

## 11. SEO & AI Layer — Do Not Modify

These files are complete. Do not edit unless explicitly instructed:
- `llms.txt` — AI summary profile
- `llms-full.txt` — Full professional profile
- `Schema.astro` — JSON-LD with `hasOfferCatalog` for all platforms
- `robots.txt` — All AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot, etc.)
- Both LLM `<link>` tags must remain in `<head>` via `BaseLayout.astro`

**Constraint:** Never modify `robots.txt` — only add crawlers, never remove.

---

## 12. Agent Constraints (Summary)

1. All copy reflects studio voice — never solo freelancer tone
2. All meta tags and canonicals → `strayastudio.com`
3. Zero-JS where possible — CSS-first Astro builds
4. Platform hierarchy respected everywhere
5. Never modify `robots.txt` AI crawler list — add only
6. Both LLM files discoverable via `<link>` tags in `BaseLayout.astro`
7. Full `hasOfferCatalog` in `Schema.astro` at all times
8. Clear, high-end English for Western professional audiences
9. No hardcoded values — everything via `design-tokens.json`
10. Run the full 7-step Conversion Pipeline (Section 10) before writing any code
11. Never say "cheap", "affordable", "budget", "discount", "outsource"
12. Pakistan appears on About page and footer only — never in marketing copy
13. Pricing is project-based only — no subscriptions, no retainers
14. Maximum 2–3 active projects — this scarcity is part of the brand