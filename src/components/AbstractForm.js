import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';

class AbstractForm extends Component {
  inputNames = [];
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {};
  }
  handleSubmit(e) {
    e.preventDefault()
  }
  handleChange = (name, value, status) => {
    let messages = this.generateMessages(name, status);
    this.setState({[name]: {value: value, status: status}, messages: messages})
  }
  getMessageBlock() {
    let messageBlock = null;
    if (this.state.messages) {
      messageBlock = (
          <div>
            {this.state.messages.map((msg) => {
              return (<Alert bsStyle={msg.status}>{msg.content}</Alert>)
            })}
          </div>
      )
    }
    return messageBlock;
  }
  generateMessages(name, status) {
    let msgs = [];
    if (this.inputNames) {
      for (let i=0; i < this.inputNames.length; i++) {
        let inputName = this.inputNames[i];
        let input = null;
        if (inputName === name) {
          input = {status: status};
        } else {
          input = this.state[inputName];
        }
        if (input.status === 'error') {
          msgs.push({content: 'Error in '+inputName, status: 'danger'})
        }
        if (input.status === 'warning') {
          msgs.push({content: 'Warning in '+inputName, status: 'warning'})
        }
      }
    }
    return msgs
  }
}

export {AbstractForm}
