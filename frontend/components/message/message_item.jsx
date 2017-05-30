import React from 'react';

const MessageItem = ({ message }) => {
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
        <img className="message-image" src="" />
        <li className="message-text"
          key={`${message.id}-text`}>{message.text}</li>
      </div>
    </ul>
  );
};

export default MessageItem;
