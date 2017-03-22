import React from 'react';
import ChannelListContainer from '../channel/channel_list_container';
import DirectMessageListContainer from './direct_message_list_container';
import MessageContainer from '../message/message_container';


class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannels();
    this.props.fetchUsers();
  }

  render(){
    return (
      <main className="channel" >
        <ChannelListContainer directMessage={ true }/>
        <DirectMessageListContainer />
        <MessageContainer subChannelId={ this.props.subChannelId }
          directMessage={ true }/>
      </main>
    );
  }
}

export default DirectMessage;
