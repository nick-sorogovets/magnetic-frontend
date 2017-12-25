import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import ClientsTable from './ClientsTable';
import ClientForm from './ClientForm';

import { createClient } from '../actions';

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
            <Col xs={10} md={10}>
              <h4 className="pull-left">Clients</h4>
            </Col>
            <Col xs={2} md={2}>
              <button type="button" className="btn-flat" onClick={this.handleAddClient}>+ Add Client</button>
            </Col>
          </Row>
          <Row>
          <br/>
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