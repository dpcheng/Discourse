import React from 'react';
import MessageList from '../message/message_list';
import MessageForm from '../message/message_form';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { messages, currentUser, createMessage, addMessage, fetchMessages, subChannelId, subChannels, directMessage, users } = this.props;

    return (
      <div className="message">
        <MessageList
          messages={ messages }
          fetchMessages={ fetchMessages }
          addMessage={ addMessage }
          subChannelId={ subChannelId }
          directMessage = { directMessage }
        />
        <MessageForm
          currentUser={ currentUser }
          createMessage={ createMessage }
          subChannelId={ subChannelId }
          subChannels={ subChannels }
          users={ users }
        />
      </div>
    );
  }
}

export default Message;
