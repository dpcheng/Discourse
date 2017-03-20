export const fetchSubChannels = () => (
  $.ajax({
    url: 'api/sub_channels'
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
