import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Nvbar from './Components/Navbar';
import PokeC from './Views/PokeC';
import Home from './Views/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nvbar/>
    <Routes>
      <Route path='/' element={<Navigate to="/React-Router-II" />} />
      <Route path='/React-Router-II' element={<Home/>} />
      <Route path='/PokeC/:pokeName' element={ <PokeC/> } />
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
