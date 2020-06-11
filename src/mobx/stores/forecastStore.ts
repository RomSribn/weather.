const cities = ['Amsterdam', 'London', 'Madrid'];

export const createStore = () => {
  const store = {
    get allCities() {
      return cities;
    },
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
