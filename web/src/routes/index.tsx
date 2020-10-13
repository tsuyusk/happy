import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Landing} exact path="/" />
      <Route component={OrphanagesMap} path="/app" />
    </Switch>
  );
};

export default Routes;
