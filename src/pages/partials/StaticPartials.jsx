import React, {Component} from 'react';
import {get} from 'services/ApiService';
import {Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OpeningSection = (props) => (
  <div className="section-opening">
    <div className="container">
      <div className="col-md-6 col-sm-7 opening-text">
        <h2>Feed yourself, feed the world</h2>
        <p>Feedmee is your all-in-one food app that learns and recommends the food you love, so you can spend more time
          eating, less time thinking.
          Best of all every time you book a table or order food delivery through the app, we donate a meal to someone in
          need.
        </p>

        <a className="button-outline"
           href="https://itunes.apple.com/au/app/feedmee-discover-food-4-you-eat-out-give-back/id1120549992?mt=8"><img
          src="https://cdn.feedmeeapp.com/static/images/apple-logo@2x.png" alt=""/>AppStore</a>
        <a className="button-outline" href="http://eepurl.com/cPK-Ab"><img
          src="https://cdn.feedmeeapp.com/static/images/android-logo@2x.png" alt=""/>PlayStore</a>
        <div className="featured-image">
          <p>FEATURED IN</p>
          <img src="https://cdn.feedmeeapp.com/static/images/yahoo-logo@2x.png" alt="Yahoo"/>
          <img src="https://cdn.feedmeeapp.com/static/images/startupdaily-logo@2x.png" alt="Startup Daily"/>
          <img src="https://cdn.feedmeeapp.com/static/images/bn-logo@2x.png" alt="Business News"/>
        </div>
      </div>
      <div className="col-md-6 col-sm-5 opening-image">
        <img src="https://cdn.feedmeeapp.com/static/images/phone@2x.png" alt="Feedmee iPhone Homescreen"/>
      </div>
    </div>
  </div>
);

const DownloadSection = (props) => {
  return (
    <div className="section-download">
      <div className="container">
        <h3>Download Now</h3>
        <ul className="list-unstyled">
          <li>
            <a href="https://itunes.apple.com/au/app/feedmee-discover-food-4-you-eat-out-give-back/id1120549992?mt=8">
              <img src="https://cdn.feedmeeapp.com/static/images/apple-logo@2x.png" alt="AppStore icon"/>
              <p>AppStore</p>
            </a>
          </li>
          <li>
            <a href="http://eepurl.com/cPK-Ab">
              <img src="https://cdn.feedmeeapp.com/static/images/android-logo@2x.png" alt="PlayStore icon"/>
              <p>PlayStore</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const BenefitsSection = (props) => {
  return (
    <div className="section-benefits">
      <div className="container">
        <div className="benefit-wrapper">
          <h2 className="pink">Things you can do on Feedmee</h2>
          <div className="benefit-list">
            <img src="https://cdn.feedmeeapp.com/static/images/find-recipe@2x.png" alt="RECIPES & MEAL PLANNER"/>
            <div className="benefit-desc">
              <h4 className="pink">RECIPES & MEAL PLANNER</h4>
              <p><strong>We help you decide WHAT to eat and HOW you get it.</strong> Feedmee has over 2,500 recipes for your to choose from. It also has a meal planner that automatically plans your weekly meals based on what you like and your dietary needs.</p>
            </div>
          </div>
          <div className="benefit-list">
            <img src="https://cdn.feedmeeapp.com/static/images/book@2x.png" alt="Book a table"/>
            <div className="benefit-desc">
              <h4 className="pink">RESTAURANTS</h4>
              <p>We also help you <strong>decide where to go</strong> on your special occasions. Once you’ve found the one, you can book a table, order on-demand delivery or call an Uber to take you there.</p>
            </div>
          </div>
          <div className="benefit-list">
            <img src="https://cdn.feedmeeapp.com/static/images/deliver@2x.png" alt="Order delivery"/>
            <div className="benefit-desc">
              <h4 className="pink">IT LEARNS WHAT YOU LIKE</h4>
              <p>Feedmee’s recommendation engine is constantly <strong>learning what you love</strong> so it can show you the most relevant food, whether you’re eating in or eating out.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const FeaturedPressSection = (props) => {
  return (
    <div className="section-featured">
      <div className="container">
        <h3>Featured in</h3>
        <div className="featured-list hidden-sm hidden-xs">
          <ul>
            <li><img src="https://cdn.feedmeeapp.com/static/images/startupdaily-black@2x.png" alt="Startup Daily"/></li>
            <li><img src="https://cdn.feedmeeapp.com/static/images/yahoo-purple@2x.png" alt="Yahoo News"/></li>
            <li><img src="https://cdn.feedmeeapp.com/static/images/hit-92.9@2x.png" alt="Hit 92.9"/></li>
            <li><img src="https://cdn.feedmeeapp.com/static/images/watoday@2x.png" alt="WA Today"/></li>
            <li><img src="https://cdn.feedmeeapp.com/static/images/bn-color@2x.png" alt="Business News"/></li>
            <li><img src="https://cdn.feedmeeapp.com/static/images/ozawards@2x.png" alt="OzApp Awards"/></li>
            <li><img src="https://cdn.feedmeeapp.com/static/images/business-wire@2x.png" alt="Business Wire"/></li>
          </ul>
        </div>
        <div className="featured-list-mobile visible-sm visible-xs">
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/startupdaily-black@2x.png" alt="Startup Daily"/></div>
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/yahoo-purple@2x.png" alt="Yahoo News"/></div>
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/hit-92.9@2x.png" alt="Hit 92.9"/></div>
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/watoday@2x.png" alt="WA Today"/></div>
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/bn-color@2x.png" alt="Business News"/></div>
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/ozawards@2x.png" alt="OzApp Awards"/></div>
          <div className="featured-list-image"><img src="https://cdn.feedmeeapp.com/static/images/business-wire@2x.png" alt="Business Wire"/></div>
        </div>
      </div>
    </div>
  )
};

class MealsDonatedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {mealsDonated: '1,890'};
  };
  componentDidMount() {
    get('donations').then((d) => {
      let c = d.count.toString().split('').reverse().join('')
        .replace(/(\d{3}(?!.*\.|$))/g,'$1,')
        .split('').reverse().join('');
      this.setState({mealsDonated: c})
    }).catch((e) => console.error(e))
  }
  render() {
    return (
      <div className="section-help">
        <Grid className="card card-bordered">
          <Col sm={5}>
            <img src="https://cdn.feedmeeapp.com/static/images/box-hearth@2x.png"
                 alt="Deliver happiness" />
            <h4>Together, we’ve helped to feed</h4>
            <h2 className="pink">{this.state.mealsDonated} people in need.</h2>
          </Col>
          <Col sm={6} className="text-left">
            <h2 className="pink">Our impact</h2>
            <h4>Feed yourself, feed the world</h4>
            <p>
              Use Feedmee to feed yourself, and as you're eating you'll know you have fed someone in need, too.
            </p>
            <p>
              For every booking and delivery order you make through Feedmee, we donate a meal to someone in need on your behalf.
            </p><br/>
            <Link className="button-pink" to="/impact">See More</Link>
          </Col>
        </Grid>
      </div>
    )
  }
}

export {
  OpeningSection, DownloadSection, MealsDonatedSection,
  FeaturedPressSection, BenefitsSection
}