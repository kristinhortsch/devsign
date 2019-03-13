const initialState = {
  name: '',
  email: '',
  username: '',
  password: ''
};

export default function reducer({ state = initialState, action }) {
  switch(action.type) {
    default: 
      return state;
  }
}
