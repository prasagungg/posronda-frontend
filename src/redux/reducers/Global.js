import Immutable from 'seamless-immutable';
import actionTypes from '../actions/Global';

export const INIT_STATE = Immutable({
  loading: false,
  dataChat: null,
  loadingTable: false,
  confirmForm: false,
  notif: {
    open: false,
    variant: 'success',
    message: 'SUCCESS',
    title: 'SUCCESS',
    socket: false
  },
  dialog: false,
  notifications: null,
  response: false,
  confirm: {
    open: false,
    warning: false,
    message: 'You won’t be able to recover this in the future!',
    title: '',
    handler: () => {}
  }
});

const global = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return state.merge({ loading: action.param });
    case actionTypes.LOADING_TABLE:
      return state.merge({ loadingTable: action.param });
    case actionTypes.NOTIF:
      return state.merge({ loading: false, notif: action.data });
    case actionTypes.CONFIRM_FORM:
      return state.merge({ confirmForm: action.param });
    case actionTypes.DIALOG:
      return state.merge({ dialog: action.param });
    case actionTypes.NOTIFICATIONS:
      return state.merge({ notifications: action.param });
    case actionTypes.NOTIF_CLOSE:
      return state.merge({
        loading: false,
        notif: {
          open: false,
          variant: state.notif.variant,
          message: state.notif.message,
          title: state.notif.title,
          socket: state.notif.socket
        }
      });
    // if receive new chat from socketio
    case actionTypes.NEW_CHAT:
      return state.merge({ dataChat: action.data });
    case actionTypes.RESPONSE:
      return state.merge({ response: action.param });
    case actionTypes.TABLE_FILTER:
      return state.merge({ tableFilter: action.param });
    case actionTypes.CONFIRM:
      return state.merge({ confirm: action.param });
    case actionTypes.CONFIRM_CLOSE:
      return state.merge({
        confirm: {
          ...state.confirm,
          open: false
        }
      });
    default:
      return state;
  }
};

export default global;
