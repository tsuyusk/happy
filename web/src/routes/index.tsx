import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Landing} exact path="/" />
      <Route component={OrphanagesMap} path="/app" />
      <Route component={CreateOrphanage} path="/orphanages/create" />
      <Route component={Orphanage} path="/orphanage/:id" />
    </Switch>
  );
};

export default Routes;
