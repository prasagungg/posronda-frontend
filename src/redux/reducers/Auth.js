import Immutable from "seamless-immutable";
import actionTypes from "../actions/Auth";

const INIT_STATE = Immutable({
  user: null,
  error: null,
});

const oauth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default oauth;
