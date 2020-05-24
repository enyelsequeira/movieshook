import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import configReducer from './configReducer';
import currentlySelectedReducer from './currentlySelectedReducer';

export default combineReducers({
  movies: moviesReducer,
  config: configReducer,
  currentlySelected: currentlySelectedReducer,
});
