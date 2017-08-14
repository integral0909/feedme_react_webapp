import React, { Component } from 'react';
import {AbstractForm} from './AbstractForm'
import {TextInput} from './TextInput';
import {PasswordInput} from './PasswordInput';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

class EmailLogin extends AbstractForm {
  getInitialState() {
    return {
      password: {value: '', 'status': null, 'feedback': ''},
      email: {value: '', 'status': null, 'feedback': ''},
      messages: []
    };
  }
  render() {
    return (
        <form>
          <TextInput controlId="login-email" placeholder="Enter email" minLength="4" />
          <PasswordInput controlId="login-password" placeholder="Password"/>
        </form>
    )
  }
}

export {EmailLogin}
