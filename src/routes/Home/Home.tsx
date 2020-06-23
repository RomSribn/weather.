import * as React from 'react';
import { useStores } from 'mobx/stores';
import { Future } from './Future/Future';
import { observer } from 'mobx-react-lite';
import { Current } from './Current/Current';
import { IWeatherResponse } from 'mobx/iterfaces';
import { IIpifyResponse } from 'services/interfaces';
import { getLocation, getWeatherByIp } from 'services/api';

export const Home: React.FC = observer(() => {
  const { forecastStore, siteSettingsStore } = useStores();
  const { addLocation, addWeather, addLocationName, addError } = forecastStore;
  const { selectedCity, setLastUpdatedTime } = siteSettingsStore;

  React.useEffect(() => {
    getLocation()
      .then((response: IIpifyResponse) => {
        const { location } = response;
        addLocation(location);
        const { lat, lng } = response.location;
        getWeatherByIp({ lat, lng, city: selectedCity })
          .then((weather: IWeatherResponse) => {
            const {
              list,
              city: { name, country },
            } = weather;
            addWeather(list);
            addLocationName(`${name}, ${country}`);
            setLastUpdatedTime();
          })
          .catch((error) => addError(error));
      })
      .catch((error) => addError(error));
  });

  return (
    <>
      <Current
        forecastStore={forecastStore}
        siteSettingsStore={siteSettingsStore}
      />
      <Future
        forecastStore={forecastStore}
        siteSettingsStore={siteSettingsStore}
      />
    </>
  );
});
