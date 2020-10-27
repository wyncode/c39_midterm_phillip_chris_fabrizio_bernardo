import React from 'react';
import { NavLink }from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavMenu.css';
import { GiBasketballBasket } from 'react-icons/gi';


function NavMenu() {
  return (
    <div>
      <Navbar className='navbar' expand="sm">
        <NavLink to="/">
          <Navbar.Brand style={{ color:'#FF5A09' }}>
          <GiBasketballBasket className='navbar-icon' size={50} />
          App Name
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink style={{ color:'#fff', paddingLeft: '0.5rem', paddingRight: '0.5rem' }} to="/">Home</NavLink>
            <NavLink style={{ color:'#fff', paddingLeft: '0.5rem', paddingRight: '0.5rem' }} to="/players">Players</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavMenu;