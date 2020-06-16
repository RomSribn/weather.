import * as React from 'react';
import { iconArr } from 'variables';
import { IPlaceInfoProps } from 'routes/Home/interface';
import { ReactComponent as CloudIcon } from '_assets/images/animated/10n.svg';

const PlaceInfo: React.FC<IPlaceInfoProps> = ({ dt, city, country, icon }) => {
  const date = dt ? new Date(dt * 1000).toDateString() : '--';
  const location: string = `${city}, ${country}`;
  const WeatherIcon = iconArr[icon];
  return (
    <>
      <h1 className="location">{location}</h1>
      <h2 className="date">{date}</h2>
      <div className="weather-icon">
        <div className="partlycloudy">{WeatherIcon && <WeatherIcon />}</div>
      </div>
    </>
  );
};

export { PlaceInfo };
