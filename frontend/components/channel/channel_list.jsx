import React from 'react';
import ChannelListItem from './channel_list_item';
import Modal from 'react-modal';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      name: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { fetchSubChannels, changeChannel, createChannel } = this.props;
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };


    return (
      <ul className="channel-list">
        {
          this.props.channels.map(channel =>
            <ChannelListItem key={ channel.id } channel={ channel }
              fetchSubChannels={ this.props.fetchSubChannels }
              changeChannel={ this.props.changeChannel }
            />
          )
        }
        <div className="new-channel" onClick={ this.openModal }>+
          <Modal
            isOpen={ this.state.modalIsOpen }
            onRequestClose={ this.closeModal }
            style={ customStyles }
            contentLabel="New Channel"
          >
            <h1 className="new-channel-header" >CREATE YOUR CHANNEL</h1>
            <form className="new-channel-form" >
              <label className="new-channel-label" >
                <input type="text" className="new-channel-field"
                  value={ this.state.name } />
              </label>
            </form>
            <footer className="new-channel-footer">
              <div className="new-channel-back" >Back</div>
              <div className="new-channel-create" >Create</div>
            </footer>
          </Modal>
        </div>
      </ul>
    );
  }
}

export default ChannelList;
