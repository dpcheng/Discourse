import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { signup, login, logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<h1>starting Discourse</h1>, root);

  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
});
