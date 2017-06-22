import React from 'react';
import MessageItem from './message_item';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.subChannelId) {
      this.props.fetchMessages(this.props.subChannelId);
    }

    let { addMessage } = this.props;
    let that = this;

    if (typeof App !== 'undefined') {
      App.messages = App.cable.subscriptions.create("MessagesChannel", {
        connected: function() {},
        disconnected: function() {},
        received: function(message) {
          if (that.props.subChannelId == message.sub_channel_id) {
            return addMessage(message);
          }
        }
      });
    }
  }

  componentDidUpdate() {

    let messageList = document.getElementById('messageList');
    messageList.scrollTop = messageList.scrollHeight;
  }

  render() {
    let { messages } = this.props;
    if (messages) {
      if (Object.keys(messages).length === 0) {
        return (
          <main className="message-list messages-none" id="messageList">
            <div className="messages-none-text">
              Choose a channel from the left sidebar to get started!
            </div>
            <img className="messages-none-gif" src="https://res.cloudinary.com/dh6zremqy/image/upload/v1498107162/navigation_oqe1cf.gif"></img>
          </main>
        );
      } else {
        return (
          <ul className="message-list" id="messageList">
            {messages.map(message => <MessageItem key={message.id}
              message={ message } />)}
          </ul>
        );
      }
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default MessageList;
