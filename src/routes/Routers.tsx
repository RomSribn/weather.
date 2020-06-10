import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { home } from './variables';
import { NotFound } from '_assets/shared/404/Page';
import { Home } from './Home/Home';

const routers: React.FC = () => (
  <Switch>
    <Route exact={true} path={home} component={Home} />

    <Route component={NotFound} />
  </Switch>
);

export { routers as Routers };
