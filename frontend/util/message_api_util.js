export const fetchMessages = () => (
  $.ajax({
    url: 'api/messages'
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
