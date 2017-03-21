import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

class SubChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      name: "#"
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signout = this.signout.bind(this);
  }

  componentWillMount() {
    this.props.fetchSubChannels(this.props.channelId);
  }

  handleClick(subChannel) {
    return e => {
      e.preventDefault();
      this.props.changeSubChannel()(subChannel);
      this.props.router.push(`/channels/${subChannel.channel_id}/${subChannel.id}`);
      this.props.fetchMessages(subChannel.id);
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({ name: "#" });
    this.setState({modalIsOpen: false});
  }

  handleChange(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(channelId) {
    return e => {
      e.preventDefault();
      const sub_channel = {
        name: this.state.name,
        channel_id: channelId
      };
      this.props.createSubChannel({ sub_channel });
      this.setState({ name: "#" });
      this.closeModal();
    };
  }

  signout() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    const { subChannels, currentChannel, currentUser, logout } = this.props;

    let channelName = "Direct Messages";
    let channelId = 999999;
    if (currentChannel) {
      channelName = currentChannel.name;
      channelId = currentChannel.id;
    }

    let username = currentUser.username;
    if (username.length > 16) {
      username = username.slice(0,13) + "...";
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

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <main className="sub-channel-list" >
        <h1 className="channel-name">{ channelName }</h1>
        <div className="text-channels-line" onClick={ this.openModal } >
          <Modal
            isOpen={ this.state.modalIsOpen }
            onRequestClose={ this.closeModal }
            style={ customStyles }
            contentLabel="New Text Channel"
            >
            <main className="new-channel-modal">
              <h1 className="new-channel-header" >CREATE A TEXT CHANNEL</h1>
              <form className="new-channel-form"
                onSubmit={ this.handleSubmit(channelId) } >
                <div className="new-channel-input">
                  <label className="new-channel-label" > TEXT CHANNEL NAME <br />
                  <input type="text" className="new-channel-field"
                    onChange={ this.handleChange } value={ this.state.name }
                    />
                </label>
              </div>
            </form>
            <footer className="new-channel-footer">
              <div className="new-channel-back"
                onClick={ this.closeModal }>Back</div>
              <div className="new-channel-create"
                onClick={ this.handleSubmit(channelId) }>Create</div>
            </footer>
          </main>
        </Modal>
        <div className="text-channels" >TEXT CHANNELS</div>
          <div className="text-channels-button" >+</div>
        </div>
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
