import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../src/Components/Pages/ErrorPage'
import HomePage from './Components/Pages/HomePage';
import Login from './Components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/login' element={<Login />} />



        <Route  path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    
    
    
    </BrowserRouter>
  );
}

export default App;
