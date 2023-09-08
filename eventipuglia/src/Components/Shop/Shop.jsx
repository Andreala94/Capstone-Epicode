import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function Shop( ) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
   <Button className='ms-2' variant="outline-success" onClick={handleShow}><FontAwesomeIcon icon={faShoppingCart} /></Button>

      <Offcanvas  show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title  >
            <FontAwesomeIcon icon={faShoppingCart}/> ( Cad. )
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Aggiungi un evento...
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Shop;