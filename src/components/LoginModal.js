import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { EmailLogin } from './EmailLogin'

class LoginModal extends Component {
  constructor (props) {
    super(props);
    this.state = { showModal: false}
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }
  toggle = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  render () {
    return (
        <Modal show={this.state.showModal} onHide={this.close} className="col-sm-3">
          <Modal.Body className="text-center">
            <EmailLogin className="form" auth={this.props.auth} />
            <ul className="list-inline">
              <li><a href="/signup/">Sign up</a></li>
              <li>|</li>
              <li><a href="/reset-password/">Forgot Password</a></li>
            </ul>
            <p className="text-muted"><small>By logging in you agree to our <a href="/terms/">Terms & Conditions</a> and <a href="/privacy/">Privacy Policy</a></small></p>
            <Button bsStyle="link" onClick={this.close}>Close</Button>
          </Modal.Body>
        </Modal>
    )
  }
}

export {LoginModal}
