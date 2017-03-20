import React from 'react';
import MessageList from '../message/message_list';
import MessageForm from '../message/message_form';
import ChannelListContainer from './channel_list_container';
import SubChannelListContainer from '../sub_channel/sub_channel_list_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannels();
  }



  render() {
    let { messages, currentUser, createMessage, addMessage, fetchMessages, channelId, channel } = this.props;

    let name = "";
    if (channel) {
      name = channel.name;
    }


    return (
      <main className="channel">
        <ChannelListContainer />
        <main className="sub-channel-list" >
          <h1 className="channel-name">placeholder</h1>
          <div className="text-channels">TEXT CHANNELS</div>
          <SubChannelListContainer channelId={ channelId }/>
          <footer className="sub-channel-footer" ></footer>
        </main>
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
