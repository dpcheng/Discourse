import { connect } from 'react-redux';
import Channel from './channel';
import { fetchMessages, createMessage, addMessage } from '../../actions/message_actions';
import { fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.keys(state.messages).map(id => state.messages[id]),
    currentUser: state.session.currentUser,
    channelId: ownProps.location.pathname.split("/")[2],
    subChannelId: ownProps.location.pathname.split("/")[3]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchMessages: () => dispatch(fetchMessages()),
  createMessage: message => dispatch(createMessage(message)),
  addMessage: message => dispatch(addMessage(message))
});

const ChannelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);

export default ChannelContainer;
