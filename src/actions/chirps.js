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
