import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindvite from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindvite()],
  },
});