import React from 'react';
import { withRouter } from 'react-router';

class SubChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSubChannels(this.props.channelId);
  }

  handleClick(subChannel) {
    return e => {
      this.props.changeSubChannel()(subChannel);
      this.props.router.push(`/channels/${subChannel.channel_id}/${subChannel.id}`);
    };
  }

  render() {
    const { subChannels, currentChannel } = this.props;

    let channelName = "";
    if (currentChannel) {
      channelName = currentChannel.name;
    }

    return (
      <main className="sub-channel-list" >
        <h1 className="channel-name">{ channelName }</h1>
        <div className="text-channels">TEXT CHANNELS</div>
        <ul>
          {subChannels.map(subChannel => (
            <li
              key={ subChannel.id }
              onClick={ this.handleClick.bind(this)(subChannel) }
              className="sub-channel-item"
            > { subChannel.name } </li>
          ))}
        </ul>
        <footer className="sub-channel-footer" ></footer>
      </main>
    );
  }
}

export default withRouter(SubChannelList);
