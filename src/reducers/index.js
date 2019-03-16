import { combineReducers } from 'redux';
import chirps from './chirps';
import chirp from './chirp';
import session from './session';
import modal from './modal';

export default combineReducers({
  chirp,
  chirps,
  session,
  modal
});
