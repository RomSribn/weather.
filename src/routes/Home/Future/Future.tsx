import * as React from 'react';
import { FutureForecastItem } from './components/FutureForecastItem';
import { IForecastProps } from '../interface';
import './Future.scss';

const future: React.FC<IForecastProps> = ({ forecastArray }) => (
  <div id="future" className="wrapper">
    {forecastArray.map((forecastItem) => (
      <FutureForecastItem key={forecastItem} />
    ))}
  </div>
);

export { future as Future };
