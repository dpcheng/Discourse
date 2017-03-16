import { connect } from 'react-redux';
import Channel from './channel';
import { fetchMessages, createMessage } from '../../actions/message_actions';

const mapStateToProps = state => ({
  messages: Object.keys(state.messages).map(id => state.messages[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
  createMessage: message => dispatch(createMessage(message))
});

const ChannelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);

export default ChannelContainer;
