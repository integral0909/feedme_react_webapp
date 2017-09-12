import React, { Component } from 'react';
import {Grid, Col} from 'react-bootstrap';
import 'css/impact.css';
import {
  DownloadSection, FeaturedPressSection, MealsDonatedSection,
  OpeningSection
} from "./partials/StaticPartials";

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
              <h4>Use Feedmee to find food</h4>
              <p>You use Feedmee app to find food, whether it’s ordering delivery, booking tables or finding recipes.</p>
            </Col>
            <Col sm={4}>
              <h4>Book tables or order delivery</h4>
              <p>When a user orders through the app, the service providers pay us a fee.</p>
            </Col>
            <Col sm={4}>
              <h4>And help to give back</h4>
              <p>That fee is donated to a local food rescue charity, covering the cost of a meal for someone in need.</p>
            </Col>
          </Grid>
        </div>
        <MealsDonatedSection/>
        <FeaturedPressSection/>
      </main>
    )
  }
}

export {ImpactPage};
