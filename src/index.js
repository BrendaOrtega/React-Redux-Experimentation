/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.css';
import './styles/styles.css'; // web pack comprime esto ;)
import configureStore from './store/configureStore.dev';
import { Provider } from 'react-redux';
// prepopulamos desde la api
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

import App from './components/app';

render (
  <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
