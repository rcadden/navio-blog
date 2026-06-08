import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mynavio.com',
  base: '/blog',
  integrations: [tailwind()],
  output: 'static',
});
