import * as types from '../constants';

export default (state = null, action) => {
  switch(action.type) {
    case types.SET_SELECTED:
      return action.id;
    case types.SAVE_CLIENT:
      return null;  
    default:
      return state;  
  }
}