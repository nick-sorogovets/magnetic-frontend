import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Modal, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';

class ClientForm extends Component {
  state = {
    show: false,
    client: {},
  }

  componentWillReceiveProps() {
    const { show } = this.props;
    this.setState({ show });
  }

  save = () => {
    this.setState({ show: false });
  }

  close = () => {
    this.setState({ show: false });
  }

  handleChange = (date) => {
    const client = this.state.client;
    this.setState({
      client: {
        ...client,
        birthday: date,
      }
    });
  }

  render() {
    const {show, client } = this.state;
    return (
      <Modal show={show} onHide={this.close}>
        <Modal.Header closeButton>Client info</Modal.Header>
        <Modal.Body>
          <form ref="client-form">
            <FormGroup>
              <ControlLabel>Name *</ControlLabel>
              <FormControl type="text" value={client.name} placeholder="Enter name" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Phone Number *</ControlLabel>
              <FormControl type="text" value={client.phone} placeholder="Ex. (666) 666-66666"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Birthday</ControlLabel>
              <DatePicker selected={client.birthday} onChange={this.handleChange} />
              <HelpBlock>Help</HelpBlock>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.save}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ClientForm;