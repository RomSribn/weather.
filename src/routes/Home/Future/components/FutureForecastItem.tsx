import * as React from 'react';

const futureForecastItem: React.FC = () => {
  return (
    <div className="container">
      <h3 className="day">--</h3>
      <div className="weatherIcon">
        <div className="partlycloudy">
          <div className="inner" />
        </div>
      </div>
      <p className="conditions p">--</p>
      <p className="tempRange p">
        <span className="high">--</span> | <span className="low">--</span>
      </p>
    </div>
  );
};

export { futureForecastItem as FutureForecastItem };
