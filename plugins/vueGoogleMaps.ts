import VueGoogleMaps from '@fawmi/vue-google-maps';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBo01vnxd0-p9-a7NgqTaU9GAUgJdGYJ3E',
    },
  });
});
