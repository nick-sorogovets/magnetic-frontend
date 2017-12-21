import uuid from 'uuid';

import {
  CREATE_CLIENT,
  EDIT_CLIENT,
  SAVE_CLIENT,
} from '../constants';

const inital = {
  show: false,
  isNew: false,
  client: {},
}

export default clientForm = (state = inital, action) => {
  switch (action.type) {
    case CREATE_CLIENT:
      return {
        ...state,
        show: true,
        isNew: true,
        client: {
          id: uuid(),
          name: '',
          phone: '',
          birthday: Date.now(),
        },
      };
    case EDIT_CLIENT:
      return {
        ...state,
        show: true,
        isNew: false,
        client: action.client,
      };
    case SAVE_CLIENT:
      return {
        ...state,
        show: false,
        client: action.client,
      };
    default:
      return state;
  }
}