# Straya Studio — Micro-Interactions Catalog

> **Status:** MANDATORY. Companion to `design-system.md` §10 (Component Primitives).
>
> **Why this exists:** Premium agency sites are differentiated by the *texture of interaction*, not just composition. A button that feels good when you click it, a link whose underline draws in, a form input that visibly confirms focus — these are the details that separate $10K work from $5K work. This document specifies the eight required micro-interactions and how they bind to tokens.

---

## 1. The Eight Required Micro-Interactions

Every interactive surface on the site uses one of these patterns. New patterns require justification — variety comes from sequencing, not from one-off motion.

| # | Pattern | Where it lives | Mode |
|---|---|---|---|
| M1 | Magnetic press | Primary CTA buttons | Neobrutalism |
| M2 | Hard invert | Secondary buttons | Brutalism |
| M3 | Underline draw | Inline links, nav links | Both |
| M4 | Focus halo | All inputs, buttons, focusable elements | Both |
| M5 | Hover lift | Cards, pricing tiles, work thumbnails | Neobrutalism |
| M6 | Image scale-with-frame | Case study thumbnails, hero imagery | Brutalism |
| M7 | Marquee hover-pause | Partner logos, service marquee | Both |
| M8 | Sticker tilt | Sticker elements on hover/focus | Neobrutalism |

The rule: if you find yourself adding hover behavior that isn't one of these eight, stop. The pattern either becomes M9 (with a written justification in this doc) or it doesn't ship.

---

## 2. The Patterns

### M1 — Magnetic press

The Neobrutalist primary CTA. Already specified in `design-system.md` §10 (`<MagneticButton>`). Listed here for completeness:

- **Idle:** thick border, hard shadow `--shadow-hard-md`.
- **Hover:** label tracks cursor with strength `0.35`, shadow grows to `--shadow-hard-lg`, button lifts `translate(-2px,-2px)`.
- **Active:** button slams to `translate(8px, 8px)`, shadow collapses to zero. The user *feels* the press.
- **Reduced-motion:** static — no magnet, no lift. Hover changes background only.

Reference: `design-system.md` §10 `.btn-magnetic`.

### M2 — Hard invert

The Brutalist secondary button. Already specified in `design-system.md` §10 (`<BrutalistButton>`). Listed here for completeness:

- **Idle:** transparent fill, hairline border, foreground text.
- **Hover:** instant snap-invert. Background → `--color-fg`, text → `--color-bg`. No transition curve — `--ease-snap`.
- **Active:** `translateY(2px)` for tactile press.

The point: M1 is *playful*, M2 is *decisive*. Both ship on the same page in different sections — that's the brand.

Reference: `design-system.md` §10 `.btn-brutalist`.

### M3 — Underline draw

Inline links and nav items get an underline that *draws* on hover, not one that fades in.

```css
.link-draw {
  position: relative;
  color: var(--color-fg);
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--dur-base) var(--ease-out);
}
.link-draw:hover,
.link-draw:focus-visible {
  background-size: 100% 1px;
}

/* Nav variant — accent-colored underline, thicker */
.nav-link {
  background-image: linear-gradient(var(--color-accent), var(--color-accent));
  background-size: 0% 2px;
}
.nav-link[aria-current="page"] {
  background-size: 100% 2px;
}
```

**Why a gradient underline, not `text-decoration`:** `text-decoration-skip-ink` is inconsistent across browsers, and you can't animate `text-decoration-thickness` reliably yet. A gradient on the background paints predictably and animates smoothly.

**Reduced-motion:** instant draw (`background-size` flips with no transition).

### M4 — Focus halo

Every focusable element gets a visible focus ring. **No exceptions.** Brutalism is loud; focus rings are loud too.

```css
:where(button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])):focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 3px;
  border-radius: 0;            /* override any radius */
  transition: outline-offset var(--dur-fast) var(--ease-out);
}

/* Hover-precursor: a soft outline appears on hover, becomes the focus ring on focus */
:where(button, a):hover {
  outline: 1px solid color-mix(in oklch, var(--color-focus-ring), transparent 60%);
  outline-offset: 2px;
}
```

