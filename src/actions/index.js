import moviesAPI from '../api/moviesAPI';
import { GET_GENRES, START_LOADING, END_LOADING, SELECT_GENRE, SELECT_CATEGORY, FETCH_MOVIES } from '../constants/actionTypes';

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

export const fetchMoviesByGenre = (currentlySelected, page) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const { data } = await moviesAPI.get('/discover/movie', { params: { with_genres: currentlySelected, page } });

  dispatch({ type: FETCH_MOVIES, payload: { currentlySelected, data } });
  dispatch({ type: END_LOADING });
};

export const fetchMoviesByCategory = (currentlySelected, page) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const { data } = await moviesAPI.get(`/movie/${currentlySelected}`, { params: { page } });

  dispatch({ type: FETCH_MOVIES, payload: { currentlySelected, data } });
  dispatch({ type: END_LOADING });
};

export const getMoviesSearch = (query) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  const { data } = await moviesAPI.get('/search/movie', { params: { query } });

  dispatch({ type: FETCH_MOVIES, payload: { query, data } });
  dispatch({ type: END_LOADING });
};
