import moviesAPI from '../api/moviesAPI';

// Actions => JUST OBJECTS that need to have a type key, and an optional payload
// Actions Creators => FUNCTIONS that return actions

const getGenres = () => async (dispatch) => {
  const { data } = await moviesAPI.get('/genre/movie/list');

  dispatch({ type: 'GET_GENRES', payload: data });
};

export const init = () => async (dispatch) => {
  dispatch({ type: 'SET_LOADING' });

  // await dispatch(getConfig());
  await dispatch(getGenres());

  dispatch({ type: 'REMOVE_LOADING' });
};
