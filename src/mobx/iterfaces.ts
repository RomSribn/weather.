import { ILocationResponse, IApiOpenweatherRequest } from 'services/interfaces';

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

interface ITempResponse {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IDaylyWeatherResponse extends ICommonWeatherTypes {
  feels_like: { day: number; night: number; eve: number; morn: number };
  temp: ITempResponse;
}

export interface IWeatherResponse {
  current: ICurrentWeather;
  daily: IDaylyWeatherResponse[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface IInitialForecastStore {
  currentTemp: number;
  currentDate: number;
  currentWeather: IWeather;
  dailyWeather: IDaylyWeatherResponse[];
  location: ILocationResponse;
  errorMessage: string[];
  addError: (error: string) => void;
  addWeather: (weatherResponse: IWeatherResponse) => void;
  addLocation: (location: ILocationResponse) => void;
}

export interface ISiteSettingsStore {
  isShowTopSearch: boolean;
  selectedCity: string;
  setIsShowTopSearch: (isShowTopSearch: boolean) => void;
  addCity: (city: string) => void;
}
