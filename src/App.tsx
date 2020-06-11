import * as React from 'react';
import { Router } from 'react-router-dom';
import { Routers } from 'routes/Routers';
import history from 'utils/history';
import { Layout } from 'layout/Layout';

const app: React.FC = () => (
  <Router history={history}>
    <Layout>
      <Routers />
    </Layout>
  </Router>
);

export { app as App };
