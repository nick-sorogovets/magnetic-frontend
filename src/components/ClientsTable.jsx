import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import ClientRow from './ClientRow';

const tempClients = [
  {
    id: 1,
    name: 'Tom Bird',
    phone: '777-77-77',
    birthday: new Date(),
  },
  {
    id: 2,
    name: 'Bill Gates',
    phone: '555-55-55',
    birthday: new Date(),
  },
]

class ClientsTable extends Component {

  render() {
    const renderClients = () => {
      return tempClients.map((client) => {
        return (
          <ClientRow key={client.id} {...client} />
        );
      })
    };
    return (
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Birthday</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {renderClients()}
        </tbody>
      </Table>
    )
  }
}

export default ClientsTable;