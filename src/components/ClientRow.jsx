import React, { Component } from 'react';
import { Glyphicon, Button, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import moment from 'moment';
import { connect } from 'react-redux';

import { editClient } from '../actions'

class ClientRow extends Component {

  handleClick = () => {
    const { dispatch, id } = this.props;
    if (id) {
      dispatch(editClient(id));
    }
  }

  render() {
    const { name, phone, birthday } = this.props;
    const renderDate = () => {
      return moment(birthday).format('LL');
    }

    const tooltip = (
      <Tooltip>Edit</Tooltip>
    );
    return (
      <tr>
        <td><p>{name}</p></td>
        <td>{phone}</td>
        <td>{renderDate()}</td>
        <td>
        <ButtonToolbar>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Glyphicon glyph="pencil" onClick={this.handleClick} />
          </OverlayTrigger>
        </ButtonToolbar>
         
        </td>
      </tr>
    )
  }
}

export default connect()(ClientRow);