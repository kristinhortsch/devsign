import { getUserId } from './session';
export const getChirps = state => {
  console.log(state.chirps.chirps);
  return state.chirps.chirps;
};
export const getSearchTerm = state => state.chirps.term;
export const getFilteredChirps = state => {
  const searchTerm = getSearchTerm(state);
  return getChirps(state).filter(chirp => {
    console.log(chirp);
    return chirp.chirp.includes(searchTerm);
  });
};

export const getUserChirps = state => {
  const id = getUserId(state);
  return getChirps(state).filter(chirp => {
    return chirp.user.user_id === id;
  });
};
export const isLoading = state => state.chirps.loading;

