import React, { Component } from 'react';
import 'css/impact.css';
import {DownloadSection, OpeningSection} from "./partials/StaticPartials";

class ImpactPage extends Component {
  render() {
    return (
      <main id="main" className="impact">
        <OpeningSection/>
        <div className="section-help" style={{margin: '55px 0'}}>
          <div className="container">
            <h2>We are taking the decision making out of eating</h2>
            <p style={{fontSize: '18px'}}>So that you can spend <strong>more time eating, less time thinking.</strong> Eating in or out, Feedmee learns and recommends the food you love.</p>
          </div>
        </div>
        <DownloadSection/>
      </main>
    )
  }
}

export {ImpactPage};
