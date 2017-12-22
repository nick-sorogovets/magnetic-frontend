import { combineReducers } from 'redux';

import clients from './clients';
import isLoading from './isLoading';
import selectedId from './selectedId';

const clientApp = combineReducers({
  clients,
  selectedId,
  isLoading,  
})

export default clientApp;