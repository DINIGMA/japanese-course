import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/styles/tailwind/index.css',
    '~/assets/styles/global.scss',
  ],

  ui: {
    colorMode: false,
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseKey: process.env.SUPABASE_KEY || '',
    },
  },

  alias: {
    '@layers': fileURLToPath(new URL('./layers', import.meta.url)),
  },



  compatibilityDate: '2026-05-07',

  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'es2015',
    },
  },

  typescript: {
    strict: true,
    includeWorkspace: true,
  },

  icon: {
    mode: 'svg',
    serverBundle: 'auto',
  },
});
