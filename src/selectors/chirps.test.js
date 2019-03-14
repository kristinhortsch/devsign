import { getChirps } from '../selectors/chirps';

describe('selectors test', () => {
  it('can get the chirps', () => {
    const state = {
      chirps: {
        chirps: [
          { id: 1234, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' },
          { id: 1235, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' }
        ]
      }
    };

    const fetchedChirps = getChirps(state);

    expect(fetchedChirps).toEqual([
      { id: 1234, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' },
      { id: 1235, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' }
    ]);
  });
});
