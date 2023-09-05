import React, { useState }from 'react';
import NavBar from '../NavBar/NavBar';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './CSS/FormNewEvents.css';

function FormNewEvents ()  {
    const navigate = useNavigate();

    const [titleValue, setTitleValue] = useState('')
    const [descrizioneValue, setDescrizioneValue] = useState('')
    const [imgValue, setImgValue] = useState('')
    const [luogoValue, setLuogoValue] = useState('')
    const [prezzoValue, setPrezzoValue] = useState('')
    const [dataValue, setDataValue ] = useState('')
    
    
    const handleFileChange = (e) => {
      setImgValue(e.target.files[0])
  }
  const uploadFile = async (file) => {
    const fileData = new FormData() //metodo per appendere file data in un form
    fileData.append('img', file)

    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/events/cloudUpload`,
            {
                method: 'POST',
                body: fileData,
            }
        )
        return await response.json()
       
    } catch (error) {
        console.error('File uploads error!')
    }
}

const handleSubmit = async (event) => {
    event.preventDefault()

    setTitleValue(event.target.value)
    setDescrizioneValue(event.target.value)
    setImgValue(event.target.value)
    setLuogoValue(event.target.value)
    setDataValue(event.target.value);
    setPrezzoValue(event.target.value)

    if (imgValue) {
        try {
            const uploadedFile = await uploadFile(imgValue)
            console.log(uploadedFile)

            const postFormData = {
                titolo: titleValue,
                descrizione: descrizioneValue,
                luogo: luogoValue,
                datetime: dataValue,
                prezzo: prezzoValue,
                immagine: uploadedFile.imgUrl,
            }

            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/newevents/create`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postFormData),
                }
            )
            return response.json()
            .then((response)=> navigate("/"))
        } catch (error) {
            console.error('Failed to save the post')
        }
    } else {
        console.error('Please select at least one file to upload')
    }
}



  return (
   <>
   <NavBar />

     <h1 className='text-light d-flex justify-content-center p-3'>Benvenuto/a, inizia subito, crea il tuo evento! </h1>

   <Form
                className="m-5 form-color p-4 border rounded-5 "
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                
            >
                <Form.Group controlId="formTitle">
                    <Form.Label>Titolo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il titolo"
                        className='border border-dark'
                        onChange={(event) => setTitleValue(event.target.value)}
                       
                    />
                </Form.Group>

                <Form.Group controlId="formTitle">
                    <Form.Label>Luogo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il luogo"
                        className='border border-dark'
                        onChange={(event) => setLuogoValue(event.target.value)}
                       
                    />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Carica un'immagine</Form.Label>
                    <Form.Control 
                    type="file" 
                    className='border border-dark'
                     onChange={handleFileChange} />
                </Form.Group>

                <Form.Group controlId="formContent" className="mt-3">
                    <Form.Label>Descrizione</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        className='border border-dark'
                        placeholder="Inserisci il contenuto"
                        onChange={(event) => setDescrizioneValue(event.target.value)}
                        
                    />
                </Form.Group>

                <Form.Group controlId="formContent" className="mt-3">
                    <Form.Label>Prezzo</Form.Label>
                    <Form.Control
                        type="text"
                        className='border border-dark'
                        placeholder="Inserisci il prezzo"
                        onChange={(event) => setPrezzoValue(event.target.value)}
                        
                    />
                </Form.Group>
                <Form.Group controlId="formContent" className="mt-3">
                    <Form.Label>Data e Ora Evento</Form.Label>
                    <Form.Control
                        type="text"
                        className='border border-dark'
                        placeholder="Inserisci la data e l'inizione dell'evento"
                        onChange={(event) => setDataValue(event.target.value)}
                        
                    />
                </Form.Group>

                <Button className="ms-1 mt-5" type="submit">
                    Crea Post
                </Button>
            </Form>

   
   </> 
    
  )
}
export default FormNewEvents