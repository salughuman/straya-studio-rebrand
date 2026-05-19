export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How does a project start?",
    answer:
      "A free 30-minute scoping call. We align on your goals and platform fit, then follow up with a fixed scope and quote — no surprises.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Projects start at $2,500 for a landing page and $5,000 for a multi-page site. Complex platforms are quoted custom. Every quote is fixed — 50% upfront, 50% on delivery. No hourly billing.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Landing pages ship in 1–2 weeks. Multi-page sites take 2–5 weeks. Complex platforms run 4–8+ weeks. Timelines are locked in the scope document before work begins.",
  },
  {
    question: "Which platform — Framer, Webflow, or Shopify?",
    answer:
      "Framer for fast, design-led marketing sites. Webflow for content-heavy multi-page builds. Shopify for serious e-commerce. We recommend the best fit during the scoping call.",
  },
  {
    question: "Who will I be working with?",
    answer:
      "Directly with the founder — no account managers, no handoffs. Every decision and deliverable comes from the same person who scoped the project.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a clean handoff to your own infrastructure — you own everything, zero lock-in. Growth and Digital Product tiers include ongoing support and iteration.",
  },
];
