import { connect } from 'react-redux';
import { fetchChannels, createChannel } from '../../actions/channel_actions';
import ChannelList from './channel_list';

const mapStateToProps = state => ({
  channels: Object.keys(state.channels).map(id => state.channels[id])
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  createChannel: channel => dispatch(createChannel(channel))
});

const ChannelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);

export default ChannelListContainer;
