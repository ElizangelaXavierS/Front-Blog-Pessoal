import Navbar from './componets/estaticos/navbar/Navbar';
import Footer from './componets/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

import './App.css'
import Home from './paginas/home/Home'
import ListaTema from './componets/temas/listatema/ListaTema';
import ListaPostagem from './componets/postagens/listapostagem/ListaPostagem';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    <Route path="/temas" element={<ListaTema />} />
    <Route path="/postagem" element={<ListaPostagem />} />
  
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
)
  

}

export default App