The `outline-offset` jump on focus (3px → 5px is too aggressive; we go 2px → 3px) is the visual cue that focus *settled*. It feels like a click landing.

**Forms-specific addition** — text inputs get a 2px bottom border that color-shifts on focus:

```css
.input-line {
  border: 0;
  border-bottom: 2px solid var(--color-hairline);
  background: transparent;
  padding: var(--space-3) 0;
  font: var(--type-body);
  transition: border-color var(--dur-fast) var(--ease-out);
}
.input-line:focus-visible {
  border-bottom-color: var(--color-accent);
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 6px;     /* clear the bottom border */
}
```

### M5 — Hover lift

Cards, pricing tiles, and clickable thumbnails lift on hover. Specifically Neobrutalism — Brutalism mode cards do *not* lift; they invert (M2 logic on a card surface).

```css
.card-lift {
  position: relative;
  background: var(--color-bg-raised);
  border: var(--hairline-thick);
  box-shadow: var(--shadow-hard-md);
  transition:
    transform var(--dur-base) var(--ease-spring),
    box-shadow var(--dur-base) var(--ease-spring);
}
.card-lift:hover {
  transform: translate(-3px, -3px);
  box-shadow: var(--shadow-hard-lg);
}
.card-lift:active {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-hard-sm);
}
```

The shadow tracks the lift — that's what makes it feel like a physical card on a surface, not a CSS transform.

**Pricing-tier specific:** the "most popular" tier uses `--shadow-stack` instead of `--shadow-hard-md`. On hover it goes to `--shadow-stack` with both layers extended. Used **once** on the page.

### M6 — Image scale-with-frame

Case study thumbnails and hero images scale on hover, but the *frame* (border) stays put. The image scales inside its frame; the frame doesn't.

```css
.frame-scale {
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color-fg);
}
.frame-scale > img {
  transition: transform var(--dur-slow) var(--ease-out);
  will-change: transform;
}
.frame-scale:hover > img {
  transform: scale(1.06);
}

/* Plus a meta-line that slides in from the left edge */
.frame-scale::after {
  content: attr(data-caption);
  position: absolute;
  bottom: var(--space-3);
  left: 0;
  background: var(--color-bg);
  color: var(--color-fg-strong);
  padding: var(--space-2) var(--space-4);
  font: var(--type-meta);
  letter-spacing: var(--tracking-allcaps);
  text-transform: uppercase;
  transform: translateX(-100%);
  transition: transform var(--dur-base) var(--ease-snap);
}
.frame-scale:hover::after {
  transform: translateX(0);
}
```

The slide-in caption is the editorial detail — it makes the image feel like a *plate* in a magazine, not a card on a website.

### M7 — Marquee hover-pause

The marquee (partner logos, service list) pauses when the user hovers it. This is the difference between a *banner* and a *navigable list*.

```css
.marquee {
  --marquee-state: running;
}
.marquee-track {
  animation: marquee 30s linear infinite;
  animation-play-state: var(--marquee-state);
}
.marquee:hover {
  --marquee-state: paused;
}

/* Each item gets its own underline-draw on hover (M3 reused) */
.marquee a:hover {
  background-size: 100% 2px;
}
```

The pause is what tells the user *the marquee is content, not decoration*. This single behavior repositions the entire band.

### M8 — Sticker tilt

Sticker elements (`.sticker` from `design-system.md` §10) tilt and scale on hover. Already specified — listed here for completeness:

```css
.sticker {
  transform: rotate(-4deg);
  transition: transform var(--dur-fast) var(--ease-spring);
}
.sticker:hover {
  transform: rotate(-2deg) scale(1.04);
}
```

**Group rule:** if multiple stickers sit near each other, they tilt in alternating directions (`-4deg`, `+3deg`, `-5deg`). Never all the same way.

---

## 3. State Combinations

The eight patterns combine into compound states. The combinations are bounded:

