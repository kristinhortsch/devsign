import { getPopularChirps, getUserChirps } from '../services/chirps';
export const FETCH_POPULAR_CHIRPS = 'FETCH_POPULAR_CHIRPS';
export const FETCH_USER_CHIRPS = 'FETCH_POPULAR_CHIRPS';
export const FETCH_CHIRPS_LOADING = 'FETCH_CHIRPS_LOADING';

export const fetchPopularChirps = () => ({
  type: FETCH_POPULAR_CHIRPS,
  payload: getPopularChirps()
});

export const fetchUserTweets = () => ({
  type: FETCH_USER_CHIRPS,
  payload: getUserChirps()
});


