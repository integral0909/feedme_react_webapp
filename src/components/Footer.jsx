import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'css/footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div  className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-2">
                  <h4>Feedmee</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/impact">Impact</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><a href="/blog/" target="_blank"
                           rel="noopener noreferrer">Blog</a></li>
                  </ul>
                </div>
                <div className="col-sm-2">
                  <h4>Recipes</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/recipes/search">Search recipes</Link></li>
                    <li><Link to="/recipes/browse">Browse recipes</Link></li>
                    <li><Link to="/recipes/saved">Saved recipes</Link></li>
                  </ul>
                </div>
                {/*<div className="col-sm-2">*/}
                  {/*<h4>Restaurants</h4>*/}
                  {/*<ul className="list-unstyled">*/}

                  {/*</ul>*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="col-sm-3 copyright-section">
              <small>
              <ul className="list-unstyled list-inline">
                <li><a href="/privacy/" target="_blank"
                       rel="noopener noreferrer">Privacy</a></li>
                <li>|</li>
                <li><a href="/terms/" target="_blank"
                       rel="noopener noreferrer">Terms of use</a></li>
              </ul>
              </small>
              <ul className="list-unstyled list-inline">
                <li>
                  <a href="https://www.instagram.com/feedmeeapp_au/" target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://cdn.feedmeeapp.com/static/images/instagram.svg"
                       alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Feedmeeapp/" target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://cdn.feedmeeapp.com/static/images/facebook.svg"
                       alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/FeedmeeA" target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://cdn.feedmeeapp.com/static/images/twitter.svg"
                       alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company-beta/13179226/" target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://cdn.feedmeeapp.com/static/images/linkedin.svg"
                       alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/feedmee-app" target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://cdn.feedmeeapp.com/static/images/medium.svg"
                       alt="medium" />
                  </a>
                </li>
              </ul>
              <small className="text-muted">&copy; 2017 Feedmee App Pty Ltd All Rights Reserved</small>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export {Footer}
