import React from 'react';

const MessageItem = ({ message }) => {
  return (
    <ul className="message-item" key={message.id}>
      <div className="message-picture">{message.username[0]}</div>
      <li classname="message-username"
        key={`${message.id}-username`}>{message.username} </li>
      <li className="message-text"
        key={`${message.id}-text`}>{message.text}</li>
    </ul>
  );
};

export default MessageItem;
