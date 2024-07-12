import { defineStore } from 'pinia';

const { getCountries } = useCommon();

let countries: any = [];
countries = JSON.parse(localStorage.getItem('countries') || '[]');

export const useCommonStore = defineStore('common', {
  state: () => ({
    countries: !!Object.keys(countries).length ? countries : [],
  }),
  getters: {
    countriesGetter(state) {
      return state.countries;
    },
  },
  actions: {
    async setCountries() {
      if (countries.length) {
        return;
      }
      try {
        const data = await getCountries();
        localStorage.setItem('countries', JSON.stringify(data.items));
      } catch {}
    },
  },
});
