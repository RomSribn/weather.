import * as React from 'react';
import { iconArr } from 'variables';
import { IPlaceInfoProps } from 'routes/Home/interface';

const PlaceInfo: React.FC<IPlaceInfoProps> = ({
  currentDate,
  city,
  country,
  icon,
  locationName,
}) => {
  const date = currentDate ? new Date(currentDate * 1000).toDateString() : '--';
  const WeatherIcon = iconArr[icon];
  return (
    <>
      <h1 className="location">{locationName}</h1>
      <h2 className="date">{date}</h2>
      <div className="weather-icon">{WeatherIcon && <WeatherIcon />}</div>
    </>
  );
};

export { PlaceInfo };
