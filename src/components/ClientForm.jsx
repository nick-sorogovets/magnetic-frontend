import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/DatePicker.css';

import { isEqual } from 'lodash';

import { cancelSaveClient, sendClient } from '../actions';
import moment from 'moment'

const PhoneEx = /\d{3}([ .-])?\d{3}([ .-])?\d{4}|\(\d{3}\)([ ])?\d{3}([.-])?\d{4}|\(\d{3}\)([ ])?\d{3}([ ])?\d{4}|\(\d{3}\)([.-])?\d{3}([.-])?\d{4}|\d{3}([ ])?\d{3}([ .-])?\d{4}/g;

class ClientForm extends Component {
  state = {
    show: false,
    client: {
      name: '',
      phone: '',
    },
    isValid: false,
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.selectedId, this.props.selectedId)) {
      const { selectedId, clients } = nextProps;
      if (selectedId === null) {
        this.setState({
          show: false,
          client: {
            name: '',
            phone: '',
          },
        });
      } else if (selectedId === '') {
        this.setState({
          show: true,
          client: {
            id: uuid(),
            name: '',
            phone: '',
            birthday: moment(),
          }
        });
      } else if (selectedId.length) {
        this.setState({
          show: true,
          client: clients.find(client => client.id === selectedId),
        });
      }
    }
  }

  save = () => {
    const { dispatch } = this.props;
    const client = this.state.client;
    dispatch(sendClient(client));
  }

  close = () => {
    const { dispatch } = this.props;
    this.setState({ show: false });
    dispatch(cancelSaveClient());
  }

  handleDate = (birthday) => {
    const { client } = this.state;
    this.setState({
      client: {
        ...client,
        birthday,
      }
    });
  }

  handleChange = () => {
    const name = this.nameField.value;
    const phone = this.phoneField.value;
    const { client } = this.state;
    this.setState({
      client: {
        ...client,
        name,
        phone,
      }
    });
  }

  getNameValidation = () => {
    const { name } = this.state.client;
    return (name && name.length)
      ? 'success'
      : 'error';
  }
  getPhoneValidation = () => {
    const { phone } = this.state.client;
    return (phone && phone.match(PhoneEx))
      ? 'success'
      : 'error';
  }

  getIsValid = () => {
    const { name, phone } = this.state.client;
    return name.length && phone.match(PhoneEx);
  }

  render() {
    const { client, show } = this.state;
    return (
      <Modal show={show} onHide={this.close}>
        <Modal.Header closeButton>Client info</Modal.Header>
        <Modal.Body>
          <form ref="clientForm" name="clientForm" onSubmit={this.save}>
            <FormGroup validationState={this.getNameValidation()}>
              <ControlLabel>Name *</ControlLabel>
              <FormControl
                type="text"
                ref="name"
                value={client.name}
                placeholder="Enter name"
                onChange={this.handleChange}
                inputRef={(ref) => { this.nameField = ref }}
              />
            </FormGroup>
            <FormGroup validationState={this.getPhoneValidation()}>
              <ControlLabel>Phone Number *</ControlLabel>
              <FormControl
                type="text"
                ref="phone"
                value={client.phone}
                placeholder="Ex. (666) 666-66666"
                onChange={this.handleChange}
                inputRef={(ref) => { this.phoneField = ref }}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Birthday</ControlLabel>
              <DatePicker
                showYearDropdown
                selected={client.birthday}
                onChange={this.handleDate}
                className="form-control"
                maxDate={moment()}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.save} disabled={!this.getIsValid()}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(state => {
  return state;
})(ClientForm);