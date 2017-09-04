import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { EmailLogin } from './EmailLogin'

class LoginModal extends Component {
  render () {
    return (
        <Modal show={this.props.showModal} onHide={this.close} className="col-sm-3">
          <Modal.Body className="text-center">
            <EmailLogin className="form" auth={this.props.auth} />
            <ul className="list-inline">
              <li><a href="/signup/">Sign up</a></li>
              <li>|</li>
              <li><a href="/reset-password/">Forgot Password</a></li>
            </ul>
            <p className="text-muted"><small>By logging in you agree to our <a href="/terms/">Terms & Conditions</a> and <a href="/privacy/">Privacy Policy</a></small></p>
            <Button bsStyle="link" onClick={this.props.closeHandler}>Close</Button>
          </Modal.Body>
        </Modal>
    )
  }
}

export {LoginModal}
