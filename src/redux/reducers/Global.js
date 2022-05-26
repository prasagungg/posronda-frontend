import Immutable from "seamless-immutable";
import actionTypes from "../actions/Global";

export const INIT_STATE = Immutable({
  loading: false,
});

const global = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return state.merge({ loading: action.param });
    default:
      return state;
  }
};

export default global;
