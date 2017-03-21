import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import ChannelList from './channel_list';
import { changeChannel } from '../../actions/session_actions';
import { fetchSubChannels, clearSubChannels, fetchSubChannel } from '../../actions/sub_channel_actions';
import { clearState } from '../../actions/session_actions';

const mapStateToProps = state => ({
  channels: Object.keys(state.channels).map(id => state.channels[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  fetchSubChannels: channelId => dispatch(fetchSubChannels(channelId)),
  fetchSubChannel: subChannelId => dispatch(fetchSubChannel(subChannelId)),
  changeChannel: channel => dispatch(changeChannel(channel)),
  clearState: user => dispatch(clearState(user)),
  clearSubChannels: () => dispatch(clearSubChannels())
});

const ChannelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);

export default ChannelListContainer;
