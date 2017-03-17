import React from 'react';
import Modal from 'react-modal';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel } = this.props;

    return (
      <li className="channel-item-avatar"
        key={ channel.id } >{ channel.name[0] }
          <div className="channel-tag" >{ channel.name }</div>
      </li>
    );
  }
}

export default ChannelListItem;
