import React from 'react';
import MessageList from '../message/message_list';
import MessageForm from '../message/message_form';
import ChannelListContainer from './channel_list_container';
import SubChannelListContainer from '../sub_channel/sub_channel_list_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { messages, currentUser, createMessage, addMessage, fetchMessages } = this.props;

    return (
      <main className="channel">
        <ChannelListContainer />
        <SubChannelListContainer channelId={2} />
        <div className="message">
          <MessageList messages={ messages } fetchMessages={ fetchMessages }
            addMessage={ addMessage } />
          <MessageForm currentUser={ currentUser }
            createMessage={ createMessage } />
        </div>
      </main>
    );
  }
}

export default Channel;
