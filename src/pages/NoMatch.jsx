import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import egg04 from 'assets/404egg.svg';
import 'css/404.css'

class NoMatch extends Component {
  render() {
    return (
      <Grid className="page-404">
        <Row>
          <Col sm={12} className="text-center">
            <div className="alert-circle">
              <h1>4<img src={`${process.env.REACT_APP_CDN}${egg04}`} alt="0"/>4</h1>
            </div>

            <h1 className="pink">Eggscuse us!</h1>
            <h2>We can't seem to find the page you're looking for.</h2>
            <Col className="center-block text-left" style={{display: 'inline-block'}}>
              <p>Here are some helpful links instead:</p>
              <ul className="list-unstyled">
                <li><Link to="/recipe/search">Search recipes</Link></li>
                <li><Link to="/recipe/browse">Browse recipes</Link></li>
                <li><Link to="/recipe/saved">Saved recipes</Link></li>
                <li><Link to="/impact">Impact</Link></li>
                <li><a href="/team/" target="_blank"
                       rel="noopener noreferrer">Team</a></li>
                <li><a href="/blog/" target="_blank"
                       rel="noopener noreferrer">Blog</a></li>
                <li><a href="/privacy/" target="_blank"
                       rel="noopener noreferrer">Privacy</a></li>
                <li><a href="/terms/" target="_blank"
                       rel="noopener noreferrer">Terms of use</a></li>
              </ul>
            </Col>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export {NoMatch}