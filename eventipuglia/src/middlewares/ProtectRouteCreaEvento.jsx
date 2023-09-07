import React from 'react'
import { Outlet } from 'react-router-dom'
import FormNewEvents from '../Components/Pages/FormNewEvents'

const auth = () => {
    return JSON.parse(localStorage.getItem('userLoggedIn')) // ci ristetuisce un booleano 
}

const ProtectRouteCreaEvento = () => {
 
    const isAuthorized = auth() // controlla se siamo autorizzati e ti salva il token con la funzione di sopra
    // const session = useSession()

    return isAuthorized ? <Outlet /> : <FormNewEvents /> 
  
}
export default ProtectRouteCreaEvento