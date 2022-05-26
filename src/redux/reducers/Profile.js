import Immutable from "seamless-immutable";
import actionTypes from "../actions/Profile";

const INIT_STATE = Immutable({
  profile: {},
});

const profile = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.data,
      };
    default:
      return state;
  }
};

export default profile;
