import { weatherConfig } from 'config';
import { IApiOpenweatherRequest } from './interfaces';

const openWeatherUrl =
  'https://api.openweathermap.org/data/2.5/forecast?cnt=4&';

const { openWeatherApiKey, ipifyApiKey } = weatherConfig;
console.log(openWeatherApiKey);
export const apiIpifyRequest: string = `https://geo.ipify.org/api/v1?apiKey=${ipifyApiKey}`;
export const apiOpenweatherRequest = ({
  lat,
  lng,
  city,
}: IApiOpenweatherRequest): string => {
  const urlRequestParams = city
    ? `q=${city}&appid=${openWeatherApiKey}`
    : `lat=${lat}&lon=${lng}&exclude=hourly&appid=${openWeatherApiKey}`;
  return `${openWeatherUrl}${urlRequestParams}`;
  // return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=4&appid=${openWeatherApiKey}`;
};
