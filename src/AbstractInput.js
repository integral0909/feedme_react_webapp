import React, { Component } from 'react';

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
  handleChange = (e) => {
    if (typeof this.validator === 'function') {
      let r = this.validator(e.target.value);
      this.setState({value: r[0], status: r[1], feedback: r[2]});
    } else {
      this.setState({value: e.target.value, status: null, feedback: null})
    }
  }
}

export {AbstractInput};
