/**
 * Selected work — curated case-style entries for the homepage grid.
 * Platform tags must follow tier order: Framer → Webflow → Shopify → WordPress.
 */

export interface SelectedProject {
  title: string;
  sector: string;
  description: string;
  /** Optional thumbnail path (recommended: /images/work/<slug>.webp) */
  thumbnail?: string;
  href: string;
  /** Optional live site or case study URL shown in the expanded panel */
  liveUrl?: string;
  featured?: boolean;
}

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    title: "Kova Labs",
    sector: "B2B SaaS · Australia / US",
    description:
      "Marketing site and CMS on Framer — sub-second loads and a conversion-led narrative for a technical audience.",
    thumbnail: "/images/work/kova-labs.webp",
    href: "/contact?source=selected-work&project=kova-labs",
    featured: true,
  },
  {
    title: "Meridian Health",
    sector: "Healthcare · US",
    description:
      "Patient-facing Webflow build with structured CMS, accessibility hardening, and performance tuned for Core Web Vitals.",
    thumbnail: "/images/work/meridian-health.webp",
    href: "/contact?source=selected-work&project=meridian-health",
  },
  {
    title: "Altitude Gear Co.",
    sector: "E-commerce · Global",
    description:
      "Custom Shopify storefront with Liquid sections, checkout optimisation, and analytics-ready event layer.",
    thumbnail: "/images/work/altitude-gear.webp",
    href: "/contact?source=selected-work&project=altitude-gear",
  },
  {
    title: "Luminary Finance",
    sector: "Fintech · UK",
    description:
      "WordPress to Webflow migration — design system, gated content, and SEO layer rebuilt for scale.",
    thumbnail: "/images/work/luminary-finance.webp",
    href: "/contact?source=selected-work&project=luminary-finance",
  },
  {
    title: "NexGen Systems",
    sector: "Enterprise · EU",
    description:
      "Framer site plus custom code components and CMS modelling for a multi-region product launch.",
    thumbnail: "/images/work/nexgen-systems.webp",
    href: "/contact?source=selected-work&project=nexgen-systems",
  },
  {
    title: "Parallel Studio",
    sector: "Startup · US",
    description:
      "Shopify Plus build with app integrations, subscription flows, and performance budget enforced in production.",
    thumbnail: "/images/work/parallel-studio.webp",
    href: "/contact?source=selected-work&project=parallel-studio",
  },
];
