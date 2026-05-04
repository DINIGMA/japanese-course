import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/styles/tailwind/index.css',
    '~/assets/styles/global.scss',
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseKey: process.env.SUPABASE_KEY || '',
    },
  },

  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [tailwindcss()],
  },

});
