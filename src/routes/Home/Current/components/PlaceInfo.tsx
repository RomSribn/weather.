import * as React from 'react';

const placeInfo: React.FC = () => {
  return (
    <>
      <h1 className="location">Kharkiv, UA</h1>
      <h2 className="date">Sunday, January 1, 2018</h2>
      <div className="weather-icon">
        <div className="partlycloudy">
          <i className="fa fa-cloud-snow i" aria-hidden="true" />
        </div>
      </div>{' '}
    </>
  );
};

export { placeInfo as PlaceInfo };
