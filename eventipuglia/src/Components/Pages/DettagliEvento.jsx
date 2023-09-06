import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


 const DettagliEvento = () => {

    const [titleValue, setTitleValue] = useState('')
    const [descrizioneValue, setDescrizioneValue] = useState('')
    const [imgValue, setImgValue] = useState(null)
    const [luogoValue, setLuogoValue] = useState('')
    const [dataValue, setDataValue] = useState('')
    const [prezzoValue, setPrezzoValue] = useState('')
   

    const {id} = useParams()
    const getEventoById = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/eventi/${id}`,
            {
                method: 'GET',
               
            }
        )
        const evento =  await response.json()

        setTitleValue(evento.evento.titolo)
        setLuogoValue(evento.evento.luogo)
        setImgValue(evento.evento.immagine)
        setDescrizioneValue(evento.evento.descrizione)
        setPrezzoValue(evento.evento.prezzo)
        setDataValue(evento.evento.detetime)

       
    } catch (error) {
        console.error('File uploads error!')
    }
}

getEventoById()

  return (
    <>
    <NavBar />

    <div>DettagliEvento:

    <Card >
        <Card.Img variant="top" src={imgValue} style={{"width": "100%" , "height": "auto"}} />
        <Card.Body>
          <label className="mb-1">Titolo:</label>
          <Card.Title>{titleValue}</Card.Title>

          <label className="mb-1 fw-bold">Descrizione:</label>
          <Card.Text >{descrizioneValue}</Card.Text>

          <label className="mb-1">Luogo:</label>
          <Card.Text className="fw-bold"><FontAwesomeIcon icon={faLocationDot} /> {luogoValue}</Card.Text>

          <label className="mb-1">Data Evento:</label>
          <Card.Text className="fw-bold">{dataValue}</Card.Text>
        

          <label className="mb-1">Prezzo:</label>
          <Card.Text className="fw-bold">{prezzoValue}</Card.Text>

          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card> 
    </div>
    </>
    
  )
}
export default DettagliEvento