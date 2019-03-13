import { FETCH_CHIRPS, CREATE_CHIRP } from '../actions/chirps';

const initialState = {
  chirps: [],
  chirp: ''
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
    default: 
      return state;
  }
}
