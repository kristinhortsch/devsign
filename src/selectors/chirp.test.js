import { getChirp } from '../selectors/chirp';

describe('selectors test', () => {
  it('can get a chirp', () => {
    const state = {
      chirp: {
        chirp: 'a chirp'
      }
    };

    const fetchedChirp = getChirp(state);

    expect(fetchedChirp).toEqual('a chirp');
  });
});
