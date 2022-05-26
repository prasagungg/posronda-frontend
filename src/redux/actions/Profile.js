import Immutable from "seamless-immutable";

const GET_USER_PROFILE = "GET_USER_PROFILE";
const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";

const actionTypes = Immutable({
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
});

export default actionTypes;

export const getUserProfile = (params) => {
  console.log(params);
  return {
    type: actionTypes.GET_USER_PROFILE,
    ...params,
  };
};

export const getUserProfileSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_PROFILE,
    data,
  };
};
