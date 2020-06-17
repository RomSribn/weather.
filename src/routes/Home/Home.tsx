import * as React from 'react';
import { Future } from './Future/Future';
import { Current } from './Current/Current';
import { useForecastStore } from 'mobx/stores';
import { IWeatherResponse } from 'mobx/iterfaces';
import { IIpifyResponse } from 'services/interfaces';
import { getLocation, getWeatherByIp } from 'services/api';
import { createForecastStore } from 'mobx/stores/forecastStore';

export const Home: React.FC = () => {
  const forecastStore = useForecastStore();

  React.useEffect(() => {
    getLocation()
      .then((response: IIpifyResponse) => {
        const { location } = response;
        forecastStore?.addLocation(location);
        const { lat, lng } = response.location;
        getWeatherByIp({ lat, lng })
          .then((weather: IWeatherResponse) => {
            forecastStore?.addWeather(weather);
          })
          .catch((error) => forecastStore?.addError(error));
      })
      .catch((error) => forecastStore?.addError(error));
  });

  return (
    <>
      <Current forecastStore={forecastStore || createForecastStore()} />
      <Future forecastStore={forecastStore || createForecastStore()} />
    </>
  );
};
