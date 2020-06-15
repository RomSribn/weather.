import './Current.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { NavBar } from './components/NavBar';
import { useForecastStore } from 'mobx/stores';
import { getWeatherByIp } from 'services/apixu';
import { MainTemp } from './components/MainTemp';
import { PlaceInfo } from './components/PlaceInfo';

const Current: React.FC = observer(() => {
  const forecastStore = useForecastStore();
  const weather = forecastStore?.weather;
  const location = forecastStore?.location;
  const dt = weather?.current.dt || 0;
  const temp = weather?.current.temp || 0;
  const conditions = weather?.current.weather[0].main || '--';
  const city = location?.city || '--';
  const country = location?.country || '--';

  React.useMemo(() => {
    getWeatherByIp();
  }, []);
  return (
    <div className="current wrapper-forecast">
      <NavBar />
      <PlaceInfo dt={dt} city={city} country={country} />
      <MainTemp temp={Math.floor(temp / 10)} conditions={conditions} />
    </div>
  );
});

export { Current };
