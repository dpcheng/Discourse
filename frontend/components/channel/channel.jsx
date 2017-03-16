import React from 'react';
import MessageList from '../message/message_list';
import MessageForm from '../message/message_form';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { messages, currentUser, createMessage, addMessage, fetchMessages } = this.props;

    return (
      <main>
        <MessageList messages={ messages } fetchMessages={ fetchMessages }
          addMessage={ addMessage } />
        <MessageForm currentUser={ currentUser }
          createMessage={ createMessage } />
      </main>
    );
  }
}

export default Channel;
