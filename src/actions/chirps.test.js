import { FETCH_POPULAR_CHIRPS, fetchPopularChirps, CREATE_CHIRP, createChirp } from './chirps';

describe('actions test', () => {
  it('fetches chirps', () => {
    const action = fetchPopularChirps();

    expect(action).toEqual({ 
      type: FETCH_POPULAR_CHIRPS,
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
