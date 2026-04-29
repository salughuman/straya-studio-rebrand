# Straya Studio — Asset Direction

> **Status:** MANDATORY. Companion to `design-system.md` v2.1 and `production-aesthetic.md`.
>
> **Why this exists:** The design system bans raw stock and demands treated imagery. This document specifies *what to use*, *how to treat it*, and *how to manage placeholders* until commissioned work arrives.

---

## 1. The Asset Categories

Every image on the site falls into one of these six categories. Each has a defined treatment, source standard, and replacement priority.

| Category | Use | Treatment | Eventual source |
|---|---|---|---|
| **Hero photography** | Above-fold imagery on hero, key landing pages | `.img-duotone` or `.img-dithered` | Commissioned editorial photographer |
| **Case study imagery** | Work detail pages, full-bleed shots | `.img-frame-cut` or raw with `.img-brutalist` filter | Real client deliverables (screenshots, mockups, photography) |
| **Process documentation** | Method/about page, behind-the-scenes | `.img-dithered` (heavily) | Studio photography (workspace, sketches, screens) |
| **Founder portrait** | About page, testimonial author | `.img-duotone` (single instance, accent green) | Commissioned editorial portrait |
| **Product/UI screenshots** | Case studies, services illustration | `.img-frame-cut` (mandatory frame) | Real product screens, never stock UI |
| **Abstract texture** | Section backgrounds, dividers, fillers | Native (it *is* texture) | Generated SVG, photographed paper/concrete, scanned grain |

**Universal rule:** every `<img>` element on the site must declare its category via `data-asset-category="hero|case-study|process|portrait|product|texture"`. This makes the placeholder audit trivial.

---

## 2. Placeholder Strategy (Pre-Commission)

Until real assets are produced, use **curated Unsplash placeholders with mandatory treatment**. Raw Unsplash is still banned — the treatment class is what makes a placeholder acceptable.

### The placeholder rules

1. **Every placeholder is marked.** Add `data-placeholder="true"` to the element. No exceptions. This drives the audit.
2. **Every placeholder has a treatment.** Apply one of the four classes from `production-aesthetic.md` §A2 (`.img-brutalist`, `.img-dithered`, `.img-duotone`, `.img-frame-cut`). A raw placeholder is a banned placeholder.
3. **Every placeholder has a real-asset spec.** Add `data-asset-spec="<one-line description of eventual real asset>"`. This becomes the brief for the photographer or sourcing pass later.
4. **Placeholders carry alt text.** Even if the image is decorative, the placeholder gets a meaningful alt — because the eventual real asset will need one. Don't write `alt=""` and forget.

### Markup pattern

```html
<figure
  class="frame frame-portrait"
  data-asset-category="hero"
  data-placeholder="true"
  data-asset-spec="Founder at studio desk, ambient afternoon light, looking past camera, mid-frame">
  <img
    src="https://images.unsplash.com/photo-XXXX?w=1600&auto=format"
    class="img-duotone"
    alt="Salman at the studio, mid-conversation"
    loading="lazy"
    decoding="async" />
</figure>
```

### Curated Unsplash starting points

These photographers consistently produce editorial-grade work that survives heavy treatment. Pull from their galleries when sourcing placeholders, not from generic search.

| Use | Photographer | Why they work |
|---|---|---|
| Studio/workspace | Annie Spratt | Soft daylight, real workspaces, no stylized "office" tropes |
| Architectural/textural | Joel Filipe | Brutalist concrete, geometric shadow, fits the mode |
| Portrait | Christina @ wocintechchat | Editorial portraiture, natural framing |
| Product/desk objects | Luca Bravo | Honest desk shots, real laptops, real clutter |
| Abstract texture | NASA on Unsplash | Free, public, surreal — survives dithering perfectly |
| Process/hands-on | Kelly Sikkema | Hands-and-paper, sketches, real making |

**The test:** apply `.img-dithered` to the placeholder. If it falls apart (loses subject, becomes mud), it was a stock-y photo. Replace it.

### Forbidden placeholder sources

- ❌ Generic Unsplash search (the first ten "office" results)
- ❌ Pexels stock-of-stock libraries
- ❌ Any photo with a centered smiling person on a white background
- ❌ Any photo where the subject is clearly art-directed for stock libraries (everyone in matching beige knitwear)
- ❌ AI-generated placeholders that look uncannily lit
- ❌ Lorem Picsum (random imagery, no editorial coherence)

