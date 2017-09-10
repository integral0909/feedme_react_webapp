import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import * as firebase from 'firebase';

class FacebookLogin extends Component {
  handleClick = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    this.props.auth.authService().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
      }).then(this.props.onSuccess);
  };
  render() {
    return (
      <Button bsStyle="primary" block
              onClick={this.handleClick}
      >
        <span className="pull-left"><i className="fa fa-facebook-official pull-left"/></span>
        Login with Facebook
      </Button>
    )
  }
}

export {FacebookLogin}