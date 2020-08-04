import moviesAPI from '../api/moviesAPI';
import { GET_GENRES, START_LOADING, END_LOADING, SELECT_GENRE, SELECT_CATEGORY, FETCH_MOVIES, TOGGLE_MODE } from '../constants/actionTypes';

export const getGenres = () => async (dispatch) => {
  const { data } = await moviesAPI.get('/genre/movie/list');

  dispatch({ type: GET_GENRES, payload: data });
};

export const selectGenre = (genreId) => async (dispatch) => {
  dispatch({ type: SELECT_GENRE, payload: genreId });
};

export const selectCategory = (name) => async (dispatch) => {
  dispatch({ type: SELECT_CATEGORY, payload: name });
};

export const toggleMode = () => async (dispatch) => {
  dispatch({ type: TOGGLE_MODE });
};

export const fetchMoviesByGenre = (currentlySelected, page) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const { data } = await moviesAPI.get('/discover/movie', { params: { with_genres: currentlySelected, page } });

  dispatch({ type: FETCH_MOVIES, payload: { currentlySelected, data } });
  dispatch({ type: END_LOADING });
};

export const fetchMoviesByCategory = (currentlySelected, page) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const { data } = await moviesAPI.get(`/movie/${currentlySelected}`, { params: { page } });

  dispatch({ type: FETCH_MOVIES, payload: { currentlySelected, data, hasError: false } });
  dispatch({ type: END_LOADING });
};

export const getMoviesSearch = (query) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  try {
    const { data } = await moviesAPI.get('/search/movie', { params: { query } });

    dispatch({ type: FETCH_MOVIES, payload: { query, data } });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES, payload: { query, data: [], hasError: true } });
  }

  dispatch({ type: END_LOADING });
};

// Set loading to true for next render
export const clearMovie = () => ({
  type: 'CLEAR_MOVIE',
});

// Get Details, Get External IDs, Get Images, Get Keywords, Get Videos, Get Recommendations, Get Similar Movies, Get Reviews
export const getMovieDetails = ({ id }) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_MOVIE_REQUEST' });
    const { data: movieDetails } = await moviesAPI.get(`/movie/${id}`, { params: { append_to_response: 'videos' } });
    const { data: { cast: castData } } = await moviesAPI.get(`/movie/${id}/credits`);
    // const { t } = await moviesAPI.get(`/movie/${id}/person/credits/${id}`);
    // const tmdb = t.slice(0, 6);
    const cast = castData.slice(0, 6);
    // console.log(tmdb, 'comingfromaction');
    dispatch({ type: 'FETCH_MOVIE_SUCCESS', payload: { ...movieDetails, cast } });
  } catch (e) {
    dispatch({ type: 'FETCH_MOVIE_FAILURE', payload: { error: 'SOMETHING HAPPENED' } });
  }
};
// action is an object that has a type and a payload
// action creator is a function that dispatches an action

// export const getCredits = () => async (dispatch, getState) => {
//   const { id } = getState().movie;

//   try {
//     const res = await tmdbAPI.get(`/movie/${id}/credits`);
//     dispatch({
//       type: TYPES.FETCH_CAST,
//       payload: res.data.cast,
//     });
//   } catch (err) {
//     dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
//     history.push(process.env.PUBLIC_URL + '/error');
//   }
// };

// recommended movies
