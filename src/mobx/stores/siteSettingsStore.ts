import { ISiteSettingsStore } from '../iterfaces';

export const createSiteSettingsStore = (): ISiteSettingsStore => ({
  isFarenheit: true,
  isShowTopSearch: false,
  selectedCity: '',
  lastUpdatedTime: new Date().toLocaleTimeString(),
  setLastUpdatedTime() {
    this.lastUpdatedTime = new Date().toLocaleTimeString();
  },
  setIsShowTopSearch(isShowTopSearch) {
    this.isShowTopSearch = !!isShowTopSearch;
  },
  setIsFarenheit(isFarenheit) {
    this.isFarenheit = !!isFarenheit;
  },
  addCity(city) {
    this.selectedCity = city;
  },
});

export type TSiteSettingsStore = ReturnType<typeof createSiteSettingsStore>;
