import reducer from './chirps';

jest.mock('../services/auth.js');
jest.mock('../services/chirps.js');


describe('chirps reducer', () => {
  it('handles fetching popular chirps action', () => {
    const state = {
      chirps: { 
        chirps: [],
        chirp: ''
      }
    };

    const fetchedChirps = reducer(state, {
      type: 'FETCH_CHIRPS',
      payload: [
        { id: 1234, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' },
        { id: 1235, chirp: 'life is meh', handle: 'user2', profileImg: '../../assets/prof-pic.png' },
        { id: 1236, chirp: 'life is okay', handle: 'user3', profileImg: '../../assets/prof-pic.png' },
        { id: 1237, chirp: 'life is fabulous', handle: 'user4', profileImg: '../../assets/prof-pic.png' }
      ]
    });

    expect(fetchedChirps).toEqual({
      chirps: [
        { id: 1234, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' },
        { id: 1235, chirp: 'life is meh', handle: 'user2', profileImg: '../../assets/prof-pic.png' },
        { id: 1236, chirp: 'life is okay', handle: 'user3', profileImg: '../../assets/prof-pic.png' },
        { id: 1237, chirp: 'life is fabulous', handle: 'user4', profileImg: '../../assets/prof-pic.png' }
      ],
      loading: false
    });
  });

  it('handles create a new chirp', () => {
    const state = {
      chirp: ''
    };

    const updatedChirp = reducer(state, {
      type: 'CREATE_CHIRP',
      payload: 'hey there homie'
    });

    expect(updatedChirp).toEqual({
      chirp: 'hey there homie',
      loading: false
    });
  });
});
