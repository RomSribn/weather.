import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createForecastStore, TForecastStore } from './forecastStore';

export const StoreContext = React.createContext<TForecastStore | null>(null);

const StoreProvider: React.FC<object> = ({ children }) => {
  const store = useLocalStore(createForecastStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const useForecastStore = () => React.useContext(StoreContext);

export { StoreProvider, useForecastStore };
