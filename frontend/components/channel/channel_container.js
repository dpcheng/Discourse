import { connect } from 'react-redux';
import Channel from './channel';
import { fetchMessages, createMessage, addMessage } from '../../actions/message_actions';

const mapStateToProps = state => ({
  messages: Object.keys(state.messages).map(id => state.messages[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
  createMessage: message => dispatch(createMessage(message)),
  addMessage: message => dispatch(addMessage(message))
});

const ChannelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);

export default ChannelContainer;
