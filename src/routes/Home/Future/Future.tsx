import './Future.scss';
import * as React from 'react';
import { IForecastProps } from '../interface';
import { FutureForecastItem } from './components/FutureForecastItem';

const future: React.FC<IForecastProps> = ({ forecastArray }) => (
  <div className="future wrapper-forecast">
    {forecastArray.map((forecastItem) => (
      <FutureForecastItem key={forecastItem} />
    ))}
  </div>
);

export { future as Future };
