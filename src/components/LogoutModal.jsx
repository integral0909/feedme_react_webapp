import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class LogoutModal extends Component {
  handleLogout = () => {
    this.props.auth.authService().signOut();
    this.props.closeHandler();
  }
  render () {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeHandler} className="col-sm-3">
        <Modal.Body className="text-center">
          <p>Are you sure you want to logout?</p>
          <ul className="list-inline">
            <li><Button className="btn-white" onClick={this.props.closeHandler}>
              Nevermind
            </Button></li>
            <li><Button onClick={this.handleLogout}>Log me out</Button></li>
          </ul>
          <Button bsStyle="link" onClick={this.props.closeHandler}>Close</Button>
        </Modal.Body>
      </Modal>
    )
  }
}

export {LogoutModal}
