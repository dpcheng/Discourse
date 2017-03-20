import React from 'react';
import { withRouter } from 'react-router';

class SubChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSubChannels(this.props.channelId);
  }

  handleClick(id) {
    return e => {
      this.props.router.push(`/channels/${this.props.channelId}/${id}`);
    };
  }

  render() {
    const { subChannels } = this.props;

    return (
      <ul>
        {subChannels.map(channel => (
          <li
            key={ channel.id }
            onClick={ this.handleClick.bind(this)(channel.id) }
            className="sub-channel-item"
          > { channel.name } </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(SubChannelList);
