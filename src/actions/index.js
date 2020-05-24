import moviesAPI from '../api/moviesAPI';
import { GET_GENRES, START_LOADING, END_LOADING, FETCH_MOVIES_BY_GENRE, FETCH_MOVIES_BY_CATEGORY } from '../constants/actionTypes';

// Get the list of genres
const getGenres = () => async (dispatch) => {
  const { data } = await moviesAPI.get('/genre/movie/list');

  dispatch({ type: GET_GENRES, payload: data });
};

export const selectGenre = (genreId) => async (dispatch) => {
  dispatch({ type: 'SELECT_GENRE', payload: genreId });
};

export const selectCategory = (name) => async (dispatch) => {
  dispatch({ type: 'SELECT_CATEGORY', payload: name });
};

export const fetchMoviesByGenre = (currentlySelected, page) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const { data } = await moviesAPI.get('/discover/movie', {
    params: {
      with_genres: currentlySelected, page,
    },
  });

  dispatch({ type: FETCH_MOVIES_BY_GENRE, payload: { currentlySelected, data } });
  dispatch({ type: END_LOADING });
};

export const fetchMoviesByCategory = (currentlySelected, page) => async (dispatch) => {
  dispatch({ type: START_LOADING });

  const { data } = await moviesAPI.get(`/movie/${currentlySelected}`, {
    params: { page },
  });

  dispatch({ type: FETCH_MOVIES_BY_CATEGORY, payload: { currentlySelected, data } });
  dispatch({ type: END_LOADING });
};

// // Select a genre and populate movies
// export const selectGenre = (genreId, page) => async (dispatch) => {
//   dispatch({ type: START_LOADING });

//   const { data } = await moviesAPI.get('/discover/movie', {
//     params: { with_genres: genreId, page },
//   });

//   dispatch({ type: FETCH_MOVIES_BY_GENRE, payload: { currentlySelected: genreId, data } });
//   dispatch({ type: END_LOADING });
// };

// // Select a category and populate movies
// export const selectCategory = (name, page) => async (dispatch) => {
//   dispatch({ type: START_LOADING });

//   const { data } = await moviesAPI.get(`/movie/${name}`, {
//     params: { page },
//   });

//   dispatch({ type: FETCH_MOVIES_BY_CATEGORY, payload: { currentlySelected: name, data } });
//   dispatch({ type: END_LOADING });
// };

// Initialization
export const init = () => async (dispatch) => {
  await dispatch(getGenres());
  await dispatch(selectCategory('popular'));
};
