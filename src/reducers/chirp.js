import { CREATE_CHIRP, UPDATE_CHIRP } from '../actions/chirps';

const initialState = {
  chirp: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CHIRP: 
      return {
        ...state,
        chirp: action.payload
      };
    case CREATE_CHIRP:
      return initialState;
    default:
      return state;
  }
}

