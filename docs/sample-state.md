# Sample State

```js
{
  session: {
    currentUser: {
      id: 1,
      username: "discourse-user",
    },

    errors: []
  },

  users: {
    1: {
      id: 1,
      username: "discourse-user"
    }
  },

  messages: {
    1: {
      id: 1,
      text: "posted text",
      user_id: 1,
      sub_channel_id: 1,
      direct_message_id: nil,
      created_at: "2017-03-13 9:34:24 UTC"
    }
  },

  direct_messages: {
    1: {
      id: 1,
      users: [2]
    }
  },

  channels: {
    1: {
      id: 1,
      name: "channel name",
      admin_id: 1
    }
  },

  sub_channels: {
    1: {
      id: 1,
      name: "sub channel name",
      topic: "channel topic",
      channel_id: 1
    }
  }
}
```
