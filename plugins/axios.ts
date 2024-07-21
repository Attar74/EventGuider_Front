import axios from 'axios';
import { refreshToken } from '~/apis/refreshToken';
import { useUserStore } from '~/stores/user.state.js';

const axiosIns: any = axios.create({
  baseURL: 'https://event-guider-dev.azurewebsites.net',
  // timeout: 2000,
  headers: {
    'Accept-Language': 'en-US',
  },
});

axiosIns.interceptors.request.use((config: any) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('accessToken');

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {};

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : '';
  }

  // Return modified config
  return config;
});

axiosIns.interceptors.response.use(
  (response: any) => {
    // If the response is successful (status code 2xx), return it as-is
    return response;
  },
  async (error: any) => {
    const router = useRouter();
    // const userStore = useUserStore();

    // If the response has a 401 status code, handle the unauthorized request
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      router.push('/auth/login');

      // const currentRefreshToken = localStorage.getItem('refreshToken');
      // const payload = { token: currentRefreshToken };
      // const { data } = await refreshToken(payload);
      // const user = {
      //   ...data.user,
      //   accessToken: data.accessToken,
      //   refreshToken: data.refreshToken,
      // };
      // userStore.updateUser(user);
      // userStore.updateLoggedIn(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    // For other errors, reject the promise and pass the error along
    return Promise.reject(error);
  }
);

export default defineNuxtPlugin(async () => {
  return {
    provide: {
      axiosIns,
    },
  };
});
