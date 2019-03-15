import { FETCH_CHIRPS, CREATE_CHIRP, UPDATE_SEARCH_TERM } from '../actions/chirps';

const initialState = {
  chirps: [],
  chirp: '',
  term: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHIRPS: 
      return {
        ...state,
        chirps: action.payload
      };
    case CREATE_CHIRP: 
      return {
        ...state,
        chirp: action.payload
      };
    
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      };
    default: 
      return state;
  }
}
