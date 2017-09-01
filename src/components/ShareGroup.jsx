import React, {Component} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {FacebookShareButton} from "./FacebookShareButton"

const windowFeatures = 'menubar=no,location=yes,resizable=yes,scrollbars=no,status=no,left=450,top=250,height=300,width=550,toolbar=no';

class ShareGroup extends Component {
  mailtoHandler = () => {
    window.location.href = `mailto:?subject=${this.props.title}&body=${this.props.url}`;
  };
  tweetHandler = () => {
    let tweetUrl = `http://twitter.com/intent/tweet?text=${this.props.title}%20${encodeURIComponent(this.props.url)}`;
    window.open(tweetUrl, 'tweet', windowFeatures)
  };
  googleHandler = () => {
    let gPlusUrl = `https://plus.google.com/share?url=${encodeURIComponent(this.props.url)}`;
    window.open(gPlusUrl, 'gPlusShare', windowFeatures.replace('height=300', 'height=500'))
  };
  render() {
    return (
        <ButtonGroup>
          <FacebookShareButton url={this.props.url}>
              <i className="fa fa-facebook"/>
          </FacebookShareButton>
          <Button onClick={this.tweetHandler}>
            <i className="fa fa-twitter"/>
          </Button>
          <Button onClick={this.googleHandler}>
            <i className="fa fa-google-plus"/>
          </Button>
          <Button onClick={this.mailtoHandler}>
            <i className="fa fa-envelope"/>
          </Button>
        </ButtonGroup>
    )
  }
}

export {ShareGroup}
