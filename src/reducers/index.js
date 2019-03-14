import { combineReducers } from 'redux';
import chirps from './chirps';
import session from './session';
import modal from './modal';

export default combineReducers({
  chirps,
  session,
  modal
});
