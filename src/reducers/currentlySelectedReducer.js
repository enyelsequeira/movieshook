import { SELECT_GENRE, SELECT_CATEGORY } from '../constants/actionTypes';

export default (state = 'popular', action) => {
  switch (action.type) {
    case SELECT_GENRE:
    case SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
