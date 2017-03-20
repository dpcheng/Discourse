import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="channel-list">
        {this.props.channels.map(channel =>
          <ChannelListItem key={ channel.id } channel={ channel }
            fetchSubChannels={this.props.fetchSubChannels} /> )}
      </ul>
    );
  }
}

export default ChannelList;
