import { FETCH_CHIRPS, FETCH_CHIRP, FETCH_CHIRPS_BY_ID, CREATE_CHIRP, UPDATE_SEARCH_TERM, DELETE_CHIRP } from '../actions/chirps';

const initialState = {
  chirps: [],
  chirp: {},
  term: '',
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHIRPS: 
      return {
        ...state,
        chirps: action.payload,
        loading: false
      };
    case FETCH_CHIRPS_BY_ID: 
      return {
        ...state,
        chirps: action.payload,
        loading: false
      };
    case CREATE_CHIRP: 
      return { 
        ...state,
        chirps: [...state.chirps, action.payload],
        loading: false
      };

    case DELETE_CHIRP: 
      return {
        ...initialState
      };
      
    case FETCH_CHIRP: 
      return {
        ...state,
        chirp: action.payload
      };

    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
        loading: false
      };
    default: 
      return state;
  }
}
