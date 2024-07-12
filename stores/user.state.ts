import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

let user: any = {};
if (process.client) {
  user = JSON.parse(localStorage.getItem('user') || '{}');
} else {
  console.log('yyy');
}

const { login } = useAuth();

export const useUserStore = defineStore('user', {
  state: () => ({
    userState: !!Object.keys(user).length ? user : null,
    loggedInState: !!Object.keys(user).length ? true : false,
  }),
  getters: {
    isLoggedIn(state) {
      return state.loggedInState;
    },
    userData(state) {
      return state.userState;
    },
  },
  actions: {
    updateUser(user: any) {
      user
        ? localStorage.setItem('user', JSON.stringify(user))
        : localStorage.removeItem('user');
      this.userState = user;
    },
    updateLoggedIn(value: any) {
      localStorage.setItem('loggedIn', value);
      this.loggedInState = value;
    },
    async onLogin(paylod: any) {
      try {
        const data: any = await login(paylod);
        const user = {
          ...data.user,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        };

        this.updateUser(user);
        this.updateLoggedIn(true);
      } catch {}
    },
    async onLogout() {
      await this.updateUser(null);
      this.updateLoggedIn(false);
    },
  },
});
