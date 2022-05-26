import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";
import Global from "./Global";
import Profile from "./Profile";

const index = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    global: Global,
    profile: Profile,
  });

export default index;
