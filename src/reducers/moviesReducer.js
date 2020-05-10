export default (state = { loading: true }, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BY_GENRE':
      return { ...state, ...action.payload };
      // case TYPES.FETCH_MOVIES_LOADING:
      //   return { ...state, loading: true };
      // case TYPES.FETCH_MOVIES_FINISHED:
      //   return { ...state, loading: false };
    default:
      return state;
  }
};
