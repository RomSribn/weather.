import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createSecondStore, TSecondtStore } from './secondStore';
import { createForecastStore, TForecastStore } from './forecastStore';

interface IStoresContext {
  forecastStore?: TForecastStore;
  secondStore?: TSecondtStore;
}

export const StoreContext = React.createContext<IStoresContext | null>(null);

const StoreProvider: React.FC<object> = ({ children }) => {
  const forecastStore = useLocalStore(createForecastStore);
  const secondStore = useLocalStore(createSecondStore);

  return (
    <StoreContext.Provider value={{ forecastStore, secondStore }}>
      {children}
    </StoreContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const useForecastStore = () => React.useContext(StoreContext);

const useStores = (): IStoresContext => {
  const stores = React.useContext(StoreContext);
  const forecastStore = stores?.forecastStore;
  const secondStore = stores?.secondStore;
  return { forecastStore, secondStore };
};

export { StoreProvider, useForecastStore, useStores };
