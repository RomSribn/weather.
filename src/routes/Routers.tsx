import React from 'react';
import { home } from './variables';
import { Home } from './Home/Home';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '_assets/shared/404/Page';

export const Routers: React.FC = () => (
  <Switch>
    <Route exact={true} path={home} component={() => <Home />} />
    <Route component={NotFound} />
  </Switch>
);
