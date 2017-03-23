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

    let subChannelName = "";
    let disabled = "disabled";
    if (currentUser.direct_messages.includes(parseInt(subChannelId))) {
      let users = [];
      this.props.users.forEach(user => {
        if (user.direct_messages.includes(parseInt(subChannelId))) {
          users.push(user.username);
        }
      });

      const list = users.join(", ");
      subChannelName = `Private Chat with ${list}`;
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
