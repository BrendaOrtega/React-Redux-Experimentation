import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // web pack comprime esto ;)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
