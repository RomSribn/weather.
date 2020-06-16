import './Current.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ICurrentProps } from './interfaces';
import { NavBar } from './components/NavBar';
import { MainTemp } from './components/MainTemp';
import { PlaceInfo } from './components/PlaceInfo';

const Current: React.FC<ICurrentProps> = observer(
  ({ forecastStore }: ICurrentProps) => {
    const weather = forecastStore?.weather;
    const location = forecastStore?.location;
    const dt = weather?.current.dt || 0;
    const temp = weather?.current.temp || 0;
    const conditions = weather?.current.weather[0].main || '--';
    const icon = weather?.current.weather[0].icon || '';
    const city = location?.city || '--';
    const country = location?.country || '--';

    return (
      <div className="current wrapper-forecast">
        <NavBar />
        <PlaceInfo dt={dt} city={city} country={country} icon={icon} />
        <MainTemp temp={Math.floor(temp / 10)} conditions={conditions} />
      </div>
    );
  },
);

export { Current };
