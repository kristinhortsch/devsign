// import { post, getById, del } from './request';

export const getChirps = () => {
  return Promise.resolve([
    { text: 'life is great', user: '1234' },
    { text: 'life is great', user: '1234' },
    { text: 'life is great', user: '1234' }
  ]);
};

export const createChirp = () => {
  return Promise.resolve({
    text: 'life is great', user: '1234'
  });
};
// export const createChirp = chirp => post('/chirps', chirp);
// export const getChirpsById = (id) => getById(`/chirps/users/${id}`);
// export const deleteChirp = (id) => del(`/chirps/${id}`);
