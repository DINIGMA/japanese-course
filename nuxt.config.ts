import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    'nuxt-viewport',
    '@nuxt/ui',
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

  // compatibilityDate: '2026-05-07',

  vite: {
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

  viewport: {
    breakpoints: {
      mobile: 0,
      tablet: 640,
      desktop: 1200,
      'desktop-l': 1440,
    },
  },
});
