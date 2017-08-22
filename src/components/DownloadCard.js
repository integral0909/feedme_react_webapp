import React from 'react';
import {Button} from 'react-bootstrap';
import downloadBanner from '../assets/fdme_download.jpg';

function DownloadCard() {
  return (
      <div className="card bordered padded">
        <div className="row">
          <div className="col-sm-7">
            <img src={downloadBanner} className="img-responsive"
                 alt="Download Feedmee for iOS"
                 style={{margin: '-25px', marginRight: '0px'}}/>
          </div>  
          <div className="col-sm-5 text-center">
            <h3>Like what you see?</h3>
            <h2>It's even better with our app</h2>
            <br/>
            <ul className="list-inline list-unstyled">
              <li>
                <Button bsStyle="danger"
                        className="btn-red btn-red-hollow btn-pill"
                        href="https://itunes.apple.com/au/app/feedmee-discover-food-4-you-eat-out-give-back/id1120549992?mt=8"
                        bsSize="large">
                  <i className="fa fa-apple"/> AppStore
                </Button>
              </li>
              <li>
                <Button  bsStyle="danger"
                         className="btn-red btn-red-hollow btn-pill"
                         bsSize="large"
                         href="http://eepurl.com/cPK-Ab">
                  <i className="fa fa-android"/> PlayStore
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export {DownloadCard}
