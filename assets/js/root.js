import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';

import './root.css';

const root = props => {
  let routes = (
    <Switch>
      <Route path="/" component={null} />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Pending...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(root);
