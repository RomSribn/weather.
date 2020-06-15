import React from 'react';
import { Layout } from 'layout/Layout';
import { history } from 'utils/history';
import { Routers } from 'routes/Routers';
import { Router } from 'react-router-dom';
import { StoreProvider } from 'mobx/stores';

const App = () => (
  <StoreProvider>
    <Router history={history}>
      <Layout>
        <Routers />
      </Layout>
    </Router>
  </StoreProvider>
);

export { App };
