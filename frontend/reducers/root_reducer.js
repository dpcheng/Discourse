import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';
import ChannelReducer from './channel_reducer';
import SubChannelReducer from './sub_channel_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  messages: MessageReducer,
  channels: ChannelReducer,
  subChannels: SubChannelReducer,
  users: UserReducer
});

export default RootReducer;
