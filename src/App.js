import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import { MainNav } from './MainNav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav></MainNav>
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
