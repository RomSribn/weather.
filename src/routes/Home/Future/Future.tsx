import './Future.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { IFutureProps } from './interfaces';
import { parseTemp } from '../../../variables';
import { FutureForecastItem } from './components/FutureForecastItem';

const Future: React.FC<IFutureProps> = observer(
  ({ forecastStore: { weatherList } }: IFutureProps) => {
    return (
      <div className="future wrapper-forecast">
        {weatherList
          .splice(1, 3)
          .map(({ dt, main: { temp_max, temp_min }, weather }) => {
            const currentWeather = weather[0];
            const { icon, description } = currentWeather;
            return (
              <FutureForecastItem
                key={dt}
                icon={icon}
                condition={description}
                min={parseTemp(temp_min)}
                max={parseTemp(temp_max)}
                day={dt}
              />
            );
          })}
      </div>
    );
  },
);

export { Future };
