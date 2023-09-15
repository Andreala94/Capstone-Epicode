import React from 'react'
import NavBar from '../NavBar/NavBar';
import '../Pages/CSS/Profilo.css'
import { Card, Container } from 'react-bootstrap';


const getUserAvatar = () => {
  return JSON.parse(localStorage.getItem('userAvatar'))
}

  //Funzione per prendere il nome utente Loggato
  const getUserName = () => {
    const name = JSON.parse(localStorage.getItem('userName'))
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

const Profilo = () => {
  return (
    <>
    <NavBar />

    <Container className="form-color d-flex justify-content-center p-3 mt-5 border rounded-5">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"   src={getUserAvatar()}/>
      <Card.Body>
        <Card.Title>{getUserName()}</Card.Title>
      </Card.Body>
    </Card>
    <span className='d-flex'>I miei ordini:</span>
    </Container>
    </>
    
  )
}
export default Profilo;