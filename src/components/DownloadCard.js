import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Media from 'react-media';
import downloadBanner from '../assets/fdme_download.jpg';
import {AutocroppedImage} from "./AutocroppedImage";
import 'css/downloadCard.css'
import {AspectConstrainedImage} from "./AspectConstrainedImage";

function CardBase (props) {
  return (
    <div className="card bordered padded">
      {props.children}
    </div>
  )
}

class DownloadCard extends Component {
  renderCallToAction(size) {
    return (
      <ul className="list-inline list-unstyled">
        <li>
          <Button bsStyle="danger"
                  className="btn-red btn-red-hollow btn-pill"
                  href="https://itunes.apple.com/au/app/feedmee-discover-food-4-you-eat-out-give-back/id1120549992?mt=8"
                  bsSize={size}>
            <i className="fa fa-apple"/> AppStore
          </Button>
        </li>
        <li>
          <Button  bsStyle="danger"
                   className="btn-red btn-red-hollow btn-pill"
                   bsSize={size}
                   href="http://eepurl.com/cPK-Ab">
            <i className="fa fa-android"/> PlayStore
          </Button>
        </li>
      </ul>
    )
  };
  renderTabletAndDesktop() {
    return (
      <div className="row">
        <div className="col-sm-7">
          <AspectConstrainedImage
            imageUrl={downloadBanner}
            alt="Download Feedmee for iOS"
            style={{margin: '-25px', marginRight: '0px'}} ratio="15:9"/>
        </div>
        <div className="col-sm-5 text-center">
          <h4>Like what you see?</h4>
          <h3>It's even better with our app</h3>
          <br/>
          {this.renderCallToAction()}
        </div>
      </div>
    )
  };
  renderMobile() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <AutocroppedImage src={downloadBanner}
                            alt="Download Feedmee app"
                            className="download-card-img-mobile">
            <div className="content-wrapper text-center">
              <h3>Download Feedmee App</h3>
              <p>Easy access to all your recipes & shopping list</p>
            </div>
            <div className="dark-overlay dark-overlay-gradient"/>
          </AutocroppedImage>
        </div>
        <div className="col-xs-12 text-center">
          {this.renderCallToAction()}
        </div>
      </div>
    )
  };
  render() {
    return (
      <CardBase>
        <Media query="(min-width: 769px)">
        {matches => matches ? (
          this.renderTabletAndDesktop()
        ) : (
          this.renderMobile()
        )}
        </Media>
      </CardBase>

    )
  }

}

export {DownloadCard}
