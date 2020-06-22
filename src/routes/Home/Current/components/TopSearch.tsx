import React from 'react';
import { ITopSearchProps } from '../interfaces';

const TopSearch: React.FC<ITopSearchProps> = ({ isShowTopSearch }) => {
  const classNames = `top-search ${isShowTopSearch && 'show-top-search'}`;

  return (
    <div className={classNames}>
      <form action="" className="search-form">
        <input
          type="text"
          name="country"
          placeholder="Enter the city name"
          className="country"
        />
        <button className="mdc-btn" type="submit">
          Find
        </button>
      </form>
    </div>
  );
};

export { TopSearch };
