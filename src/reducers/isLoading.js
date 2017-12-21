import {
  LOAD_CLIENTS_STARTED,
  LOAD_CLIENTS_COMPLETED,
} from '../constants';

export default isLoading = (state = false, action) => {
  switch (action.type) {
    case LOAD_CLIENTS_STARTED:
      return true;
    case LOAD_CLIENTS_COMPLETED:
      return false;
    default:
      return state;
  }
}