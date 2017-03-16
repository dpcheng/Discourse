import React from 'react';

const MessageItem = ({ message }) => {
  return (
    <ul className="message-item" key={message.id}>
      <div className="message-avatar" key={`${message.id}-avatar`}
        >{message.username[0]}</div>
      <div className="message-item-contents" >
        <li className="message-username"
          key={`${message.id}-username`}>{message.username} </li>
        <li className="message-text"
          key={`${message.id}-text`}>{message.text}</li>
      </div>
    </ul>
  );
};

export default MessageItem;
