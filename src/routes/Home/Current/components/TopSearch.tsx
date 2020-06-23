import React from 'react';
import { ITopSearchProps } from '../interfaces';

const TopSearch: React.FC<ITopSearchProps> = ({
  isShowTopSearch,
  addCity,
  setIsShowTopSearch,
}) => {
  const [city, setCity] = React.useState('');
  const classNames = `top-search ${isShowTopSearch && 'show-top-search'}`;

  const onCityChange = (evt) => setCity(evt.target.value);
  const onSubmit = (evt) => {
    evt.preventDefault();
    addCity(city);
    setIsShowTopSearch(!isShowTopSearch);
  };

  return (
    <div className={classNames}>
      <div className="search-form">
        <input
          type="text"
          name="country"
          placeholder="Enter the city name"
          className="country"
          value={city}
          onChange={onCityChange}
        />
        <button onClick={onSubmit} className="mdc-btn" type="submit">
          Find
        </button>
      </div>
    </div>
  );
};

export { TopSearch };
