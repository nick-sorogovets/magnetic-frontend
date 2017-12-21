import React, { Component } from 'react';

import { Button, Grid, Row, Col } from 'react-bootstrap';

import ClientsTable from './ClientsTable';
import EditClient from './EditClient';

class Clients extends Component {
  handleAddClient = (e) => {
    e.preventDefault();
    alert('click');
  }
  render() {
    return (
      <div>
      <EditClient show={true}/>
      <Grid>
        <Row>
          <Col xs={11} md={10}>
            <h4>Clients</h4>
          </Col>
          <Col xs={1} md={2}>
            <Button bsStyle="primary" onClick={this.handleAddClient}>+ Add Client</Button>
          </Col>
        </Row>
        <Row className="client__table">
          <Col xs={12} md={12}>
            <ClientsTable />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Clients;