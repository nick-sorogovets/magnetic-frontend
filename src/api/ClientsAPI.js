import _ from 'lodash';

export default {
  orderClients(clients, prop, asc = true,) {
    if (!prop) {
      return clients;
    } 
    
    return _.orderBy(clients, [prop] , [asc ? 'asc' : 'desc']);
  }
}