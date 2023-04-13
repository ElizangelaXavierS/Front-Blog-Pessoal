import  React from 'react'
import Navbar from './componets/estaticos/navbar/Navbar';
import Footer from './componets/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

import './App.css'
import Home from './paginas/home/Home'

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
  
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
)
  

}

export default App
