const initialState = {
  email: '',
  userId: 1
};

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { email, user_id } = action.payload;
      return { ...state, email, userId: user_id };
    case CLEAR_USER:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
