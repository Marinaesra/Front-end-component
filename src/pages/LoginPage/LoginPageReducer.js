import { LOAD_INFO, LOGIN, LOGOUT } from "./LoginPageAction";

const initialState = {
  user: undefined,
  token: undefined,
  isOnline: false,
};

const loginPageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isOnline: true,
      };
    case LOAD_INFO:
      return {
        ...state,
        user: payload.user,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default loginPageReducer;
