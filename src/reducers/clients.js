import * as types from '../constants';

export default clients = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_CLIENTS_STARTED:
      return [];
    case types.LOAD_CLIENTS_COMPLETED: 
      return action.clients;
    case types.ADD_CLIENT:
      return [
        ...state,
        action.client,
      ];
    case types.REMOVE_CLIENT:
      return state.filter(client.id === action.id);
    default:
      return state;
  }
}