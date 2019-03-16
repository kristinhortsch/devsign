export const getChirps = state => state.chirps.chirps;
export const getSearchTerm = state => state.chirps.term;
export const getFilteredChirps = state => {
  const searchTerm = getSearchTerm(state);
  return getChirps(state).filter(chirp => {
    return chirp.text.includes(searchTerm);
  });
};
export const isLoading = state => state.chirps.loading;

