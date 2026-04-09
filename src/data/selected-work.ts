/**
 * Selected work — curated case-style entries for the homepage grid.
 * Platform tags must follow tier order: Framer → Webflow → Shopify → WordPress.
 *
 * IMAGE GUIDELINES
 * ─────────────────────────────────────────────────────────────────
 * Featured project (first item, featured: true):
 *   Aspect ratio : 16:9  (e.g. 1600 × 900px)
 *   Path         : /images/work/<slug>.webp
 *   Max size     : 300KB
 *
 * Grid cards (remaining items):
 *   Aspect ratio : 4:3  (e.g. 800 × 600px)
 *   Path         : /images/work/<slug>.webp
 *   Max size     : 150KB
 *
 * Format: WebP preferred, AVIF acceptable.
 * All images should be grayscale-friendly (they render grayscale by default,
 * color on hover) — avoid images that rely on color to communicate meaning.
 * ─────────────────────────────────────────────────────────────────
 */

export interface SelectedProject {
  title: string;
  sector: string;
  description: string;
  /** Honest delivery attribution shown on the card (e.g., Built for X studio). */
  creditLine: string;
  /** Optional label for relationship framing. */
  partnershipType?: "White-label" | "Direct";
  /** Optional credit agency details for white-label/partner work. */
  creditAgencyName?: string;
  creditAgencyUrl?: string;
  /** Optional thumbnail path (recommended: /images/work/<slug>.webp) */
  thumbnail?: string;
  href: string;
  /** Optional live site or case study URL shown in the expanded panel */
  liveUrl?: string;
  featured?: boolean;
}

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    title: "SaaS Marketing Platform",
    sector: "B2B SaaS · Australia / US",
    description:
      "Marketing site and CMS on Framer — sub-second loads and a conversion-led narrative for a technical audience.",
    creditLine: "Development by Straya Studio",
    partnershipType: "Direct",
    thumbnail: "/images/work/kova-labs.webp",
    href: "/contact?source=selected-work&project=kova-labs",
    featured: true,
  },
  {
    title: "Healthcare Content Hub",
    sector: "Healthcare · US",
    description:
      "Patient-facing Webflow build with structured CMS, accessibility hardening, and performance tuned for Core Web Vitals.",
    creditLine: "Built for Northline Studio",
    partnershipType: "White-label",
    creditAgencyName: "Northline Studio",
    creditAgencyUrl: "https://example.com/northline-studio",
    thumbnail: "/images/work/meridian-health.webp",
    href: "/contact?source=selected-work&project=meridian-health",
  },
  {
    title: "Outdoor Commerce Storefront",
    sector: "E-commerce · Global",
    description:
      "Custom Shopify storefront with Liquid sections, checkout optimisation, and analytics-ready event layer.",
    creditLine: "Development by Straya Studio",
    partnershipType: "Direct",
    thumbnail: "/images/work/altitude-gear.webp",
    href: "/contact?source=selected-work&project=altitude-gear",
  },
  {
    title: "Fintech Migration Rebuild",
    sector: "Fintech · UK",
    description:
      "WordPress to Webflow migration — design system, gated content, and SEO layer rebuilt for scale.",
    creditLine: "Built for Beacon Collective",
    partnershipType: "White-label",
    creditAgencyName: "Beacon Collective",
    creditAgencyUrl: "https://example.com/beacon-collective",
    thumbnail: "/images/work/luminary-finance.webp",
    href: "/contact?source=selected-work&project=luminary-finance",
  },
  {
    title: "Enterprise Launch Site",
    sector: "Enterprise · EU",
    description:
      "Framer site plus custom code components and CMS modelling for a multi-region product launch.",
    creditLine: "Development by Straya Studio",
    partnershipType: "Direct",
    thumbnail: "/images/work/nexgen-systems.webp",
    href: "/contact?source=selected-work&project=nexgen-systems",
  },
  {
    title: "DTC Subscription Build",
    sector: "Startup · US",
    description:
      "Shopify Plus build with app integrations, subscription flows, and performance budget enforced in production.",
    creditLine: "Built for Parallel Studio",
    partnershipType: "White-label",
    creditAgencyName: "Parallel Studio",
    creditAgencyUrl: "https://example.com/parallel-studio",
    thumbnail: "/images/work/parallel-studio.webp",
    href: "/contact?source=selected-work&project=parallel-studio",
  },
];
