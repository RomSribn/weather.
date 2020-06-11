import * as React from 'react';
import { Router } from 'react-router-dom';
import { Routers } from 'routes/Routers';
import history from 'utils/history';
import { Layout } from 'layout/Layout';
import { StoreProvider } from 'mobx/stores';

const app: React.FC = () => (
  <StoreProvider>
    <Router history={history}>
      <Layout>
        <Routers />
      </Layout>
    </Router>
  </StoreProvider>
);

export { app as App };
