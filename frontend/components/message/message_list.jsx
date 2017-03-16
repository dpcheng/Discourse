import React from 'react';

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

  render() {
    let { messages } = this.props;

    if (messages) {
      return (
        <main>
          <ul>
            {messages.map(message => <li key={message.id}>{message.username}: {message.text}</li>)}
          </ul>
        </main>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default MessageList;
