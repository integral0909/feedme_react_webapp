import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import { MainNav } from 'components/MainNav';
import {
  ImpactPage, SearchPage
} from "pages/MainPages";
import { initializeApp } from 'firebase';
import {RecipeRoutes} from "components/recipes/RecipesRoutes";
import {Footer} from "components/Footer";
import {NoMatch} from "pages/NoMatch";
import {DownloadBar} from "components/DownloadBar";
import {AboutPage} from "pages/AboutPage";
import {ForgotPasswordPage} from "pages/ForgotPasswordPage";
import ScrollToTop from "components/ScrollToTop";
import {Analytics} from "components/Analytics";
import ReactGA from "react-ga";

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-73297120-1');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.firebase = initializeApp({
      apiKey: "AIzaSyDJdcBZSwLlpWENN5oWZYQVZL0u7ZPSzhc",
      authDomain: "feedmee-appsppl-dev.firebaseapp.com",
      databaseURL: "https://feedmee-appsppl-dev.firebaseio.com",
      projectId: "feedmee-appsppl-dev",
      storageBucket: "feedmee-appsppl-dev.appspot.com",
      messagingSenderId: "704262352076"
    });
    this.state = {auth: {authService: this.firebase.auth.bind(this.firebase)}};
  }
  componentDidMount() {
    this.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((id_token) => {
          this.setState({
            auth: {
              user: user,
              authService: this.firebase.auth.bind(this.firebase),
              unboundAuthService: this.firebase.auth,
              token: id_token
            }
          });
        });
      } else {
        this.setState({auth: {
          authService: this.firebase.auth.bind(this.firebase),
        }});
      }
    });
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
        <div className="Feedmee-App">
          <Route path="/" component={Analytics}/>
          <MainNav auth={this.state.auth} />
          <DownloadBar/>
          <Switch>
            <Route exact path="/" component={SearchPage}/>
            <Route path="/impact" component={ImpactPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/recipe"
                   render={({match, location}) =>  <RecipeRoutes auth={this.state.auth}
                                                                 match={match} />}
            />
            <Route path="/reset-password"
                   render={() => <ForgotPasswordPage auth={this.state.auth}/>}/>
            <Route component={NoMatch}/>
          </Switch>
          <Footer/>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
