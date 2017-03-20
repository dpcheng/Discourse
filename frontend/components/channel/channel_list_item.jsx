import React from 'react';
import Modal from 'react-modal';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeSubChannels = this.changeSubChannels.bind(this);
  }

  changeSubChannels(channelId) {
    return e => {
      this.props.fetchSubChannels(channelId);
    };
  }

  render() {
    const { channel } = this.props;

    return (
      <li className="channel-item-avatar"
        onClick={ this.changeSubChannels( channel.id ) }
        key={ channel.id } >{ channel.name[0] }
          <div className="channel-tag" >{ channel.name } </div>
      </li>
    );
  }
}

export default ChannelListItem;
