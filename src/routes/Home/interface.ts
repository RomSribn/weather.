export interface IPlaceInfoProps {
  currentDate: number;
  city: string;
  country: string;
  icon: string;
}

export interface IMainTemp {
  temp: number | object;
  conditions: string;
}

export interface IForecastProps {
  forecastArray: number[];
}
