import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import '../NavBar/NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Shop from '../Shop/Shop';




function NavBar() {

  const navigate = useNavigate();
  const routeLogin = () => { navigate('/login') } // Serve per al click del bottone login, passare alla pagina /login

  
 const getUserAvatar = () => {
    return JSON.parse(localStorage.getItem('userAvatar'))
  }
  const getUserName = () => {
    const name = JSON.parse(localStorage.getItem('userName'))
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  //funzione logout

  const [refresh, setRefresh] = useState(0)

  const logout = () => {
    localStorage.removeItem('userName')
    localStorage.removeItem('userAvatar')
    localStorage.removeItem('userToken')
    setRefresh(refresh + 1)
  }



  return (
    <Navbar expand="lg" className="bg-body-tertiary bgcolor" >
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>
        <img src="https://res.cloudinary.com/dsmb3mzsp/image/upload/v1693936569/CapstoneEpicode/logo_made_in_valle_d_itria_amrg1b.png" alt="Descrizione dell'immagine" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link className='text-decoration-none text-dark fw-bold font' to="/">Eventi Puglia(da definire)</Link>
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca Luogo"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
            <Shop /> 
           
            {getUserAvatar() !== null &&
              <>
                <span className='ms-2 d-flex align-items-center text-nowrap'> Benvenuto/a {getUserName()}</span>
                <div className='ms-2 p-1 ' variant="outline-success" >

                  <img className='rounded-circle'
                    src={getUserAvatar()}
                    alt="User Avatar"
                    style={{ maxWidth: '2rem' }}

                  />
                </div>
                <Button className="bg-info ms-2 me-4" onClick={logout}> Logout</Button>
              </>
            }
            {getUserAvatar() === null &&
              <Button className="bg-info ms-2 me-4" onClick={routeLogin}> Login</Button>
            }


          </Form>
        </Navbar.Collapse>

        
      </Container>

      
    </Navbar>


  );
}

export default NavBar;