import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { buscar } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);
  const history = useNavigate();

  useEffect(() =>{
    if(token === ''){
      toast.error('Você Precisar está logado!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      history("/login")
    }
  } ,[token])

  async function getTema() {
    await buscar("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
    
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map( tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className='btnAtualizarTema' size='small' color="primary" >
                    Editar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`}  className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className='btndeletarTema'>
                    Deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
    </>
  );
}


export default ListaTema;