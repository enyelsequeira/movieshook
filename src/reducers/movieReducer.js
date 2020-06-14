import { FETCH_MOVIE_DETAILS } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return action.payload;
    case 'CLEAR_MOVIE':
      return {};
    default:
      return state;
  }
};
