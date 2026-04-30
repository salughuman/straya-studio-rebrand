# Design System Addendum — Production Aesthetic

> **Status:** MANDATORY. Companion to `design-system.md` v2.1. Override in case of conflict.
>
> **Why this exists:** Sections being produced look like wireframes — typographically correct, asymmetrically arranged, but *visually thin*. They satisfy the design system rules without producing finished work. This addendum specifies the visual material that makes a section feel built, not sketched.

**CSS for image treatments, grain, scanlines, and heading reveals lives in `src/styles/global.css` and the Frame component. The scroll-coupling primitive is in `src/components/design-effects/`. This document specifies what must exist and why.**

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

### Image treatments

Images are not decoration — they are *artifacts*. Every image gets one of these treatments; never raw and unstyled. CSS lives in `global.css` and the Frame component.

- **Brutalist** — Desaturated, high-contrast, hard clip-path corner cut. Class: `.img-brutalist`
- **Dithered** — 1-bit/duotone feel, pixelated rendering, luminosity blend. Class: `.img-dithered`
- **Duotone** — Grayscale + accent overlay via `mix-blend-mode: multiply`. Class: `.img-duotone` + `.img-duotone-wrap`
- **Frame-cut** — Hard-shadow border frame with slight rotation, neobrutalist. Class: `.img-frame-cut`

**Stock photos rendered raw are banned.** If a real asset isn't available, use a textural placeholder — never a centered hero shot from Unsplash with the default color.

### Typographic devices (always available, always free to deploy)

These are the brutalist devices to reach for *before* writing more body copy. They cost no copy and add visual material instantly:

- Oversized index numeral (`01`, `S/02`)
- Vertical rail text (`SECTION / 03 / METHOD`)
- Allcaps marquee divider
- Coordinate annotation (`LAT 33.8688° S`)
- Build version stamp (`BUILD 2.1.0 / 2026.04`)
- Cross-mark — the "you are here" device (`+`)

### Textural ground

A page without texture reads as a slide deck. Required somewhere on every page:

- **Grain** — Fixed, page-level overlay. `mix-blend-mode: overlay` at minimal opacity (`--z-effects`). Always present.
- **Scanlines** — Section-level horizontal rule pattern. Use sparingly — once per page maximum.

---

## A3. Banned Backgrounds

These produce the "AI startup template" aesthetic and are forbidden anywhere on the site.

- **Round gradients (the orb)** — `radial-gradient` with soft falloff, any color, any position, any opacity. The single most overused background device of the 2021–2024 SaaS era. **No `radial-gradient`. No exceptions.**
- **Mesh gradients** — Multiple stacked `radial-gradient` calls producing the "iOS wallpaper" look. Banned.
- **Conic gradients** — Banned for backgrounds. Allowed *only* as a deliberate graphic device (a sliced pie chart, a clock face), never as ambient atmosphere.
- **Soft linear gradients across whole sections** — A section that fades from one near-black to another near-black is doing nothing visible. Use a hairline divider instead.
- **Glassmorphism on cards** — Backdrop-blur on every card surface. Banned per design system §16. Allowed only on the global navbar and modal overlays.

### What is allowed

Solid color blocks (`--color-bg`, `--color-accent`), hard-edge two-tone splits, and image-as-background (treated). The rule: **every gradient must have hard edges**. Soft transitions belong on photographs, not on UI surfaces.

```css
/* Hard-edge two-tone — technique, adapt to section */
.split-bg {
  background: linear-gradient(to right, var(--color-bg) 50%, var(--color-bg-inverted) 50%);
}

/* Vertical accent strip — structural color band, one column wide */
.accent-strip {
  background:
    linear-gradient(to right,
      transparent 0,
      transparent calc(8.333% * 1),
      var(--color-accent) calc(8.333% * 1),
      var(--color-accent) calc(8.333% * 2),
      transparent calc(8.333% * 2));
}
```

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
- Hero headline word-by-word reveal (`.reveal-stagger`)
- Section h2 / h3 reveals on first viewport entry
- Eyebrow tags fading in with their heading

That's the entire allowlist. Not body copy. Not images. Not lists.

### Where scroll-based is mandatory

Every content section must have at least one scroll-coupled element. **`--p` (0→1) is the scroll progress variable, set by the primitive in `src/components/design-effects/`. All scrub patterns read it via CSS.**

Pick from:

- **B1 — Image scrub** — The image's `transform`, `filter`, or `clip-path` advances with scroll. Desaturates → recolors, scales up → settles, rotates → straightens as you scroll past.
- **B2 — Color shift section** — Section background lerps between two token colors as the section moves through the viewport using `color-mix(in oklch, ...)`.
- **B3 — Parallax (offset, never displacement)** — Elements move at different rates. Background slower than foreground, mid-ground floats. Use `--parallax-slow`, `--parallax-mid`, `--parallax-fast` classes.
- **B4 — Masked reveal** — A horizontal or diagonal `clip-path` mask wipes across an image or block as you scroll past.
- **B5 — Counting numerals** — A large display number counts between two values as the section is in view. Use for stats.
- **B6 — Marquee speed coupled to scroll** — The marquee's translation rate increases with scroll velocity, decreases when stopped. Adds physical weight to scrolling.

