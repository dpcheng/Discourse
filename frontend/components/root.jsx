import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import WelcomePageContainer from './welcome/welcome_page_container';
import SessionFormContainer from './session/session_form_container';
import ChannelContainer from './channel/channel_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store } >
      <Router history={ hashHistory } >
        <Route path="/" component={ App } >
          <IndexRoute component={ WelcomePageContainer } />
          <Route path="/login" onEnter={ _redirectIfLoggedIn }
            component={ SessionFormContainer } />
          <Route path="/register" onEnter={ _redirectIfLoggedIn }
            component={ SessionFormContainer } />
          <Route path="/channels" onEnter={ _ensureLoggedIn }
            component={ ChannelContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
