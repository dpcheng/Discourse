# Sample State

```javascript
{
  session: {
    currentUser: {
      id: 1,
      username: "discourse-user",
    },

    errors: [],

    subChannel: {
      id: 1,
      name: "sub channel name",
      channel_id: 1
    },

    channel: {
      id: 1,
      name: "channel name"
    }
  },

  users: {
    1: {
      id: 1,
      username: "discourse-user"
    },
    ...
  },

  messages: {
    1: {
      id: 1,
      text: "posted text",
      username: "discourse-user",
      user_id: 1,
      sub_channel_id: 1,
      created_at: "04:15PM on March 24, 2017"
    },
    ...
  },

  channels: {
    1: {
      id: 1,
      name: "channel name"
    },
    ...
  },

  sub_channels: {
    1: {
      id: 1,
      name: "sub channel name",
      channel_id: 1
    },
    ...
  }
}
```
