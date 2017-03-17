import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, CREATE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const MessageReducer = (state = {}, action) => {
  Object.freeze(state);
  let message;
  let newState;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      message = action.message;
      newState = merge({}, state, {[message.id]: message});
      return newState;
    case RECEIVE_MESSAGES:
      return action.messages;
    case CREATE_MESSAGE:
      message = action.message;
      newState = merge({}, state, {[message.id]: message});
      return newState;
    default:
      return state;
  }
};

export default MessageReducer;
