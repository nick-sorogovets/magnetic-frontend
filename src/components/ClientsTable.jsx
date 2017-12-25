import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import ClientAPI from '../api/ClientsAPI';

import ClientRow from './ClientRow';

class ClientsTable extends Component {
  state = {
    orderBy: '',
    asc: true,
  }

  handleOrder = (name) => {
    return () => {
      const { asc } = this.state;
      this.setState({
        orderBy: name,
        asc: !asc
      });
    }
  }

  render() {
    const { clients } = this.props;
    const { orderBy, asc } = this.state;

    const renderClients = () => {
      return ClientAPI.orderClients(clients, orderBy, asc).map((client) => {
        return (
          <ClientRow key={client.id} {...client} />
        );
      })
    };

    const iconStyle = (name) => {
      return name === orderBy 
      ? asc 
        ? 'glyphicon small glyphicon-sort-by-alphabet' 
        : 'glyphicon small glyphicon-sort-by-alphabet-alt' 
      : '';
    }
    const renderTh = (name, Title) => {
      return (
        <th onClick={this.handleOrder(name)}>{Title}<i className={iconStyle(name)}></i></th>
      );
    }
    return (
      <Table striped hover responsive>
        <thead>
          <tr>
            {renderTh('name','Name')}
            {renderTh('phone','Phone Number')}
            {renderTh('birthday','Birthday')}
          </tr>
        </thead>
        <tbody>
          {renderClients()}
        </tbody>
      </Table>
    )
  }
}

export default connect((state) => {
  return state;
})(ClientsTable);