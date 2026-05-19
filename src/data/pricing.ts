/**
 * Homepage pricing — premium project engagements.
 * Clear, structured, and built for fast decision making.
 */

export interface PricingTier {
  name: string
  tagline: string
  hook: string
  price: string
  timeline: string
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
    "Book a short discovery call or send over your brief. We'll review the scope, recommend the right engagement, and provide a fixed project quote — no obligation.",
  ctaLabel: "Book a discovery call",
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Landing Page",

    tagline:
      "A focused, high-converting launch experience.",

    hook: "Live in 1–2 weeks.",

    price: "$2,500",

    timeline: "1–2 weeks",

    included: [
      "Custom landing page design",
      "Development in Framer or Webflow",
      "Smooth interactions and animations",
      "Launch support and final handoff",
    ],

    ctaLabel: "Start a project",
  },

  {
    name: "Growth Website",

    tagline:
      "A complete website designed to scale your brand.",

    hook: "Your full brand, online.",

    price: "$5,000",

    timeline: "2–5 weeks",

    included: [
      "Everything in Landing Page",
      "CMS setup and scalable structure",
      "Advanced motion systems",
      "Performance and accessibility optimisation",
    ],

    popular: true,

    ctaLabel: "Start a project",

    ctaPrimary: true,
  },

  {
    name: "Digital Product System",

    tagline:
      "Enterprise-level strategy, systems, and execution.",

    hook: "Built for scale.",

    price: "Custom",

    timeline: "4–8+ weeks",

    included: [
      "Product strategy and discovery",
      "Custom UX systems and architecture",
      "Design systems and reusable components",
      "Post-launch support and iteration",
    ],

    ctaLabel: "Book a call",
  },
]
