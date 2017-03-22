import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchUsers, fetchUser, updateUser } from './util/user_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
  }
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={ store } />, root);

  window.store = store;
  window.fetchUser = fetchUser;
  window.fetchUsers = fetchUsers;
  window.updateUser = updateUser;
});
