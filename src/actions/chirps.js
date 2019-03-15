import { getChirps } from '../services/chirps';

export const FETCH_CHIRPS = 'FETCH_CHIRPS';
export const FETCH_CHIRPS_LOADING = 'FETCH_CHIRPS_LOADING';
export const fetchChirps = () => ({
  type: FETCH_CHIRPS,
  payload: getChirps()
});

export const CREATE_CHIRP = 'CREATE_CHIRP';
export const createChirp = chirp => ({
  type: CREATE_CHIRP,
  payload: chirp
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const LOAD_TERM_START = 'LOAD_TERM_START';
export const LOAD_TERM_END = 'LOAD_TERM_END';
export const updateSearchTerm = term => ({
  type: UPDATE_SEARCH_TERM,
  payload: term
});
