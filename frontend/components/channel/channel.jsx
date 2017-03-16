import React from 'react';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      user_id: this.props.currentUser.id,
      sub_channel_id: 1
    };
  }

  componentDidMount() {
    this.props.fetchMessages();
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
    let { messages } = this.props;

    if (messages) {
      return (
        <main>
          <ul>
            {messages.map(message => <li key={message.id}>{message.user_id}: {message.text}</li>)}
          </ul>
          <form onSubmit={ this.handleSubmit.bind(this) } >
            <input type="text" onChange={ this.handleChange.bind(this) }
              value={ this.state.text } />
          </form>
        </main>
      );
    } else {
      return (
        <div>hi</div>
      );
    }

  }
}

export default Channel;
