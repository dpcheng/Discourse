import React from 'react';

class SubChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSubChannels(this.props.channelId);
  }

  render() {
    const { subChannels } = this.props;

    return (
      <main className="sub-channel-list" >
        <ul>
          {subChannels.map(channel => <li key={ channel.id } >
            {channel.name}</li>)}
        </ul>
      </main>
    );
  }
}

export default SubChannelList;
