import React, { Component } from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { Modal, Button, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

class EditClient extends Component {
  state = {
    show: false,
    client: {},
  }

  componentDidMount() {
    const { show } = this.props;
    this.setState({ show });
  }

  save = () => {
    this.setState({ show: false });
  }

  render() {
    const show = this.state.show;
    return (
      <Modal show={show}>
        <Modal.Header closeButton>Client info</Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Birthday</ControlLabel>
              <DatePicker id="example-datepicker" value={this.state.client.birthday} onChange={this.handleChange} />
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

export default EditClient;