import React from 'react';
import { withRouter } from 'react-router';

const WelcomePage = ({ currentUser, demoLogin, router, logout }) => {
  let button = "";
  button = (
    <div>
      <button onClick={() => router.push('/#/')} >Open</button>
      <button onClick={ logout } >Logout</button>
    </div>
  );

  let username = "";

  if (currentUser) {
    username = currentUser.username;
  }

  if (!currentUser) {
    button = (
      <div>
        <button onClick={() => router.push('/login')} >Login</button>
        <button onClick={() => router.push('/register')} >Register</button>
        <button className="welcome-button" onClick={ demoLogin } >Demo Login</button>
      </div>
    );
  }


  return (
    <main className="welcome">
      Welcome {username}
      {button}
    </main>
  );
};

export default withRouter(WelcomePage);
