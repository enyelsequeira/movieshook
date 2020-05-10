import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import categoriesReducer from './fetchMoviesByData';
import configReducer from './configReducer';

export default combineReducers({
  categoriesReducer,
  movies: moviesReducer,
  config: configReducer,
});
