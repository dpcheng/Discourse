import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const deleteChannel = channel => ({
  type: REMOVE_CHANNEL,
  channel
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = id => dispatch => (
  ChannelAPIUtil.fetchChannel(id)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const removeChannel = id => dispatch => (
  ChannelAPIUtil.removeChannel(id)
    .then(channel => dispatch(deleteChannel(channel)))
);
