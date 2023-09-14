import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Pages/CSS/NewEvents.css'


function NewEvents() {
    const navigate = useNavigate();
    const routeNewEvent = () => {
      if( localStorage.getItem('userToken') === null  ) {
        navigate('/login?notAuthenticated')
      }else{
        navigate('/newevent')
      }}

  return (
   
    <div className='row m-0 px-5'>
       <div className='col' >
       <Button className='float-end me-5 '  id='bottone' variant="outline-light bg-success" onClick={routeNewEvent}> <FontAwesomeIcon icon={faPlus} className='me-2'  />Crea Evento</Button>
       </div>
      </div>
  
    
    )
};

export default NewEvents