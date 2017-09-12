import React, {Component} from 'react';
import {
  Button, FormControl, FormGroup
} from 'react-bootstrap';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', success: false, error: false};
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.auth.authService()
      .sendPasswordResetEmail(this.state.email)
      .then(this.onSuccess)
      .catch(this.onError)
  };
  onSuccess = () => {
    this.setState({success: true, error: false})
  };
  onError = () => {
    this.setState({error: true, success: false})
  };
  handleChange = (e) => {
    this.setState({email: e.target.value})
  };
  render() {
    let mainContent = (
      <form onSubmit={this.handleSubmit}
            className={this.props.className}
            style={this.props.style}>
        <h4>Forgot password</h4>
        <FormGroup>
          <FormControl
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter email"
          />
        </FormGroup>
        <Button type="submit" className="btn-red btn-block">
          Reset password
        </Button>
      </form>
    );
    if (this.state.success) {
      mainContent = (
        <form onSubmit={this.handleSubmit}
              className={this.props.className}
              style={this.props.style}>
          <h4>Check your email</h4>
          <p>We’ve sent you an email with the link to reset your password.</p>
          <Button type="submit" className="btn-red btn-block">
            Send again
          </Button>
        </form>
      )
    }
    return mainContent;
  }
}

export {ForgotPassword}