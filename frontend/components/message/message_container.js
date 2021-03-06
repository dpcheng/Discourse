import { connect } from 'react-redux';
import Message from './message';
import { fetchMessages, createMessage, receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.keys(state.messages).map(id => state.messages[id]),
    currentUser: state.session.currentUser,
    subChannels: state.subChannels,
    users: Object.keys(state.users).map(id => state.users[id])
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMessages: (subChannelId) => dispatch(fetchMessages(subChannelId)),
  createMessage: message => dispatch(createMessage(message)),
  addMessage: message => dispatch(receiveMessage(message))
});

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

export default MessageContainer;
