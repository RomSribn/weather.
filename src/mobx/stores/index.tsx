import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createForecastStore, TForecastStore } from './forecastStore';
import {
  createSiteSettingsStore,
  TSiteSettingsStore,
} from './siteSettingsStore';

interface IStoresContext {
  forecastStore: TForecastStore;
  siteSettingsStore: TSiteSettingsStore;
}

export const StoreContext = React.createContext<IStoresContext | null>(null);

const StoreProvider: React.FC<object> = ({ children }) => {
  const forecastStore = useLocalStore(createForecastStore);
  const siteSettingsStore = useLocalStore(createSiteSettingsStore);

  return (
    <StoreContext.Provider value={{ forecastStore, siteSettingsStore }}>
      {children}
    </StoreContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const useForecastStore = () => React.useContext(StoreContext);

const useStores = (): IStoresContext => {
  const stores = React.useContext(StoreContext);

  if (!stores) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return stores;
};

export { StoreProvider, useForecastStore, useStores };
