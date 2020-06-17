import { ILocationResponse } from 'services/interfaces';
import { IInitialForecastStore, IWeatherResponse } from '../iterfaces';

export const createForecastStore = (): IInitialForecastStore => ({
  errorMessage: [],
  currentTemp: 0,
  currentDate: 0,
  dailyWeather: [],
  currentWeather: {
    id: 0,
    main: '--',
    description: '--',
    icon: '--',
  },
  location: {
    lat: 0,
    lng: 0,
    city: '--',
    country: '--',
    geonameId: 0,
    region: '--',
    timezone: '--',
  },
  addError(error: string) {
    this.errorMessage.push(error);
  },
  addWeather(weatherResponse: IWeatherResponse) {
    const {
      current: { temp, dt, weather },
      daily,
    } = weatherResponse;
    this.currentTemp = temp;
    this.currentDate = dt;
    this.currentWeather = weather[0];
    this.dailyWeather = daily;
  },
  addLocation(location: ILocationResponse) {
    this.location = location;
  },
});

export type TForecastStore = ReturnType<typeof createForecastStore>;
