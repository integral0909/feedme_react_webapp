import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { EmailLogin } from './EmailLogin'
import {FacebookLogin} from "./FacebookLogin";
import {ForgotPassword} from "./ForgotPassword";
import {Signup} from "./Signup";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: false,
      showForgotPass: false,
      showLogin: true
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.showModal !== this.state.showModal) {
      this.setState({showModal: nextProps.showModal})
    }
  };
  loginSuccessHandler = () => {
    if (this.props.successHandler) {
      setTimeout(() => {
        this.props.successHandler()
      }, 1000);
    };
    this.props.closeHandler()
  };
  handleClick = (type) => {
    if (type === 'signup') {
      this.setState({showLogin: false, showSignup: true, showForgotPass: false})
    }
    if (type === 'resetpw') {
      this.setState({showLogin: false, showSignup: false, showForgotPass: true})
    }
    if (type === 'login') {
      this.setState({showLogin: true, showSignup: false, showForgotPass: false})
    }
  };
  closeModal = () => {
    this.setState({showLogin: true, showSignup: false, showForgotPass: false});
    this.props.closeHandler();
  }
  render () {
    let body = null;
    if (this.state.showLogin) {
      body = (
        <Modal.Body className="text-center">
          <FacebookLogin auth={this.props.auth} onSuccess={this.loginSuccessHandler} />
          <hr/>
          <EmailLogin className="form" auth={this.props.auth}
        onSuccess={this.loginSuccessHandler} />
        <ul className="list-inline">
          <li>
            <Button bsStyle="link"
                    onClick={() => this.handleClick('signup')}>Sign up</Button>
          </li>
          <li>|</li>
          <li>
            <Button onClick={() => this.handleClick('resetpw')}
                    bsStyle="link">Forgot Password</Button>
          </li>
        </ul>
        <p className="text-muted"><small>By logging in you agree to our <a href="/terms/">Terms & Conditions</a> and <a href="/privacy/">Privacy Policy</a></small></p>
        <Button bsStyle="link" onClick={this.props.closeHandler}>Close</Button>
      </Modal.Body>
      );
    }
    if (this.state.showSignup) {
      body = (
        <Modal.Body className="text-center">
          <Button bsStyle="link" className="pull-left"
                  onClick={() => this.handleClick('login')}>
            <i className="fa fa-arrow-left"/>
          </Button>
          <Signup style={{margin:'80px 0'}} auth={this.props.auth} silenceFields/>
          <Button bsStyle="link" onClick={this.closeModal}>Close</Button>
        </Modal.Body>
      )
    }
    if (this.state.showForgotPass) {
      body = (
        <Modal.Body className="text-center">
          <Button bsStyle="link" className="pull-left"
                  onClick={() => this.handleClick('login')}>
            <i className="fa fa-arrow-left"/>
          </Button>
          <ForgotPassword auth={this.props.auth} style={{margin:'100px 0'}}/>
          <Button bsStyle="link" onClick={this.closeModal}>Close</Button>
        </Modal.Body>
      )
    }
    return (
      <div>
        <Modal show={this.props.showModal} className="col-sm-3" onHide={this.closeModal}>
          {body}
        </Modal>
      </div>
    )
  }
}

export {LoginModal}
