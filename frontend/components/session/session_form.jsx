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
    this.props.demoLogin({user: {
      username:"demo-username",
      password: "demo-password"
    }});
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

    return (
      <form className="session-form" onSubmit={ this.handleSubmit }>
        <h1 className="form-header">{header}</h1>

        <ul className="form-errors">
          {errors.map((error, idx) => (<li key={idx} >{error}</li>))}
        </ul>

        <label className="form-label">USERNAME</label>
        <input type="text" className="form-field"
          onChange={this.updateField("username")}
          value={this.state.username} />

        <label className="form-label">PASSWORD</label>
        <input type="password" className="form-field"
          onChange={this.updateField("password")}
          value={this.state.password} />

        <input type="submit" className="form-button" value={buttonText} />
        <span>{linkMessage}
          <Link to={linkPath} className="form-link" >{linkText}</Link>
        </span>
        <button className="form-demo-login"
          onClick={this.startDemo} >Demo Login</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
