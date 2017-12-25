import {
  LOAD_CLIENTS_STARTED,
  LOAD_CLIENTS_COMPLETED,
  SEND_CLIENT_STARTED,
  SEND_CLIENT_COMPLETED,
} from '../constants';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case LOAD_CLIENTS_STARTED:
      return true;
    case LOAD_CLIENTS_COMPLETED:
      return false;
    case SEND_CLIENT_STARTED:
      return true;
    case SEND_CLIENT_COMPLETED:
      return false;
    default:
      return state;
  }
}

export default isLoading;