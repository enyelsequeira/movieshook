import { GET_GENRES, SELECT_GENRE, START_LOADING, END_LOADING } from '../constants/actionTypes';

export default (state = { isLoading: true }, action) => {
  switch (action.type) {
    case GET_GENRES:
      return { ...state, ...action.payload };
    case SELECT_GENRE:
      return { ...state, selected: action.payload };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
