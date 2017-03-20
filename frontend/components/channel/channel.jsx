import React from 'react';
import ChannelListContainer from './channel_list_container';
import SubChannelListContainer from '../sub_channel/sub_channel_list_container';
import MessageContainer from '../message/message_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannels();
  }

  render() {
    let { channelId, subChannelId } = this.props;

    return (
      <main className="channel">
        <ChannelListContainer />
        <SubChannelListContainer channelId={ channelId }/>
        <MessageContainer subChannelId={ subChannelId }/>
      </main>
    );
  }
}

export default Channel;
