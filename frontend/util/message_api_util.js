export const fetchMessages = (subChannelId) => (
  $.ajax({
    url: 'api/messages',
    data: {sub_channel_id: subChannelId}
  })
);

export const fetchMessage = id => (
  $.ajax({
    url: `api/messages/${id}`
  })
);

export const createMessage = message => (
  $.ajax({
    url: 'api/messages',
    type: 'POST',
    data: message
  })
);
