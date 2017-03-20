import { connect } from 'react-redux';
import Message from './message';
import { fetchMessages, createMessage, addMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.keys(state.messages).map(id => state.messages[id]),
    currentUser: state.session.currentUser,
    subChannel: state.session.subChannel
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMessages: (subChannelId) => dispatch(fetchMessages(subChannelId)),
  createMessage: message => dispatch(createMessage(message)),
  addMessage: message => dispatch(addMessage(message))
});

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

export default MessageContainer;
