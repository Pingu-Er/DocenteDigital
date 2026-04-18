import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pingu-er.github.io',
  base: '/DocenteDigital',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
});