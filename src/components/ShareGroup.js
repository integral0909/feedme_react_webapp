import React, {Component} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

class ShareGroup extends Component {
  handleFacebookClick = (e) => {
    FB.ui({method:'share',href: this.props.pageUrl},function(response){});
  }
  render() {
    return (
        <ButtonGroup>
          <Button data-share-url={this.props.pageUrl} onClick={this.handleFacebookClick}>
            <i className="fa fa-facebook"/>
          </Button>
          <Button>
            <i className="fa fa-twitter"/>
          </Button>
          <Button>
            <i className="fa fa-envelope"/>
          </Button>
        </ButtonGroup>
    )
  }
}

export {ShareGroup}
