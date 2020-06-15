import { IApiOpenweatherRequest } from './interfaces';

export const apiIpifyRequest: string = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`;
export const apiOpenweatherRequest = ({
  lat,
  lng,
}: IApiOpenweatherRequest): string =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=${process.env.REACT_APP_APP_OPENWEATHER_API_KEY}`;
