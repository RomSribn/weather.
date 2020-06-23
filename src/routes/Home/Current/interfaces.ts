import { IInitialForecastStore, ISiteSettingsStore } from 'mobx/iterfaces';

export interface ICurrentProps {
  forecastStore: IInitialForecastStore;
  siteSettingsStore: ISiteSettingsStore;
}

export interface INavBarProps {
  setIsShowTopSearch: (isShowTopSearch: boolean) => void;
  setIsFarenheit: (isFarenheit: boolean) => void;
  isShowTopSearch: boolean;
  isFarenheit: boolean;
}

export interface ITopSearchProps {
  isShowTopSearch: boolean;
  addCity: (city: string) => void;
  setIsShowTopSearch: (isShowTopSearch: boolean) => void;
}
