export const getToken = state => state.session.token;

export const getHandle = state => state.session.handle;

export const getProfileImg = state => state.session.profileImg;

export const getUserId = state => {
  return state.session.id;
};

export const getName = state => state.session.name;

