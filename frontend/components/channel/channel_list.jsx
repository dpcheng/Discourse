import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fetchSubChannels, changeChannel, createChannel } = this.props;

    return (
      <ul className="channel-list">
        {
          this.props.channels.map(channel =>
            <ChannelListItem key={ channel.id } channel={ channel }
              fetchSubChannels={this.props.fetchSubChannels}
              changeChannel={this.props.changeChannel}
            />
          )
        }
        <div className="new-channel" >+</div>
      </ul>
    );
  }
}

export default ChannelList;
