import { connect } from 'react-redux';
import DirectMessageList from './direct_message_list';
import { fetchSubChannels, createSubChannel, removeSubChannel, fetchSubChannel, clearSubChannels } from '../../actions/sub_channel_actions';
import { fetchMessages, clearMessages } from '../../actions/message_actions';
import { logout, refreshUser, changeSubChannel } from '../../actions/session_actions';
import { updateUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  subChannels: Object.keys(state.subChannels).map(id => state.subChannels[id]),
  currentChannel: state.session.channel,
  currentUser: state.session.currentUser,
  users: Object.keys(state.users).slice(1).map(id => state.users[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: subChannelId => dispatch(fetchMessages(subChannelId)),
  changeSubChannel: subChannel => dispatch(changeSubChannel(subChannel)),
  fetchSubChannels: (channelId) => dispatch(fetchSubChannels(channelId)),
  createSubChannel: subChannel => dispatch(createSubChannel(subChannel)),
  removeSubChannel: id => dispatch(removeSubChannel()),
  fetchSubChannel: subChannelId => dispatch(fetchSubChannel(subChannelId)),
  clearSubChannels: () => dispatch(clearSubChannels()),
  logout: () => dispatch(logout()),
  refreshUser: (id) => dispatch(refreshUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  clearMessages: () => dispatch(clearMessages())
});

const DirectMessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageList);

export default DirectMessageListContainer;
