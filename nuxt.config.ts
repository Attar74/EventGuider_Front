// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  typescript: {
    typeCheck: true,
  },

  build: { transpile: ['@fawmi/vue-google-maps'] },

  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: 'AIzaSyBo01vnxd0-p9-a7NgqTaU9GAUgJdGYJ3E' },
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
  ],

  googleFonts: {
    families: {
      'Montserrat Alternates': [],
    },
  },

  plugins: ['@/plugins/vueGoogleMaps.ts'],

  css: ['public/assets/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
