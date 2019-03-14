export const getChirps = state => state.chirps.chirps;
export const getUserChirps = (state, id) => {
  return getChirps(state).filter(chirp => {
    return chirp.id === id;
  });
};
