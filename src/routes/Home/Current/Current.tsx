import './Current.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ICurrentProps } from './interfaces';
import { NavBar } from './components/NavBar';
import { MainTemp } from './components/MainTemp';
import { TopSearch } from './components/TopSearch';
import { PlaceInfo } from './components/PlaceInfo';

const Current: React.FC<ICurrentProps> = observer(
  ({ forecastStore, siteSettingsStore }: ICurrentProps) => {
    const {
      currentTemp,
      currentDate,
      location,
      currentWeather,
    } = forecastStore;
    const {
      isShowTopSearch,
      selectedCity,
      setIsShowTopSearch,
      addCity,
    } = siteSettingsStore;
    const { city, country } = location;
    const { icon, description } = currentWeather;

    return (
      <div className="current wrapper-forecast">
        <NavBar setIsShowTopSearch={setIsShowTopSearch} />
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
        <TopSearch isShowTopSearch={isShowTopSearch} />
      </div>
    );
  },
);

export { Current };
