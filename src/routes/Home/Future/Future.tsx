import './Future.scss';
import * as React from 'react';
import { getTemperature } from 'variables';
import { observer } from 'mobx-react-lite';
import { IFutureProps } from './interfaces';
import { FutureForecastItem } from './components/FutureForecastItem';

const Future: React.FC<IFutureProps> = observer(
  ({
    forecastStore: { weatherList },
    siteSettingsStore: { isFarenheit },
  }: IFutureProps) => {
    return (
      <div className="future wrapper-forecast">
        {weatherList
          .slice(1, 4)
          .map(({ dt, main: { temp_max, temp_min }, weather }) => {
            const currentWeather = weather[0];
            const { icon, description } = currentWeather;
            const minTemp = getTemperature(isFarenheit, temp_min);
            const maxTemp = getTemperature(isFarenheit, temp_max);
            return (
              <FutureForecastItem
                key={dt}
                icon={icon}
                condition={description}
                min={minTemp}
                max={maxTemp}
                day={dt}
              />
            );
          })}
      </div>
    );
  },
);

export { Future };
