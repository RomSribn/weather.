import * as React from 'react';
import { useStores } from 'mobx/stores';
import { Future } from './Future/Future';
import { Current } from './Current/Current';
import { IWeatherResponse } from 'mobx/iterfaces';
import { IIpifyResponse } from 'services/interfaces';
import { getLocation, getWeatherByIp } from 'services/api';

export const Home: React.FC = () => {
  const { forecastStore, siteSettingsStore } = useStores();
  const { selectedCity } = siteSettingsStore;

  React.useEffect(() => {
    getLocation()
      .then((response: IIpifyResponse) => {
        const { location } = response;
        forecastStore?.addLocation(location);
        const { lat, lng } = response.location;
        getWeatherByIp({ lat, lng, city: selectedCity })
          .then((weather: IWeatherResponse) => {
            forecastStore?.addWeather(weather);
          })
          .catch((error) => forecastStore?.addError(error));
      })
      .catch((error) => forecastStore?.addError(error));
  });

  return (
    <>
      <Current
        forecastStore={forecastStore}
        siteSettingsStore={siteSettingsStore}
      />
      <Future forecastStore={forecastStore} />
    </>
  );
};
