import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import configReducer from './configReducer';
import currentlySelectedReducer from './currentlySelectedReducer';
import movieReducer from './movieReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  loading: loadingReducer,
  config: configReducer,
  currentlySelected: currentlySelectedReducer,
});
