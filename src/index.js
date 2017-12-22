import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import configure from './store';


import { ADD_CLIENT } from './constants/index';
import uuid from 'uuid';
import moment from 'moment'
let store = configure();

store.dispatch({
  type: ADD_CLIENT,
  client: {
    id: uuid(),
    name: 'Richard client',
    phone: '(777) 777-7777',
    birthday: moment(),
  }
});

store.dispatch({
  type: ADD_CLIENT,
  client: {
    id: uuid(),
    name: 'Alphred client',
    phone: '(666) 777-7777',
    birthday: moment('01/01/1970'),
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
