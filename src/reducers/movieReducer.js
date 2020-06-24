// import { FETCH_MOVIE_DETAILS } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    // case FETCH_MOVIE_DETAILS:
    //   return action.payload;
    case 'FETCH_MOVIE_REQUEST':
      return { ...state };
    case 'FETCH_MOVIE_SUCCESS':
      return { ...state, movie: action.payload };
    case 'FETCH_MOVIE_FAILURE':
      return { ...state, errorMessage: action.payload.error };
    case 'CLEAR_MOVIE':
      return {};
    default:
      return state;
  }
};

// case PRODUCT_LIST_REQUEST:

//   return { loading: true}
// case PRODUCT_LIST_SUCCESS:
//   return{loading: false, products: action.payload};
// case PRODUCT_LIST_FAIL:
//   return { loading: false, error: action.payload };
// default:
//   return state;

// export const todoReducer = (state = initialState, action) => {
//   switch(action.type) {

//     default:
//       return state;
//   }
// };

