import React from 'react';
import { StoreContext } from 'mobx/stores';
import { IApiOpenweatherRequest, IIpifyResponse } from './interfaces';

const OPENWATHER_API_KEY: string = '40b4a68f1fc7890f5f2044adb008cfba';
const IPIFY_API_KEY: string = 'at_JmbfvHjG6CWrqKKSGveBsNRDYrDUa';
const apiIpifyRequest: string = `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}`;
const apiOpenweatherRequest = ({ lat, lng }: IApiOpenweatherRequest): string =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=${OPENWATHER_API_KEY}`;

const getWeatherByIp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const store = React.useContext(StoreContext);

  fetch(apiIpifyRequest)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Not search((');
    })
    .then((response: IIpifyResponse) => {
      const { location } = response;
      store?.addLocation(location);
      const { lat, lng } = response.location;
      fetch(apiOpenweatherRequest({ lat, lng }))
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Error fetching');
        })
        .then((weather) => {
          store?.addWeather(weather);
        })

        .catch((error) => store?.addError(error));
    })

    .catch((err) => {
      store?.addError(err);
    });
};

export { getWeatherByIp };
