/**
 * Selected work — curated case-style entries for the homepage grid.
 * Thumbnail behavior in SelectedWork.astro:
 * - Cards use a framed viewport with subtle hover scale treatment.
 * - No hover scroll/pan is used currently.
 *
 * IMAGE GUIDELINES
 * ─────────────────────────────────────────────────────────────────
 * Target card ratios:
 *   Featured card  : 16:9
 *   Grid cards     : 4:3
 *
 * Recommended export:
 *   Featured size : 1600 x 900px (16:9)
 *   Grid size     : 1200 x 900px (4:3)
 *   Width guide   : keep at least 1200px wide
 *   Format       : WebP preferred (AVIF acceptable)
 *   Max size     : <= 450KB per image (optimize aggressively)
 *
 * Naming convention:
 *   /images/work/<project-slug>-fullpage.webp
 *   Examples:
 *   - /images/work/logo-diffusion-fullpage.webp
 *   - /images/work/knine-solution-fullpage.webp
 *   - /images/work/tnt-simmonds-fullpage.webp
 *   - /images/work/pal-puppy-fullpage.webp
 *
 * Visual notes:
 * - Keep composition centered for each ratio crop.
 * - Avoid relying only on color to communicate info (cards start grayscale).
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
    title: "Logo Diffusion",
    sector: "Webflow",
    description:
      "Logo Diffusion turns simple prompts into polished logo concepts, generating multiple ready-to-use directions in seconds with a smooth flow for saving, refining, and launching.",
    creditLine: "Direct build",
    partnershipType: "Direct",
    thumbnail: "/images/work/logo-diffusion-fullpage.webp",
    href: "https://logodiffusion.com/",
  },
  {
    title: "Knine Solution",
    sector: "Framer",
    description:
      "For K-Nine Solutions, we refreshed brand identity, produced custom photography, and built a high-performance site designed to elevate trust, drive sales, and support growth.",
    creditLine: "Built for bluefin Studio",
    partnershipType: "White-label",
    creditAgencyName: "bluefin Studio",
    creditAgencyUrl: "https://www.bluefin.studio/",
    thumbnail: "/images/work/knine-solution-fullpage.webp",
    href: "https://kninesolutions.com/",
  },
  {
    title: "TNT Simmonds",
    sector: "Framer",
    description:
      "For TNT Simmonds, we designed a digital presence that reflects their luxury craftsmanship, presenting portfolio work with clarity and sophistication to attract ideal clients.",
    creditLine: "Built for bluefin Studio",
    partnershipType: "White-label",
    creditAgencyName: "bluefin Studio",
    creditAgencyUrl: "https://www.bluefin.studio/",
    thumbnail: "/images/work/tnt-simmonds-fullpage.webp",
    href: "https://tntsimmonds.com/",
    featured: true,
  },
  {
    title: "Pal Puppy",
    sector: "Framer",
    description:
      "For PAL Puppy, we defined an early-stage brand and website with a warm, trustworthy tone that makes owners feel confident from the first interaction.",
    creditLine: "Built for bluefin Studio",
    partnershipType: "White-label",
    creditAgencyName: "bluefin Studio",
    creditAgencyUrl: "https://www.bluefin.studio/",
    thumbnail: "/images/work/pal-puppy-fullpage.webp",
    href: "https://palpuppy.com/",
  },
];
