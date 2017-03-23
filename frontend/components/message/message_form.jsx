import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      text: this.state.text,
      user_id: this.props.currentUser.id,
      sub_channel_id: this.props.subChannelId
    };
    this.setState({ text: "" });
    this.props.createMessage({ message });
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

      subChannelName = `${chatroomName} with ${list}`;
      if (users.length === 1) {
        subChannelName = `Add a user to ${subChannels[subId].name}! Click the +`;
      }
      disabled = false;
    } else if (subChannels[subChannelId]) {
      subChannelName = `Message ${subChannels[subChannelId].name}`;
      disabled = false;
    }

    return (
      <form className="message-form" onSubmit={ this.handleSubmit } >
        <input className="message-field" type="text"
          onChange={ this.handleChange }
          placeholder={ subChannelName }
          value={ this.state.text } disabled={disabled}  />
      </form>
    );
  }
}

export default MessageForm;
