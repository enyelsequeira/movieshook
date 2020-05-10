const INITIAL_STATE = {
  staticCategories: ['Popular', 'Top Rated', 'Upcoming'],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case TYPES.GET_CONFIG:
    //   return { ...state, base: action.payload };
    case 'GET_GENRES':
      return { ...state, ...action.payload };
    // case TYPES.SELECTED_MENU:
    //   return { ...state, selected: action.payload };
    // case TYPES.REMOVE_SELECTED_MENU:
    //   return { ...state, selected: null };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'REMOVE_LOADING':
      return { ...state, loading: false };
    default:
      return state;
  }
};
