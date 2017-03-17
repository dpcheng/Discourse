import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <ul className="channel-list">
        {this.props.channels.map(channel =>
          <ChannelListItem channel={ channel } /> )}
      </ul>
    );
  }
}

export default ChannelList;