| Element | Idle | Hover | Focus | Active |
|---|---|---|---|---|
| Primary CTA | M1 idle | M1 hover | M1 hover + M4 halo | M1 active |
| Secondary CTA | M2 idle | M2 hover | M2 hover + M4 halo | M2 active |
| Inline link | text + M3 idle | M3 drawn | M3 drawn + M4 halo | text + M3 drawn |
| Nav link | M3 + nav variant | M3 drawn | M3 drawn + M4 halo | (visited tracked by `aria-current`) |
| Card | M5 idle | M5 hover | M5 hover + M4 halo | M5 active |
| Image thumbnail | M6 idle | M6 scaled + caption slide | M6 scaled + M4 halo | (links inside trigger their own active state) |
| Form input | M4 idle (faint underline) | M4 hover | M4 focus (accent underline + halo) | n/a |
| Sticker | M8 idle | M8 hover | M8 hover + M4 halo | (returns to idle on release) |

**The rule:** focus state is *always* M4 (halo) layered on top of the hover state. Focus ≠ hover, but focus *includes* hover's visual change so keyboard users get the same feedback as mouse users.

---

## 4. Timing Discipline

All eight patterns use motion tokens from `design-system.md` §8. No custom durations or eases.

| Pattern | Duration | Easing |
|---|---|---|
| M1 magnetic press | `--dur-fast` | `--ease-spring` |
| M2 hard invert | `--dur-fast` | `--ease-snap` |
| M3 underline draw | `--dur-base` | `--ease-out` |
| M4 focus halo | `--dur-fast` | `--ease-out` |
| M5 hover lift | `--dur-base` | `--ease-spring` |
| M6 image scale | `--dur-slow` | `--ease-out` |
| M7 marquee pause | instant (no easing) | n/a |
| M8 sticker tilt | `--dur-fast` | `--ease-spring` |

**Pattern:** Brutalism interactions use `--ease-out` or `--ease-snap` (decisive). Neobrutalism interactions use `--ease-spring` (playful). M3 and M4 are mode-neutral — they use `--ease-out`.

---

## 5. Reduced Motion Behavior

Every pattern degrades gracefully under `prefers-reduced-motion: reduce`.

| Pattern | Reduced-motion behavior |
|---|---|
| M1 magnetic press | Static. Background-color hover only. Click does nothing visual. |
| M2 hard invert | Same. The snap is already short enough; reduced-motion doesn't change it. |
| M3 underline draw | Instant. `background-size` flips with no transition. |
| M4 focus halo | Same — focus ring still appears (it's accessibility, not decoration). |
| M5 hover lift | Static. Background or border-color hover only. |
| M6 image scale | Static. Caption still slides in (it's UI feedback, not decoration). |
| M7 marquee pause | Marquee doesn't run at all under reduced-motion (it's a `--ease-in-out` infinite — disabled globally per §8). |
| M8 sticker tilt | Static at idle rotation. |

The global rule from `design-system.md` §8 (`* { transition-duration: 0.01ms }`) handles most of this automatically. The exceptions above are explicit.

---

## 6. The Acceptance Test

Before merging a PR that introduces a new interactive element, walk through:

- [ ] Element has all four states defined (idle, hover, focus, active)
- [ ] Hover and focus give visibly different feedback than idle
- [ ] Focus state includes M4 halo regardless of pattern
- [ ] Active state is *visibly* different from hover (not just an alpha shift)
- [ ] Pattern uses one of M1–M8 (or has a written justification for M9+)
- [ ] Duration and easing pulled from tokens (no `200ms ease-in-out` literals)
- [ ] Behavior under `prefers-reduced-motion: reduce` matches the table in §5
- [ ] Keyboard navigation lands focus correctly (no `outline: none` without replacement)

If any item is missing, the interaction is incomplete and the element is not done.

---

## 7. The Micro-Interaction Law

> **The user must always know what just happened.** Every click registers visibly. Every hover answers "is this clickable?". Every focus says "you are here." If you can't tell from the visual feedback alone whether you just hovered, focused, or pressed — the pattern is broken.

The eight patterns are tuned against this law. Don't invent a ninth without verifying it passes the test.
