import { useState } from 'react';
import { Button, Container, Row, Col, Offcanvas, Card } from 'react-bootstrap';


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
          <Container>
            <Row>
              <Col>
                {biglietti ? (
                  biglietti.map((biglietto) => (
                    <Card 
                    key={biglietto.id}
                    img={biglietto.img}
                    prezzo={biglietto.prezzo}
                    title={biglietto.titolo}
                    
                    >
                      {JSON.stringify(biglietto)}
                      </Card>))) : (<p>Carello Vuoto...</p>)}
              </Col>
            </Row>
          </Container>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Shop;