import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchSubChannel, fetchSubChannels, createSubChannel, removeSubChannel } from './actions/sub_channel_actions';

import { changeChannel } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
  }
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={ store } />, root);

  window.store = store;
});
