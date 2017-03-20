import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import ChannelList from './channel_list';
import { fetchSubChannels } from '../../actions/sub_channel_actions';

const mapStateToProps = state => ({
  channels: Object.keys(state.channels).map(id => state.channels[id])
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  fetchSubChannels: channelId => dispatch(fetchSubChannels(channelId))
});

const ChannelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);

export default ChannelListContainer;
