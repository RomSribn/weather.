import './Current.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ICurrentProps } from './interfaces';
import { NavBar } from './components/NavBar';
import { MainTemp } from './components/MainTemp';
import { PlaceInfo } from './components/PlaceInfo';

const Current: React.FC<ICurrentProps> = observer(
  ({ forecastStore }: ICurrentProps) => {
    const {
      currentTemp,
      currentDate,
      location,
      currentWeather,
    } = forecastStore;
    const { city, country } = location;
    const { icon, description } = currentWeather;

    return (
      <div className="current wrapper-forecast">
        <NavBar />
        <PlaceInfo
          currentDate={currentDate}
          city={city}
          country={country}
          icon={icon}
        />
        <MainTemp
          temp={Math.floor(currentTemp / 10)}
          conditions={description}
        />
      </div>
    );
  },
);

export { Current };
