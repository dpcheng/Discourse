import { connect } from 'react-redux';
import DirectMessage from './direct_message';
import { fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    subChannelId: ownProps.params.sub_channel_id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});


const DirectMessageContainer = connect(
  null,
  mapDispatchToProps
)(DirectMessage);

export default DirectMessageContainer;
