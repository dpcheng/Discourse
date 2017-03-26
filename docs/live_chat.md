## Live Chat

This project required implementing websockets using Action Cable.
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

On the frontend, inside of the MessageList's lifecycle method, `componentWillMount`, the user is subscribed to the websocket that is broadcasting messages:

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
