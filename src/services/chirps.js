import { get, post, getById, del } from './request';

export const getChirps = () => get('/chirps');
export const postChirp = chirp => post('/chirps', chirp);
export const getChirpsById = (id) => getById(`/chirps/users/${id}`);
export const deleteChirp = (id) => del(`/chirps/${id}`);
