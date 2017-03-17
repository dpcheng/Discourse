import React from 'react';
import MessageItem from './message_item';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMessages();

    let { addMessage } = this.props;

    if (typeof App !== 'undefined') {
      App.messages = App.cable.subscriptions.create("MessagesChannel", {
        connected: function() {},
        disconnected: function() {},
        received: function(message) {
          // when make different sub_channels, check the sub_channel_id before adding message
          return addMessage(message);
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
      return (
        <ul className="message-list" id="messageList">
          {messages.map(message => <MessageItem key={message.id}
            message={ message } />)}
        </ul>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default MessageList;
