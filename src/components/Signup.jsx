import React, {Component} from 'react';

class Signup extends AbstractForm {
  inputNames = ['password', 'email'];
  getInitialState() {
    return {
      password: {value: '', 'status': null},
      email: {value: '', 'status': null},
      messages: []
    };
  };
  handleSubmit = (e) => {
    super.handleSubmit(e);
    this.props.auth.authService()
      .signInWithEmailAndPassword(this.state.email.value, this.state.password.value)
      .then(this.props.onSuccess)
      .catch(this.onLoginFailure);
  };
  onLoginFailure = (error) => {
    console.log(error.code);
    let state = this.state;
    state.messages.push({content: error.message, status: 'danger'});
    this.setState(state);
  };
  render() {
    let messageBlock = this.getMessageBlock();
    return (
      <form className="modal-form" onSubmit={this.handleSubmit}>
        {messageBlock}
        <TextInput
          controlId="login-email"
          placeholder="Enter email"
          value={this.state.email.value}
          status={this.state.email.status}
          name="email"
          onChange={this.handleChange}
        />
        <PasswordInput
          controlId="login-password"
          placeholder="Password"
          value={this.state.password.value}
          status={this.state.password.status}
          name="password"
          onChange={this.handleChange}
        />
        <Button type="submit" className="btn-red btn-block">
          <span className="pull-left"><i className="fa fa-envelope"></i></span>
          Signup
        </Button>
      </form>
    )
  }
}


export {Signup}