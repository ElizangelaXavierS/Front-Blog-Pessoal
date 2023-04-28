import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';

import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import './CadastroPostagem.css'
import { buscar, buscarId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import Usuario from '../../../models/Usuario';
import { toast } from 'react-toastify';


function CadastroPostagem() { 
    const history = useNavigate();
    const {id} = useParams<{id:string}>();
    const [temas, setTemas] = useState<Tema[]>([]);
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const usuarioId = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );

        useEffect(() => {
            if(token === ""){
                toast.error('Você precisa está logado!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                history("/login");
            }
        }, [token]);

        
    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })

    const [postagem, setPostagem] = useState<Postagem>(
        {
            id: 0,
            titulo:'',
            texto: '',
            data: '',
            tema: null,
            usuario: null
        });

        const[usuario, setUsuario] = useState<Usuario>({
            id: +usuarioId,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        });

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: usuario
        })
    }, [tema]);

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await buscar("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscarId(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso!', {
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
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });;
        }
        back()

    }

    function back() {
        history('/postagens')
    }



    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} >
                <Typography
                variant="h3" 
                color="textSecondary" 
                component="h1" 
                align="center" 
                >
                {tema.id !== 0 ? 'Editar postagem' : 'Cadastrar postagem'}
                </Typography>
                <TextField 
                value={postagem.titulo}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)} 
                id="titulo" 
                label="Título" 
                variant="outlined" 
                name="titulo" 
                margin="normal" 
                fullWidth 
                />
                <TextField 
                value={postagem.texto}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)} 
                id="texto" 
                label="Texto" 
                name="texto" 
                variant="outlined" 
                margin="normal" 
                fullWidth 
                />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(event) => buscarId(`/temas/${event.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }

                        })}>
                            {
                                temas.map( tema => (
                                    <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                ))
                            }
                    </Select>

                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>

                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;