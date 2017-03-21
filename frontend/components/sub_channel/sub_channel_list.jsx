import React from 'react';
import { withRouter } from 'react-router';

class SubChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  componentWillMount() {
    this.props.fetchSubChannels(this.props.channelId);
  }

  handleClick(subChannel) {
    return e => {
      this.props.changeSubChannel()(subChannel);
      this.props.router.push(`/channels/${subChannel.channel_id}/${subChannel.id}`);
      this.props.fetchMessages(subChannel.id);
    };
  }

  signout() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    const { subChannels, currentChannel, currentUser, logout } = this.props;

    let channelName = "";
    if (currentChannel) {
      channelName = currentChannel.name;
    }

    let username = currentUser.username;
    if (username.length > 9) {
      username = username.slice(0,10) + "..."
    }

    let avatarColor;
    switch (currentUser.id % 10) {
      case 1:
        avatarColor = "first";
        break;
      case 2:
        avatarColor = "second";
        break;
      case 3:
        avatarColor = "third";
        break;
      case 4:
        avatarColor = "fourth";
        break;
      case 5:
        avatarColor = "fifth";
        break;
      case 6:
        avatarColor = "sixth";
        break;
      case 7:
        avatarColor = "seventh";
        break;
      case 8:
        avatarColor = "eigth";
        break;
      case 9:
        avatarColor = "ninth";
        break;
      default:
        avatarColor = "tenth";
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
        <footer className="sub-channel-footer" >
          <div>
            <div className={`message-avatar ${avatarColor} logout-avatar`}>
              { currentUser.username[0] }
          </div>
          </div>
          <div className="sub-channel-username">
            { username }
          </div>
          <div className="logout-button" onClick={ this.signout } >Logout</div>
        </footer>
      </main>
    );
  }
}

export default withRouter(SubChannelList);
