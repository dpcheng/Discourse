import React from 'react';

const ChannelListItem = ({ channel }) => {
  return (
    <li key={ channel.id } >{ channel.name }</li>
  );
};

export default ChannelListItem;
