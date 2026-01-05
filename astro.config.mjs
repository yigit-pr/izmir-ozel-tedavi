import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindvite from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [tailwindvite()],
    },
    output: 'static',
});
