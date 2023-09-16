import { useState } from 'react';
import { Button, Container, Row, Col, Offcanvas, Card } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function Shop() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Somma prezzo carrello
  
  const calcolaTotaleCarrello = () => {
    let totale = 0;

    if (biglietti) {
      for (const biglietto of biglietti) {
        if( parseInt(biglietto.prezzo) !== NaN){
          totale += parseInt(biglietto.prezzo) * biglietto.quantita
        } 
      }
    }

    return totale;
  };


  const biglietti = JSON.parse(localStorage.getItem("carrello")); // prendiamo l'oggetto salvato nel localstorage


  return (
    <>
      <Button className='ms-2' variant="outline-success" onClick={handleShow}><FontAwesomeIcon icon={faShoppingCart} /></Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FontAwesomeIcon icon={faShoppingCart} />  ( Cad. )
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                {biglietti ? (
                  biglietti.map((biglietto) => (
                    <>
                    <div className='d-flex ' >
                        <Row>
                          <div className='col-3'>
                            
                               <Card.Img variant="top" src={biglietto.immagine} style={{ "width": "100%" }} />
                             </div>

                             <div className='col-5'>
                                <Card.Title>{biglietto.titolo}</Card.Title>
                               <Card.Text className="fw-bold">{biglietto.prezzo === 0 ? "Gratis" : (biglietto.prezzo + "€")}</Card.Text>
                             </div>

                            
                             <Col className='p-0'>
                             <Button>-</Button>
                             </Col>
                             <Col className=' p-0  '>
                              
                            
                              <input type="text" disabled value={biglietto.quantita} className='text-center w-100'/>
                           
                              </Col>
                             <Col className='p-0 ms-2 '>
                             <Button>+</Button>
                             <Button>*</Button>
                             </Col>
                     
                          
                         </Row>
                      </div>
                      <hr></hr>
                      
                      </>
                      )
                      )
                      )
                       : (<p>Carello Vuoto...</p>)}
                      
                      <p>Totale: € {calcolaTotaleCarrello()} </p>
               </Col>
            </Row>
          </Container>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Shop;