import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import {ViteEnv} from 'vite';

export default defineConfig({
  site: 'https://astro-ad-engine.vercel.app',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    define: {
      __BASE_URL__: JSON.stringify(process.env.VITE_FE_URL),
    },
  },
});
