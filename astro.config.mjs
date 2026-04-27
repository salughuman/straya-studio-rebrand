// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://strayastudio.com',
  integrations: [tailwind({
    applyBaseStyles: false,
  }), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    filter: (page) => !page.includes('/styleguide'),
  }), react()],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});