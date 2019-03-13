import { combineReducers } from 'redux';
import chirps from './chirps';
import session from './session';

export default combineReducers({
  chirps,
  session
});
