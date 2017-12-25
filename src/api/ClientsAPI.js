import { orderBy } from 'lodash';
import {saveClient} from '../actions/index'

const API_URL = 'http://localhost:3728/api/clients'

export default {
  orderClients(clients, prop, asc = true,) {
    if (!prop) {
      return clients;
    } 
    
    return orderBy(clients, [prop] , [asc ? 'asc' : 'desc']);
  },

  loadClients() {
    return fetch(API_URL)
    .then(res => res.json());
  },

  saveClient(client) {
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client)      
    }).then(res => {
      console.log('POST res', res);
      return res;
    })
  }

}