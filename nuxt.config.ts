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

  imports: {
    dirs: ['./helper/*.ts'],
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
    // '@nuxtjs/axios',
    // '@nuxtjs/auth',
  ],

  // axios: {
  //   baseURL: 'http://127.0.0.1:5173/api',
  // },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'login', method: 'post', propertyName: 'data.token' },
  //         user: { url: 'me', method: 'get', propertyName: 'data' },
  //         logout: false,
  //       },
  //     },
  //   },
  // },

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
  ssr: false,
});
