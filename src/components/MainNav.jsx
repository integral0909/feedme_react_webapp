import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/feedmee_logo.png';
import '../css/MainNavbar.css'
import { LoginModal } from './LoginModal'
import {LogoutModal} from "./LogoutModal";
import {Link} from "react-router-dom";


class MainNav extends Component {
  constructor(props) {
    super(props)
    this.state = {loginModal: false, logoutModal: false}
  }
  toggleModal = (modalName) => {
    this.setState({[modalName]: !this.state[modalName]})
  }
  render () {
    let loginBlock = null;
    if (!this.props.auth.user) {
      loginBlock = (
      <Navbar.Form pullRight>
        <LoginModal auth={this.props.auth}
                    closeHandler={() => this.toggleModal('loginModal')}
                    showModal={this.state.loginModal} />
        <Button bsStyle="default" onClick={()=> this.toggleModal('loginModal')}>Login</Button>
      </Navbar.Form>
      )
    } else {
      loginBlock = (
        <NavDropdown
            eventKey={4}
            title={this.props.auth.user.displayName || this.props.auth.user.email}
            id="basic-nav-dropdown">
          <MenuItem eventKey={4.1} onClick={() => this.toggleModal('logoutModal')}>
            Logout
          </MenuItem>
          <LogoutModal auth={this.props.auth}
                      closeHandler={() => this.toggleModal('logoutModal')}
                      showModal={this.state.logoutModal} />
        </NavDropdown>
      )
    }
    return (
        <Navbar inverse fixedTop className="navbar-red">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><img src={logo} alt="Feedmee" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/impact">
                <NavItem eventKey={1}>Impact</NavItem>
              </LinkContainer>
              <LinkContainer to="/recipes/" exact>
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
