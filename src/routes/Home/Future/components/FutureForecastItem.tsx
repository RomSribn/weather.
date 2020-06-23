import * as React from 'react';
import { iconArr } from 'variables';
import { observer } from 'mobx-react-lite';
import { IFutureForecastItem } from '../interfaces';

const FutureForecastItem: React.FC<IFutureForecastItem> = observer(
  ({ icon, condition, min, max, day }) => {
    const WeatherIcon = iconArr[icon];
    const dayParsed: string = new Date(day * 1000).toDateString().split(' ')[0];

    return (
      <div className="container">
        <h3 className="day">{dayParsed}</h3>
        <div className="weather-icon">{WeatherIcon && <WeatherIcon />}</div>
        <p className="conditions p">{condition}</p>
        <p className="temp-range p">
          <span className="high">{max}</span> |{' '}
          <span className="low">{min}</span>
        </p>
      </div>
    );
  },
);

export { FutureForecastItem };
