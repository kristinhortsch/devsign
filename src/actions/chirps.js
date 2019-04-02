import { getChirps, postChirp, getChirpsById } from '../services/chirps';

export const FETCH_CHIRPS = 'FETCH_CHIRPS';
export const FETCH_CHIRPS_LOADING = 'FETCH_CHIRPS_LOADING';
export const fetchChirps = () => ({
  type: FETCH_CHIRPS,
  payload: getChirps(),
  loading: true
});

export const FETCH_CHIRPS_BY_ID = 'FETCH_CHIRPS_BY_ID';
export const FETCH_CHIRPS_BY_ID_LOADING = 'FETCH_CHIRPS_BY_ID_LOADING';
export const fetchChirpsById = (id) => ({
  type: FETCH_CHIRPS_BY_ID,
  payload: getChirpsById(id),
  loading: true
});

export const CREATE_CHIRP = 'CREATE_CHIRP';
export const createChirp = chirp => ({
  type: CREATE_CHIRP,
  payload: postChirp({ chirp }),
  loading: true
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const LOAD_TERM_START = 'LOAD_TERM_START';
export const LOAD_TERM_END = 'LOAD_TERM_END';
export const updateSearchTerm = term => ({
  type: UPDATE_SEARCH_TERM,
  payload: term,
  loading: true
});

export const UPDATE_CHIRP = 'UPDATE_CHIRP';
export const updateChirp = chirp => ({
  type: UPDATE_CHIRP,
  payload: chirp,
  loading: true
});
