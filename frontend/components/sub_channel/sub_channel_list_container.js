import { connect } from 'react-redux';
import SubChannelList from './sub_channel_list';
import { fetchSubChannels, createSubChannel, removeSubChannel, fetchSubChannel, clearSubChannels } from '../../actions/sub_channel_actions';
import { changeSubChannel } from '../../actions/session_actions';
import { fetchMessages } from '../../actions/message_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  subChannels: Object.keys(state.subChannels).map(id => state.subChannels[id]),
  currentChannel: state.session.channel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMessages: subChannelId => dispatch(fetchMessages(subChannelId)),
  changeSubChannel: subChannel => dispatch(changeSubChannel(subChannel)),
  fetchSubChannels: (channelId) => dispatch(fetchSubChannels(channelId)),
  createSubChannel: subChannel => dispatch(createSubChannel(subChannel)),
  removeSubChannel: id => dispatch(removeSubChannel()),
  fetchSubChannel: subChannelId => dispatch(fetchSubChannel(subChannelId)),
  clearSubChannels: () => dispatch(clearSubChannels()),
  logout: () => dispatch(logout())
});

const SubChannelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubChannelList);

export default SubChannelListContainer;
