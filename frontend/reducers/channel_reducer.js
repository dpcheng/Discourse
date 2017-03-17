import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import merge from 'lodash/merge';

const ChannelReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      let channel = action.channel;
      return merge({}, state, { [channel.id]: channel });
    case REMOVE_CHANNEL:
      let newState = merge({}, state);
      delete newState[action.channel.id];
      return newState;
    default:
      return state;
  }
};

export default ChannelReducer;
