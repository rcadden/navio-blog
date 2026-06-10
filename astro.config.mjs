import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mynavio.com',
  base: '/blog',
  trailingSlash: 'never',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
