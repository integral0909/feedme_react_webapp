import React, {Component} from 'react';
import {
  BenefitsSection, MealsDonatedSection, OpeningSection
} from "./partials/StaticPartials";

class AboutPage extends Component {
  render() {
    return (
      <main id="main" className="impact">
        <OpeningSection/>
        <div className="section-help" style={{margin: '55px 0'}}>
          <div className="container">
            <h2 className="pink">We are taking the decision making out of eating</h2>
            <p style={{fontSize: '18px', color: '#444'}}>
              So that you can spend <strong>more time eating, less time thinking.</strong><br/>
              Eating in or out, Feedmee learns and recommends the food you love.
            </p>
          </div>
        </div>
        <BenefitsSection/>
        <MealsDonatedSection/>
      </main>
    )
  }
}

export {AboutPage}