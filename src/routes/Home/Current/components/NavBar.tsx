import * as React from 'react';
import { INavBarProps } from '../interfaces';

const NavBar: React.FC<INavBarProps> = ({
  setIsShowTopSearch,
  isShowTopSearch,
  isFarenheit,
  setIsFarenheit,
}) => {
  const onLocateBtnClick = () => {
    setIsShowTopSearch(!isShowTopSearch);
  };
  const onTempBtnClick = () => {
    setIsFarenheit(!isFarenheit);
  };
  const tempButtonText = isFarenheit ? 'F' : 'C';
  return (
    <nav className="nav">
      <button
        className="locate-btn animation button"
        onClick={onLocateBtnClick}
      >
        <i className="fa fa-location-arrow i" aria-hidden="true" />
      </button>
      <button
        className="unit-btn button"
        data-units="f"
        onClick={onTempBtnClick}
      >
        {tempButtonText}
      </button>
    </nav>
  );
};

export { NavBar };
