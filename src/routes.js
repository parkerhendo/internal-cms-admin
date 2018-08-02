import React from 'react';
import { Route} from 'react-router-dom';

import Help from './pages/Help';

const RoutesData = [
  {
    path: '/faq',
    component: Help,
  },
];

const Routes = () => (
  <div>
    {RoutesData.map((route, i) => <Route key={i} {...route} />)}
  </div>
);

export default Routes;