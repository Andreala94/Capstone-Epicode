import React from "react";
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


//? Struttura Card 

const CardEventi = ({  img, prezzo, title, luogo, data, descrizione }) => {
    return(
        <Card >
        <Card.Img variant="top" src={img} style={{"width": "100%" , "height": "auto"}} />
        <Card.Body>
          <label className="mb-1">Titolo:</label>
          <Card.Title>{title}</Card.Title>

          <label className="mb-1 fw-bold">Descrizione:</label>
          <Card.Text >{descrizione}</Card.Text>

          <label className="mb-1">Luogo:</label>
          <Card.Text className="fw-bold"><FontAwesomeIcon icon={faLocationDot} /> {luogo}</Card.Text>

          <label className="mb-1">Data Evento:</label>
          <Card.Text className="fw-bold">{data}</Card.Text>

          <label className="mb-1">Prezzo:</label>
          <Card.Text className="fw-bold">{prezzo}</Card.Text>

          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card> 
    )
}

export default CardEventi