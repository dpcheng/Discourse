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
        <h1 className="channel-name">{ this.props.channelName }</h1>
        <div className="text-channels">TEXT CHANNELS</div>
        <ul>
          {subChannels.map(channel => <li key={ channel.id }
            className="sub-channel-item" >
            { channel.name }</li>)}
        </ul>
        <footer className="sub-channel-footer" ></footer>
      </main>
    );
  }
}

export default SubChannelList;
