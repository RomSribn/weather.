import { ILocationResponse } from 'services/interfaces';

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ICommonWeatherTypes {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  rain?: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  weather: IWeather[];
  wind_deg: number;
  wind_speed: number;
  visability?: number;
}

interface ICurrentWeather extends ICommonWeatherTypes {
  feels_like: number;
  temp: number;
}

interface IDaylyWeather extends ICommonWeatherTypes {
  feels_like: { day: number; night: number; eve: number; morn: number };
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
}

export interface IWeatherResponse {
  current: ICurrentWeather;
  daily: IDaylyWeather[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface IInitialForecastStore {
  weather?: IWeatherResponse;
  location?: ILocationResponse;
  errorMessage: string[];
  addError: (city: string) => void;
  addWeather: (city: IWeatherResponse) => void;
  addLocation: (city: ILocationResponse) => void;
}
