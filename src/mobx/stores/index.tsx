import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore, TStore } from './forecastStore';

export const storeContext = React.createContext<TStore | null>(null);

export const storeProvider = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export { storeProvider as StoreProvider };
