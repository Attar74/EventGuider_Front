import { defineStore } from 'pinia';

let user: any = {};
let accessToken = '';
let refreshToken = '';
if (process.client) {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}');
  refreshToken = JSON.parse(localStorage.getItem('refreshToken') || '{}');
}

const { login } = useAuth();

export const useUserStore = defineStore('user', {
  state: () => ({
    userState: !!Object.keys(user).length ? user : null,
    accessToken: accessToken ?? '',
    refreshToken: refreshToken ?? '',
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
      const { accessToken = '', refreshToken = '', ...user_data } = user ?? {};
      user_data
        ? localStorage.setItem('user', JSON.stringify(user_data))
        : localStorage.removeItem('user');
      accessToken
        ? localStorage.setItem('accessToken', JSON.stringify(accessToken))
        : localStorage.removeItem('accessToken');
      refreshToken
        ? localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
        : localStorage.removeItem('refreshToken');

      this.userState = user;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
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
