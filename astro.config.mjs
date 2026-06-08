import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mynavio.com',
  integrations: [tailwind()],
  output: 'static',
});
