import * as types from '../constants';

export const startLoadClients = () => {
  return {
    type: types.LOAD_CLIENTS_STARTED
  };
}

export const completeLoadClients = (clients) => {
  return {
    type: types.LOAD_CLIENTS_COMPLETED,
    clients,
  };
}

export const fetchClients = () => {
  return dispatch => {
    dispatch(startLoadClients());

    fetch('/clients')
      .then(res => res.json())
      .then(json => dispatch(completeLoadClients(json.clients)));
  };
}

export const createClient = () => {
  return {
    type: types.SET_SELECTED,
    id: '',
  };
}

export const editClient = (id) => {
  return {
    type: types.SET_SELECTED,
    id,
  };
}

export const saveClient = (client) => {
  return {
    type: types.SAVE_CLIENT,
    client,
  };
}

export const cancelSaveClient = () => {
  return {
    type: types.SAVE_CLIENT,
    client: undefined
  };
}

