import { FETCH_CREDITS } from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CREDITS:
      return action.payload;
    default:
      return state;
  }
};
