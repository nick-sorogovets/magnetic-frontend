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
        acs: !asc
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

    const headerStyle = (name) => {
      return name === orderBy ? 'active' : '';
    }

    const iconStyle = (name) => {
      return name === orderBy ? asc ? 'glyphicon glyphicon-sort-by-alphabet' : 'glyphicon glyphicon-sort-by-alphabet-alt' : '';
    }

    return (
      <Table striped hover responsive>
        <thead>
          <tr>
            <th className={headerStyle()} onClick={this.handleOrder('name')}>Name <i className={iconStyle()} /></th>
            <th className={headerStyle()} onClick={this.handleOrder('phone')}>Phone Number <i className={iconStyle()} /></th>
            <th className={headerStyle()} onClick={this.handleOrder('birthday')}>Birthday <i className={iconStyle()} /></th>
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

export default connect((state) => {
  return state;
})(ClientsTable);