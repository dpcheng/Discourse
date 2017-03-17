import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      user_id: this.props.currentUser.id,
      sub_channel_id: 1
    };
  }

  handleChange(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault;
    let message = this.state;
    this.props.createMessage({ message });
    this.setState({ text: "" });
  }

  render() {
    return (
      <form className="message-form" onSubmit={ this.handleSubmit.bind(this) } >
        <input className="message-field" type="text" onChange={ this.handleChange.bind(this) } placeholder="Message"
          value={ this.state.text } />
      </form>
    );
  }
}

export default MessageForm;
