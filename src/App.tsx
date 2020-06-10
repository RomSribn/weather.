import * as React from 'react';
import { Router } from 'react-router-dom';
import { Routers } from 'routes/Routers';
import history from 'utils/history';

import './App.scss';

const app: React.FC = () => (
  <Router history={history}>
    <Routers />
  </Router>
);

export { app as App };
