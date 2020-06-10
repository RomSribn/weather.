import * as React from 'react';
import history from 'utils/history';
import { home } from 'routes/variables';
import './Page.scss';

const notFound: React.FC = () => {
  const onClick = () => history.push(home);
  return (
    <div className="error-page">
      <div className="error-page-head">404</div>
      <div className="error-page-title">
        <p>Sorry! Page not found</p>
      </div>
      <button className="error-page-btn" onClick={onClick}>
        Back to home
      </button>
    </div>
  );
};

export { notFound as NotFound };
