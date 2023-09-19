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
// Funzione  get tramite token per prendere i biglietti
const getBigliettiShop = async () =>{
  
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/shop/biglietto`,
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    
  } catch (error) {
    console.log(error);
  }
}




const Profilo = () => {
  return (
    <>
    <NavBar />

    <Container className="form-color d-flex flex-column align-items-center p-3 mt-5 border rounded-5">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"   src={getUserAvatar()}/>
      <Card.Body>
        <Card.Title>Ciao: {getUserName()}</Card.Title>
      </Card.Body>
    </Card>
    <p className='fw-bold'>I miei ordini:</p>
      
    </Container>
    </>
    
  )
}
export default Profilo;