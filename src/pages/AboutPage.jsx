import React, {Component} from 'react';
import {
  BenefitsSection, FeaturedPressSection, MealsDonatedSection,
  OpeningSection, TeamSection
} from "./partials/StaticPartials";
import happyPie from 'assets/happypie.svg';

class AboutPage extends Component {
  render() {
    return (
      <main id="main" className="impact">
        <OpeningSection/>
        <div className="section-help" style={{backgroundColor: '#FFF'}}>
          <div className="container">
            <img src={`${process.env.REACT_APP_CDN}${happyPie}`} alt="Happy pie" />
            <h2 className="pink">We are taking the decision making out of eating</h2>
            <p style={{fontSize: '18px', color: '#444'}}>
              So that you can spend <strong>more time eating, less time thinking.</strong><br/>
              Eating in or out, Feedmee learns and recommends the food you love.
            </p>
          </div>
        </div>
        <BenefitsSection/>
        <MealsDonatedSection/>
        <TeamSection/>
        <FeaturedPressSection/>
      </main>
    )
  }
}

export {AboutPage}