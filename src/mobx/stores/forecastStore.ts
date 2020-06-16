import { ILocationResponse } from 'services/interfaces';
import { IInitialForecastStore, IWeatherResponse } from '../iterfaces';

export const createForecastStore = (): IInitialForecastStore => ({
  errorMessage: [],

  addError(error: string) {
    this.errorMessage.push(error);
  },
  addWeather(weather: IWeatherResponse) {
    this.weather = weather;
  },
  addLocation(location: ILocationResponse) {
    this.location = location;
  },
});

export type TForecastStore = ReturnType<typeof createForecastStore>;
