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
    const { subChannelId, subChannels } = this.props;

    let subChannelName = "";
    let disabled = "disabled";
    if (subChannels[subChannelId]) {
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
