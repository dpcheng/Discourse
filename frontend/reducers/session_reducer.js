import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CHANGE_CHANNEL, CHANGE_SUBCHANNEL, REFRESH_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: [],
  channel: {},
  subChannel: {}
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let currentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      let newState = merge({}, _defaultState, { currentUser });
      return newState;
    case REFRESH_CURRENT_USER:
      currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CHANGE_CHANNEL:
      const channel = action.channel;
      return merge({}, state, { channel });
    case CHANGE_SUBCHANNEL:
      const subChannel = action.subChannel;
      return merge({}, state, { subChannel });
    default:
      return state;
  }
};

export default SessionReducer;
