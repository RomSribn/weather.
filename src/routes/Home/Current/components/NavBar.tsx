import * as React from 'react';
import { INavBarProps } from '../interfaces';

const NavBar: React.FC<INavBarProps> = ({ setIsShowTopSearch }) => {
  const [isShow, setIsShow] = React.useState(false);
  const onClick = () => {
    setIsShow(!isShow);
    setIsShowTopSearch(!isShow);
  };
  return (
    <nav className="nav">
      <button className="locate-btn animation button" onClick={onClick}>
        <i className="fa fa-location-arrow i" aria-hidden="true" />
      </button>
      <button className="unit-btn button" data-units="f">
        c
      </button>
    </nav>
  );
};

export { NavBar };
