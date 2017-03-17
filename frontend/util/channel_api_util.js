export const fetchChannels = () => (
  $.ajax({
    url: 'api/channels'
  })
);

export const fetchChannel = id => (
  $.ajax({
    url: `api/channels/${id}`
  })
);

export const createChannel = channel => (
  $.ajax({
    url: 'api/channels',
    data: channel,
    type: 'POST'
  })
);

export const removeChannel = id => (
  $.ajax({
    url: `api/channels/${id}`,
    type: 'DELETE'
  })
);
