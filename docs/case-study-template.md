# Straya Studio — Case Study Template

> **Status:** MANDATORY. Companion to `design-system.md` v2.1, `production-aesthetic.md`, and `content-instructions.md`.
>
> **Why this exists:** The case study is the page that closes the sale. A founder evaluating a $10K project doesn't read the homepage twice — they read three case studies. This document defines the work-detail page so it does the lifting that the brand promises.

---

## 1. What a Case Study Is

A case study is **not** a portfolio thumbnail with a write-up. It is a *long-form narrative composition* that demonstrates how the studio thinks, executes, and ships. The reader leaves knowing:

1. What the client needed
2. What was built
3. What changed because of it
4. How it was made (a glimpse of process, not a wall of detail)

If a reader has to *click around* to learn what was built, the case study has failed. The page itself is the demonstration.

---

## 2. Page Architecture

Every case study is composed of these eight sections in this order. Sequence is fixed; what fills each section is variable.

| # | Section | Purpose | Mode | Posture |
|---|---|---|---|---|
| 1 | **Identifier** | Project name, client, year, role, platform | Brutalism | Vertical-axis |
| 2 | **Hero shot** | One image that anchors the project | Brutalism | Bleed-left or bleed-right |
| 3 | **Brief** | Two-paragraph context: what they needed, what we delivered | Brutalism | Margin-note |
| 4 | **Outcome** | Three numbers + one sentence each — the proof | Neobrutalism | Stacked-offset |
| 5 | **Process gallery** | 3–6 images with short captions, scrubbed scroll | Brutalism | Overlap (variable) |
| 6 | **One technical detail** | A single decision worth showing — annotated | Brutalism | Margin-note |
| 7 | **Testimonial** | Pull-quote from the client, sized as display type | Neobrutalism | Right-heavy |
| 8 | **Next case** | Link to the next case study, prefetched | Brutalism | Bleed-down (bridges to next) |

**Header (navbar) and footer** are page-shell, not case-study sections. They sit outside this eight.

The page reads as a single composition with deliberate alternation: B → B → B → N → B → B → N → B. Two Neobrutalism beats in a Brutalism context — the same alternation rule from `design-system.md` §6, applied to a single page.

---

## 3. Section Specifications

### 1. Identifier (vertical-axis)

The first thing the reader sees. A vertically-rotated project name running up the left gutter, a metadata block in the middle column, and an index numeral top-right.

```
[01]   ←  case index, top-right corner

│      ←  "K9 SOLUTIONS" rotated 90°, runs up left gutter (col 1, ~display-md)
│
│      Client      K9 Solutions
│      Year        2025
│      Role        Web design + development
│      Platform    Framer
│      Timeline    3 weeks
│
```

**Implementation:**
- The vertical title uses `writing-mode: vertical-rl; transform: rotate(180deg)` to read bottom-up.
- The metadata uses `--type-meta` in a definition list. Tabular numerals.
- The index numeral `[01]` matches the section's position in the case study list, not a global page index.
- **Word count:** none — this section is structural metadata, not copy.

**Material:**
- Typographic device: vertical title (free)
- Hard graphic: hairline rule under the metadata block
- Texture: page-level grain (inherited)
- Scroll-based: B3 parallax on the vertical title (it scrolls slower than the metadata)

### 2. Hero shot (bleed-left or bleed-right)

One image, full-bleed on one side, with the project headline overlaid in the opposite gutter.

**Image:** treatment is `.img-frame-cut` if it's a product screenshot, `.img-brutalist` if it's an environmental shot. Aspect `16/9` minimum, `21/9` ideal.

**Headline:** the *project's* one-line summary, not a generic "case study" label. Display type, max 8 words. Examples:
- "A discovery flow that found the dog."
- "Identity that reads at six feet."
- "Migrating 200K SKUs without losing a sale."

