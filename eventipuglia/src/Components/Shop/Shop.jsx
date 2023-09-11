import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function Shop() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const biglietti = JSON.parse(localStorage.getItem("carrello")); // prendiamo l'oggetto salvato nel localstorage
  



  return (
    <>
      <Button className='ms-2' variant="outline-success" onClick={handleShow}><FontAwesomeIcon icon={faShoppingCart} /></Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  >
            <FontAwesomeIcon icon={faShoppingCart} /> ( Cad. )
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {biglietti ? (
            biglietti.map((biglietto) => (
              <p key={biglietto.id}>{JSON.stringify(biglietto)}</p>))  ) : ( <p>Carello Vuoto...</p>)} 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Shop;