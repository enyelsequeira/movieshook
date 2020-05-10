import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import configReducer from './configReducer';

export default combineReducers({
  movie: movieReducer,
  config: configReducer,
});
