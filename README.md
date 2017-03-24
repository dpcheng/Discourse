# Discourse

[Discourse][discourse] is a web application inspired by Discord. This app allows users to live chat with other users. With the ability to start new discussion topics, users will always find plenty of channels to discuss a myriad of different interests.

This web application is hosted on Heroku, utilizes Ruby on rails on the backend, Action Cable integrating web sockets, PostgreSQL database, and React.js with the Redux Framework on the frontend.

![Discourse home page: discourse.chat][home page]

## Features

- Secure registration and login
- Engage in live chat
- Add or choose between discussion topics
- Create and join different channels
- Start new direct messages that are private only to those invited by a current participant

![Discourse direct messages page: discourse.chat][direct messages]

### Live Chat

This project required learning to implement web sockets using Action Cable. Tutorials from [Heroku][heroku tutorial] and [Startup Rocket][startup rocket tutorial] aided in setting up Action Cable on the backend. However, tweaks were necessary to accommodate the project's needs.

After a message is created, Action Cable broadcasts the message to every subscribed user. The broadcast is programmed into the MessagesController's `create` method:

```ruby
def create
  @message = Message.new(message_params)

  if @message.save
    ActionCable.server.broadcast 'messages',
      id: @message.id,
      text: @message.text,
      user_id: @message.user_id,
      username: @message.user.username,
      created_at: @message.created_at.strftime("%I:%M%p on %B %d, %Y"),
      sub_channel_id: @message.sub_channel_id
    head :ok
  else
    render json: ["Invalid Message"], status: 422
  end
end
```

On the frontend, inside of the MessageList's lifecycle method, `componentWillMount`, the user is subscribed to the web socket that is broadcasting messages:

```javascript
componentWillMount() {
  App.messages = App.cable.subscriptions.create("MessagesChannel", {
    received: message => {
      if (subChannelId === message.sub_channel_id) {
        return addMessage(message);
      }
    }
  });
}
```

When the MessagesChannel transmits a message, the subscription's `received` function is invoked. `received` checks if the currently viewed sub channel is the sub channel the message was posted to. If so, then the message is added to the store's state and is rendered to the user.


## Project Design

This application was completed by Dylan Cheng within two weeks. Design of the app started with a [proposal][proposal] to aid in organization during development.

## Future Features

In addition to the features listed above, there are several features I would like to add in the future.

### Voice/Video Chat
Users are able to privately message other users, but I would like users to be able to start a voice or video chat with each other. I will most likely be implementing [WebRTC][WebRTC] for this feature.

### Notifications
Currently, users will receive all messages created. This was intentional, as it opens up the possibility for users to be notified of new messages posted in a sub channel not currently viewed. However, a check will implemented to prevent users from being notified of private messages.

[discourse]: discourse.chat
[home page]: ./docs/images/home_page.png "Discourse home page"
[direct messages]: ./docs/images/direct_messages.png "Discourse direct messages page"
[proposal]: ./docs/proposal.md
[heroku tutorial]: https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable
[startup rocket tutorial]: https://www.startuprocket.com/articles/rails5-actioncable-redux-and-react-walking-through-an-example-chat-application
[WebRTC]: https://www.pubnub.com/blog/2014-10-21-building-a-webrtc-video-and-voice-chat-application/
