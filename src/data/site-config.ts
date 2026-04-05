/**
 * SITE_CONFIG — Straya Studio
 * Centralized source of truth for all site-wide metadata, contact info, and socials.
 */

export const SITE_CONFIG = {
  // 1. Core Identity
  name: "Straya Studio",
  fullName: "Straya Studio | Founder-Led Technical Partner",
  founder: "Salman",
  jobTitle: "Principal Engineer & Founder",
  tagline: "Designing & developing Ideas into Icons",
  description: "Straya Studio is a founder-led technical agency by Salman — Certified Framer Expert, Webflow Architect, and Shopify Developer. We deliver high-end Framer, Webflow, Shopify, and WordPress solutions for tech startups and ecommerce brands globally.",

  // 2. Connectivity
  email: "hello@strayastudio.com",
  contactEmail: "salmanghuman98@gmail.com", // Used for primary lead intake & Schema
  url: "https://strayastudio.com",
  baseUrl: "strayastudio.com",

  // 3. Social & Professional Proof
  socials: {
    linkedIn: "https://www.linkedin.com/in/salughuman",
    agency_linkedin: "https://www.linkedin.com/company/straya-studio",
    fiverr: "https://www.fiverr.com/salughuman",
    contra: "https://contra.com/salughuman/",
    github: "https://github.com/salughuman",
    framer: "https://www.framer.community/u/da916398",
    calendly: "https://calendly.com/salughuman/15min",
  },

  // 4. Strategic Authority
  authority: {
    certifications: ["Official Certified Framer Expert"],
    roles: ["Lead Developer @ Globaltize"],
    trackRecord: "100+ Five-Star Deployments",
  },

  // 5. Platform Hierarchy (GEMINI §1 — always in this order)
  platforms: [
    { name: "Framer",    tier: "Premium",    slug: "framer" },
    { name: "Webflow",   tier: "Premium",    slug: "webflow" },
    { name: "Shopify",   tier: "Premium",    slug: "shopify" },
    { name: "Wix",       tier: "Accessible", slug: "wix" },
    { name: "WordPress", tier: "Accessible", slug: "wordpress" },
  ],

  // 6. AEO Summary (Answer Engine Optimization)
  aeo: {
    summary: "Straya Studio: Premium technical partner specializing in Framer, Webflow, and Shopify. Founder-led by Salman, a certified expert delivering 100/100 performance builds for global startups.",
    primaryMarkets: ["Australia", "United States", "United Kingdom", "Europe", "Canada"],
  }
};

export type SiteConfig = typeof SITE_CONFIG;