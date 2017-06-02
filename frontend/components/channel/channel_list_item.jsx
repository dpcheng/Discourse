import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeSubChannels = this.changeSubChannels.bind(this);
  }

  changeSubChannels(channel) {
    return e => {
      this.props.clearMessages()();
      this.props.changeChannel()(channel);
      this.props.router.push(`/channels/${channel.id}`);
      this.props.fetchSubChannels(channel.id);
    };
  }

  showName(channel) {
    if (!channel.image_url) {
      return channel.name[0];
    }
  }

  render() {
    const { channel } = this.props;

    return (
      <li className="channel-item-avatar"
        style={{backgroundImage: `url(${channel.image_url})`}}
        onClick={ this.changeSubChannels( channel ) }
        key={ channel.id } >{ this.showName(channel) }
          <div className="channel-tag" >{ channel.name } </div>
      </li>
    );
  }
}

export default withRouter(ChannelListItem);
