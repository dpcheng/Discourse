import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import WelcomePageContainer from './welcome/welcome_page_container';
import SessionFormContainer from './session/session_form_container';
import ChannelContainer from './channel/channel_container';
import DirectMessageContainer from './direct_message/direct_message_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/channels/@me');
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
          <Route path="/channels/@me" onEnter={ _ensureLoggedIn }
            component={ DirectMessageContainer } >
            <Route path="/channels/@me/:sub_channel_id"
              onEnter={ _ensureLoggedIn }
              component={ DirectMessageContainer } />
          </Route>
          <Route path="/channels/:channel_id"
            onEnter={ _ensureLoggedIn } component={ ChannelContainer }>
            <Route path="/channels/:channel_id/:sub_channel_id"
              onEnter={ _ensureLoggedIn } component={ ChannelContainer } />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
