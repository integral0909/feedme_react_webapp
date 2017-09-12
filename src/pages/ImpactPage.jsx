import React, { Component } from 'react';
import {Grid, Col} from 'react-bootstrap';
import 'css/impact.css';
import {
  DownloadSection, DrivingFeedmeeSection, FeaturedPressSection, MealsDonatedSection,
  OpeningSection
} from "./partials/StaticPartials";
import feeIcon from 'assets/fee.svg';
import findIcon from 'assets/find.svg';
import donateIcon from 'assets/donate.svg';
import teamPhoto from 'assets/teamphoto.jpeg';
import tylerPitch from 'assets/tyler_pitch.jpg';

class ImpactPage extends Component {
  render() {
    return (
      <main id="main" className="impact">
        <OpeningSection/>
        <div className="section-help" style={{backgroundColor: '#FFF'}}>
          <Grid>
            <Col sm={12}>
              <h2 className="pink">How does the donation work</h2>
            </Col>
            <Col sm={4}>
              <img src={findIcon} alt="Find food"/>
              <h4>Use Feedmee to find food</h4>
              <p>You use Feedmee app to find food, whether it’s ordering delivery, booking tables or finding recipes.</p>
            </Col>
            <Col sm={4}>
              <img src={feeIcon} alt="Referral fee"/>
              <h4>Book tables or order delivery</h4>
              <p>When a user orders through the app, the service providers pay us a fee.</p>
            </Col>
            <Col sm={4}>
              <img src={donateIcon} alt="Donated"/>
              <h4>And help to give back</h4>
              <p>That fee is donated to a local food rescue charity, covering the cost of a meal for someone in need.</p>
            </Col>
          </Grid>
        </div>
        <DrivingFeedmeeSection
          imageTop={teamPhoto}  imageTopAlt="The Feedmee team"
          imageBottom={tylerPitch} imageBottomAlt="Tyler Spooner" />
        <MealsDonatedSection/>
        <FeaturedPressSection/>
      </main>
    )
  }
}

export {ImpactPage};
