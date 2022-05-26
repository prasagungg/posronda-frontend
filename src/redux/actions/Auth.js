import Immutable from "seamless-immutable";

const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const LOGOUT = "LOGOUT";
const GET_PROFILE = "GET_PROFILE";
const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";

const actionTypes = Immutable({
  SIGN_IN,
  SIGN_UP,
  LOGOUT,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
});

export default actionTypes;

export const signIn = (payload) => {
  return {
    type: actionTypes.SIGN_IN,
    payload,
  };
};

export const signUp = (payload) => {
  return {
    type: actionTypes.SIGN_UP,
    ...payload,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const getProfile = () => {
  return {
    type: actionTypes.GET_PROFILE,
  };
};

export const getProfileSuccess = (data) => {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    data,
  };
};
