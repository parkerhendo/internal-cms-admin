import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Application';
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
