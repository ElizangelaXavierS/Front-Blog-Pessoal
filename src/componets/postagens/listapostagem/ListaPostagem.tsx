import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


function ListaPostagem() {
    const [postagens, setPostagens] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const history = useNavigate();

    useEffect(() => {
        if (token === '') {
            toast.info('Você precisar está logado', {
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
    }, [])

    async function getPostagem() {
        await buscar("/postagens", setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [postagens.length])
    return (
        <>
            {
                postagens.map(postagem => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {postagem.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagem.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagem.tema?.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">               
                                    Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
                                </Typography>
                                <Typography variant="body2" component="p">               
                                    Postado por:{postagem.usuario?.nome}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button variant="contained" className='btnAtualizarPos' size='small' color="primary" >
                                                Editar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='btndeletarpos'>
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
        </>)
}

export default ListaPostagem;
