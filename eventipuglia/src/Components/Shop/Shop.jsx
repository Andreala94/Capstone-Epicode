import { useState } from 'react';
import { Button, Container, Row, Col, Offcanvas, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



function Shop() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [carrello, setCarrello] = useState(JSON.parse(localStorage.getItem("carrello")) || []);

  const navigate = useNavigate();
  const routeAcquista = () => { navigate('/profilo') }

  //Somma prezzo carrello

  const calcolaTotaleCarrello = () => {
    let totale = 0;

    if (biglietti) {
      for (const biglietto of biglietti) {
        if (parseInt(biglietto.prezzo) !== NaN) {
          totale += parseInt(biglietto.prezzo) * biglietto.quantita
        }
      }
    }

    return totale;
  };

  //Rimozione biglietto dal carrello
  const rimuoviBiglietto = (id) => {


    const nuovoCarrello = carrello.filter((biglietto) => biglietto.id !== id);
    localStorage.removeItem("carrello", id);
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));

  };




  //Incremento e decremento quantità
  const incrementaQuantita = (id) => {

    const bigliettoDaIncrementare = carrello.find((biglietto) => biglietto.id === id);

    if (bigliettoDaIncrementare) {

      bigliettoDaIncrementare.quantita++;
      localStorage.setItem("carrello", JSON.stringify(carrello));
      setCarrello([...carrello]);
    }
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
                            <Button className='bg-success rounded-circle py-1 px-2 border-0'><FontAwesomeIcon icon={faMinus} /></Button>
                          </Col>
                          <Col className=' p-0  '>


                            <input type="text" disabled value={biglietto.quantita} className='mx-0 text-center w-100' />

                          </Col>
                          <Col className='p-0 ms-2 '>
                            <Button className='bg-success rounded-circle py-1 px-2 border-0 m-0' onClick={() => incrementaQuantita(biglietto._id)}><FontAwesomeIcon icon={faPlus} /></Button>
                            <Button className='bg-danger border-0 p-1 mt-2'><FontAwesomeIcon icon={faTrash} /></Button>
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
            {localStorage.getItem('userToken') === null ? (
              // L'utente non è autenticato, mostra il bottone disabilitato
              <div className="text-center bg-light p-3">
                <p>Effettua Login</p>
                <Button variant="success" disabled>Acquista</Button>
              </div>
            ) : (
              // L'utente è autenticato, mostra il bottone abilitato
              <div className="text-center bg-light p-3">
                <Button variant="success"onClick={routeAcquista}>Acquista</Button>
              </div>
            )}
            

          </Container>

        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default Shop;