### Texture placeholders (the safest fallback)

When in doubt — when no photo works, when the section needs material but no asset is available — fall back to **abstract texture**. These are not photographs of subjects; they are surfaces.

```html
<!-- Concrete/paper texture as a section background -->
<div
  class="img-bg"
  data-asset-category="texture"
  data-placeholder="true"
  data-asset-spec="Scanned newsprint or concrete close-up, high-contrast greyscale"
  style="background-image: url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=2400&auto=format');"
  aria-hidden="true">
</div>
```

Texture placeholders are forgiving. Photos of subjects are the risky ones.

---

## 3. The Asset Manifest

Every page lists every image it uses and the spec for the eventual real asset. This is the document that drives the photo shoot brief.

### Manifest format

Maintain `src/data/asset-manifest.ts` as a single source of truth:

```ts
// src/data/asset-manifest.ts
export type AssetSpec = {
  id: string;                    // unique slug, used as `data-asset-id`
  category: 'hero' | 'case-study' | 'process' | 'portrait' | 'product' | 'texture';
  page: string;                  // 'home' | 'about' | 'work/<slug>' | etc.
  treatment: 'brutalist' | 'dithered' | 'duotone' | 'frame-cut' | 'native';
  placeholder: string;           // current Unsplash URL or local placeholder path
  spec: string;                  // one-line brief for the eventual real shoot
  status: 'placeholder' | 'sourcing' | 'shot' | 'final';
  altText: string;
};

export const ASSETS: AssetSpec[] = [
  {
    id: 'hero-founder-portrait',
    category: 'portrait',
    page: 'home',
    treatment: 'duotone',
    placeholder: 'https://images.unsplash.com/photo-XXXX?w=1600',
    spec: 'Salman, three-quarter view, looking off-frame, studio desk in soft background, mid-afternoon natural light',
    status: 'placeholder',
    altText: 'Salman Ali, founder of Straya Studio',
  },
  // ... every image on the site
];
```

### Auditing placeholders

A single command should answer "what's left to commission?":

```bash
# Pre-launch check — list every placeholder still in production
grep -r "data-placeholder=\"true\"" src/
```

The launch criterion: **every above-fold image on every page is final, not placeholder.** Below-fold and case-study assets may ship as placeholder for the v1 launch and swap in over the first month.

---

## 4. Per-Category Direction

### Hero photography

- **Aspect:** wider than tall (`16/9` or full-bleed). Avoid square unless intentional.
- **Subject:** environmental, not portrait. The studio space, a workspace detail, an architectural surface — not a person front-and-center.
- **Treatment:** `.img-duotone` (default) using `--color-accent` over greyscale, OR `.img-dithered` for the rawest brutalist treatment.
- **Light:** natural, directional, single source. No ringlight. No HDR.
- **Composition:** asymmetric. Subject in the left or right third, not centered.
- **Resolution:** ship 2400px wide minimum, serve 1600px responsive max.

### Case study imagery

- **Real client work only.** Mockups, deployed screenshots, in-context photography of the brand, not stock.
- **Two formats per case study minimum:** one full-bleed hero shot, one detail shot.
- **Treatment:** `.img-frame-cut` for product screenshots (the brutalist frame makes them look like artifacts, not screenshots). `.img-brutalist` for environmental shots.
- **Mockups:** flat, isometric only with deliberate intent. No "iPhone in a hand" stock mockups.

### Process documentation

- **Subject:** the work, not the worker. Hands sketching, a screen mid-build, a desk in Notion-flow, a printed wireframe — not a stock "developer at desk."
- **Treatment:** `.img-dithered` heavily. Process imagery is where dither does the most work — it abstracts the photo into a pattern, which is the point.
- **Aspect:** square or `4/5`. Vertical works here because process imagery often anchors a margin-note posture.

### Founder portrait

- **One on the site.** About page only. Mentioning Salman elsewhere uses initials or text, not a face thumbnail.
- **Treatment:** `.img-duotone` with the green accent. This is the *only* duotone-green image; it becomes a signature.
- **Composition:** three-quarter, off-axis. Not corporate-headshot center.
- **Light:** window light, natural. No studio strobe.

### Product/UI screenshots

- **Always real.** Real client URLs, real client work. Never invented UI mocked for the site.
- **Treatment:** `.img-frame-cut` mandatory. The 3px border and hard shadow make them feel like physical objects, not screenshots.
- **Rotation:** the `-1.5deg` from `.img-frame-cut` is intentional — don't override.
- **Annotation allowed.** Lines pointing into a UI screenshot, with a `meta` caption nearby, is on-brand. Use this to highlight specific decisions.

### Abstract texture

- **Use for:** section backgrounds when no subject works, page-level grain, between-section bridges, the hero noise overlay.
- **Format:** prefer SVG-generated (the grain in `production-aesthetic.md` §A2) for performance. Photographic textures (concrete, paper, scanned grain) are allowed as second choice.
- **Treatment:** native — texture *is* the treatment.
- **Performance:** any photographic texture must be ≤80KB optimized. Prefer SVG.

---

## 5. Video

The hero is the only place video is mandatory. Elsewhere, video is allowed where it earns its weight (case study process clips, product walkthroughs).

### Hero video

| Property | Spec |
|---|---|
| Format | AV1 (primary) + WebM (fallback) + MP4 (legacy) |
| Resolution | 1920×1080, served downscaled responsively |
| Duration | 4–8 seconds, looping seamlessly |
| Audio | None. `muted` always. |
| File size | ≤1.5MB total across all formats |
| Subject | Environmental, not person-focused. The studio, a screen mid-build, an architectural surface in motion. |
| Treatment | The hero scrim and noise overlay (§13) sit over the video — the video itself is unprocessed. |

### Case study video

- **Allowed for:** process documentation, before/after walkthroughs, scroll-recorded interactions.
- **Treatment:** scrubbed to scroll position via the `data-scrub` primitive (§A4). Never autoplay-loop in body.
- **Aspect:** match the surrounding posture. A `bleed-right` posture takes a horizontal video; a `margin-note` posture takes a vertical clip.

### Forbidden video patterns

- ❌ Background-loop video on every section (atmosphere theater)
- ❌ Autoplay video with sound
- ❌ Video that plays on hover (jumpy, breaks reading)
- ❌ Stock video footage. Same rule as photography.

---

## 6. File Standards

### Formats

- **Photos:** AVIF primary, WebP fallback, JPEG only for legacy. Generate via Astro image pipeline.
- **Vectors:** SVG, hand-optimized (no Figma export sludge). Run through SVGO.
- **Logos:** SVG only. No PNG logos in `/public`. Ever.
- **Video:** AV1 + WebM + MP4 in that order.

### Naming

```
public/images/<category>/<slug>-<variant>.<ext>

public/images/hero/founder-portrait.avif
public/images/case-studies/knine/hero.avif
public/images/case-studies/knine/dashboard-detail.avif
public/images/process/sketch-flow.avif
public/images/textures/concrete-01.avif
```

- Lowercase, kebab-case, no spaces, no version numbers in filenames (use git for versioning).
- Slugs match `asset-manifest.ts` `id` field exactly.

### Sizes

| Use | Max width served | File size target |
|---|---|---|
| Hero (above fold) | 1920px | ≤220KB |
| Section imagery | 1600px | ≤180KB |
| Case study detail | 2400px | ≤320KB |
| Thumbnail | 800px | ≤80KB |
| Texture | 2400px (tileable) | ≤80KB |

Astro's `<Image>` component handles responsive variants — define source at max width, let the pipeline generate the rest.

---

## 7. The Pre-Launch Audit

Before shipping any page to production, run this check:

- [ ] Every `<img>` has `data-asset-category` attribute
- [ ] Every placeholder has `data-placeholder="true"` AND `data-asset-spec`
- [ ] Every placeholder has a treatment class applied (no raw Unsplash)
- [ ] Every entry in `src/data/asset-manifest.ts` has `status` set
- [ ] No image >320KB ships in production
- [ ] No placeholder above the fold on the homepage at launch
- [ ] All hero/portrait assets are final, not placeholder
- [ ] `alt` attributes are meaningful, not decorative-when-they-shouldn't-be

The status of the manifest IS the project status. If 60% of assets are still `placeholder`, the site is 60% wireframe.

---

## 8. The Three Asset Laws

> **I. No raw stock.** Every image gets a treatment class. Every placeholder is marked. The treatment is what separates a placeholder from a wireframe.
>
> **II. The manifest is the brief.** When the photographer arrives, they don't ask "what do you need?" — they read `asset-manifest.ts`. Every spec is one line; together they're the shoot list.
>
> **III. Real assets above the fold at launch.** The page can ship with placeholders below the fold. It cannot ship with placeholders above it.
