import React, { } from 'react';
import { AbstractForm } from './forms/AbstractForm'
import { TextInput } from './forms/TextInput';
import { PasswordInput } from './forms/PasswordInput';
import { Button } from 'react-bootstrap';
import helpHappy from 'assets/help_in_need.png';
import {Link} from "react-router-dom";

class Signup extends AbstractForm {
  inputNames = ['password', 'email'];
  getInitialState() {
    return {
      password: {value: '', 'status': null},
      email: {value: '', 'status': null},
      messages: [],
      success: false
    };
  };
  handleSubmit = (e) => {
    super.handleSubmit(e);
    this.props.auth.authService()
      .createUserWithEmailAndPassword(this.state.email.value, this.state.password.value)
      .then(() => {
        this.setState({success: true});
      })
      .catch(this.onError);
  };
  onError = (error) => {
    let state = this.state;
    state.messages.push({content: error.message, status: 'danger'});
    this.setState(state);
  };
  render() {
    let messageBlock = this.getMessageBlock();
    let content = (
      <form onSubmit={this.handleSubmit} className={`modal-form ${this.props.className}`}
            style={this.props.style}>
        {messageBlock}
        <TextInput
          controlId="login-email"
          placeholder="Enter email"
          value={this.state.email.value}
          status={this.state.email.status}
          name="email"
          validate
          onChange={this.handleChange}
        />
        <PasswordInput
          controlId="login-password"
          placeholder="Password"
          value={this.state.password.value}
          status={this.state.password.status}
          name="password"
          validate
          onChange={this.handleChange}
        />
        <Button type="submit" className="btn-red btn-block">
          <span className="pull-left"><i className="fa fa-envelope"></i></span>
          Signup
        </Button>
      </form>
    );
    if (this.state.success) {
      content = (
        <div className={this.props.className} style={this.props.style}>
          <h4>Welcome to the Feedmee movement</h4>
          <img src={`${helpHappy}`} alt="Happy heart and food delivered"/>
          <p>Every time you use Feedmee to find food, you help feed someone in need. Simply by signing up, you are helping us to achieve our mission to end world hunger.</p>
          <Link to="/impact" className="btn btn-pink">How it works</Link>
        </div>
      )
    }
    return content;
  }
}


export {Signup}