import * as React from 'react';
import { Future } from './Future/Future';
import { observer } from 'mobx-react-lite';
import { Current } from './Current/Current';

export const Home: React.FC = observer(() => (
  <>
    <Current />
    <Future forecastArray={[1234, 2345, 3]} />
  </>
));
