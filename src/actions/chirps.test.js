import { FETCH_CHIRPS, fetchChirps, CREATE_CHIRP, createChirp } from './chirps';

describe('actions test', () => {
  it('fetches chirps', () => {
    const action = fetchChirps();

    expect(action).toEqual({ 
      type: FETCH_CHIRPS,
      payload: Promise.resolve()
    });
  });

  it('creates a chirp', () => {
    const chirp = 'hello there';
    const action = createChirp(chirp);

    expect(action).toEqual({
      type: CREATE_CHIRP,
      payload: 'hello there'
    });
  });
});
