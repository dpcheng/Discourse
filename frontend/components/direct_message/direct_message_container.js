import { connect } from 'react-redux';
import DirectMessage from './direct_message';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    subChannelId: ownProps.params.sub_channel_id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchUsers: () => dispatch(fetchUsers())
});


const DirectMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessage);

export default DirectMessageContainer;
