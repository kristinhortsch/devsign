import { get, post, del, getById } from './request';

export const getChirps = () => get('/chirps');
export const postChirp = chirp => post('/chirps', chirp);
export const getChirp = id => get(`/chirps/${id}`);
export const getChirpsById = id => getById(`/chirps/users/${id}`);
export const deleteChirp = (id, chirp) => del(`/chirps/${id}`, chirp);
