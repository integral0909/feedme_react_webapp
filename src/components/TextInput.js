import React, {  } from 'react';
import {AbstractInput} from './AbstractInput'
import {lengthValidator} from '../Validators'
import { FormGroup, FormControl } from 'react-bootstrap';

class TextInput extends AbstractInput {
  getInitialState() {
    return {
      feedback: null
    }
  }
  validator (value) {
    if (this.props.validate) {
      return lengthValidator(value, null, null, this.props.minLength)
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
              type="text"
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

export {TextInput};
