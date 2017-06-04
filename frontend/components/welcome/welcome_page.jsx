import React from 'react';
import { withRouter } from 'react-router';

const WelcomePage = ({ currentUser, demoLogin, router, logout }) => {
  let button = "";
  button = (
    <div>
      <button className="welcome-button"
        onClick={() => router.push('/channels/@me')} >Open</button>
      <button className="welcome-button"
        onClick={ logout } >Logout</button>
    </div>
  );

  function login() {
    demoLogin().then(() => router.push('/channels/@me'));
  }

  if (!currentUser) {
    button = (
      <div>
        <button className="welcome-button"
          onClick={() => router.push('/login')} >Login</button>
        <button className="welcome-button"
          onClick={() => router.push('/register')} >Register</button>
        <button className="welcome-button"
          onClick={ login } >Demo Login</button>
      </div>
    );
  }

  return (
    <main className="welcome">
      <header className="welcome-header">
        <div className="welcome-logo-image" ></div>
        <span className="welcome-all-buttons" >
          {button}
        </span>
      </header>
      <span className="welcome-banner">
        <div className="welcome-banner-image" />
        <div className="welcome-banner-text" >
          <div className="welcome-slogan" >
            For any topic that is on your mind,
            <br />
            Join the online chatroom
          </div>
          <br />
          <div className="welcome-tagline">
            Connecting with others has never been easier
          </div>
          <div className="welcome-call-button" onClick={ login }>
            Start chatting now!
          </div>
        </div>
      </span>
    </main>
  );
};

export default withRouter(WelcomePage);
