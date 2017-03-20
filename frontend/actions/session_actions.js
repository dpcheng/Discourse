import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
// export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
// export const RECEIVE_SUBCHANNEL = 'RECEIVE_SUBCHANNEL';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// const receiveChannel = channel => ({
//   type: RECEIVE_CHANNEL,
//   channel
// });
//
// const receiveSubChannel = subChannel => ({
//   type: RECEIVE_SUBCHANNEL,
//   subChannel
// });

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const demoLogin = () => dispatch => (
  SessionApiUtil.login({
    user: {
      username: "demo-username",
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

// export const changeChannel = channel => dispatch => (
//   channel => dispatch(receiveChannel(channel))
// );
//
// export const changeSubChannel = subChannel => dispatch => (
//   subChannel => dispatch(receiveSubChannel(subChannel))
// );
