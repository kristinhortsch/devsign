export const getChirps = () => {
  return fetch(process.env.API_URL)
    .then(res=> [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
  // Promise.resolve([
  //   { id: 1234, text: 'life is great', handle: 'user1', profileImg: 'https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' },
  //   { id: 1235, text: 'life is meh', handle: 'user2', profileImg: 'https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' },
  //   { id: 1236, text: 'life is okay', handle: 'user3', profileImg: 'https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' },
  //   { id: 1237, text: 'life is fabulous', handle: 'user4', profileImg: 'https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' }
  // ]);
};
