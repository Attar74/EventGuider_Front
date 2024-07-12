import { useUserStore } from '~/stores/user.state.js';

// Pinia Store
const userStore = useUserStore();

export default defineNuxtRouteMiddleware((to, from) => {
  //   if (userStore.isLoggedIn) {
  //     return abortNavigation();
  //   }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (userStore.isLoggedIn) {
    return navigateTo('/');
  }
});
