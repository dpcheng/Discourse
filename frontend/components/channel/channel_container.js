import { connect } from 'react-redux';
import Channel from './channel';
import { fetchMessages } from '../../actions/message_actions';
import { fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    channelId: ownProps.params.channel_id,
    subChannelId: ownProps.params.sub_channel_id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});

const ChannelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);

export default ChannelContainer;
