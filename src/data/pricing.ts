/**
 * Homepage pricing — project-based tiers (no retainers).
 * Source of truth: GEMINI.md §4
 * Used by: Pricing.astro
 */

export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  bestFor: string;
  included: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaPrimary?: boolean;
}

export const PRICING_HEADLINE =
  "Transparent pricing, no retainers required.";

export const PRICING_SUBTITLE =
  "We take on 2–3 projects at a time to give each one the attention it deserves. Every engagement is scoped, priced, and delivered as a complete project.";

export const PRICING_BADGE = "1 spot open for April 2026";

export const PRICING_TRUST_LINE =
  "Final quote provided after a 30-minute scoping call or project brief review — no surprises.";

export const PRICING_FOOTER = {
  title: "Not sure which tier fits?",
  description:
    "Book a free 30-minute scoping call or send us your project brief. We'll review the scope, recommend the right tier, and send you a fixed quote — no obligation.",
  ctaLabel: "Schedule a call",
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    tagline: "One focused deliverable, done right.",
    price: "From $2,000",
    timeline: "1–2 weeks",
    bestFor:
      "Landing pages, single-page sites, Shopify theme customisations, or standalone graphic design projects.",
    included: [
      "Custom design — no templates, ever",
      "Development on Framer, Webflow, Shopify, Wix, or WordPress",
      "Mobile-first responsive build",
      "On-page SEO setup",
      "2 rounds of revisions",
      "Launch support and file handoff",
    ],
    ctaLabel: "Start a project",
  },
  {
    name: "Growth",
    tagline: "A complete website built to convert.",
    price: "From $4,000",
    timeline: "2–4 weeks",
    bestFor:
      "Multi-page websites, brand-led redesigns, e-commerce stores, or marketing sites that need to perform.",
    included: [
      "Everything in Starter",
      "Up to 10 custom-designed pages",
      "CMS setup and content architecture",
      "Custom interactions and animations",
      "Brand identity and visual direction",
      "Performance tuning — 90+ Lighthouse scores",
      "Unlimited revisions until you sign off",
    ],
    popular: true,
    ctaLabel: "Start a project",
    ctaPrimary: true,
  },
  {
    name: "Premium",
    tagline: "Enterprise-grade, from strategy to launch.",
    price: "From $9,500",
    timeline: "4–8 weeks",
    bestFor:
      "Complex platforms, full brand overhauls, custom web applications, or high-traffic e-commerce builds.",
    included: [
      "Everything in Growth",
      "Discovery workshop and technical strategy",
      "Unlimited pages and custom components",
      "Advanced SEO and analytics integration",
      "Graphic design — social kits, pitch decks, brand assets",
      "Dedicated Slack channel with priority response",
      "60 days of post-launch support included",
    ],
    ctaLabel: "Book a call",
  },
];