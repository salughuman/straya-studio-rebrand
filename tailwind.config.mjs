// @ts-check
import tokens from './src/styles/design-tokens.json';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            sm: '390px',
            md: '810px',
            lg: '1200px',
        },
        extend: {
            colors: {
                // GEMINI §5.C — additional aliases (do not remap `brand-secondary`; codebase uses it for accent green)
                'brand-base': tokens.color.background.base,
                'brand-surface': tokens.color.background.surface,
                'brand-elevated': tokens.color.background.elevated,
                'brand-accent': tokens.color.brand.secondary,
                'brand-text-primary': tokens.color.text.primary,
                'brand-text-secondary': tokens.color.text.secondary,
                'brand-text-muted': tokens.color.text.muted,
                // Backgrounds (legacy — keep for existing components)
                'bg-base': tokens.color.background.base,
                'bg-surface': tokens.color.background.surface,
                'bg-elevated': tokens.color.background.elevated,
                'bg-overlay': tokens.color.background.overlay,
                'bg-accent': tokens.color.background.accent,
                // Text
                'text-primary': tokens.color.text.primary,
                'text-secondary': tokens.color.text.secondary,
                'text-muted': tokens.color.text.muted,
                'text-inverted': tokens.color.text.inverted,
                // Brand
                'brand': tokens.color.brand.primary,
                'brand-secondary': tokens.color.brand.secondary,
                'brand-hover': tokens.color.brand.secondaryHover,
                'brand-muted': tokens.color.brand.secondaryMuted,
                // Borders
                'border-default': tokens.color.border.default,
                'border-subtle': tokens.color.border.subtle,
                'border-strong': tokens.color.border.strong,
                // Status
                'status-success': tokens.color.status.success,
                'status-warning': tokens.color.status.warning,
                'status-error': tokens.color.status.error,
            },
            transitionTimingFunction: {
                luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            borderRadius: {
                xs: tokens.radius.xs,
                sm: tokens.radius.sm,
                md: tokens.radius.md,
                lg: tokens.radius.lg,
                xl: tokens.radius.lg,
                full: tokens.radius.full,
            },
            maxWidth: {
                container: tokens.spacing.containerMax,
            },
            boxShadow: {
                sm: tokens.shadow.sm,
                md: tokens.shadow.md,
                lg: tokens.shadow.lg,
                diffusion: tokens.shadow.diffusion,
                frosted: tokens.shadow.frosted,
                primary: tokens.shadow.primary,
            },
            transitionDuration: {
                fast: '150ms',
                base: '300ms',
                slow: '500ms',
                reveal: '600ms',
            },
            zIndex: {
                raised: tokens.zIndex.raised,
                dropdown: tokens.zIndex.dropdown,
                sticky: tokens.zIndex.sticky,
                modal: tokens.zIndex.modal,
                toast: tokens.zIndex.toast,
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ["'Bricolage Grotesque'", 'Outfit', 'sans-serif'],
                mono: ['ui-monospace', 'monospace'],
            },
            // GEMINI §5.G — semantic spacing from tokens (8pt grid)
            spacing: {
                'gutter-mobile': tokens.spacing.gutterMobile,
                'gutter-tablet': tokens.spacing.gutterTablet,
                'gutter-desktop': tokens.spacing.gutterDesktop,
                'section-y-mobile': tokens.spacing.sectionYMobile,
                'section-y': tokens.spacing.sectionY,
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, addBase }) {

            // CSS Variables — for use outside Tailwind classes
            addBase({
                ':root': {
                    '--color-bg-base': tokens.color.background.base,
                    '--color-bg-surface': tokens.color.background.surface,
                    '--color-bg-elevated': tokens.color.background.elevated,
                    '--color-text-primary': tokens.color.text.primary,
                    '--color-text-secondary': tokens.color.text.secondary,
                    '--color-text-muted': tokens.color.text.muted,
                    '--color-text-inverted': tokens.color.text.inverted,
                    '--color-brand': tokens.color.brand.primary,
                    '--color-brand-secondary': tokens.color.brand.secondary,
                    '--color-border': tokens.color.border.default,
                    '--color-border-subtle': tokens.color.border.subtle,
                    /* Semantic aliases (GEMINI / component contracts) */
                    '--color-background-base': tokens.color.background.base,
                    '--color-background-surface': tokens.color.background.surface,
                    '--color-background-elevated': tokens.color.background.elevated,
                    '--color-accent': tokens.color.brand.secondary,
                    '--color-accent-hover': tokens.color.brand.secondaryHover,
                    '--color-border-default': tokens.color.border.default,
                    '--color-border-strong': tokens.color.border.strong,
                    '--font-display': tokens.typography.h1.fontFamily,
                    '--font-body': tokens.typography.body.fontFamily,
                    '--radius-xs': tokens.radius.xs,
                    '--radius-sm': tokens.radius.sm,
                    '--radius-md': tokens.radius.md,
                    '--radius-lg': tokens.radius.lg,
                    '--section-y': tokens.spacing.sectionY,
                    '--container-max': tokens.spacing.containerMax,
                    '--gutter-mobile': tokens.spacing.gutterMobile,
                    '--gutter-tablet': tokens.spacing.gutterTablet,
                    '--gutter-desktop': tokens.spacing.gutterDesktop,
                    '--transition-base': tokens.transition.base,
                    '--transition-spring': tokens.transition.spring,
                    '--transition-fast': tokens.transition.fast,
                    '--transition-slow': tokens.transition.slow,
                    '--shadow-md': tokens.shadow.md,
                    '--shadow-diffusion': tokens.shadow.diffusion,
                    '--shadow-frosted': tokens.shadow.frosted,
                    '--shadow-primary': tokens.shadow.primary,
                    /* RGB form of base background for gradients (alpha in linear-gradient) */
                    '--rgb-bg-base': '5, 5, 5',
                },
            });

            // Semantic typography classes
            addComponents({
                '.type-h1': {
                    fontSize: tokens.typography.h1.fontSize,
                    fontWeight: tokens.typography.h1.fontWeight,
                    lineHeight: tokens.typography.h1.lineHeight,
                    letterSpacing: tokens.typography.h1.letterSpacing,
                    fontFamily: tokens.typography.h1.fontFamily,
                },
                '.type-h2': {
                    fontSize: tokens.typography.h2.fontSize,
                    fontWeight: tokens.typography.h2.fontWeight,
                    lineHeight: tokens.typography.h2.lineHeight,
                    letterSpacing: tokens.typography.h2.letterSpacing,
                    fontFamily: tokens.typography.h2.fontFamily,
                },
                '.type-h3': {
                    fontSize: tokens.typography.h3.fontSize,
                    fontWeight: tokens.typography.h3.fontWeight,
                    lineHeight: tokens.typography.h3.lineHeight,
                    letterSpacing: tokens.typography.h3.letterSpacing,
                    fontFamily: tokens.typography.h3.fontFamily,
                },
                '.type-h4': {
                    fontSize: tokens.typography.h4.fontSize,
                    fontWeight: tokens.typography.h4.fontWeight,
                    lineHeight: tokens.typography.h4.lineHeight,
                    letterSpacing: tokens.typography.h4.letterSpacing,
                    fontFamily: tokens.typography.h4.fontFamily,
                },
                '.type-h5': {
                    fontSize: tokens.typography.h5.fontSize,
                    fontWeight: tokens.typography.h5.fontWeight,
                    lineHeight: tokens.typography.h5.lineHeight,
                    letterSpacing: tokens.typography.h5.letterSpacing,
                    fontFamily: tokens.typography.h5.fontFamily,
                },
                '.type-body': {
                    fontSize: tokens.typography.body.fontSize,
                    fontWeight: tokens.typography.body.fontWeight,
                    lineHeight: tokens.typography.body.lineHeight,
                    fontFamily: tokens.typography.body.fontFamily,
                },
                '.type-body-lg': {
                    fontSize: tokens.typography.bodyLarge.fontSize,
                    fontWeight: tokens.typography.bodyLarge.fontWeight,
                    lineHeight: tokens.typography.bodyLarge.lineHeight,
                    fontFamily: tokens.typography.bodyLarge.fontFamily,
                },
                '.type-small': {
                    fontSize: tokens.typography.small.fontSize,
                    fontWeight: tokens.typography.small.fontWeight,
                    lineHeight: tokens.typography.small.lineHeight,
                    fontFamily: tokens.typography.small.fontFamily,
                },
                '.type-label': {
                    fontSize: tokens.typography.label.fontSize,
                    fontWeight: tokens.typography.label.fontWeight,
                    lineHeight: tokens.typography.label.lineHeight,
                    letterSpacing: tokens.typography.label.letterSpacing,
                    fontFamily: tokens.typography.label.fontFamily,
                    textTransform: 'uppercase',
                    /* GEMINI §5.E — accent label colour (§5.C hex-first) */
                    color: '#3CCD7F',
                },
                '.type-mono': {
                    fontSize: tokens.typography.mono.fontSize,
                    fontWeight: tokens.typography.mono.fontWeight,
                    lineHeight: tokens.typography.mono.lineHeight,
                    fontFamily: tokens.typography.mono.fontFamily,
                },
                // GEMINI §5.E — caption (muted small body)
                '.type-caption': {
                    fontSize: '0.75rem',
                    fontWeight: '400',
                    lineHeight: '1.5',
                    letterSpacing: '0em',
                    fontFamily: tokens.typography.body.fontFamily,
                    color: '#6B7280',
                },

                // Layout utilities (GEMINI §5.E — .main-container + legacy alias)
                ...(() => {
                    const mainContainer = {
                        maxWidth: tokens.spacing.containerMax,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingLeft: 'var(--gutter-mobile)',
                        paddingRight: 'var(--gutter-mobile)',
                        '@screen md': {
                            paddingLeft: 'var(--gutter-tablet)',
                            paddingRight: 'var(--gutter-tablet)',
                        },
                        '@screen lg': {
                            paddingLeft: 'var(--gutter-desktop)',
                            paddingRight: 'var(--gutter-desktop)',
                        },
                    };
                    return {
                        '.main-container': mainContainer,
                        '.container-studio': mainContainer,
                    };
                })(),
                '.section-y': {
                    paddingTop: tokens.spacing.sectionYMobile,
                    paddingBottom: tokens.spacing.sectionYMobile,
                    '@screen lg': {
                        paddingTop: tokens.spacing.sectionY,
                        paddingBottom: tokens.spacing.sectionY,
                    },
                },
                '.glass-elevated': {
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: tokens.radius.md,
                    boxShadow: tokens.shadow.frosted,
                    transition: tokens.transition.base,
                },
                '.glass-surface': {
                    backgroundColor: tokens.color.background.surface,
                    border: `1px solid ${tokens.color.border.default}`,
                    borderRadius: tokens.radius.md,
                    transition: tokens.transition.base,
                },
                '.blueprint-grid': {
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px',
                    backgroundPosition: 'center center',
                },
            });
        }),
    ],
};