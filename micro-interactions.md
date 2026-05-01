Straya Studio — Interaction & Motion System (v2)

Status: MANDATORY
Philosophy: Premium interaction is not decoration. It is feedback + continuity + depth.

0. System Overview

This system operates across four layers:

Layer	Responsibility
M0	Scene choreography (how sections behave as a continuous world)
Scroll Engine	Shared scroll-driven animation system
M1–M8	Micro-interactions (component-level feedback)
M9–M12	Structural interaction patterns (state, layout, realism)
1. The Interaction Law (v2)

The user must always feel:

where they are
what just changed
what has weight

If motion does not communicate one of these, it does not ship.

2. M0 — Scene Choreography System (NEW)
2.1 Definition

Every section is a scene, not a block.

Sections do not enter/exit. They transition into each other.

2.2 Scene Structure

Each scene has three layers:

Layer	Purpose	Depth
Background	Atmosphere	0.6
Midground	Core content	1
Foreground	UI / highlights	1.2
2.3 Scroll Progress

Each scene computes local progress:

const p = clamp01((vh - rect.top) / (vh * 0.8));
2.4 Layered Motion
bg: scale(1 → 1.05), blur(8px → 0)
mid: translateY(40px → 0), opacity(0 → 1)
fg: translateY(60px → 0), opacity(0 → 1)
2.5 Continuity Rule
No animation has a fixed start/end
All motion is reversible via scroll
Pausing scroll freezes animation exactly
2.6 Transition Rule

Between scenes:

No fades-to-black
No hard cuts
Elements blend, morph, or overlap
3. Scroll Engine (Updated)
3.1 Global Scroll Signal

Single listener + rAF:

let raf = 0;
const update = () => {
  raf = 0;
  const el = document.documentElement;
  const p = el.scrollTop / (el.scrollHeight - el.clientHeight);
  el.style.setProperty('--scroll-progress', Math.min(1, Math.max(0, p)).toFixed(4));
};
window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
update();
3.2 Depth System (NEW)

Every animated element defines:

--depth: 0.6 | 1 | 1.2;

Used in motion:

const d = parseFloat(getComputedStyle(el).getPropertyValue('--depth') || 1);

el.style.transform = `
  translateY(${((1 - p) * 40 * d).toFixed(1)}px)
  scale(${(1 + (1 - p) * 0.04 * (d - 1)).toFixed(3)})
`;
3.3 Motion Offset Rule
pAdjusted = clamp01(p - index * 0.05);

Adjacent elements must never animate in perfect sync.

3.4 Parallax Mapping
Element	Depth
Background	0.6
Base content	1
Interactive	1.2
4. M1–M8 (UNCHANGED — Core Micro-Interactions)

These remain exactly as defined in v1:

M1 — Magnetic press
M2 — Hard invert
M3 — Underline draw
M4 — Focus halo
M5 — Hover lift
M6 — Image scale-with-frame
M7 — Marquee hover-pause
M8 — Sticker tilt
Extension:

All patterns inherit scene depth context.

5. M9 — Selection Lock (NEW)
Purpose

Persistent state (active/selected)

Behavior
Survives hover and focus
No looping animation
Only transitions on state change
Implementation
.is-selected {
  background: var(--color-accent);
  color: var(--color-bg);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-hard-sm);
}
Use Cases
Active nav item
Selected pricing tier
Filters / tabs
6. M10 — Structured Reveal (NEW)
Purpose

Lists, grids, repeated content

Behavior

Scroll-driven stagger:

pItem = clamp01(p - index * 0.08);

opacity = pItem;
translateY = (1 - pItem) * 24;
Rules
No uniform animation
No simultaneous reveal
Always tied to scroll
7. M11 — Input Feedback System (NEW)
States
State	Feedback
Focus	M4 halo + accent underline
Valid	success color
Error	error color + motion
Error Motion
x: [0, -4, 4, -2, 2, 0];
duration: 0.3;
Rule

Input must clearly communicate success or failure instantly.

8. M12 — Perspective Interaction (NEW)
Purpose

Adds physical realism (“cinema feel”)

Behavior

Elements react to cursor:

rotateX = (cursorY / height - 0.5) * -6deg;
rotateY = (cursorX / width - 0.5) * 6deg;
Applied To
Cards
Images
Hero elements
Constraints
Max rotation ≤ 6°
Smooth reset on exit
9. Cinematic Motion Rules (Global)
9.1 No Flat Motion

Every animation must include at least one:

depth (scale)
parallax (speed difference)
blur (entry/exit)
9.2 No Synchronous Motion

Elements must differ in:

timing
speed
offset
9.3 No Hard Cuts

Everything:

blends
overlaps
or transforms
9.4 Motion Reflects Hierarchy
Importance	Motion
High	fast, sharp
Medium	balanced
Low	slow, subtle
9.5 Frame Rule

The viewport behaves like a camera, not a page.

10. Reduced Motion

Under prefers-reduced-motion: reduce:

Remove blur, scale, translate
Disable parallax
Keep focus states (M4)
Keep selection states (M9)
11. GSAP Usage (Unchanged)

Use GSAP only for:

complex timelines
pinned scroll sections
multi-element choreography

Do not use for:

hover states
simple transitions
scroll opacity/translate
12. Acceptance Test (v2)

Before shipping any interaction:

Core
 Uses M1–M12 (no custom patterns without justification)
 Has idle, hover, focus, active states
 Focus includes M4 halo
Cinematic
 Element participates in scene (M0)
 Depth (--depth) defined
 Motion offset applied
 Scroll reversible (no triggers)
 No hard cuts between sections
Structural
 Persistent states use M9
 Lists use M10
 Inputs use M11
 High-impact elements use M12 where appropriate
Performance
 Single scroll listener
 No layout thrashing
 Motion remains smooth under load
13. Final Principle

Components create feedback.
Scenes create feeling.

This system ensures both.