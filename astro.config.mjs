import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://otterroofingllc.com',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
});
