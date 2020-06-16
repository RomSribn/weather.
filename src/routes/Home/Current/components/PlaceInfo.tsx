import * as React from 'react';
import { IPlaceInfoProps } from 'routes/Home/interface';

const PlaceInfo: React.FC<IPlaceInfoProps> = ({ dt, city, country }) => {
  const date = dt ? new Date(dt * 1000).toDateString() : '--';
  const location: string = `${city}, ${country}`;
  return (
    <>
      <h1 className="location">{location}</h1>
      <h2 className="date">{date}</h2>
      <div className="weather-icon">
        <div className="partlycloudy">
          <i className="fa fa-cloud-snow i" aria-hidden="true" />
        </div>
      </div>{' '}
    </>
  );
};

export { PlaceInfo };
