import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

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
    default: 
      return state;
  }
}
