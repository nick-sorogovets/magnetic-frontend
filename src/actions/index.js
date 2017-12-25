import * as types from '../constants';
import ClientsAPI from '../api/ClientsAPI';
import moment from 'moment';

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

    ClientsAPI.loadClients()
      .then(json => {
        let clients = [];
        console.log('Getted data', json);
        if(json.length) {
          clients = json.map(client => {
            client.birthday = moment(client.birthday);
            return client;
          })
        }
        dispatch(completeLoadClients(clients))
      });
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

export const sendClientStarted = () => {
  return {
    type: types.SEND_CLIENT_STARTED
  };
}

export const sendClientCompleted = () => {
  return {
    type: types.SEND_CLIENT_COMPLETED
  }
}

export const sendClient = (client) => {
  return dispatch => {
    dispatch(sendClientStarted());

    ClientsAPI.saveClient(client).then(res => {

      if(res.statusText === 'OK'){        
        dispatch(sendClientCompleted());
        dispatch(saveClient(client));
      }

    })
  }
}
