import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { IoSearch } from "react-icons/io5";
import User from '../image/user/user.png';
import Logo from '../image/logo/brand.png';

import './navigationBar.css';
function NavigationBar() {
  return (
    <Navbar expand="lg" className='px-4 pt-4 background' sticky='top'>
      <Container fluid>
        <Navbar.Brand>
          <img
              src={Logo}
              className="d-inline-block align-top w-75"
              alt="brandi logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <NavLink to='/home' className='me-5 link text-decoration-none'>Home</NavLink>
                <NavLink to='/about' className='me-5 link text-decoration-none'>About</NavLink>
                <NavLink to='/shop' className='link text-decoration-none'>Shop</NavLink>
            </Nav>
            <IoSearch size={20} color="#373737" className="me-3" />
            <NavLink to='/profile' className='text-decoration-none'>
              <img
                  src={User}
                  className="d-inline-block align-top"
                  height="42"
                  width="42"
                  alt="user"
              />
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;