**Material:**
- Image asset: yes, treated
- Typographic device: oversized headline
- Hard graphic: the frame-cut clip-path itself is the graphic
- Scroll-based: B1 image scrub — the image desaturates as it enters and recolors as it sits
- Bridge from §1: the vertical title from §1 ends just where this image begins (vertical thread continues — C3)

### 3. Brief (margin-note)

Two paragraphs, in plain English, no jargon. The first paragraph is the client's situation. The second is what the studio shipped.

**Word count:** 80–120 words total. Hard cap at 140.

**Tone:** declarative. Past tense. No "we passionately partnered with…" — read `content-instructions.md` §2.

```
Eyebrow: BRIEF

[Paragraph 1 — situation, 40-60 words]
K9 Solutions launched on a templated WordPress build that
couldn't communicate the depth of their training program.
Inquiries were going to competitors with weaker offerings
but cleaner sites.

[Paragraph 2 — solution, 40-60 words]
We rebuilt on Framer with a discovery-led IA, custom
booking flow, and a video-led hero. Three weeks. Mobile
LCP under 1.4s. Inquiries doubled in the first month.

Sidebar (margin column):
─────────────────
SCOPE
Web design
Web development
Brand identity refresh

DELIVERABLES
12 pages
Booking integration
CMS for case stories
```

**Material:**
- Typographic device: oversized paragraph indent on first paragraph (drop-style)
- Hard graphic: hairline rule above the eyebrow, vertical line dividing main copy from sidebar
- Scroll-based: B3 parallax on the sidebar (it scrolls slower)

### 4. Outcome (stacked-offset, Neobrutalism)

The proof. Three numbers, each with a one-sentence context. Counted via B5 (counting numerals) on scroll-into-view.

```
Eyebrow: OUTCOME

   2.1×          ← counts up from 0 as section enters
   Inquiries doubled in the first month after launch.

   1.4s          ← counts up
   Mobile LCP, down from 4.8s on the previous build.

   97            ← counts up
   Lighthouse Performance score, sustained across templates.
```

**Mode:** Neobrutalism. The numbers sit on `--color-bg-inverted` (bone) ground with hard offsets. This is the loudest section in the case study — the visual peak.

**Word count:** ≤30 words across all three sentences combined.

**Material:**
- Typographic device: three oversized counting numerals (B5)
- Hard graphic: each number sits in a frame with `--shadow-hard-lg`. Yellow accent on the middle number (the "headline" stat).
- Scroll-based: B5 mandatory — numbers count from 0 to value as section enters viewport
- Bridge from §3: color carry — a yellow band crosses from the bottom of §3 into the top of §4 (C2)

### 5. Process gallery (overlap, variable)

Three to six images that show *making*: sketches, screens-in-build, before/after, real artifacts. Not a polished gallery — a working one.

**Layout:** images do not sit in a grid. Each image picks one of the eight postures and sequences alternately. A typical sequence:

1. `posture-bleed-left` — full-bleed sketch on dark
2. `posture-margin-note` — small process screenshot with caption
3. `posture-overlap` — two screens overlapping
4. `posture-bleed-right` — final screen, frame-cut
5. (optional) `posture-stacked-offset` — detail with annotation

**Caption:** every image has a `--type-meta` caption, no longer than 12 words. The caption is a *fact* about the image, not a description ("3rd revision of booking flow," not "Booking flow design").

**Material:**
- Image assets: 3–6, mixed treatments (`.img-dithered` for sketches, `.img-frame-cut` for screens, `.img-brutalist` for environmental)
- Typographic device: M/01, M/02, M/03 numerals on each image, parallax-different speeds (B3)
- Hard graphic: vertical thread (C3) runs through the gallery, anchored to col 2
- Scroll-based: B1 image scrub on at least one (the hero of the gallery)
- Bridge to §6: the thread continues into the technical detail section

### 6. One technical detail (margin-note)

The single decision that was hardest, smartest, or most distinctive. Not a list of every tool used. *One* thing.

