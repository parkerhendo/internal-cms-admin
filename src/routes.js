import React from 'react';
import { Route } from 'react-router-dom';

import Help from './pages/Help';

const Routes = () => (
  <div>
    <Route path="/help" component={Help} />
  </div>
);

export default Routes;