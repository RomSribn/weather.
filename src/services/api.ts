import { IApiOpenweatherRequest } from './interfaces';
import { apiIpifyRequest, apiOpenweatherRequest } from './variables';

export const getLocation = () =>
  fetch(apiIpifyRequest).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Not search((');
  });

export const getWeatherByIp = ({ lat, lng, city }: IApiOpenweatherRequest) =>
  fetch(apiOpenweatherRequest({ lat, lng, city })).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Error fetching');
  });
