import React, { Component } from 'react';
import {TextInput} from './TextInput'
import {lengthValidator, mixedCharactersValidator, repetitionValidator, commonPasswordValidator} from './Validators'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

class PasswordInput extends TextInput {
  validator(value) {
    return commonPasswordValidator(
        ...repetitionValidator(
            ...mixedCharactersValidator(
                ...lengthValidator(value))));
  }
  render() {
    let feedbackBlock = this.getFeedbackBlock();
    return (
        <FormGroup
            controlId={this.props.controlId}
            validationState={this.state.status}
        >
          <FormControl
              type="password"
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
          />
          <FormControl.Feedback />
          {feedbackBlock}
        </FormGroup>
    )
  }
}

export {PasswordInput};
