# Straya Studio — SEO & AEO Instructions

> AI discovery, structured data, meta tags, robots, and search engine optimisation rules.
> This file is **non-negotiable**. Every rule here must be maintained regardless of design changes, theme switches, or component rebuilds.

---

## 1. AI Discovery Files

| File | Location | Purpose |
|------|----------|---------|
| `llms.txt` | `/public/llms.txt` | Short brand summary for AI crawlers — who we are, what we do, pricing, key pages |
| `llms-full.txt` | `/public/llms-full.txt` | Comprehensive profile — 3 disciplines, 5 platforms, pricing tiers, process, credentials, engagement flow |

**Rules:**
- Both files written in studio voice ("We" / "Straya Studio")
- Both must reflect current business model: project-based, 3 disciplines, 5 platforms, current pricing
- If services, pricing, or positioning change — update both files immediately
- Never delete. Never leave stale.

---

## 2. Head Tags (Required in BaseLayout.astro)

These `<link>` tags MUST remain in `<head>` on every page:

```html
<link rel="llms" href="/llms.txt" />
<link rel="llms-full" href="/llms-full.txt" />
```

**Rule:** Never remove. If `BaseLayout.astro` is rebuilt, carry these forward. They are how AI crawlers discover the studio's profile.

---

## 3. AEO Header (Required on Homepage)

`AEOHeader.astro` renders a visually hidden (`sr-only`) executive summary as the first `<section>` inside `<main>`. This is the first content AI crawlers read when indexing the homepage.

```html
<section aria-label="Executive Summary" class="sr-only">
  <p>
    <strong>Straya Studio</strong> is a boutique web design and development
    studio founded by <strong>Salman Ali</strong>, an <strong>Official
    Certified Framer Expert</strong>. The studio takes on 2–3 projects at a
    time, delivering custom <strong>web design</strong>, <strong>web
    development</strong>, and <strong>graphic design</strong> across
    <strong>Framer</strong>, <strong>Webflow</strong>,
    <strong>Shopify</strong>, <strong>Wix</strong>, and
    <strong>WordPress</strong> for tech founders, startups, and growth-stage
    businesses in the US, Canada, UK, Europe, and Australia. Project-based
    pricing starts at $2,000 with no retainers or subscriptions required.
  </p>
</section>
```

**Rules:**
- Must remain on homepage as first child of `<main>`
- `<strong>` tags on key terms: studio name, founder, certification, disciplines, platforms
- Update pricing floor if tier prices change
- Never remove or comment out

---

## 4. Schema / JSON-LD (Required on Every Page)

`Schema.astro` outputs `<script type="application/ld+json">`.

**Top-level type:** `ProfessionalService`

**Offer structure (3 layers):**
1. **3 Core Disciplines** — Web Design, Web Development, Graphic Design
2. **5 Platform offers** — Framer (Premium), Webflow (Premium), Shopify (Premium), Wix (Accessible), WordPress (Accessible) — each with sub-service catalogs
3. **3 Pricing tiers** — Starter (from $2,000), Growth (from $4,000), Premium (from $9,500) — each with `PriceSpecification`

**Also includes:**
- `founder` with `hasCertification` (Official Framer Expert)
- `aggregateRating` (5.0 across 100+ reviews)
- `areaServed` (US, Canada, Australia, UK, Germany, Netherlands, France, Ireland)
- `knowsAbout` — 18 high-signal keywords

**Rules:**
- `hasOfferCatalog` maintained at all times — never flatten or remove sub-catalogs
- New platform → add as Offer with its own sub-catalog
- Pricing change → update `PriceSpecification` min/max values
- Must pass validation at https://validator.schema.org/
- Never remove `aggregateRating`

---

## 5. Robots.txt

Location: `/public/robots.txt`

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://strayastudio.com/sitemap.xml
```

**Rule:** Never block AI crawlers. Never remove any `User-agent` entry. Only ADD new crawlers as they emerge.

---

## 6. Meta & Open Graph (Every Page)

| Tag | Requirement |
|-----|------------|
| `<title>` | Max 60 characters, includes "Straya Studio" |
| `<meta name="description">` | Max 155 characters, primary keyword + value prop |
| `<meta property="og:title">` | Same as `<title>` or adapted |
| `<meta property="og:description">` | Same as meta description |
| `<meta property="og:image">` | OG image (1200×630px recommended) |
| `<meta property="og:url">` | Canonical URL |
| `<meta name="twitter:card">` | `summary_large_image` |
| `<link rel="canonical">` | Full canonical URL — every page |
| Favicon set | `.ico`, `.svg`, `apple-touch-icon.png` |

**Rules:**
- All canonicals → `strayastudio.com` (never staging, never localhost)
- OG image must exist and be accessible
- Meta descriptions unique per page — no duplicates

---

## 7. sr-only Summaries

Any section that is primarily visual (timelines, comparison tables, bento grids, process steps, interactive elements) MUST include a visually hidden `sr-only` paragraph summarising its content.

```html
<p class="sr-only">
  Straya Studio follows a four-step process called The Straya Method —
  Discovery, Architecture, Engineering, and Optimisation — to deliver
  high-performance platforms across Framer, Webflow, Shopify, Wix,
  and WordPress.
</p>
```

**Rule:** If a section's meaning cannot be understood from raw HTML text alone, it needs an sr-only summary.

---

## 8. Agent Constraints (SEO-Specific)

These apply regardless of theme, mode, or design direction:

1. Both `llms.txt` and `llms-full.txt` discoverable via `<link>` tags in `<head>`
2. `Schema.astro` maintains full `hasOfferCatalog` at all times
3. Never modify `robots.txt` — only add crawlers, never remove
4. All meta tags and canonicals → `strayastudio.com`
5. `AEOHeader.astro` remains on homepage as first child of `<main>`
6. Every `<section>` has `aria-label`
7. Complex visual sections include `sr-only` summaries
8. If pricing/services/positioning change → update `llms.txt`, `llms-full.txt`, `Schema.astro`, and `AEOHeader.astro` in the same commit