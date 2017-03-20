export const fetchSubChannels = (channelId) => (
  $.ajax({
    url: 'api/sub_channels',
    data: {channel_id: channelId}
  })
);

export const fetchSubChannel = id => (
  $.ajax({
    url: `api/sub_channels/${id}`
  })
);

export const createSubChannel = subChannel => (
  $.ajax({
    url: 'api/sub_channels',
    data: subChannel,
    type: 'POST'
  })
);

export const removeSubChannel = id => (
  $.ajax({
    url: `api/sub_channels/${id}`,
    type: 'DELETE'
  })
);
