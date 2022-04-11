import { takeEvery, put, all, call } from "redux-saga/effects";
import { baseUrl, getUser, setUser, destroyUser, request } from "../../utils";
import history from "../../utils/history";
import { toast } from "react-toastify";

import { loading } from "../actions/Global";
import actionTypes, {
  failure,
  // signUpSuccess,
} from "../actions/Auth";

const notifError = (msg) => {
  toast.error(msg, {
    theme: "dark",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifSuccess = (msg) => {
  toast.success(msg, {
    theme: "dark",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

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

    yield call(history.push, "/");
    yield put(loading(false));
    notifSuccess(res.message);
  } catch (err) {
    const res = yield err.response.json();
    yield put(loading(false));
    if (res.message) {
      notifError(res.message);
    }
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
