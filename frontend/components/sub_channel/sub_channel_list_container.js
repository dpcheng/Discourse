import { connect } from 'react-redux';
import SubChannelList from './sub_channel_list';
import { fetchSubChannels, createSubChannel, removeSubChannel } from '../../actions/sub_channel_actions';
import { changeSubChannel } from '../../actions/session_actions';

const mapStateToProps = state => ({
  subChannels: Object.keys(state.subChannels).map(id => state.subChannels[id]),
  currentChannel: state.session.channel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeSubChannel: subChannel => dispatch(changeSubChannel(subChannel)),
  fetchSubChannels: () => dispatch(fetchSubChannels(ownProps.channelId)),
  createSubChannel: subChannel => dispatch(createSubChannel(subChannel)),
  removeSubChannel: id => dispatch(removeSubChannel())
});

const SubChannelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubChannelList);

export default SubChannelListContainer;
