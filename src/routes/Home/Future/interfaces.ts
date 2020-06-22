import { IInitialForecastStore } from 'mobx/iterfaces';

export interface IFutureForecastItem {
  icon: string;
  condition: string;
  min: number;
  max: number;
  day: number;
}

export interface IFutureProps {
  forecastStore: IInitialForecastStore;
}
