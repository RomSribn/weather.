import * as React from 'react';
import { Current } from './Current/Current';
import { Future } from './Future/Future';

const home: React.FC = () => (
  <>
    <Current />
    <Future forecastArray={[1, 2, 3]} />
  </>
);

export { home as Home };
