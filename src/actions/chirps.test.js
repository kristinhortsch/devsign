import { FETCH_CHIRPS, fetchChirps, CREATE_CHIRP, createChirpAction } from './chirps';

jest.mock('../services/auth.js');
jest.mock('../services/chirps.js');


describe('actions test', () => {
  it('fetches chirps', () => {
    const action = fetchChirps();

    expect(action).toEqual({ 
      type: FETCH_CHIRPS,
      payload: Promise.resolve(),
      loading: true
    });
  });

  it('creates a chirp', () => {
    const chirp = 'life is great';
    const action = createChirpAction(chirp);

    expect(action).toEqual({
      type: CREATE_CHIRP,
      payload: Promise.resolve(),
      loading: true
    });
  });
});
