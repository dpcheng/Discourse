import React from 'react';
import Modal from 'react-modal';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeSubChannels = this.changeSubChannels.bind(this);
  }

  changeSubChannels(channel) {
    return e => {
      this.props.changeChannel()(channel);
      this.props.fetchSubChannels(channel.id);
    };
  }

  render() {
    const { channel } = this.props;

    return (
      <li className="channel-item-avatar"
        onClick={ this.changeSubChannels( channel) }
        key={ channel.id } >{ channel.name[0] }
          <div className="channel-tag" >{ channel.name } </div>
      </li>
    );
  }
}

export default ChannelListItem;
