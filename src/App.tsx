import Navbar from './componets/estaticos/navbar/Navbar';
import Footer from './componets/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

import './App.css'
import Home from './paginas/home/Home'
import ListaTema from './componets/temas/listatema/ListaTema';
import ListaPostagem from './componets/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './componets/postagens/cadastropostagem/CadastroPostagem';
import CadastroTema from './componets/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componets/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componets/temas/deletarTema/DeletarTema';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/logim" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    <Route path="/temas" element={<ListaTema />} />
    <Route path="/postagens" element={<ListaPostagem />} />
    <Route path="/formularioPostagem" element={<CadastroPostagem />} />
    <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
    <Route path="/formularioTema" element={<CadastroTema />} />
    <Route path="/formularioTema/:id" element={<CadastroTema />} />
    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
    <Route path="/deletarTema/:id" element={<DeletarTema />} />
    
  
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
)
  

}

export default App
