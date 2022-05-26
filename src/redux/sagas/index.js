import { all } from "redux-saga/effects";
import AuthSagas from "./Auth";
import ProfileSagas from "./Profile";

export default function* rootSaga() {
  yield all([AuthSagas(), ProfileSagas()]);
}
