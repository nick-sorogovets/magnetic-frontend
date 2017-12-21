import { combineReducers } from 'redux';

import clients from './clients';
import clientForm from './clientFrom';
import isLoading from './isLoading';

const clientApp = combineReducers({
  clients,
  clientForm,
  isLoading,  
})