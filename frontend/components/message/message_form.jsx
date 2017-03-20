import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      user_id: this.props.currentUser.id,
      sub_channel_id: 7
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault;
    let message = this.state;
    this.setState({ text: "" });
    this.props.createMessage({ message });
  }

  render() {
    return (
      <form className="message-form" onSubmit={ this.handleSubmit } >
        <input className="message-field" type="text" onChange={ this.handleChange } placeholder="Message"
          value={ this.state.text } />
      </form>
    );
  }
}

export default MessageForm;
