import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Modal, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';


import { cancelSaveClient } from '../actions';

class ClientForm extends Component {
  state = {
    show: false,
    client: {},
  }

  componentWillReceiveProps() {
    const { selectedId, clients } = this.props;
    if (selectedId === null) {
      this.setState({ show: false, client: {} });
    } else if (selectedId === '') {
      this.setState({
        show: true,
        client: {
          id: uuid(),
          birthday: Date.now(),
        }
      });
    } else if (selectedId.length) {
      this.setState({
        show: true,
        client: clients.find(client => client.id === selectedId),
      });
    }

  }

  save = () => {
    const { dispatch } = this.props;

    //TODO: Dispacth save action


    this.setState({ show: false });
  }

  close = () => {
    this.setState({ show: false });
  }

  handleDate = (date) => {
    const client = this.state.client;
    this.setState({
      client: {
        ...client,
        birthday: date,
      }
    });
  }

  render() {
    const { selectedId, clients } = this.props;
    const { client, show } = this.state;
    return (
      <Modal show={show} onHide={this.close}>
        <Modal.Header closeButton>Client info</Modal.Header>
        <Modal.Body>
          <form ref="client-form" name="clientForm">
            <FormGroup>
              <ControlLabel>Name *</ControlLabel>
              <FormControl type="text" value={client.name} placeholder="Enter name" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Phone Number *</ControlLabel>
              <FormControl type="text" value={client.phone} placeholder="Ex. (666) 666-66666" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Birthday</ControlLabel>
              <DatePicker selected={client.birthday} onChange={this.handleDate} />
              <HelpBlock>Help</HelpBlock>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" type="submit" form="clientForm">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(state => {
  return state;
})(ClientForm);