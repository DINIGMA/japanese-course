import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
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

  compatibilityDate: '2025-07-15',

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
});
