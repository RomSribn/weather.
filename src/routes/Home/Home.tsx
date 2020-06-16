import * as React from 'react';
import { Future } from './Future/Future';
import { Current } from './Current/Current';
import { useForecastStore } from 'mobx/stores';
import { IIpifyResponse } from 'services/interfaces';
import { getLocation, getWeatherByIp } from 'services/api';

export const Home: React.FC = () => {
  const forecastStore = useForecastStore();

  React.useEffect(() => {
    getLocation()
      .then((response: IIpifyResponse) => {
        const { location } = response;
        forecastStore?.addLocation(location);
        const { lat, lng } = response.location;
        getWeatherByIp({ lat, lng })
          .then((weather) => {
            forecastStore?.addWeather(weather);
          })
          .catch((error) => forecastStore?.addError(error));
      })
      .catch((error) => forecastStore?.addError(error));
  });

  return (
    <>
      <Current forecastStore={forecastStore || undefined} />
      <Future forecastArray={[1234, 2345, 3]} />
    </>
  );
};
