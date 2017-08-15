import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import { MainNav } from './MainNav'
import './App.css';
import { app, auth, initializeApp } from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize Firebase
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
        console.log('SIGNED IN:', user);
        this.setState({auth: {user: user, authService: this.firebase.auth.bind(this.firebase)}});
      } else {
        console.log('NO SIGNED IN USER');
        this.setState({auth: {authService: this.firebase.auth.bind(this.firebase)}});
      }
    });
  }
  render() {
    return (
      <div className="App">
        <MainNav auth={this.state.auth}></MainNav>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                  bsStyle="success"
                  bsSize="large"
                  href="http://react-bootstrap.github.io/components.html"
                  target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
