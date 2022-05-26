import Immutable from 'seamless-immutable';

// Name spacing with prefix `global/`
const NOTIF = 'global/NOTIF';
const NOTIF_CLOSE = 'global/NOTIF_CLOSE';
const LOADING = 'global/LOADING';
const NEW_CHAT = 'global/NEW_CHAT';
const LOADING_TABLE = 'global/LOADING_TABLE';
const CONFIRM_FORM = 'global/CONFIRM_FORM';
const DIALOG = 'global/DIALOG';
const NOTIFICATIONS = 'global/NOTIFICATIONS';
const RESPONSE = 'global/RESPONSE';
const TABLE_FILTER = 'global/TABLE_FILTER';
const CONFIRM = 'global/CONFIRM';
const CONFIRM_CLOSE = 'global/CONFIRM_CLOSE';

// Craete Immutable object
const actionTypes = Immutable({
  NOTIF,
  NOTIF_CLOSE,
  LOADING,
  NEW_CHAT,
  LOADING_TABLE,
  CONFIRM_FORM,
  DIALOG,
  NOTIFICATIONS,
  RESPONSE,
  TABLE_FILTER,
  CONFIRM,
  CONFIRM_CLOSE
});

export default actionTypes;

export const notif = (data) => {
  return {
    type: actionTypes.NOTIF,
    data
  };
};

export const notifClose = () => {
  return {
    type: actionTypes.NOTIF_CLOSE
  };
};

export const loading = (param) => {
  return {
    type: actionTypes.LOADING,
    param
  };
};

export const newChat = (data) => {
  return {
    type: actionTypes.NEW_CHAT,
    data
  };
};

export const loadingTable = (param) => {
  return {
    type: actionTypes.LOADING_TABLE,
    param
  };
};

export const confirmForm = (param) => {
  return {
    type: actionTypes.CONFIRM_FORM,
    param
  };
};

export function dialogGlobal(param) {
  return {
    type: actionTypes.DIALOG,
    param
  };
}

export function notifications(param) {
  return {
    type: actionTypes.NOTIFICATIONS,
    param
  };
}

export const response = (param) => {
  return {
    type: actionTypes.RESPONSE,
    param
  };
};

export function tableFilter(param) {
  return {
    type: actionTypes.TABLE_FILTER,
    param
  };
}

export function confirm(param) {
  return {
    type: actionTypes.CONFIRM,
    param
  };
}

export function confirmClose() {
  return {
    type: actionTypes.CONFIRM_CLOSE
  };
}
