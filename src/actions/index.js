import moviesAPI from '../api/moviesAPI';

const getGenres = () => async (dispatch) => {
  const { data } = await moviesAPI.get('/genre/movie/list');

  dispatch({ type: 'GET_GENRES', payload: data });
};

export const selectGenre = (genreId) => async (dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const { data } = await moviesAPI.get('/discover/movie', {
    params: {
      with_genres: genreId,
      page: 1,
      //   sort_by:
    },
  });

  dispatch({ type: 'FETCH_MOVIES_BY_GENRE', payload: data });

  dispatch({ type: 'END_LOADING' });
};

// Select movies by categories
export const selectCategory = (name) => async (dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const { data } = await moviesAPI.get(`/movie/${name}`, {
    params: {
      category: name,
      page: 1,
      //   sort_by:
    },
  });

  dispatch({ type: 'FETCH_MOVIES_BY_CATEGORY', payload: data });
  console.log(data);

  dispatch({ type: 'END_LOADING' });
};

// select category
// /movie/${categoryName}

export const init = () => async (dispatch) => {
  dispatch({ type: 'START_LOADING' });

  // await dispatch(getConfig());
  await dispatch(getGenres());
  await dispatch(selectGenre(28));
  await dispatch(selectCategory());

  console.log('test');

  dispatch({ type: 'END_LOADING' });
};
