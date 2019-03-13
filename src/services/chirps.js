export const getChirps = () => {
  return Promise.resolve([
    { id: 1234, chirp: 'life is great', handle: 'user1', profileImg: '../../assets/prof-pic.png' },
    { id: 1235, chirp: 'life is meh', handle: 'user2', profileImg: '../../assets/prof-pic.png' },
    { id: 1236, chirp: 'life is okay', handle: 'user3', profileImg: '../../assets/prof-pic.png' },
    { id: 1237, chirp: 'life is fabulous', handle: 'user4', profileImg: '../../assets/prof-pic.png' }
  ]);
};



