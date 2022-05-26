import { takeEvery, put, all, call } from "redux-saga/effects";
import { baseUrl, getUser, setUser, destroyUser, request } from "../../utils";
import history from "../../utils/history";
import { toast } from "react-toastify";

import { loading } from "../actions/Global";
import actionTypes, { getProfileSuccess } from "../actions/Auth";

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

function* signUp({ payload, onError }) {
  yield put(loading(true));
  const requestURL = `${baseUrl}/auth/register`;
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
    });

    yield call(history.push, "/");
    yield put(loading(false));
    notifSuccess(res.message);
  } catch (err) {
    const res = yield err.response.json();

    yield put(loading(false));

    if (typeof res.message == "string") {
      yield put(notifError(res.message));
    } else if (typeof res.message == "object") {
      if (onError) {
        onError(res.message);
      }
    }
  }
}

function* logout() {
  try {
    const requestURL = `${baseUrl}/auth/logout`;
    const auth = getUser();
    const res = yield call(request, requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    });

    yield destroyUser();
    yield history.push("/login");
    yield put(notifSuccess(res.message));
  } catch (err) {
    // yield put(notifError("ups something when wrong"));
    console.log(err);
  }
}

function* getProfile() {
  try {
    const requestURL = `${baseUrl}/auth/me`;
    const auth = getUser();

    const res = yield call(request, requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    });

    yield put(getProfileSuccess(res.data));
  } catch (err) {
    // yield put(notifError("ups something when wrong"));
    console.log(err);
  }
}

function* oauthSaga() {
  yield all([
    takeEvery(actionTypes.SIGN_IN, signIn),
    takeEvery(actionTypes.SIGN_UP, signUp),
    takeEvery(actionTypes.LOGOUT, logout),
    takeEvery(actionTypes.GET_PROFILE, getProfile),
  ]);
}

export default oauthSaga;
