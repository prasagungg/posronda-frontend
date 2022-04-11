import { takeEvery, put, all, call } from "redux-saga/effects";
import { baseUrl, getUser, setUser, destroyUser, request } from "../../utils";
import history from "../../utils/history";

import { notif, loading } from "../actions/Global";
import actionTypes, {
  failure,
  // signUpSuccess,
} from "../actions/Auth";

const notifError = (msg) =>
  notif({ open: true, variant: "error", message: msg });
const notifSuccess = (msg) =>
  notif({ open: true, variant: "success", message: msg });

function* signIn({ payload }) {
  yield put(loading(true));
  const requestURL = `${baseUrl}/auth/login`;
  const body = JSON.stringify(payload);

  try {
    const res = yield call(request, requestURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    yield setUser({
      token: res.token,
      expires_in: res.expires_in,
      user: res.user,
    });
    yield put(notifSuccess(res.message));
    yield put(loading(false));
    yield call(history.push, "/");
  } catch (err) {
    console.log(err);
    // const res = yield err.response.json();
    yield put(loading(false));
    // if (res.message) {
    //   yield put(notifError(res.message.message || "Invalid email or password"));
    // }
  }
}

function* logout() {
  try {
    yield destroyUser();
    yield put(notifSuccess("Sign-out Success"));
    yield history.push("/signin");
  } catch (err) {
    if (err.message) {
      yield put(failure(err));
    }
  }
}

function* oauthSaga() {
  yield all([
    takeEvery(actionTypes.SIGN_IN, signIn),
    takeEvery(actionTypes.LOGOUT, logout),
  ]);
}

export default oauthSaga;
