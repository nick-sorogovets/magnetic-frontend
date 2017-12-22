import * as types from '../constants';

const clients = (state = [], action) => {
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
    case types.SAVE_CLIENT:
      if (!action.client) {
        return state;
      } else {
        const notChangesClients = state.filter(client => client.id !== action.client.id);
        return [
          ...notChangesClients,
          action.client,
        ];
      }
    case types.REMOVE_CLIENT:
      return state.filter((client) => client.id === action.id);
    default:
      return state;
  }
};

export default clients;
