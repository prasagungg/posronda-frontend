import Immutable from "seamless-immutable";

const FAILURE = "FAILURE";
const SIGN_IN = "SIGN_IN";
const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_UP = "SIGN_UP";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const FORGOT_PASSWORD = "FORGOT_PASSWORD";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const RESET_PASSWORD = "RESET_PASSWORD";
const RESET_PASSWORD_MOBILE = "RESET_PASSWORD_MOBILE";
const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
const CHANGE_PASSWORD_PROFILE = "CHANGE_PASSWORD_PROFILE";
const CHANGE_PASSWORD_PROFILE_SUCCESS = "CHANGE_PASSWORD_PROFILE_SUCCESS";
const ACTIVATION = "ACTIVATION";
const LOGOUT = "LOGOUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const INIT_URL = "INIT_URL";

const actionTypes = Immutable({
  FAILURE,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_MOBILE,
  RESET_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_PROFILE,
  CHANGE_PASSWORD_PROFILE_SUCCESS,
  ACTIVATION,
  LOGOUT,
  LOGOUT_SUCCESS,
  INIT_URL,
});

export default actionTypes;

export const failure = (error) => {
  return {
    type: actionTypes.FAILURE,
    error,
  };
};

export const signIn = (payload) => {
  console.log(payload);
  return {
    type: actionTypes.SIGN_IN,
    payload,
  };
};

export const signInSuccess = (data) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    data,
  };
};

export const signUp = (param) => {
  return {
    type: actionTypes.SIGN_UP,
    param,
  };
};

export const signUpSuccess = (data) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    data,
  };
};

export const forgotPassword = (param) => {
  return {
    type: actionTypes.FORGOT_PASSWORD,
    param,
  };
};

export const forgotPasswordSuccess = (data) => {
  return {
    type: actionTypes.FORGOT_PASSWORD_SUCCESS,
    data,
  };
};

export const resetPassword = (param) => {
  return {
    type: actionTypes.RESET_PASSWORD,
    param,
  };
};

export const resetPasswordMobile = (param) => {
  return {
    type: actionTypes.RESET_PASSWORD_MOBILE,
    param,
  };
};

export const resetPasswordSuccess = (data) => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    data,
  };
};

export const changePasswordProfile = (param) => {
  return {
    type: actionTypes.CHANGE_PASSWORD_PROFILE,
    param,
  };
};

export const changePasswordProfileSuccess = (data) => {
  return {
    type: actionTypes.CHANGE_PASSWORD_PROFILE_SUCCESS,
    data,
  };
};

export const activation = (param) => {
  return {
    type: actionTypes.ACTIVATION,
    param,
  };
};

export const logout = (data) => {
  return {
    type: actionTypes.LOGOUT,
    data,
  };
};

export const logoutSuccess = (data) => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    data,
  };
};

export const setInitUrl = (url) => {
  return {
    type: actionTypes.INIT_URL,
    data: url,
  };
};
