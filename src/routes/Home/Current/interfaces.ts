import { IInitialForecastStore, ISiteSettingsStore } from 'mobx/iterfaces';

export interface ICurrentProps {
  forecastStore: IInitialForecastStore;
  siteSettingsStore: ISiteSettingsStore;
}

export interface INavBarProps {
  setIsShowTopSearch: (isShowTopSearch: boolean) => void;
}

export interface ITopSearchProps {
  isShowTopSearch: boolean;
}
