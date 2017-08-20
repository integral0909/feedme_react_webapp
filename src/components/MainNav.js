import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/feedmee_logo.png';
import '../css/MainNavbar.css'
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
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/impact">
                <NavItem eventKey={1}>Impact</NavItem>
              </LinkContainer>
              <LinkContainer to="/recipes/search">
                <NavItem eventKey={2}>Search</NavItem>
              </LinkContainer>
              <LinkContainer to="/recipes/browse">
                <NavItem eventKey={2}>Browse</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="My Recipes" id="basic-nav-dropdown">
                <LinkContainer to="/recipes/saved">
                  <MenuItem eventKey={3.1}>Saved recipes</MenuItem>
                </LinkContainer>
                <LinkContainer to="/shopping-list">
                  <MenuItem eventKey={3.2}>Shopping list</MenuItem>
                </LinkContainer>
                <LinkContainer to="/meal-plan">
                  <MenuItem eventKey={3.3}>Meal plan</MenuItem>
                </LinkContainer>
              </NavDropdown>
              {loginBlock}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export {MainNav};
