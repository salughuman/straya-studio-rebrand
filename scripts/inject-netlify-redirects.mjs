/**
 * Netlify sets NETLIFY=true during CI builds. Cloudflare Pages does not.
 * Writes dist/_redirects so 301s take precedence over static HTML (301!).
 */
import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

if (process.env.NETLIFY !== "true") {
  process.exit(0);
}

const dist = join(process.cwd(), "dist");
const target = join(dist, "_redirects");
const line = "/*\thttps://strayastudio.com/:splat\t301!\n";

if (!existsSync(dist)) {
  console.warn("inject-netlify-redirects: dist/ missing; skip.");
  process.exit(0);
}

if (existsSync(target)) {
  const existing = readFileSync(target, "utf8");
  if (!existing.includes("strayastudio.com")) {
    appendFileSync(target, line);
  }
} else {
  writeFileSync(target, line);
}
