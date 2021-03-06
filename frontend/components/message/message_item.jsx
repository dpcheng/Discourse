import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.showImage = this.showImage.bind(this);
  }

  imageScroll() {
    let messageList = document.getElementById('messageList');
    messageList.scrollTop = messageList.scrollHeight;
  }

  showImage() {
    if (this.props.message.image_url) {
      return <img className="message-image" ref="message-image" onLoad={this.imageScroll} src={this.props.message.image_url} />;
    }
  }

  render() {
    let message = this.props.message;
    let avatarColor;

    switch (message.user_id % 10) {
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


    return (
      <ul className="message-item" key={message.id}>
        <div className="message-avatar-col" >
          <div className={`message-avatar ${avatarColor}`}
            key={`${message.id}-avatar`} >{message.username[0]}</div>
        </div>
        <div className="message-item-contents" >
          <li className={`message-username ${avatarColor}`}
            key={`${message.id}-username`}>{message.username}<div className="message-timestamp">{message.created_at}</div>
          </li>
          <li className="message-text"
            key={`${message.id}-text`}>{message.text}</li>
          {this.showImage()}
        </div>
      </ul>
    );
  }
}

export default MessageItem;
