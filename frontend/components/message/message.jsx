import React from 'react';
import MessageList from '../message/message_list';
import MessageForm from '../message/message_form';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { messages, currentUser, createMessage, addMessage, fetchMessages, subChannelId} = this.props;
    
    return (
      <div className="message">
        <MessageList
          messages={ messages }
          fetchMessages={ fetchMessages }
          addMessage={ addMessage }
          subChannelId={ subChannelId }
        />
        <MessageForm
          currentUser={ currentUser }
          createMessage={ createMessage }
          subChannelId={ subChannelId }
        />
      </div>
    );
  }
}

export default Message;
