import React, {  } from 'react';
import {TextInput} from './TextInput'
import {lengthValidator, mixedCharactersValidator, repetitionValidator, commonPasswordValidator} from '../../Validators'
import { FormGroup, FormControl } from 'react-bootstrap';

class PasswordInput extends TextInput {
  validator(value) {
    if (this.props.validate) {
      return commonPasswordValidator(
          ...repetitionValidator(
              ...mixedCharactersValidator(
                  ...lengthValidator(value))));
    }
    return [value, null, null]
  }
  render() {
    let feedbackBlock = this.getFeedbackBlock();
    return (
        <FormGroup
            controlId={this.props.controlId}
            validationState={this.props.status}
        >
          <FormControl
              type="password"
              value={this.props.value}
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
