import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'css/downloadNavbar.css'

class DownloadBar extends Component {
  appStoreLink = 'https://itunes.apple.com/au/app/feedmee-discover-food-4-you-eat-out-give-back/id1120549992?mt=8';
  androidLink = "http://eepurl.com/cPK-Ab";
  render() {
    return (
      <Navbar inverse fixedTop className="download-navbar">
        <Nav pullRight className="hidden-xs">
          <Navbar.Text>Download app</Navbar.Text>
          <NavItem eventKey={2} href={this.appStoreLink} className="nav-btn">
            <i className="fa fa-apple"/> AppStore
          </NavItem>
          <NavItem eventKey={3} href={this.androidLink} className="nav-btn">
            <i className="fa fa-android"/> PlayStore
          </NavItem>
        </Nav>
        <ul className="list-inline visible-xs pull-left">
          <li>Download Feedmee App</li>
        </ul>
        <ul className="list-inline visible-xs pull-right">
          <li><a href={this.appStoreLink}><i className="fa fa-apple"/></a></li>
          <li><a href={this.androidLink}><i className="fa fa-android"/></a></li>
        </ul>
      </Navbar>
    )
  }
}

export {DownloadBar}