Example:
- A custom CMS structure decision that made the client's content workflow possible
- A performance optimization that hit a specific number
- A novel interaction pattern with a brief on why it was the right answer

**Format:** one paragraph (60–90 words), one annotated screenshot or diagram, one pull-quote from the build process.

```
Eyebrow: A TECHNICAL DETAIL

[Headline — 6-8 words]
"Why we built the booking flow as a finite state machine."

[Paragraph — 60-90 words explaining the decision]

[Annotated screenshot or diagram with arrows + meta captions]

[Pull-quote — sized between body and h3]
"Three weeks of state-machine code saved the client
six months of edge-case bug reports."
```

**Material:**
- Image asset: annotated diagram or product screenshot, `.img-frame-cut`
- Typographic device: pull-quote sized as `--display-sm`, with allcaps eyebrow above
- Hard graphic: arrows pointing into the image, drawn as SVG (1px, accent-colored)
- Scroll-based: B4 masked reveal on the diagram (wipes left-to-right as you scroll past)

### 7. Testimonial (right-heavy, Neobrutalism)

The client's own words, sized as display type. Not a generic agency-good testimonial — a specific one tied to this project.

```
                            "[Quote — 20-40 words,
                              sized as --display-md,
                              right-aligned, weight 700]"

                            ──
                            Client name
                            Title, Company
                            [optional photo, .img-duotone]
```

**Mode:** Neobrutalism. Quote sits on `--color-accent` ground in a frame with `--shadow-hard-md`. This is the second loud beat.

**Word count:** quote ≤40 words. Attribution ≤8 words.

**Material:**
- Typographic device: quote at display size — the typography *is* the design
- Hard graphic: opening and closing quotation marks in `--color-accent-2` (signal red), oversized, hanging in the gutters
- Scroll-based: B3 parallax on the quotation marks (they enter from outside the frame)
- Bridge to §8: marquee bridge (C5) — full-bleed strip with the next case's name in accent-2 color, sits between §7 and §8

### 8. Next case (bleed-down, bridges out)

The page doesn't end with a footer — it bridges to the next case. The next case study's hero image bleeds *up* into this section, with its title overlaid.

```
[Top of section]
Eyebrow: NEXT

[Big arrow / numeral 02 / next case title — display type]
"Logo Diffusion"

[Hero image of next case bleeds into the section,
 image starts here and continues into the next page]
```

**Behavior:** clicking this section navigates to the next case study with a View Transition (the hero image animates between pages). Prefetched on hover.

**Material:**
- Image asset: hero of next case, treated
- Typographic device: index numeral of next case, oversized
- Hard graphic: arrow drawn as SVG, points into the next case
- Scroll-based: B1 image scrub continues into the next page (cross-page!)
- Bridge: C1 image bleed-down — the image extends past the section's bottom and into the next page's hero

---

## 4. Word & Material Budget (whole page)

| Metric | Budget |
|---|---|
| Total word count (excluding code/data) | 350–500 words |
| Headlines (display type) | 4 (project headline, brief eyebrow, outcome eyebrow, technical-detail headline) |
| Image assets | 6–10 |
| Treatments used | minimum 3 of {brutalist, dithered, duotone, frame-cut} |
| Scroll-based motions | minimum 4 (one per content section) |
| Bridges | 6 (between every pair of sections, plus C1 to next case) |
| Mode alternations | 2 (Brutalism → Neobrutalism for outcome and testimonial) |

A case study under 350 words feels thin. Over 600 feels indulgent. Find the 400-word edit.

---

## 5. Hero Pin Allocation

`design-system.md` §A4 allows **one** orchestrated GSAP scroll-pin per page. On a case study, that one pin is allocated to:

> **Section 5 (Process gallery)** — pin the gallery viewport, advance through 3–6 images horizontally with scroll, unpin when the last image reaches the left edge.

This is the page's signature interactive moment. It's the difference between *scrolling past images* and *being shown work*.

