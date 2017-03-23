import React from 'react';
import ChannelListItem from './channel_list_item';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      name: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToDirectMessage = this.redirectToDirectMessage.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({ name: "" });
    this.setState({modalIsOpen: false});
  }

  handleChange(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = { name: this.state.name };
    this.props.createChannel({ channel });
    this.setState({ name: "" });
    this.closeModal();
  }

  redirectToDirectMessage() {
    this.props.clearSubChannels()();
    this.props.clearMessages()();
    this.props.currentUser.direct_messages.forEach(directMessageId => this.props.fetchSubChannel(directMessageId));
    this.props.router.push("/channels/@me");
  }

  render() {
    const { fetchSubChannels, changeChannel, createChannel } = this.props;
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
      <ul className="channel-list">
        <div className="direct-message-button" >
          <li className="direct-message-avatar"
            onClick={ this.redirectToDirectMessage }>DM
            <div className="direct-message-tag" >Direct Messages</div>
          </li>
        </div>
        <div className="channel-list-scroll">
          {
            this.props.channels.map(channel =>
              <ChannelListItem key={ channel.id } channel={ channel }
                fetchSubChannels={ this.props.fetchSubChannels }
                changeChannel={ this.props.changeChannel }
                clearMessages={ this.props.clearMessages }
                />
            )
          }
        </div>
        <div className="new-channel" onClick={ this.openModal }>+
          <Modal
            isOpen={ this.state.modalIsOpen }
            onRequestClose={ this.closeModal }
            style={ customStyles }
            contentLabel="New Channel"
          >
            <main className="new-channel-modal">
              <h1 className="new-channel-header" >START A NEW TOPIC</h1>
              <form className="new-channel-form"
                onSubmit={ this.handleSubmit } >
                <div className="new-channel-input">
                  <label className="new-channel-label" > TOPIC NAME <br />
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
        </div>
      </ul>
    );
  }
}

export default withRouter(ChannelList);
