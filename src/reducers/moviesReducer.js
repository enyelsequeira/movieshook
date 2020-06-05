import { FETCH_MOVIES } from '../constants/actionTypes';

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
