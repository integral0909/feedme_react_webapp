import React, {Component} from 'react';
import {get} from 'services/ApiService';
import {Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import watodayLogo from 'assets/press_logos/watoday_logo.png';
import sixprLogo from 'assets/press_logos/6pr_logo.png';
import rtrfmLogo from 'assets/press_logos/rtrfm_logo.png';
import westAustralianLogo from 'assets/press_logos/westaustralian_logo.png';
import techinvestLogo from 'assets/press_logos/techinvest_logo.png';


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
        <div className="featured-list">
          <ul className="list-unstyled">
            <li>
              <a href="https://thewest.com.au/business/startup/the-perth-food-app-that-gives-back-with-meals-for-needy-ng-b88590524z">
                <img src={westAustralianLogo} alt="The West Australian"/>
              </a>
            </li>
            <li>
              <a href="http://www.watoday.com.au/wa-news/perth-developers-cashed-up-to-expand-takeaway-app-that-helps-local-charities-20170831-gy7y4g.html">
                <img src={watodayLogo} alt="WA Today"/>
              </a>
            </li>
            <li>
              <a href="http://www.startupdaily.net/2017/04/feedmee-food-discovery-app-donating-charity-meal/">
                <img src="https://cdn.feedmeeapp.com/static/images/startupdaily-black@2x.png" alt="Startup Daily"/>
              </a>
            </li>
            <li>
              <a href="https://rtrfm.com.au/story/feedmee-considered-a-huge-app-of-kindness/">
                <img src={rtrfmLogo} alt="RTRFM"/>
              </a>
            </li>
            <li>
              <a href="https://techinvest.online/feedmeeapp-award-winning-food-app-successfully-raised-250000/">
                <img src={techinvestLogo} alt="Tech Invest"/>
              </a>
            </li>
            <li>
              <a href="https://www.businessnews.com.au/article/Apptech-business-of-the-week-Feedmee">
                <img src="https://cdn.feedmeeapp.com/static/images/bn-color@2x.png" alt="Business News"/>
              </a>
            </li>
            <li>
              <a href="https://omny.fm/shows/weekend-wakeup/homegrown-feedmee">
                <img src={sixprLogo} alt="6PR 882"/>
              </a>
            </li>
          </ul>
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
      <div className="section-help" style={{paddingBottom: 0}}>
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

class TeamSection extends Component {
  linkedinIcon = "https://cdn.feedmeeapp.com/static/images/linkedin-color.svg";
  constructor(props) {
    super(props);
    this.state = {
      team: [
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/tyler.jpg",
          name: "Tyler Spooner",
          title: "Co-Founder &amp; CEO",
          linkedin: "https://www.linkedin.com/in/tyler-spooner-44ba1792/"
        },
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/brenda.jpg",
          name: "Brenda Lai",
          title: "Co-Founder &amp; COO",
          linkedin: "https://www.linkedin.com/in/brenda-lai-a24925123/"
        },
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/anthony.jpg",
          name: "Anthony Manning Franklin",
          title: "CTO",
          linkedin: "https://www.linkedin.com/in/anthonymanningfranklin/"
        },
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/jose.jpg",
          name: "Jose Saavedra-Rosas",
          title: "Chief Data Scientist",
          linkedin: "https://www.linkedin.com/in/jose-saavedra-rosas-91a08414/"
        },
      ],
      advisors: [
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/tim.jpg",
          name: "Tim Brewer",
          title: "Growth Strategy",
          linkedin: "https://www.linkedin.com/in/timdbrewer/"
        },
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/tomk.jpg",
          name: "Tom Kooy",
          title: "Board & Strategic Advisory",
          linkedin: "https://www.linkedin.com/in/tom-kooy-14ba3b73/"
        },
        {
          imageSrc: "https://cdn.feedmeeapp.com/static/images/juan.jpg",
          name: "Juan Otero",
          title: "Restaurant Industry",
          linkedin: "https://www.linkedin.com/in/joterovila/"
        },
      ]
    }
  }
  render() {
    return (
      <div className="section-team">
        <div className="container">
          <h2 className="pink">Meet the team</h2>
          <div className="team-wrapper">
            <h3>Management Team</h3>
            <div className="team-management">
              {this.state.team.map(
                (member, key) => (
                  <div className="team-list" key={key}>
                    <div className="team-image">
                      <img src={member.imageSrc} alt={member.name}/>
                    </div>
                    <div className="team-desc">
                      <h3>{member.name}</h3>
                      <p>{member.title}</p>
                      <a href={member.linkedin} target="_blank">
                        <img src={this.linkedinIcon} alt="linkedin"/>
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="team-wrapper">
            <h3>Advisors</h3>
            <div className="team-advisors">
              {this.state.advisors.map(
                (member, key) => (
                  <div className="team-list" key={key}>
                    <div className="team-image">
                      <img src={member.imageSrc} alt={member.name}/>
                    </div>
                    <div className="team-desc">
                      <h3>{member.name}</h3>
                      <p>{member.title}</p>
                      <a href={member.linkedin} target="_blank">
                        <img src={this.linkedinIcon} alt="linkedin"/>
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const DrivingFeedmeeSection = (props) => {
  return (
    <div className="section-hiw">
      <Grid>
        <Col sm={6}>
          <h2 className="pink">The driving force behind Feedmee</h2>
          <img src={props.imageTop} alt={props.imageToplt} className="visible-xs"/>
          <h4>Why did we start Feedmee</h4>
          <p>
            We want to stop world hunger with one simple idea: What if every time you eat out, you could help someone in need eat, too. Many people are unaware that the world produces enough food to feed everyone, but one in nine people in the world still goes hungry.
          </p>
          <p>
            Here at Feedmee we say enough is enough. We have taken a stand against hunger by teaming up with local businesses that care about the community and those in need.
          </p>
          <h4>The idea didn’t come from nowhere</h4>
          <p>
            Tyler Spooner, the co-founder of Feedmee, became an orphan at the age of 10 and grew up in foster homes. In his early years he spent some time on the streets and relied heavily on charities for food and support.
          </p>
          <blockquote>
            <p>“I wanted to find away to help people that are in the hard situation that I faced growing up, so I came up with the idea of Feedmee.”</p>
          </blockquote>
          <p>
            Tyler is passionate about fighting the hunger problems that many children face every year. He recalls numerous times in his youth, going to school hungry without food and wishing he had a packed lunch like the other kids in the class.
          </p>
        </Col>
        <Col sm={5} smOffset={1} className="hidden-xs">
          <img src={props.imageTop} alt={props.imageToplt}/>
          <img src={props.imageBottom} alt={props.imageBottomAlt}/>
        </Col>
      </Grid>
    </div>
  )
}

class ImpactEventsPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {events: [
      {
        hidden: false,
        link: "https://medium.com/feedmee-app/feedmee-expresstival-2016-4188e40da7dc",
        image: "https://cdn.feedmeeapp.com/static/images/event-image@2x.jpg",
        name: "Expresstival 2016",
        desc: "PERTH AUSTRALIA"
      },
      {
        hidden: false,
        link: "https://medium.com/feedmee-app/feedmee-food-challenges-773701228a07",
        image: "https://cdn-images-1.medium.com/max/1600/1*gUGWwebYDgGS_jkxhcAxUw.jpeg",
        name: "Feedmee Food Challenges 2016",
        desc: "PERTH AUSTRALIA"
      },
      {
        hidden: false,
        link: "https://medium.com/feedmee-app/christmas-is-for-everyone-c1ceb46d6529",
        image: "https://cdn-images-1.medium.com/max/2000/1*e8JQak1LezIQhnBShZzmWA.jpeg",
        name: "Christmas Is For Everyone",
        desc: "AUSTRALIA"
      },
      {
        hidden: true,
        link: "https://medium.com/feedmee-app/easter-is-for-everyone-e7c64fb8626a",
        image: "https://cdn-images-1.medium.com/max/2000/1*ULZK-7bu3qu3Ah8Bm-04yQ.jpeg",
        name: "Easter Is For Everyone",
        desc: "AUSTRALIA"
      }
    ]}
  }
  render() {
    return (
      <div className="section-events">
        <div className="container">
          <h2 className="pink">Impact Events</h2>
          <h4>We run impact events that aim to fight hunger, one meal at a time.</h4>
          {this.state.events.filter((e) => !e.hidden).map(
            (event, k) => (
              <div className="col-sm-4 event-list" key={k}>
                <a href={event.link}>
                  <img src={event.image} alt={event.name}/>
                    <div className="event-desc">
                      <p>{event.name}</p>
                      <span>{event.desc}</span>
                    </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    )
  }
}

export {
  OpeningSection, DownloadSection, MealsDonatedSection, ImpactEventsPreview,
  FeaturedPressSection, BenefitsSection, TeamSection, DrivingFeedmeeSection
}