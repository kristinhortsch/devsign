import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';
import { CREATE_CHIRP } from '../actions/chirps';

const initialState = {
  isOpen: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    
    case CREATE_CHIRP:
      return {
        ...state,
        isOpen: false
      };
      
    default: 
      return state;
  }
}
