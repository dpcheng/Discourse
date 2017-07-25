import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const createNewMessage = message => ({
  type: CREATE_MESSAGE,
  message
});

export const fetchMessage = id => dispatch => (
  MessageApiUtil.fetchMessage(id)
    .then(message => dispatch(receiveMessage(message)))
);

export const fetchMessages = (subChannelId) => dispatch => {
  return (
    MessageApiUtil.fetchMessages(subChannelId)
    .then(messages => dispatch(receiveMessages(messages)))
  );
};

export const createMessage = newMessage => dispatch => (
  MessageApiUtil.createMessage(newMessage)
);

export const clearMessages = () => dispatch => (
  dispatch(receiveMessages({}))
);
