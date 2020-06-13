import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import configReducer from './configReducer';
import currentlySelectedReducer from './currentlySelectedReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  config: configReducer,
  currentlySelected: currentlySelectedReducer,
});
