import * as React from 'react';

const navBar: React.FC = () => (
  <nav className="nav">
    <button id="locateBtn" className="animation">
      <i className="fa fa-location-arrow i" aria-hidden="true" />
    </button>
    <button id="unitBtn" data-units="f">
      c
    </button>
  </nav>
);

export { navBar as NavBar };