### When you may use GSAP ScrollTrigger

Exactly **one** orchestrated scroll-pinning sequence per page. Allowed for:
- A hero pin that holds while content scrubs
- A horizontal-scroll case study viewer
- A timeline that pins and advances

That's the entire allowlist for GSAP. Anything else → use the `--p` primitive.

---

## A5. Heading Animation (the only fire-once allowed)

Headings get the cinematic treatment — they earn it. Three patterns, and these three are the **only** scroll-triggered animations on the site. If you're tempted to fade in a paragraph, a card, or a list — don't. Use scroll-based scrubbing instead.

- **H1 — Hero word-by-word reveal** — `<span>` per word, staggered `translateY` + opacity on `.in-view`. Already in design system §8, class: `.reveal-stagger`.
- **H2 — Section heading clip-reveal** — Heading sits inside `overflow: hidden`; on enter, the line slides up from below. Class: `.reveal-clip`.
- **H3 — Eyebrow + rule grow** — The accent rule that prefixes the eyebrow grows from 0 to its full width on entry. Class: `.eyebrow`.

---

## A6. Section Connection (Bridges)

Sections must not feel like separate slides. At minimum every *second* section pair has a **bridge** — an element that begins in section N and resolves in section N+1. CSS for bridge patterns lives in `global.css`.

### Bridge catalog

- **C1 — Image bleed-down** — An image in section N has negative `margin-bottom` so it physically extends into section N+1. Section N+1 starts its content lower to accommodate. Class: `.bleed-down`.
- **C2 — Color carry** — Section N ends with a sliver of the next section's accent color (a 2px band, a thick rule, a sticker) that "previews" what's coming.
- **C3 — Vertical thread** — A 1px vertical line runs through 2–3 consecutive sections, anchored to a specific column. Visually stitches them together. Class: `.thread`.
- **C4 — Counting carryover** — A numeral or progress indicator that increments across sections (`01 / 04` → `02 / 04`) in the same screen position. The user feels the count.
- **C5 — Marquee bridge** — A full-bleed marquee strip sits *between* two sections, technically belonging to neither. It uses the upcoming section's accent color as a preview.
- **C6 — Type sentence wrap** — A sentence begins as a heading in section N and concludes as a heading in section N+1. Risky, but spectacular when it lands:

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

## A8. Pre-Flight Checklist

Fill in for every section before shipping. Append to the existing pre-flight from `section-contract.md`:

- **Section name:**
- **Mode:** brutalism | neobrutalism
- **Posture:**
- **Hero element:**
- **Word count:**
- **Anti-shape:**
- **Image asset:** yes — treatment: brutalist | dithered | duotone | frame-cut / n/a + reason
- **Typographic device:** which one(s) deployed
- **Hard graphic:** which one(s)
- **Texture:** grain | scanlines | none (only if page has texture elsewhere)
- **Scroll-based:** B1 | B2 | B3 | B4 | B5 | B6 — at least one required
- **Bridge to next:** C1 | C2 | C3 | C4 | C5 | C6 | none — must be filled for at least 2/3 transitions
- **Material budget:** score / target

---

## A9. The Rejection List

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

### ✅ PRODUCTION version — material choices

The same content, same word budget — but with the following material decisions applied:

- **Background:** Full-bleed photo with duotone treatment (B1 image scrub — desaturates as you scroll past)
- **Typographic devices:** Oversized service numerals (`S/01`, `S/02`, `S/03`) at parallax-different speeds (B3), counting indicator (`03 / 03`, B5) in the corner
- **Hard graphic:** Vertical thread (C3) running through all three service items, hairline rules between them
- **Texture:** Grain overlay (page-level, already present)
- **Bridge:** Vertical thread continues into the next section (C3)
- **Pre-flight score:** 6 / 4 — passes

That's the difference between wireframe and production: same type, same structure, fully loaded material budget.

---

## A11. The Three Updated Laws

> **I. Tokens or it didn't happen.**
>
> **II. CSS until proven otherwise.** Scroll motion uses the `--p` primitive (~1.5KB). GSAP ScrollTrigger allowed for one pin per page, max.
>
> **III. The page is a canvas, not a document.** Sections do not stand alone — they bridge. Every second pair, minimum. The page reads as one continuous composition.
>
> **IV. Material or it's a wireframe.** Type alone is not a section. Every section spends its material budget on imagery, devices, texture, and scroll-based motion. Sections under-budget by 2+ are rejected.

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
