import { RECEIVE_SUBCHANNELS, RECEIVE_SUBCHANNEL, REMOVE_SUBCHANNEL } from '../actions/sub_channel_actions';
import merge from 'lodash/merge';

const SubChannelReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SUBCHANNELS:
      return action.subChannels;
    case RECEIVE_SUBCHANNEL:
      let subChannel = action.subChannel;
      return merge({}, state, { [subChannel.id]: subChannel });
    case REMOVE_SUBCHANNEL:
      let newState = merge({}, state);
      delete newState[action.subChannel.id];
      return newState;
    default:
      return state;
  }
};

export default SubChannelReducer;
