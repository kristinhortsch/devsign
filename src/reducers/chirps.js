import { FETCH_POPULAR_CHIRPS, FETCH_USER_CHIRPS } from '../actions/chirps';

const initialState = {
  chirps: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POPULAR_CHIRPS: 
      return {
        ...state,
        chirps: action.payload
      };
    case FETCH_USER_CHIRPS: 
      return {
        ...state,
        chirps: action.payload
      };
    default: 
      return state;
  }
}