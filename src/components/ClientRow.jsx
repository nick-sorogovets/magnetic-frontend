import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import moment from 'moment';
import { connect } from 'react-redux';

import { editClient } from '../actions'

class ClientRow extends Component {

  handleClick = () => {
    const { dispatch, id } = this.props;
    dispatch(editClient(id));
  }

  render() {
    const { name, phone, birthday } = this.props;
    const renderDate = () => {
      return moment(birthday).format('L');
    }
    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{renderDate()}</td>
        <td>
          <Button onClick={this.handleClick}><Glyphicon glyph="pencil"/></Button>
        </td>
      </tr>
    )
  }
}

export default connect()(ClientRow);