export const SIGN_UP = 'SIGN_UP';

export const signUp = (username, password, email, name) => ({
  type: SIGN_UP,
  payload: [username, password, email, name]
});
