import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // React kullanıyorsan

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(), // Burası önemli, parantez içinde tailwind() olmalı
    react()
  ],
});