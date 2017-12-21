import React, { Component } from 'react';

import { Button, Grid, Row, Col } from 'react-bootstrap';

import ClientsTable from './ClientsTable';
import ClientForm from './ClientForm';

import '../styles/Clients.css';

class Clients extends Component {

  state = {
    showClientForm: false,
    activeClient: {},
  }

  handleAddClient = (e) => {
    e.preventDefault();
    this.setState({ showClientForm: true });
  }
  render() {
    const { showClientForm } = this.state;
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={11} md={10}>
              <h4>Clients</h4>
            </Col>
            <Col xs={1} md={2}>
              <Button bsStyle="primary" className="add-client__button" onClick={this.handleAddClient}>+ Add Client</Button>
            </Col>
          </Row>
          <Row className="client__table">
            <Col xs={12} md={12}>
              <ClientsTable />
            </Col>
          </Row>
        </Grid>
        <ClientForm show={showClientForm} />
      </div>
    );
  }
}

export default Clients;