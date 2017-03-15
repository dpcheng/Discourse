import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startDemo = this.startDemo.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({user: this.state});
  }

  startDemo(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  render() {
    let header = "CREATE AN ACCOUNT";
    let buttonText = "Continue";
    let linkMessage = "Already have an account? ";
    let linkText = "Login";
    let linkPath = "/login";

    if (this.props.formType === 'login') {
      header = "WELCOME BACK.";
      buttonText = "Login";
      linkMessage = "Need an account? ";
      linkText = "Register";
      linkPath = "/register";
    }

    const {loggedIn, errors, processForm, formType} = this.props;

    let img = "https://static.pexels.com/photos/798/bench-people-smartphone-sun.jpg";

    return (
      <main className="form-page">
        <form className="session-form" onSubmit={ this.handleSubmit }>
          <h1 className="form-header">{header}</h1>

          <br />

          <ul className="form-errors">
            {errors.map((error, idx) => (<li key={idx} >{error}</li>))}
          </ul>

          <br />

          <label className="form-label">USERNAME</label>

          <br />

          <input type="text" className="form-field"
            onChange={this.updateField("username")}
            value={this.state.username} />

          <br />

          <label className="form-label">PASSWORD</label>

          <br />

          <input type="password" className="form-field"
            onChange={this.updateField("password")}
            value={this.state.password} />

          <br />

          <input type="submit" className="form-button" value={buttonText} />

          <br />

          <span className="form-link-message">{linkMessage}
            <Link to={linkPath} className="form-link" >{linkText}</Link>
          </span>

          <br />
          <button className="form-demo-login"
            onClick={this.startDemo} >Demo Login</button>
        </form>
      </main>
    );
  }
}

export default withRouter(SessionForm);
