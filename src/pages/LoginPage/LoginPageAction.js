export const LOGIN = "LOGIN";
export const LOAD_INFO = "LOAD_INFO";

export const doLoginActions = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const loadInfoActions = (payload) => {
  return {
    type: LOAD_INFO,
    payload,
  };
};
