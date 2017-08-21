import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

const FB = window.FB;

class FacebookShareButton extends Component {
  handleClick = (e) => {
    FB.ui({method:'share', href: this.props.url},function(response){});
  };
  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.props.children}
      </Button>
    )
  }
}

export {FacebookShareButton}
