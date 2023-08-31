import React from 'react';
import { json, useNavigate } from 'react-router-dom';

import '../NavBar/NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function NavBar() {
  const navigate = useNavigate();
  const routeLogin = () => { navigate('/login') } // Serve per al click del bottone login, passare alla pagina /login

  const getUserAvatar = () => {
    return JSON.parse(localStorage.getItem('userAvatar'))
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary bgcolor ">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Nome sito</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button className='ms-2' variant="outline-success"><FontAwesomeIcon icon={faShoppingCart} /></Button>
            {getUserAvatar() !== null &&
              <Button className='ms-2' variant="outline-success" >

                <img
                  src={getUserAvatar()}
                  alt="User Avatar"
                  style={{ maxWidth: '100%' }}
                />
              </Button>
            }

            <Button className="bg-info ms-2" onClick={routeLogin}> Login</Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;