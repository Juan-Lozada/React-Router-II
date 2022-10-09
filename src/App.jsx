import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Nvbar from './Components/Navbar';
import PokeC from './Components/PokeC';
import Home from './Views/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nvbar/>
    <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/React-Router-II' element={<Home/>} />
      <Route path='/pokemon/:pokeNombre' element={ <PokeC/> } />
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
