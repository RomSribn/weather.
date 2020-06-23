import { ILocationResponse } from 'services/interfaces';
import { IInitialForecastStore, IList } from '../iterfaces';

export const createForecastStore = (): IInitialForecastStore => ({
  errorMessage: [],
  currentTemp: 0,
  currentDate: 0,
  weatherList: [],
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
  locationName: '',
  addLocationName(locationName: string) {
    this.locationName = locationName;
  },
  addError(error: string) {
    this.errorMessage.push(error);
  },
  addWeather(weatherResponse: IList[]) {
    const {
      main: { temp },
      dt,
      weather,
    } = weatherResponse[0];

    this.currentTemp = temp;
    this.currentDate = dt;
    this.currentWeather = weather[0];
    this.weatherList = weatherResponse;
  },
  addLocation(location: ILocationResponse) {
    this.location = location;
  },
});

export type TForecastStore = ReturnType<typeof createForecastStore>;
