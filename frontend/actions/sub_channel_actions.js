import * as SubChannelAPIUtil from '../util/sub_channel_api_util';

export const RECEIVE_SUBCHANNELS = "RECEIVE_SUBCHANNELS";
export const RECEIVE_SUBCHANNEL = "RECEIVE_SUBCHANNEL";
export const REMOVE_SUBCHANNEL = "REMOVE_SUBCHANNEL";

const receiveSubChannels = subChannels => ({
  type: RECEIVE_SUBCHANNELS,
  subChannels
});

const receiveSubChannel = subChannel => ({
  type: RECEIVE_SUBCHANNEL,
  subChannel
});

const deleteSubChannel = subChannel => ({
  type: REMOVE_SUBCHANNEL,
  subChannel
});

export const fetchSubChannels = () => dispatch => (
  SubChannelAPIUtil.fetchSubChannels()
    .then(subChannels => dispatch(receiveSubChannels(subChannels)))
);

export const fetchSubChannel = id => dispatch => (
  SubChannelAPIUtil.fetchSubChannel(id)
    .then(subChannel => dispatch(receiveSubChannel(subChannel)))
);

export const createSubChannel = subChannel => dispatch => (
  SubChannelAPIUtil.createSubChannel(subChannel)
    .then(subChannel => dispatch(receiveSubChannel(subChannel)))
);

export const removeSubChannel = id => dispatch => (
  SubChannelAPIUtil.removeSubChannel(id)
    .then(subChannel => dispatch(deleteSubChannel(subChannel)))
);
