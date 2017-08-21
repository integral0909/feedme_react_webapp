import React, {Component} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {FacebookShareButton} from "./FacebookShareButton"

class ShareGroup extends Component {
  render() {
    return (
        <ButtonGroup>
          <FacebookShareButton url={this.props.url}>
              <i className="fa fa-facebook"/>
          </FacebookShareButton>
          <Button>
            <i className="fa fa-twitter"/>
          </Button>
          <Button>
            <i className="fa fa-google-plus"/>
          </Button>
          <Button>
            <i className="fa fa-linkedin"/>
          </Button>
          <Button>
            <i className="fa fa-envelope"/>
          </Button>
        </ButtonGroup>
    )
  }
}

export {ShareGroup}
