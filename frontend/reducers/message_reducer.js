import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, CREATE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const MessageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      let message = action.message;
      return merge({}, state, {[message.id]: message});
    case RECEIVE_MESSAGES:
      return action.messages;
    case CREATE_MESSAGE:
      let message = action.message;
      return merge({}, state, {[message.id]: message});
    default:
      return state;
  }
};

export default MessageReducer;
