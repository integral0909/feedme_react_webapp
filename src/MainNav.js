import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import logo from './assets/feedmee_logo.png';
import './MainNavbar.css'
import { LoginModal } from './LoginModal'


class MainNav extends Component {
  openLogin = () => {
    this.refs.loginModal.toggle()
  }
  render () {
    let loginBlock = null;
    if (!this.props.auth.user) {
      loginBlock = (
      <Navbar.Form pullRight>
        <LoginModal ref="loginModal" auth={this.props.auth} />
        <Button bsStyle="default" onClick={this.openLogin}>Login</Button>
      </Navbar.Form>
      )
    }
    return (
        <Navbar inverse fixedTop className="navbar-red">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={logo} alt="Feedmee" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Impact</NavItem>
            <NavItem eventKey={2} href="#">Search</NavItem>
            <NavItem eventKey={2} href="#">Browse</NavItem>
            <NavDropdown eventKey={3} title="My Recipes" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            {loginBlock}
          </Nav>
        </Navbar>
    );
  }
}

export {MainNav};
