import './Current.scss';
import * as React from 'react';
import { getTemperature } from 'variables';
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
      locationName,
    } = forecastStore;
    const {
      isShowTopSearch,
      setIsShowTopSearch,
      isFarenheit,
      setIsFarenheit,
      addCity,
    } = siteSettingsStore;
    const { city, country } = location;
    const { icon, description } = currentWeather;
    const mainTemp = getTemperature(isFarenheit, currentTemp)
    return (
      <div className="current wrapper-forecast">
        <NavBar
          setIsShowTopSearch={setIsShowTopSearch}
          isShowTopSearch={isShowTopSearch}
          isFarenheit={isFarenheit}
          setIsFarenheit={setIsFarenheit}
        />
        <PlaceInfo
          currentDate={currentDate}
          city={city}
          country={country}
          icon={icon}
          locationName={locationName}
        />
        <MainTemp temp={mainTemp} conditions={description} />
        <TopSearch
          isShowTopSearch={isShowTopSearch}
          setIsShowTopSearch={setIsShowTopSearch}
          addCity={addCity}
        />
      </div>
    );
  },
);

export { Current };
