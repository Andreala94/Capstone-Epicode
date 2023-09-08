import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../src/Components/Pages/ErrorPage'
import HomePage from './Components/Pages/HomePage';
import Login from './Components/Pages/Login';
import FormNewEvents from './Components/Pages/FormNewEvents';
import  DettagliEvento  from './Components/Pages/DettagliEvento';
import ProdectRouteCreaEvento from './middlewares/ProtectRouteCreaEvento'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        {/* <Route element={<ProdectRouteCreaEvento />}> */}
            <Route path='/newevent' element={<FormNewEvents />} />
        {/* </Route> */}
        <Route path='/dettagli/:id' element={<DettagliEvento />} />



        <Route  path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    
    
    
    </BrowserRouter>
  );
}

export default App;
