import { ISiteSettingsStore } from '../iterfaces';

export const createSiteSettingsStore = (): ISiteSettingsStore => ({
  isShowTopSearch: false,
  selectedCity: '',
  setIsShowTopSearch(isShowTopSearch: boolean) {
    this.isShowTopSearch = !!isShowTopSearch;
  },
  addCity(city: string) {
    this.selectedCity = city;
  },
});

export type TSiteSettingsStore = ReturnType<typeof createSiteSettingsStore>;
