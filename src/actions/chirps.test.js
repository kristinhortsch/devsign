import { FETCH_POPULAR_CHIRPS, fetchPopularChirps } from './chirps';
// import { getPopularChirps } from '../services/blogService';

// jest.mock('../services/blogService');

describe('actions test', () => {
  it('fetches chirps', () => {
    const action = fetchPopularChirps();

    expect(action).toEqual({ 
      type: FETCH_POPULAR_CHIRPS,
      payload: Promise.resolve()
    });
  });
});
