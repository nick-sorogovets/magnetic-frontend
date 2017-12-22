import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import ClientsTable from './ClientsTable';
import ClientForm from './ClientForm';

import { createClient } from '../actions';

import '../styles/Clients.css';

class Clients extends Component {
  handleAddClient = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(createClient());
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={11} md={10}>
              <h4 className="pull-left">Clients</h4>
            </Col>
            <Col xs={1} md={2}>
              <Button bsStyle="primary" className="btn-flat" onClick={this.handleAddClient}>+ Add Client</Button>
            </Col>
          </Row>
          <Row className="client__table">
            <Col xs={12} md={12}>
              <ClientsTable />
            </Col>
          </Row>
        </Grid>
        <ClientForm/>
      </div>
    );
  }
}

export default connect()(Clients);