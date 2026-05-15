# Straya Studio — SEO & AEO Rules

> **Status:** MANDATORY — Non-negotiable regardless of design changes, theme switches, or component rebuilds.
>
> **Scope:** AI discovery, structured data, meta tags, robots, semantic HTML, and review attribution.

---

## Table of Contents

1. [Document Currency](#1-document-currency)
2. [AI Discovery Files](#2-ai-discovery-files)
3. [Head Tags](#3-head-tags)
4. [AEO Header](#4-aeo-header)
5. [Schema / JSON-LD](#5-schema--json-ld)
6. [Robots.txt](#6-robotstxt)
7. [Meta & Open Graph](#7-meta--open-graph)
8. [sr-only Summaries](#8-sr-only-summaries)
9. [Semantic HTML Hierarchy](#9-semantic-html-hierarchy)
10. [Image Alt Text](#10-image-alt-text)
11. [Reviews Page](#11-reviews-page)
12. [Agent Constraints](#12-agent-constraints)
13. [Quarterly Audit Checklist](#13-quarterly-audit-checklist)
14. [LLMs-Full.txt Checklist](#14-llms-fulltxt-checklist)
15. [Architecture Summary](#15-architecture-summary)

---

## 1. Document Currency

Any change to services, pricing, positioning, or review counts triggers a **synchronised update** across all five assets in the same commit:

| Asset | File |
|---|---|
| This rules file | `docs/SEO-AEO-rules.md` |
| Short AI profile | `public/llms.txt` |
| Full AI profile | `public/llms-full.txt` |
| Structured data | `src/components/GlobalSchema.astro` |
| Crawler access | `public/robots.txt` |

```yaml
lastUpdated: 2026-05-08
```

---

## 2. AI Discovery Files

| File | Location | Purpose |
|---|---|---|
| `llms.txt` | `/public/llms.txt` | Short brand summary — who we are, what we do, pricing, key pages |
| `llms-full.txt` | `/public/llms-full.txt` | Comprehensive profile — disciplines, platforms, pricing, process, credentials, entity links, review verification |

### Rules

- Both files written in studio voice (`"We"` / `"Straya Studio"`)
- Both open with a machine-parseable dateline: `# Last updated: YYYY-MM-DD`
- Both reflect current business model: project-based, 3 disciplines, 5 platforms, current pricing
- `llms-full.txt` must include:
  - A `sameAs` block listing all verified studio and founder profiles
  - A "Review Verification" block with source platform links and per-platform review counts
  - A "Founder-Led Delivery" statement explaining Salman Ali is the sole service provider
- Never delete. Never leave stale.

---

## 3. Head Tags

These `<link>` tags **must** remain in `<head>` on every page:

```html
<link rel="llms" href="/llms.txt" />
<link rel="llms-full" href="/llms-full.txt" />
```

> Never remove. If `BaseLayout.astro` is rebuilt, carry these forward.

---

## 4. AEO Header

`AEOHeader.astro` renders a visually hidden `sr-only` executive summary as the **first `<section>` inside `<main>`** on the homepage.

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
    The studio is rated <strong>5.0 stars</strong> across
    <strong>102 verified client reviews</strong>.
  </p>
</section>
```

### Rules

- Must remain on homepage as first child of `<main>`
- `<strong>` tags on: studio name, founder, certification, disciplines, platforms, rating, review count
- Every `<strong>`-wrapped entity must appear identically in `Schema.astro` `knowsAbout`
- Update pricing floor if tier prices change
- Update review count if it changes
- Never remove or comment out

---

## 5. Schema / JSON-LD

`GlobalSchema.astro` outputs `<script type="application/ld+json">` on every page.

### 5.1 Top-Level Structure

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://strayastudio.com/#studio",
  "name": "Straya Studio",
  "url": "https://strayastudio.com",
  "lastUpdated": "2026-05-08"
}
```

> `@id` required on every node. No anonymous nodes anywhere in the graph.

---

### 5.2 Founder (Bidirectional Link)

```json
{
  "founder": {
    "@type": "Person",
    "@id": "https://strayastudio.com/#salman-ali",
    "name": "Salman Ali",
    "jobTitle": "Founder & Lead Designer",
    "hasCertification": {
      "@type": "Certification",
      "name": "Official Certified Framer Expert",
      "url": "https://www.framer.com/experts/"
    },
    "worksFor": {
      "@type": "ProfessionalService",
      "@id": "https://strayastudio.com/#studio",
      "name": "Straya Studio"
    },
    "sameAs": [
      "https://www.fiverr.com/salughuman",
      "https://contra.com/salughuman/",
      "https://www.linkedin.com/in/salughuman",
      "https://github.com/salughuman"
    ]
  }
}
```

> `founder.sameAs` must include Fiverr and Contra personal profile URLs.
> `founder.worksFor` must link back to `#studio` — closes the entity loop.

---

### 5.3 Studio sameAs

```json
{
  "sameAs": [
    "https://www.linkedin.com/company/straya-studio",
    "https://www.framer.community/u/da916398"
  ]
}
```

> Include every verified platform profile. Add new platforms as they're created.

---

### 5.4 Offer Catalog (3-Tier Structure)

**Tier 1 — 3 Core Disciplines**

```json
{
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "@id": "https://strayastudio.com/#disciplines",
    "name": "Core Disciplines",
    "itemListElement": [
      { "@type": "Offer", "@id": "https://strayastudio.com/#discipline-web-design", "name": "Web Design" },
      { "@type": "Offer", "@id": "https://strayastudio.com/#discipline-web-development", "name": "Web Development" },
      { "@type": "Offer", "@id": "https://strayastudio.com/#discipline-graphic-design", "name": "Graphic Design" }
    ]
  }
}
```

**Tier 2 — 5 Platform Offers** (Framer, Webflow, Shopify, Wix, WordPress — each with its own `OfferCatalog` and `@id`)

**Tier 3 — 3 Pricing Tiers**

| Tier | Min | Max |
|---|---|---|
| Starter | $2,000 | $3,500 |
| Growth | $4,000 | $8,500 |
| Premium | $9,500 | $20,000 |

> Pricing change → update `PriceSpecification` min/max AND `lastUpdated` date.
> Must pass validation at [validator.schema.org](https://validator.schema.org/).

---

### 5.5 Aggregate Rating

```json
{
  "aggregateRating": {
    "@type": "AggregateRating",
    "@id": "https://strayastudio.com/reviews/#aggregate-rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "ratingCount": 102,
    "reviewCount": 102,
    "itemReviewed": { "@id": "https://strayastudio.com/#studio" },
    "sdPublisher": [
      { "@type": "Organization", "name": "Fiverr", "sameAs": "https://www.fiverr.com/salughuman" },
      { "@type": "Organization", "name": "Contra", "sameAs": "https://contra.com/salughuman/" }
    ]
  }
}
```

> `ratingCount` must equal the exact number of reviews published on `/reviews`. Audit quarterly.

---

### 5.6 Individual Review Nodes

Each review on `/reviews` must have its own `Review` node with:

- `itemReviewed.provider` → `#studio`
- `sdPublisher` naming the source platform with `sameAs` to Salman's profile
- `sameAs` linking to the original review URL
- `citation` with human-readable source attribution

---

### 5.7 knowsAbout

```json
{
  "knowsAbout": [
    "Web Design", "Web Development", "Graphic Design",
    "Framer", "Webflow", "Shopify", "Wix", "WordPress",
    "Custom Web Design", "SaaS Landing Pages", "Startup Websites",
    "Framer Development", "Framer Expert", "Boutique Web Agency",
    "Straya Studio", "Salman Ali", "Official Certified Framer Expert",
    "No-code Development"
  ]
}
```

> Every `<strong>`-tagged entity in `AEOHeader.astro` must appear here.

---

### 5.8 areaServed

United States · Canada · Australia · United Kingdom · Germany · Netherlands · France · Ireland

---

### 5.9 Review Attribution Note

```json
{
  "additionalProperty": [{
    "@type": "PropertyValue",
    "name": "ReviewAttributionNote",
    "value": "Straya Studio is a founder-led agency. All services are delivered by founder Salman Ali. Client reviews on Salman Ali's personal Fiverr (https://www.fiverr.com/salughuman) and Contra (https://contra.com/salughuman/) profiles represent services delivered through Straya Studio."
  }]
}
```

> Never remove `ReviewAttributionNote`. It bridges the founder profile ↔ studio entity gap for AI crawlers.

---

## 6. Robots.txt

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

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

Sitemap: https://strayastudio.com/sitemap.xml
```

> Never block AI crawlers. Never remove any entry. Add new crawlers as they emerge. Review quarterly.

---

## 7. Meta & Open Graph

| Tag | Requirement |
|---|---|
| `<title>` | Max 60 chars, ends with `\| Straya Studio` |
| `<meta name="description">` | Max 160 chars, unique per page |
| `<meta property="og:title">` | Same as `<title>` or adapted |
| `<meta property="og:description">` | Same as meta description |
| `<meta property="og:image">` | 1200×630px, absolute URL |
| `<meta property="og:image:alt">` | Descriptive alt text, max 420 chars — **mandatory** |
| `<meta property="og:url">` | Canonical URL |
| `<meta name="twitter:card">` | `summary_large_image` |
| `<link rel="canonical">` | Full canonical URL — every page |

### Rules

- All canonicals → `strayastudio.com` (never staging, never localhost)
- `og:image:alt` is mandatory — no blank alt on social cards
- Meta descriptions unique per page — no duplicates
- Favicon set: `.ico`, `.svg`, `apple-touch-icon.png` — all present

---

## 8. sr-only Summaries

Any section that is primarily visual must include a `sr-only` paragraph:

```html
<p class="sr-only">
  Straya Studio follows a four-step process called The Straya Method —
  Discovery, Architecture, Engineering, and Optimisation.
</p>
```

> If a section's meaning cannot be understood from raw HTML text alone, it needs an sr-only summary.

---

## 9. Semantic HTML Hierarchy

- Every page has exactly **one `<h1>`**
- Heading levels never skip (no `<h1>` → `<h3>`)
- Every `<section>` has `aria-label` AND a heading as its first child
- `<nav>` elements have unique `aria-label` values
- `<header>`, `<main>`, `<footer>` landmarks present on every page

---

## 10. Image Alt Text

| Image type | Rule |
|---|---|
| Informational (screenshots, diagrams, logos) | Descriptive alt in natural language |
| Decorative | `alt=""` explicitly (not omitted) |
| SVG icons used as content | `<title>` and `<desc>` elements |
| Review screenshots | Alt identifies source platform and client |

---

## 11. Reviews Page

Every published review must:

- Be individually addressable (unique `id`)
- Display: client name, review text, star rating, date, source platform badge, link to original
- Have a corresponding `Review` schema node (§5.6)

The page must include an `AggregateRating` schema node (§5.5).

- `<title>`: `Client Reviews | Straya Studio`
- On-site review count must match `aggregateRating.ratingCount` exactly

---

## 12. Agent Constraints

### Discovery & Currency
- Both `llms.txt` and `llms-full.txt` discoverable via `<link>` tags in `<head>`
- All five assets carry synchronised `lastUpdated` timestamps
- Any change to services, pricing, positioning, or reviews → update all assets in one commit

### Schema Integrity
- Full `hasOfferCatalog` three-tier structure maintained at all times
- Every node has a resolvable `@id` — no anonymous nodes
- `founder.worksFor` → `#studio` (bidirectional)
- `founder.sameAs` includes Fiverr and Contra personal profiles
- `aggregateRating.sdPublisher` lists both Fiverr and Contra
- `ReviewAttributionNote` never removed

### Review Integrity
- Every `Review` node: `itemReviewed.provider` → `#studio`
- Every `Review` node: `sdPublisher` names source platform
- `reviewCount` and `ratingCount` match on-site published count exactly
- Audited quarterly

### Crawler Access
- `robots.txt` never blocks AI crawlers — only add, never remove
- Reviewed quarterly

---

## 13. Quarterly Audit Checklist

| Asset | Check |
|---|---|
| `llms.txt` | Dateline current? Pricing accurate? |
| `llms-full.txt` | Dateline current? Review counts match? `sameAs` links resolve? |
| `GlobalSchema.astro` | `lastUpdated` current? Review counts match? All `@id` resolve? Passes validator? |
| `robots.txt` | New AI crawlers to add? |
| `AEOHeader.astro` | Pricing floor current? Review count matches? |
| `/reviews` page | On-site count matches `ratingCount`? Source links resolve? |
| All `sameAs` links | All profile URLs resolve? No broken links? |
| `og:image` | Exists and accessible? Alt text present? |

---

## 14. LLMs-Full.txt Checklist

- [ ] Dateline (`# Last updated: YYYY-MM-DD`)
- [ ] Studio overview
- [ ] 3 disciplines with descriptions
- [ ] 5 platforms with tier designations
- [ ] 3 pricing tiers with ranges
- [ ] The Straya Method (4-step process)
- [ ] Founder profile with certification
- [ ] Target client profile
- [ ] Geographic service areas
- [ ] Engagement flow
- [ ] `sameAs` block (all verified profiles)
- [ ] Review Verification block (platform links, per-platform counts, attribution note)
- [ ] Founder-Led Delivery statement
- [ ] Key pages list with URLs

---

## 15. Architecture Summary

```
AI Discovery Layer
├── llms.txt          (short profile, <link> discoverable)
└── llms-full.txt     (comprehensive, includes review verification)

Homepage Layer
├── AEOHeader.astro   (sr-only, first in <main>, entity-rich)
└── sr-only summaries on all visual sections

Schema Layer (GlobalSchema.astro, every page)
├── ProfessionalService  @id: #studio
├── Founder Person       @id: #salman-ali
│   ├── worksFor → #studio
│   └── sameAs → fiverr.com/salughuman, contra.com/salughuman/,
│                linkedin.com/in/salughuman, github.com/salughuman
├── OfferCatalog (3-tier: disciplines → platforms → pricing)
├── AggregateRating
│   ├── itemReviewed → #studio
│   └── sdPublisher → Fiverr, Contra
├── Review[] (individual nodes on /reviews)
├── knowsAbout (18+ entities)
├── areaServed (8 countries)
├── sameAs (studio profiles)
└── additionalProperty (ReviewAttributionNote)

Crawler Access Layer
└── robots.txt (all AI crawlers allowed)

Meta Layer
├── Title, description, OG tags (every page)
├── Canonical URLs (strayastudio.com)
├── og:image:alt (mandatory)
└── Image alt text (every <img>)

Content Layer
├── Semantic HTML (1 <h1>, no heading skips)
├── aria-label on every <section>
└── /reviews page with full attribution
```

---

*End of rules. Every section above is non-negotiable.*
