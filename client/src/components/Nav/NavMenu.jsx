import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavMenu.css';
import { GiBasketballBasket } from 'react-icons/gi';


function NavMenu() {
  return (
    <div>
      <Navbar className='navbar' expand="sm">
        <Navbar.Brand href="#home" style={{ color:'#FF5A09' }}>
          <GiBasketballBasket className='navbar-icon' size={50} />App Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link>
            <Nav.Link href="#players" style={{ color:'#fff' }}>Players</Nav.Link>
            <NavDropdown title="Teams" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Team 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavMenu;