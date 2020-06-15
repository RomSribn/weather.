import * as React from 'react';

const navBar: React.FC = () => (
  <nav className="nav">
    <button className="locate-btn animation button">
      <i className="fa fa-location-arrow i" aria-hidden="true" />
    </button>
    <button className="unit-btn button" data-units="f">
      c
    </button>
  </nav>
);

export { navBar as NavBar };
