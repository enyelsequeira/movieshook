const INITIAL_STATE = {
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case TYPES.GET_CONFIG:
    //   return { ...state, base: action.payload };
    case 'GET_GENRES':
      return { ...state, ...action.payload };
    case 'SELECT_GENRE':
      return { ...state, selected: action.payload };
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
