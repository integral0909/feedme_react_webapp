import React, { Component } from 'react';
import {AbstractInput} from './AbstractInput'
import {lengthValidator} from './Validators'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

class TextInput extends AbstractInput {
  getInitialState() {
    return {
      value: '', 'status': null, 'feedback': null
    };
  }
  validator (value) {
    if (this.props.minLength) {
      return lengthValidator(value, null, null, this.props.minLength)
    }
    return [value, null, null]
  }
  getFeedbackBlock() {
    let feedbackBlock = null;
    if (this.state.feedback) {
      feedbackBlock = (
          <HelpBlock>
            <ul className="list-inline">
              {this.state.feedback.split('\n').map((item) => {
                return (<li>{item}</li>)
              })}
            </ul>
          </HelpBlock>
      )
    }
    return feedbackBlock
  }
  render() {
    let feedbackBlock = this.getFeedbackBlock()
    return (
        <FormGroup
            controlId={this.props.controlId}
            validationState={this.state.status}
        >
          <FormControl
              type="text"
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

export {TextInput};
