import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { buscarId } from "../../services/Service";
import { Container, Grid } from "@material-ui/core";


function Perfil(){

const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);

const usuarioId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
);

const[usuario, setUsuario] = useState<Usuario>({
    id: +usuarioId,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
});

async function getUsuarioById(id: number){
    await buscarId(`/usuarios/${id}`, setUsuario, {
        Headers: {
            'Authorization': token
        }
    })
}

useEffect(() => {
    getUsuarioById(+usuarioId)
}, [])
return(
    <>
     <Container> 
       

     </Container>
    </>
)}

export default Perfil;