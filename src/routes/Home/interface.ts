export interface IPlaceInfoProps {
  dt: number;
  city: string;
  country: string;
}

export interface IMainTemp {
  temp: number | object;
  conditions: string;
}

export interface IForecastProps {
  forecastArray: number[];
}
