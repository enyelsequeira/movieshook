import {} from '../constants/actionTypes';

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BY_CATEGORY':
    case 'FETCH_MOVIES_BY_GENRE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
