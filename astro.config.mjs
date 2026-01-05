import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // React kullanıyorsan

export default defineConfig({
  output: 'static',
  integrations: [
    react()
  ],
});