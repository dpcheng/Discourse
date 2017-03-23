import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

class DirectMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      addModalIsOpen: false,
      name: "",
      username: ""
    };

    this.openModal = this.openModal.bind(this);
    this.openAddModal = this.openAddModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
    this.signout = this.signout.bind(this);
  }

  componentWillMount() {
    this.props.clearSubChannels()();
    this.props.currentUser.direct_messages.forEach( directMessageId =>
    this.props.fetchSubChannel( directMessageId ));
  }

  componentWillUnmount() {
    this.props.refreshUser(this.props.currentUser.id);
  }

  handleClick(subChannel) {
    return e => {
      e.preventDefault();
      this.props.changeSubChannel()(subChannel);
      if (subChannel.channel_id) {
        this.props.router.push(`/channels/${subChannel.channel_id}/${subChannel.id}`);
      } else {
        this.props.router.push(`/channels/@me/${subChannel.id}`);
      }
      this.props.fetchMessages(subChannel.id);
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  openAddModal() {
    this.setState({addModalIsOpen: true});
  }

  closeModal() {
    this.setState({ name: "", username: "" });
    this.setState({modalIsOpen: false});
    this.setState({addModalIsOpen: false});
  }

  handleChange(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const sub_channel = { name: this.state.name };
    this.props.createSubChannel({ sub_channel });
    this.setState({ name: "" });
    this.closeModal();
  }

  handleUsernameSubmit(e) {
    e.preventDefault();
    let user = {
      direct_messages: [parseInt(e.currentTarget.classList[1])]
    };
    this.props.users.forEach(item => {
      if (item.username === this.state.username) {
        user.id = item.id;
      }
    });
    this.props.updateUser(user);
    this.setState({ username: "" });
    this.closeModal();
  }

  signout() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    const { subChannels, currentChannel, currentUser, logout } = this.props;

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
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : 'rgba(228, 228, 228, 1.0)'
      }
    };

    return (
      <main className="sub-channel-list" >
        <h1 className="channel-name">Direct Messages</h1>
        <div className="text-channels-line" onClick={ this.openModal } >
          <Modal
            isOpen={ this.state.modalIsOpen }
            onRequestClose={ this.closeModal }
            style={ customStyles }
            contentLabel="New Text Channel"
            >
            <main className="new-channel-modal">
              <h1 className="new-channel-header" >CREATE GROUP CHAT</h1>
              <form className="new-channel-form"
                onSubmit={ this.handleSubmit } >
                <div className="new-channel-input">
                  <label className="new-channel-label" >GROUP NAME <br />
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
                onClick={ this.handleSubmit }>Create</div>
            </footer>
          </main>
        </Modal>
        <div className="text-channels" >Start Private Conversation</div>
          <div className="text-channels-button" >+</div>
        </div>
        <ul className="direct-message-sidebar">
          {subChannels.map(subChannel => (
            <li
              key={ subChannel.id }
              className="direct-message-item"
            >
            <div className="direct-message-name"
              onClick={ this.handleClick.bind(this)(subChannel) }
              >{ subChannel.name }
            </div>
            <div className="direct-message-add"
              onClick={ this.openAddModal }
              >+
              <Modal
                isOpen={ this.state.addModalIsOpen }
                onRequestClose={ this.closeModal }
                style={ customStyles }
                contentLabel="Add User to DM"
                >
                <main className="new-channel-modal">
                  <h1 className="new-channel-header" >ADD USER TO CHAT</h1>
                  <form className={`new-channel-form ${subChannel.id}`}
                    onSubmit={ this.handleUsernameSubmit }
                    value={ subChannel.id }>
                    <div className="new-channel-input">
                      <label className="new-channel-label" >USERNAME <br />
                      <input type="text" className="new-channel-field"
                        onChange={ this.handleUsernameChange }
                        />
                    </label>
                  </div>
                </form>
                <footer className="new-channel-footer">
                  <div className="new-channel-back"
                    onClick={ this.closeModal }>Back</div>
                  <div className={`new-channel-create ${subChannel.id}`}
                    onClick={ this.handleUsernameSubmit }
                    >Add
                  </div>
                </footer>
              </main>
              </Modal>
            </div>
            </li>
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

export default withRouter(DirectMessageList);
