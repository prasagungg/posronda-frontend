import { takeEvery, put, all, call } from "redux-saga/effects";
import { baseUrl, getUser, request } from "../../utils";
import history from "../../utils/history";
import { toast } from "react-toastify";

import { loading } from "../actions/Global";
import actionTypes, { getUserProfileSuccess } from "../actions/Profile";

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

function* getUserProfile({ username }) {
  console.log(username);
  yield put(loading(true));
  const requestURL = `${baseUrl}/profile/${username}`;
  const auth = getUser();

  try {
    const res = yield call(request, requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    });

    yield put(getUserProfileSuccess(res.data));

    yield put(loading(false));
  } catch (err) {
    const res = yield err.response.json();
    yield put(loading(false));
    if (res.message) {
      notifError(res.message);
    }
  }
}

function* oauthSaga() {
  yield all([takeEvery(actionTypes.GET_USER_PROFILE, getUserProfile)]);
}

export default oauthSaga;