If a case study does not have enough imagery to justify a horizontal scroll-pin, the pin is dropped — never replaced with a different orchestration. Empty pins are worse than no pins.

---

## 6. Routing & Data

### URL structure

```
/work/<slug>           — individual case study
/work                  — index of all case studies (the SelectedWork section is the home preview, not the index)
```

### Content source

```
src/data/case-studies/
├── knine-solutions.md
├── logo-diffusion.md
├── pal-puppy.md
└── tnt-simmonds.md
```

Each file has frontmatter matching this shape:

```yaml
---
slug: knine-solutions
title: K9 Solutions
client: K9 Solutions
year: 2025
role: [Web design, Web development]
platform: Framer
timeline: 3 weeks
hero:
  image: /images/work/knine-solution-fullpage.webp
  treatment: frame-cut
headline: A discovery flow that found the dog.
outcome:
  - { stat: "2.1x", caption: "Inquiries doubled in the first month after launch." }
  - { stat: "1.4s", caption: "Mobile LCP, down from 4.8s on the previous build." }
  - { stat: "97",   caption: "Lighthouse Performance score, sustained across templates." }
testimonial:
  quote: "..."
  author: "..."
  title: "..."
next: logo-diffusion
---

[Brief paragraphs in markdown body]

[Process gallery configured via additional frontmatter or component slots]

[Technical detail section as markdown body]
```

### Page component

`src/pages/work/[slug].astro` consumes the frontmatter and renders the eight sections in order. Sections are individual Astro components in `src/components/case-study/`:

```
src/components/case-study/
├── CaseIdentifier.astro
├── CaseHero.astro
├── CaseBrief.astro
├── CaseOutcome.astro
├── CaseProcessGallery.astro
├── CaseTechnicalDetail.astro
├── CaseTestimonial.astro
└── CaseNext.astro
```

Each component reads from props or frontmatter; none of them embed copy.

---

## 7. SEO / AEO Specifics

Per `SEO-AEO-rules.md`, every case study page needs:

- `<title>` — `<Client> case study — Straya Studio` (≤60 chars)
- `<meta name="description">` — one sentence summarizing the outcome (≤155 chars), pulled from frontmatter
- Schema.org `CreativeWork` structured data, nested in the existing `ProfessionalService` schema as a `workExample`
- `sr-only` summary paragraph as first child of `<main>` — three-sentence summary covering client, what was built, what changed
- All process gallery images get meaningful `alt` text; decorative images (textures, dividers) get `alt=""`
- `<link rel="prev"> / <rel="next">` for the case-study sequence

---

## 8. Pre-Flight Checklist

Before publishing a case study, walk through:

- [ ] All eight sections present, in order
- [ ] Mode alternation correct: B → B → B → N → B → B → N → B
- [ ] Word count in 350–500 range
- [ ] At least 6 image assets, all treated
- [ ] At least 4 scroll-based motions deployed (one per content section)
- [ ] All 6 inter-section bridges named in section frontmatter or comments
- [ ] One GSAP pin allocated to the process gallery (or explicitly skipped with reason)
- [ ] Outcome numbers count up via B5
- [ ] Testimonial is real, attributed, specific to this project
- [ ] Next case is set, hero image of next case prefetched
- [ ] Schema.org `CreativeWork` populated
- [ ] `sr-only` summary present
- [ ] Every placeholder marked per `asset-direction.md` §2

A case study missing any of these is not done. It is in draft.

---

## 9. The Three Case Study Laws

> **I. The page is the proof.** A case study is not a description of work — it is a *demonstration* of how the studio thinks. If the page itself isn't beautiful, the case for working with the studio is weakened, not strengthened.
>
> **II. One signature moment per page.** The horizontal scroll-pin in the process gallery is the showpiece. Don't compete with it elsewhere on the page.
>
> **III. End by starting the next.** The page does not close — it bridges. The reader leaves on their own terms only after passing through one more case.
