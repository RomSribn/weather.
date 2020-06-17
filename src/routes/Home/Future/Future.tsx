import './Future.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { IFutureProps } from './interfaces';
import { parseTemp } from '../../../variables';
import { FutureForecastItem } from './components/FutureForecastItem';

const Future: React.FC<IFutureProps> = observer(
  ({ forecastStore: { dailyWeather } }: IFutureProps) => (
    <div className="future wrapper-forecast">
      {dailyWeather
        .splice(0, 3)
        .map(({ dt, temp: { min, max, day }, weather }) => (
          <FutureForecastItem
            key={dt}
            icon={weather[0].icon}
            condition={weather[0].description}
            min={parseTemp(min)}
            max={parseTemp(max)}
            day={dt}
          />
        ))}
    </div>
  ),
);

export { Future };
