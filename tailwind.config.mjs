// @ts-check
import tokens from './src/styles/design-tokens.json';
import plugin from 'tailwindcss/plugin';

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
                'primary':                      tokens.color.primary.DEFAULT,
                'on-primary':                   tokens.color.primary.on,
                'primary-container':            tokens.color.primary.container,
                'on-primary-container':         tokens.color.primary.onContainer,
                'primary-fixed':                tokens.color.primary.fixed,
                'primary-fixed-dim':            tokens.color.primary.fixedDim,
                // Secondary
                'secondary':                    tokens.color.secondary.DEFAULT,
                'on-secondary':                 tokens.color.secondary.on,
                'secondary-container':          tokens.color.secondary.container,
                'on-secondary-container':       tokens.color.secondary.onContainer,
                'secondary-fixed':              tokens.color.secondary.fixed,
                'secondary-fixed-dim':          tokens.color.secondary.fixedDim,
                // Tertiary
                'tertiary':                     tokens.color.tertiary.DEFAULT,
                'on-tertiary':                  tokens.color.tertiary.on,
                'tertiary-container':           tokens.color.tertiary.container,
                'on-tertiary-container':        tokens.color.tertiary.onContainer,
                'tertiary-fixed':               tokens.color.tertiary.fixed,
                'tertiary-fixed-dim':           tokens.color.tertiary.fixedDim,
                // Error
                'error':                        tokens.color.error.DEFAULT,
                'on-error':                     tokens.color.error.on,
                'error-container':              tokens.color.error.container,
                'on-error-container':           tokens.color.error.onContainer,
                // Backgrounds
                'background':                   tokens.color.background.DEFAULT,
                'surface':                      tokens.color.background.surface,
                'surface-dim':                  tokens.color.background.surfaceDim,
                'surface-bright':               tokens.color.background.surfaceBright,
                'surface-container-lowest':     tokens.color.background.containerLowest,
                'surface-container-low':        tokens.color.background.containerLow,
                'surface-container':            tokens.color.background.container,
                'surface-container-high':       tokens.color.background.containerHigh,
                'surface-container-highest':    tokens.color.background.containerHighest,
                // On-surface
                'on-background':                tokens.color.onBackground.DEFAULT,
                'on-surface':                   tokens.color.onSurface.DEFAULT,
                'on-surface-variant':           tokens.color.onSurface.variant,
                // Outline
                'outline':                      tokens.color.outline.DEFAULT,
                'outline-variant':              tokens.color.outline.variant,
                // Inverse
                'inverse-surface':              tokens.color.inverse.surface,
                'inverse-on-surface':           tokens.color.inverse.onSurface,
                'inverse-primary':              tokens.color.inverse.primary,
                // Accent & Status
                'accent':                       tokens.color.accent,
                'success':                      tokens.color.status.success,
                'warning':                      tokens.color.status.warning,
                'info':                         tokens.color.status.info,
                // Semantic aliases
                'brand-accent':                 tokens.color.accent,
                'brand-text-primary':           tokens.color.text.primary,
                'brand-text-secondary':         tokens.color.text.secondary,
                'text-inverted':                tokens.color.text.inverse,
                'border-default':               tokens.color.border.default,
                'border-subtle':                tokens.color.border.subtle,
                'border-strong':                tokens.color.border.strong,
            },
            transitionTimingFunction: {
                luxury:  tokens.effects.transition.elastic,
                custom:  tokens.effects.transition.base,
                smooth:  tokens.effects.transition.smooth,
                elastic: tokens.effects.transition.elastic,
                bouncy:  tokens.effects.transition.bouncy,
            },
            keyframes: {
                marquee: {
                    '0%':   { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: `marquee ${tokens.animation.marquee.duration} ${tokens.animation.marquee.timing} ${tokens.animation.marquee.iteration}`,
            },
            borderRadius: {
                DEFAULT: tokens.border.radius.DEFAULT,
                lg:      tokens.border.radius.lg,
                xl:      tokens.border.radius.xl,
                full:    tokens.border.radius.full,
            },
            letterSpacing: {
                tight:     tokens.typography.style.tightTracking,
                blueprint: tokens.typography.style.blueprintTracking,
                normal:    tokens.typography.style.normalTracking,
            },
            fontFamily: {
                sans:    [tokens.typography.fontFamily.body,    tokens.typography.fontFamily.fallback.body],
                display: [tokens.typography.fontFamily.display, tokens.typography.fontFamily.fallback.display],
                mono:    [tokens.typography.mono.fontFamily],
            },
            maxWidth: {
                container: tokens.spacing.containerMax,
            },
            spacing: {
                'section-mobile':    tokens.spacing.sectionMobile,
                'section-desktop':   tokens.spacing.sectionDesktop,
                'container-mobile':  tokens.spacing.containerPaddingMobile,
                'container-desktop': tokens.spacing.containerPaddingDesktop,
                'card-padding':      tokens.spacing.cardPadding,
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, addBase, addUtilities }) {

            // ─── CSS Variables ────────────────────────────────────────────────
            addBase({
                ':root': {
                    // Colors
                    '--color-primary':          tokens.color.primary.DEFAULT,
                    '--color-secondary':        tokens.color.secondary.DEFAULT,
                    '--color-tertiary':         tokens.color.tertiary.DEFAULT,
                    '--color-accent':           tokens.color.accent,
                    '--color-background':       tokens.color.background.DEFAULT,
                    '--color-surface':          tokens.color.background.surface,
                    '--color-on-surface':       tokens.color.onSurface.DEFAULT,
                    '--color-on-background':    tokens.color.onBackground.DEFAULT,
                    '--color-outline':          tokens.color.outline.DEFAULT,
                    '--color-outline-variant':  tokens.color.outline.variant,
                    '--color-error':            tokens.color.error.DEFAULT,
                    '--color-success':          tokens.color.status.success,
                    '--color-border-default':   tokens.color.border.default,
                    // Typography
                    '--font-display':           tokens.typography.fontFamily.display,
                    '--font-body':              tokens.typography.fontFamily.body,
                    '--tracking-tight':         tokens.typography.style.tightTracking,
                    '--tracking-blueprint':     tokens.typography.style.blueprintTracking,
                    // Effects
                    '--transition-base':        tokens.effects.transition.base,
                    '--transition-entrance':    tokens.effects.transition.entrance,
                    '--transition-luxury':      tokens.effects.transition.elastic,
                    '--duration-entrance':      tokens.effects.duration.entrance,
                    '--depth-1':                tokens.effects.depth['1'],
                    '--depth-2':                tokens.effects.depth['2'],
                    '--depth-3':                tokens.effects.depth['3'],
                    '--magnetic-cta':           tokens.effects.magnetic.cta,
                    // Spacing
                    '--spacing-base':               tokens.spacing.base,
                    '--spacing-container-max':      tokens.spacing.containerMax,
                    '--spacing-container-mobile':   tokens.spacing.containerPaddingMobile,
                    '--spacing-container-tablet':   tokens.spacing.containerPaddingTablet,
                    '--spacing-container-desktop':  tokens.spacing.containerPaddingDesktop,
                    '--spacing-section-mobile':     tokens.spacing.sectionMobile,
                    '--spacing-section-desktop':    tokens.spacing.sectionDesktop,
                    '--spacing-card-padding':       tokens.spacing.cardPadding,
                    // Animation
                    '--animation-marquee-duration':  tokens.animation.marquee.duration,
                    '--animation-marquee-timing':    tokens.animation.marquee.timing,
                    '--animation-marquee-iteration': tokens.animation.marquee.iteration,
                    '--animation-stagger':           tokens.animation.stagger,
                    // Border
                    '--border-radius': tokens.border.radius.DEFAULT,
                    '--border-width':  tokens.border.width.DEFAULT,
                    // Grid
                    '--grid-columns': String(tokens.grid.columns),
                    '--grid-gutter':  tokens.grid.gutter,
                    // Cursor
                    '--cursor': tokens.cursor.DEFAULT,
                },
            });

            // ─── Typography Utilities ─────────────────────────────────────────
            addComponents({
                '.type-h1': {
                    fontSize:      tokens.typography.h1.fontSize,
                    fontWeight:    tokens.typography.h1.fontWeight,
                    lineHeight:    tokens.typography.h1.lineHeight,
                    letterSpacing: tokens.typography.h1.letterSpacing,
                    fontFamily:    tokens.typography.h1.fontFamily,
                    color:         tokens.typography.h1.color,
                },
                '.type-h2': {
                    fontSize:      tokens.typography.h2.fontSize,
                    fontWeight:    tokens.typography.h2.fontWeight,
                    lineHeight:    tokens.typography.h2.lineHeight,
                    letterSpacing: tokens.typography.h2.letterSpacing,
                    fontFamily:    tokens.typography.h2.fontFamily,
                    color:         tokens.typography.h2.color,
                },
                '.type-h3': {
                    fontSize:      tokens.typography.h3.fontSize,
                    fontWeight:    tokens.typography.h3.fontWeight,
                    lineHeight:    tokens.typography.h3.lineHeight,
                    letterSpacing: tokens.typography.h3.letterSpacing,
                    fontFamily:    tokens.typography.h3.fontFamily,
                    color:         tokens.typography.h3.color,
                },
                '.type-h4': {
                    fontSize:      tokens.typography.h4.fontSize,
                    fontWeight:    tokens.typography.h4.fontWeight,
                    lineHeight:    tokens.typography.h4.lineHeight,
                    letterSpacing: tokens.typography.h4.letterSpacing,
                    fontFamily:    tokens.typography.h4.fontFamily,
                    color:         tokens.typography.h4.color,
                },
                '.type-h5': {
                    fontSize:      tokens.typography.h5.fontSize,
                    fontWeight:    tokens.typography.h5.fontWeight,
                    lineHeight:    tokens.typography.h5.lineHeight,
                    letterSpacing: tokens.typography.h5.letterSpacing,
                    fontFamily:    tokens.typography.h5.fontFamily,
                    color:         tokens.typography.h5.color,
                },
                '.type-body': {
                    fontSize:   tokens.typography.body.fontSize,
                    fontWeight: tokens.typography.body.fontWeight,
                    lineHeight: tokens.typography.body.lineHeight,
                    fontFamily: tokens.typography.body.fontFamily,
                    color:      tokens.typography.body.color,
                },
                '.type-body-large': {
                    fontSize:   tokens.typography.bodyLarge.fontSize,
                    fontWeight: tokens.typography.bodyLarge.fontWeight,
                    lineHeight: tokens.typography.bodyLarge.lineHeight,
                    fontFamily: tokens.typography.bodyLarge.fontFamily,
                    color:      tokens.typography.bodyLarge.color,
                },
                '.type-body-small': {
                    fontSize:   tokens.typography.bodySmall.fontSize,
                    fontWeight: tokens.typography.bodySmall.fontWeight,
                    lineHeight: tokens.typography.bodySmall.lineHeight,
                    fontFamily: tokens.typography.bodySmall.fontFamily,
                    color:      tokens.typography.bodySmall.color,
                },
                '.type-caption': {
                    fontSize:   tokens.typography.caption.fontSize,
                    fontWeight: tokens.typography.caption.fontWeight,
                    lineHeight: tokens.typography.caption.lineHeight,
                    fontFamily: tokens.typography.caption.fontFamily,
                    color:      tokens.typography.caption.color,
                },
                '.type-label': {
                    fontSize:      tokens.typography.label.fontSize,
                    fontWeight:    tokens.typography.label.fontWeight,
                    lineHeight:    tokens.typography.label.lineHeight,
                    letterSpacing: tokens.typography.label.letterSpacing,
                    fontFamily:    tokens.typography.label.fontFamily,
                    color:         tokens.typography.label.color,
                    textTransform: 'uppercase',
                },
                '.type-label-uppercase': {
                    fontSize:      tokens.typography.labelUppercase.fontSize,
                    fontWeight:    tokens.typography.labelUppercase.fontWeight,
                    lineHeight:    tokens.typography.labelUppercase.lineHeight,
                    letterSpacing: tokens.typography.labelUppercase.letterSpacing,
                    fontFamily:    tokens.typography.labelUppercase.fontFamily,
                    color:         tokens.typography.labelUppercase.color,
                    textTransform: 'uppercase',
                },
                '.type-label-small': {
                    fontSize:      tokens.typography.labelSmall.fontSize,
                    fontWeight:    tokens.typography.labelSmall.fontWeight,
                    lineHeight:    tokens.typography.labelSmall.lineHeight,
                    letterSpacing: tokens.typography.labelSmall.letterSpacing,
                    fontFamily:    tokens.typography.labelSmall.fontFamily,
                    color:         tokens.typography.labelSmall.color,
                    textTransform: 'uppercase',
                },
                '.type-mono': {
                    fontSize:   tokens.typography.mono.fontSize,
                    fontWeight: tokens.typography.mono.fontWeight,
                    lineHeight: tokens.typography.mono.lineHeight,
                    fontFamily: tokens.typography.mono.fontFamily,
                    color:      tokens.typography.mono.color,
                },
                '.type-button': {
                    fontSize:      tokens.typography.button.fontSize,
                    fontWeight:    tokens.typography.button.fontWeight,
                    lineHeight:    tokens.typography.button.lineHeight,
                    letterSpacing: tokens.typography.button.letterSpacing,
                    fontFamily:    tokens.typography.button.fontFamily,
                    textTransform: tokens.typography.button.textTransform,
                    whiteSpace:    'nowrap',
                },

                // ─── Layout ───────────────────────────────────────────────────
                '.main-container': {
                    maxWidth:     tokens.spacing.containerMax,
                    marginLeft:   'auto',
                    marginRight:  'auto',
                    paddingLeft:  tokens.spacing.containerPaddingMobile,
                    paddingRight: tokens.spacing.containerPaddingMobile,
                },
                '@media (min-width: 810px)': {
                    '.main-container': {
                        paddingLeft:  tokens.spacing.containerPaddingDesktop,
                        paddingRight: tokens.spacing.containerPaddingDesktop,
                    },
                },
                '.section-y': {
                    paddingTop:    tokens.spacing.sectionMobile,
                    paddingBottom: tokens.spacing.sectionMobile,
                },

                // ─── Depth & Motion ───────────────────────────────────────────
                '.z-depth-1': { transform: tokens.effects.depth['1'] },
                '.z-depth-2': { transform: tokens.effects.depth['2'] },
                '.z-depth-3': { transform: tokens.effects.depth['3'] },
                '.magnetic-cta': {
                    transition: `transform ${tokens.effects.duration.normal} ${tokens.effects.transition.base}`,
                },
                '.magnetic-cta:hover': {
                    transform: tokens.effects.magnetic.cta,
                },
                '.custom-bezier': {
                    transitionTimingFunction: tokens.effects.transition.base,
                },
                '.luxury-bezier': {
                    transitionTimingFunction: tokens.effects.transition.elastic,
                },

                // ─── Cards ────────────────────────────────────────────────────
                '.card-surface': {
                    backgroundColor: tokens.color.background.surface,
                    border:          `${tokens.border.width.DEFAULT} ${tokens.border.style} ${tokens.color.border.default}`,
                    padding:         tokens.spacing.cardPadding,
                    borderRadius:    tokens.border.radius.DEFAULT,
                },
                '.card-elevated': {
                    backgroundColor: tokens.color.background.container,
                    border:          `${tokens.border.width.DEFAULT} ${tokens.border.style} ${tokens.color.border.default}`,
                    padding:         tokens.spacing.cardPadding,
                    borderRadius:    tokens.border.radius.DEFAULT,
                    transition:      `all ${tokens.effects.duration.slow} ${tokens.effects.transition.base}`,
                },
                '.card-elevated:hover': {
                    transform: 'translateY(-4px)',
                },
            });

            // ─── Utilities ────────────────────────────────────────────────────
            addUtilities({
                '.perspective-1k':  { perspective: '1000px' },
                '.perspective-2k':  { perspective: '2000px' },
                '.preserve-3d':     { transformStyle: 'preserve-3d' },
                '.backface-hidden': { backfaceVisibility: 'hidden' },
            });
        }),
    ],
};
