import React from 'react';
import Modal from 'react-modal';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", image_url: "", modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.clearImageUrl = this.clearImageUrl.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modal = this.modal.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  clearImageUrl() {
    this.setState({ modalIsOpen: false, image_url: "" });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleTextChange(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleImageChange(e) {
    this.setState({ image_url: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      text: this.state.text,
      image_url: this.state.image_url,
      user_id: this.props.currentUser.id,
      sub_channel_id: this.props.subChannelId
    };
    this.setState({ text: "", image_url: "" });
    this.props.createMessage({ message });
  }

  modal() {
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
      <Modal
      isOpen={ this.state.modalIsOpen }
      onRequestClose={ this.closeModal }
      style={ customStyles }
      contentLabel="Message Image Url"
      >
      <main className="new-channel-modal">
        <h1 className="new-channel-header" >Add image to next message!</h1>
        <form className="new-channel-form"
          onSubmit={ this.closeModal } >
          <div className="new-channel-input">
            <label className="new-channel-label" >IMAGE URL <br />
            <input type="text" className="new-channel-field"
              onChange={ this.handleImageChange } value={ this.state.image_url }
              />
          </label>
        </div>
      </form>
      <footer className="new-channel-footer">
        <div className="new-channel-back"
          onClick={ this.clearImageUrl }>Clear</div>
        <div className="new-channel-create"
          onClick={ this.closeModal }>Attach Image</div>
      </footer>
    </main>
      </Modal>
    );
  }

  render() {
    const { subChannelId, subChannels, currentUser } = this.props;
    let subId = parseInt(subChannelId);
    let subChannelName = "";
    let disabled = "disabled";
    if (currentUser.direct_messages.includes(subId)) {
      let users = [];
      this.props.users.forEach(user => {
        if (user.direct_messages.includes(subId)) {
          users.push(user.username);
        }
      });

      const list = users.join(", ");
      let chatroomName = "Private Chat";
      if (subChannels[subId]) {
        chatroomName = subChannels[subId].name;
      }

      subChannelName = `${ chatroomName } with ${ list }`;
      if (users.length === 1) {
        subChannelName = `Add a user to ${ chatroomName }! Click the +`;
      }
      disabled = false;
    } else if (subChannels[subChannelId]) {
      subChannelName = `Message ${ subChannels[subChannelId].name }`;
      disabled = false;
    }

    return (
      <form className="message-form" onSubmit={ this.handleSubmit } >
        {this.modal()}
        <img className="message-image-button" src="http://www.freeiconspng.com/uploads/no-image-icon-13.png" onClick={this.openModal}></img>
        <input className="message-field" type="text"
          onChange={ this.handleTextChange }
          placeholder={ subChannelName }
          value={ this.state.text } disabled={disabled}  />
      </form>
    );
  }
}

export default MessageForm;
