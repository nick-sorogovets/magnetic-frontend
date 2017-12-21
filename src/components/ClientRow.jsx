import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import moment from 'moment';

class ClientRow extends Component {
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
          <Button><Glyphicon glyph="pencil"/></Button>
        </td>
      </tr>
    )
  }
}

export default ClientRow;