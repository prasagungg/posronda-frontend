import Immutable from 'seamless-immutable';
import actionTypes from '../actions/Auth';

const INIT_STATE = Immutable({
  user: null,
  error: null
});

const oauth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        authUser: action.data,
        user: action.data
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    case actionTypes.CHANGE_PASSWORD_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    case actionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        user: action.data
      };
    }
    case actionTypes.FAILURE:
      return { error: action.error };
    default:
      return state;
  }
};

export default oauth;
