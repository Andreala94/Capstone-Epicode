import React, { useState, useEffect } from "react"
import NavBar from '../NavBar/NavBar'
import Carosello from "../Welcome/Carosello"
import NewEvents from "../Pages/NewEvents"
import ListaEventi from "../CardEventi/ListaEventi"
import { Footer } from "../Footer/Footer"



function HomePage(){

  const [arrayEventi, setArrayEventi] = useState([])

    const getEventiApi = async () => {
        try {
            const data = await fetch('http://localhost:6060/eventi')

            const response = await data.json()

            setArrayEventi(response.eventi)
        } catch (error) {
            console.log('Errore nella risposta!')
        }
    }

    useEffect(() => {
        getEventiApi()
    }, [])


  return(
    <>
    <NavBar />
    <Carosello />  
    <NewEvents />
    <ListaEventi eventi={arrayEventi} />
    <Footer />
    </>

  
  )
  
}


export default HomePage