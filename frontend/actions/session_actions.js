import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const CHANGE_SUBCHANNEL = 'CHANGE_SUBCHANNEL';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const receiveChannel = channel => ({
  type: CHANGE_CHANNEL,
  channel
});

const receiveSubChannel = subChannel => ({
  type: CHANGE_SUBCHANNEL,
  subChannel
});

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const demoLogin = () => dispatch => (
  SessionApiUtil.login({
    user: {
      username: "demo-user",
      password: "demo-password"
    }
  }).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(currentUser => dispatch(receiveCurrentUser(null)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const changeChannel = channel => dispatch => (
  channel => dispatch(receiveChannel(channel))
);

export const changeSubChannel = subChannel => dispatch => (
  subChannel => dispatch(receiveSubChannel(subChannel))
);

export const clearState = user => dispatch => (
  user => dispatch(receiveCurrentUser(user))
);
