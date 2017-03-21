import React from 'react';
import ChannelListContainer from '../channel/channel_list_container';
import SubChannelListContainer from '../sub_channel/sub_channel_list_container';
import MessageContainer from '../message/message_container';

class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannels();
  }

  render(){
    return (
      <main className="channel" >
        <ChannelListContainer directMessage={ true }/>
        <SubChannelListContainer directMessage={ true }/>
        <MessageContainer subChannelId={ this.props.subChannelId }
          directMessage={ true }/>
      </main>
    );
  }
}

export default DirectMessage;
