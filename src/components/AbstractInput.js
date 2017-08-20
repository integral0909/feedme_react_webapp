import React, { Component } from 'react';
import { HelpBlock } from 'react-bootstrap';


class AbstractInput extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {};
  }
  validator(value) {
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
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let status = null;
    let feedback = null;
    if (typeof this.validator === 'function') {
      let r = this.validator(value);
      status = r[1];
      feedback = r[2];
    }
    this.setState({feedback: feedback});
    this.props.onChange(this.props.name, value, status);
  }
}

export {AbstractInput};
