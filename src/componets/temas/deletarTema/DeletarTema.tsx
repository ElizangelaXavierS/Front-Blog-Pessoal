import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { buscarId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';



function DeletarTema() {
    const history = useNavigate();
    const {id} = useParams<{id:string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTemas] = useState<Tema>();

    useEffect(() => {
        if(token === ""){
            toast.error('Você precisa está logado', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else {
            history("/login");
        }
    }, [token]);

    useEffect(() => {
        if(id !== undefined){
            findById(id);
        }
    }, [id]);

    async function findById(id: string){
        buscarId(`/temas/${id}`, setTemas, {
            headers: {
                "Authorization" : token
            }
        })
    }

    function sim(){
        history('/temas')
        deleteId(`/temas/${id}`, {
            headers: {
                'Authorization' : token
            }
        });
        toast.success('Tema deletado com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }

    function nao (){
        history('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                        <Typography color="textSecondary">
                                Deseja deleta o tema?
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {tema?.descricao}
                            </Typography>                           
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button 
                                onClick={sim}
                                variant="contained" 
                                className="marginLeft" 
                                size='large' 
                                color="primary">
                                    Sim
                                </Button>
                            </Box>

                            <Box mx={2}>
                                <Button 
                                onClick={nao}
                                variant="contained" 
                                size='large' 
                                color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarTema;