import { get, post } from './request';

export const getChirps = () => get('/chirps');
export const createChirp = chirp => post('/chirps', chirp);
