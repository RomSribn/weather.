import { ILocationResponse, IApiOpenweatherRequest } from 'services/interfaces';

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface IList {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  rain: { '3h': number };
  sys: { pod: string };
  weather: IWeather[];
  main: IMain;
}

export interface IWeatherResponse {
  city: {
    coord: { lat: number; lng: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: IList[];
  message: number;
}

export interface IInitialForecastStore {
  currentTemp: number;
  currentDate: number;
  currentWeather: IWeather;
  weatherList: IList[];
  location: ILocationResponse;
  errorMessage: string[];
  addError: (error: string) => void;
  addWeather: (weatherResponse: IList[]) => void;
  addLocation: (location: ILocationResponse) => void;
}

export interface ISiteSettingsStore {
  isShowTopSearch: boolean;
  selectedCity: string;
  setIsShowTopSearch: (isShowTopSearch: boolean) => void;
  addCity: (city: string) => void;
}
