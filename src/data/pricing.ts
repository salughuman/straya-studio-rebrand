/**
 * Homepage pricing — premium project engagements.
 * Clear, structured, and built for fast decision making.
 */

export interface PricingTier {
  name: string
  tagline: string
  price: string
  timeline: string
  bestFor: string
  included: string[]
  popular?: boolean
  ctaLabel: string
  ctaPrimary?: boolean
}

export const PRICING_HEADLINE =
  "Built around outcomes, not templates."

export const PRICING_SUBTITLE =
  "Every project is custom-scoped based on your goals, timeline, and complexity. We work with a limited number of clients at a time to ensure focused execution and high-quality delivery."

export const PRICING_BADGE =
  "Currently booking for April 2026"

export const PRICING_TRUST_LINE =
  "Most projects fall between $5k–20k depending on scope, platform, and level of strategy involved."

export const PRICING_FOOTER = {
  title: "Not sure which engagement fits?",
  description:
    "Book a short discovery call or send over your brief. We’ll review the scope, recommend the right engagement, and provide a fixed project quote — no obligation.",
  ctaLabel: "Book a discovery call",
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Landing Page",

    tagline:
      "A focused, high-converting launch experience.",

    price: "$2,500",

    timeline: "1–2 weeks",

    bestFor:
      "Founders, SaaS products, campaigns, and businesses that need a premium single-page website built fast.",

    included: [
      "Custom landing page design",
      "Development in Framer or Webflow",
      "Responsive optimisation",
      "Core SEO and performance setup",
      "Smooth interactions and animations",
      "Launch support and final handoff",
    ],

    ctaLabel: "Start a project",
  },

  {
    name: "Growth Website",

    tagline:
      "A complete website designed to scale your brand.",

    price: "$5,000",

    timeline: "2–5 weeks",

    bestFor:
      "Multi-page websites, SaaS marketing sites, premium service brands, and modern e-commerce experiences.",

    included: [
      "Everything included in Landing Page",
      "Custom-designed multi-page experience",
      "CMS setup and scalable content structure",
      "Advanced interactions and motion systems",
      "Brand direction and refined UI design",
      "Performance and accessibility optimisation",
      "Collaborative review process",
    ],

    popular: true,

    ctaLabel: "Start a project",

    ctaPrimary: true,
  },

  {
    name: "Digital Product System",

    tagline:
      "Enterprise-level strategy, systems, and execution.",

    price: "Custom",

    timeline: "4–8+ weeks",

    bestFor:
      "Complex platforms, custom applications, product ecosystems, and high-scale digital experiences.",

    included: [
      "Product strategy and discovery workshops",
      "Custom UX systems and scalable architecture",
      "Advanced development and API integrations",
      "Design systems and reusable components",
      "Analytics and conversion optimisation",
      "Priority collaboration workflow",
      "Post-launch support and iteration planning",
    ],

    ctaLabel: "Book a call",
  },
]