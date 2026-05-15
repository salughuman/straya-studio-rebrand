// @ts-check
import tokens from './src/styles/design-tokens.json';
import plugin from 'tailwindcss/plugin';

/**
 * Bare `r, g, b` for opacity composition: `rgba(var(--accent-rgb), 0.5)`.
 * @param {string} hex `#RRGGBB` or `#RGB`
 */
function hexToRgbTriplet(hex) {
    const h = hex.replace(/^#/, '');
    const full =
        h.length === 3
            ? [...h].map((c) => c + c).join('')
            : h;
    const n = Number.parseInt(full, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `${r}, ${g}, ${b}`;
}

const {
    typography: typo,
    color: C,
    effects: Fx,
    spacing: Sp,
    border: Br,
    grid: Grid,
} = tokens;

/** `:root` custom properties derived from structured tokens only (design-system §1 — no duplicated literals). */
const rootCssVars = {
    '--color-bg':              C.background.DEFAULT,
    '--color-bg-dim':          C.background.surfaceDim,
    '--color-bg-raised':       C.background.surfaceBright,
    '--color-bg-elevated':     C.background.container,
    '--color-bg-inverted':     C.inverse.surface,
    '--color-fg':              C.text.primary,
    '--color-fg-inverted':     C.text.inverse,
    '--color-accent':          C.accent,
    '--color-focus-ring':      C.accent,

    '--outline-variant-rgb':   hexToRgbTriplet(C.outline.variant),

    '--accent-rgb':            hexToRgbTriplet(C.accent),
    '--fg-rgb':                hexToRgbTriplet(C.text.primary),
    '--fg-inverted-rgb':       hexToRgbTriplet(C.text.inverse),
    '--black-rgb':             '0, 0, 0',
    '--bg-rgb':                hexToRgbTriplet(C.background.DEFAULT),
    '--bg-dim-rgb':            hexToRgbTriplet(C.background.surfaceDim),

    '--font-display':       typo.fontFamily.display,
    '--font-body':          typo.fontFamily.body,
    '--font-mono':          typo.fontFamily.mono,

    '--color-primary':         C.primary.DEFAULT,
    '--color-secondary':       C.secondary.DEFAULT,
    '--color-background':      C.background.DEFAULT,
    '--color-surface':         C.background.surface,
    '--color-on-surface':      C.onSurface.DEFAULT,
    '--color-on-background':   C.onBackground.DEFAULT,
    '--color-outline':         C.outline.DEFAULT,
    '--color-outline-variant': C.outline.variant,
    '--color-error':           C.status.error,
    '--color-success':         C.status.success,
    '--color-border-default':  C.border.default,

    '--tracking-tight':     typo.style.tightTracking,
    '--tracking-blueprint': typo.style.blueprintTracking,

    '--transition-base':   Fx.transition.base,
    '--transition-luxury': Fx.transition.base,
    '--duration-entrance': Fx.duration.entrance,
    '--magnetic-cta':      Fx.magnetic.cta,

    '--spacing-container-max':     Sp.containerMax,
    '--spacing-container-mobile':  Sp.containerPaddingMobile,
    '--spacing-container-desktop': Sp.containerPaddingDesktop,
    '--spacing-section-mobile':    Sp.sectionMobile,
    '--spacing-section-desktop':   Sp.sectionDesktop,
    '--spacing-card-padding':        Sp.cardPadding,

    '--border-radius': Br.radius.DEFAULT,
    '--border-width':  Br.width.DEFAULT,

    '--grid-gutter': Grid.gutter,
    '--hero-scrim-via-stop': typo.hero.imageScrimTransparentUntil,
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            sm: tokens.media.breakpoints.sm,
            md: tokens.media.breakpoints.md,
            lg: tokens.media.breakpoints.lg,
        },
        extend: {
            colors: {
                // Primary
                primary:                       C.primary.DEFAULT,
                'on-primary':                  C.primary.on,
                'primary-container':           C.primary.container,
                'on-primary-container':        C.primary.onContainer,
                // Secondary
                secondary:                     C.secondary.DEFAULT,
                'on-secondary':                C.secondary.on,
                'secondary-container':         C.secondary.container,
                'on-secondary-container':      C.secondary.onContainer,
                // Backgrounds
                background:                    C.background.DEFAULT,
                surface:                       C.background.surface,
                'surface-dim':                 C.background.surfaceDim,
                'surface-container-lowest':    C.background.containerLowest,
                'surface-container-low':       C.background.containerLow,
                'surface-container':           C.background.container,
                'surface-container-high':      C.background.containerHigh,
                'surface-container-highest':   C.background.containerHighest,
                // On-surface
                'on-background':               C.onBackground.DEFAULT,
                'on-surface':                  C.onSurface.DEFAULT,
                'on-surface-variant':          C.onSurface.variant,
                // Outline
                outline:                       C.outline.DEFAULT,
                'outline-variant':             C.outline.variant,
                // Inverse
                'inverse-surface':             C.inverse.surface,
                'inverse-on-surface':          C.inverse.onSurface,
                'inverse-panel':               C.inverse.panel,
                // Accent & status
                accent:                        C.accent,
                success:                       C.status.success,
                error:                         C.status.error,
                // Semantic aliases
                'brand-accent':                C.accent,
                'brand-text-primary':          C.text.primary,
                'brand-text-secondary':        C.text.secondary,
                'text-inverted':               C.text.inverse,
                'border-default':              C.border.default,
                'border-subtle':               C.border.subtle,
                'border-strong':               C.border.strong,
            },
            transitionTimingFunction: {
                luxury: Fx.transition.base,
                custom: Fx.transition.base,
            },
            borderRadius: {
                DEFAULT: Br.radius.DEFAULT,
                lg:      Br.radius.lg,
                xl:      Br.radius.xl,
                full:    Br.radius.full,
            },
            letterSpacing: {
                tight:     typo.style.tightTracking,
                blueprint: typo.style.blueprintTracking,
                normal:    typo.style.normalTracking,
                h1:        typo.h1.letterSpacing,
                h2:        typo.h2.letterSpacing,
                h3:        typo.h3.letterSpacing,
                h4:        typo.h4.letterSpacing,
                h5:        typo.h5.letterSpacing,
            },
            fontFamily: {
                sans:    [typo.fontFamily.body, typo.fontFamily.fallback.body],
                display: [typo.fontFamily.display, typo.fontFamily.fallback.display],
                mono:    [typo.mono.fontFamily],
            },
            maxWidth: {
                container: Sp.containerMax,
            },
            spacing: {
                'section-mobile':    Sp.sectionMobile,
                'section-desktop':   Sp.sectionDesktop,
                'container-mobile':  Sp.containerPaddingMobile,
                'container-desktop': Sp.containerPaddingDesktop,
                'card-padding':      Sp.cardPadding,
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, addBase }) {

            addBase({
                ':root': rootCssVars,
            });

            addComponents({
                /* Color inherits from parent (body / section / card) — use text-on-background, text-inverse-on-surface, etc. */
                '.type-h1': {
                    fontSize:      typo.h1.fontSize,
                    fontWeight:    typo.h1.fontWeight,
                    lineHeight:    typo.h1.lineHeight,
                    letterSpacing: typo.h1.letterSpacing,
                    fontFamily:    typo.h1.fontFamily,
                    color:         'currentColor',
                },
                '.type-h2': {
                    fontSize:      typo.h2.fontSize,
                    fontWeight:    typo.h2.fontWeight,
                    lineHeight:    typo.h2.lineHeight,
                    letterSpacing: typo.h2.letterSpacing,
                    fontFamily:    typo.h2.fontFamily,
                    color:         'currentColor',
                },
                '.type-h3': {
                    fontSize:      typo.h3.fontSize,
                    fontWeight:    typo.h3.fontWeight,
                    lineHeight:    typo.h3.lineHeight,
                    letterSpacing: typo.h3.letterSpacing,
                    fontFamily:    typo.h3.fontFamily,
                    color:         'currentColor',
                },
                '.type-h4': {
                    fontSize:      typo.h4.fontSize,
                    fontWeight:    typo.h4.fontWeight,
                    lineHeight:    typo.h4.lineHeight,
                    letterSpacing: typo.h4.letterSpacing,
                    fontFamily:    typo.h4.fontFamily,
                    color:         'currentColor',
                },
                '.type-h5': {
                    fontSize:      typo.h5.fontSize,
                    fontWeight:    typo.h5.fontWeight,
                    lineHeight:    typo.h5.lineHeight,
                    letterSpacing: typo.h5.letterSpacing,
                    fontFamily:    typo.h5.fontFamily,
                    color:         'currentColor',
                },
                '.type-body': {
                    fontSize:   typo.body.fontSize,
                    fontWeight: typo.body.fontWeight,
                    lineHeight: typo.body.lineHeight,
                    fontFamily: typo.body.fontFamily,
                    color:      'currentColor',
                },
                '.type-body-large': {
                    fontSize:   typo.bodyLarge.fontSize,
                    fontWeight: typo.bodyLarge.fontWeight,
                    lineHeight: typo.bodyLarge.lineHeight,
                    fontFamily: typo.bodyLarge.fontFamily,
                    color:      'currentColor',
                },
                '.type-body-small': {
                    fontSize:   typo.bodySmall.fontSize,
                    fontWeight: typo.bodySmall.fontWeight,
                    lineHeight: typo.bodySmall.lineHeight,
                    fontFamily: typo.bodySmall.fontFamily,
                    color:      'currentColor',
                },
                '.type-caption': {
                    fontSize:   typo.caption.fontSize,
                    fontWeight: typo.caption.fontWeight,
                    lineHeight: typo.caption.lineHeight,
                    fontFamily: typo.caption.fontFamily,
                    color:      'currentColor',
                },
                '.type-label': {
                    fontSize:      typo.label.fontSize,
                    fontWeight:    typo.label.fontWeight,
                    lineHeight:    typo.label.lineHeight,
                    letterSpacing: typo.label.letterSpacing,
                    fontFamily:    typo.label.fontFamily,
                    color:         'currentColor',
                    textTransform: 'uppercase',
                },
                '.type-label-small': {
                    fontSize:      typo.labelSmall.fontSize,
                    fontWeight:    typo.labelSmall.fontWeight,
                    lineHeight:    typo.labelSmall.lineHeight,
                    letterSpacing: typo.labelSmall.letterSpacing,
                    fontFamily:    typo.labelSmall.fontFamily,
                    color:         'currentColor',
                    textTransform: 'uppercase',
                },
                '.type-mono': {
                    fontSize:   typo.mono.fontSize,
                    fontWeight: typo.mono.fontWeight,
                    lineHeight: typo.mono.lineHeight,
                    fontFamily: typo.mono.fontFamily,
                    color:      'currentColor',
                },
                '.type-button': {
                    fontSize:      typo.button.fontSize,
                    fontWeight:    typo.button.fontWeight,
                    lineHeight:    typo.button.lineHeight,
                    letterSpacing: typo.button.letterSpacing,
                    fontFamily:    typo.button.fontFamily,
                    textTransform: typo.button.textTransform,
                    whiteSpace:    'nowrap',
                },

                '.main-container': {
                    maxWidth:     Sp.containerMax,
                    marginLeft:   'auto',
                    marginRight:  'auto',
                    paddingLeft:  Sp.containerPaddingMobile,
                    paddingRight: Sp.containerPaddingMobile,
                },
                '.section-y': {
                    paddingTop:    Sp.sectionMobile,
                    paddingBottom: Sp.sectionMobile,
                },
                '.card-pad': {
                    padding: Sp.cardPaddingMobile,
                },
                '@media (min-width: 810px)': {
                    '.main-container': {
                        paddingLeft:  Sp.containerPaddingDesktop,
                        paddingRight: Sp.containerPaddingDesktop,
                    },
                    '.section-y': {
                        paddingTop:    Sp.sectionDesktop,
                        paddingBottom: Sp.sectionDesktop,
                    },
                    '.card-pad': {
                        padding: Sp.cardPadding,
                    },
                },
                '@media (min-width: 1200px)': {
                    '.main-container': {
                        paddingLeft:  Sp.containerPaddingWide,
                        paddingRight: Sp.containerPaddingWide,
                    },
                },

                '.magnetic-cta': {
                    transition: `transform ${Fx.duration.normal} ${Fx.transition.base}`,
                },
                '.magnetic-cta:hover': {
                    transform: Fx.magnetic.cta,
                },
                '.custom-bezier': {
                    transitionTimingFunction: Fx.transition.base,
                },
                '.luxury-bezier': {
                    transitionTimingFunction: Fx.transition.base,
                },
            });
        }),
    ],
};
