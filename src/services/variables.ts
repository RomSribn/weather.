import { weatherConfig } from 'config';
import { IApiOpenweatherRequest } from './interfaces';

const { openWeatherApiKey, ipifyApiKey } = weatherConfig;
console.log(openWeatherApiKey);
export const apiIpifyRequest: string = `https://geo.ipify.org/api/v1?apiKey=${ipifyApiKey}`;
export const apiOpenweatherRequest = ({
  lat,
  lng,
}: IApiOpenweatherRequest): string =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=${openWeatherApiKey}`;
