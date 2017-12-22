import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import configure from './store';

import clientApp from './reducers';


import { ADD_CLIENT } from './constants/index';
import uuid from 'uuid';
let store = configure();

store.dispatch({
  type: ADD_CLIENT,
  client: {
    id: uuid(),
    name: 'Richard client',
    phone: '(777) 777-7777',
    birthday: Date.now(),
  }
});

store.dispatch({
  type: ADD_CLIENT,
  client: {
    id: uuid(),
    name: 'Alphred client',
    phone: '(666) 777-7777',
    birthday: new Date('1/1/1990'),
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
