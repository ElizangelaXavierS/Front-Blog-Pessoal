
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import './CadastroUsuario.css'
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import UserCadastroUsuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    const history = useNavigate()

    const [usuario, setUsuario] = useState<UserCadastroUsuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [usuarioResult, setUsuarioResult] = useState<UserCadastroUsuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if (confirmarSenha === usuario.senha) {
            try {
                await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } catch (error) {
                toast.error('Verifique os campos!', {
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
        } else {
            toast.error('As senhas não são iguais!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setConfirmarSenha('')
            setUsuario({
                ...usuario,
                senha: ''
            })
        }
    }

    useEffect(() => {
    }, [usuario.nome])

    useEffect(() => {
        if (usuarioResult.id !== 0) {
            history('/login')
        }
    }, [usuarioResult])

    function back() {
        history('/login')
    }


    return (

        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'
        >
            <Grid item xs={6} className='imagemCadastro'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant='h4'
                            gutterBottom
                            component='h4'
                            align='center'
                            className='textosCadastroUsuario'
                        >
                            Cadastrar
                        </Typography>

                        <TextField
                            id='nome'
                            value={usuario.nome}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                            label='Nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            size='small'
                        />

                        <TextField
                            id='usuario'
                            value={usuario.usuario}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                            label='Usuário'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            size='small'
                        />

                        <TextField
                            id='foto'
                            value={usuario.foto}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                            label='Foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth
                            size='small'
                        />

                        <TextField
                            id='senha'
                            value={usuario.senha}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            size='small'
                        />

                        <TextField
                            id='confirmarsenha'
                            value={confirmarSenha}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                            label='Confirmar Senha'
                            variant='outlined'
                            name='confirmarsenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            size='small' />

                        <Box marginTop={2} textAlign={'center'}>
                            <Button type='submit' variant='contained' className='btnCadastrar' >
                                Cadastrar
                            </Button>
                            
                            <Button  onClick={back} size='large' variant='contained' className='btnCancelar'>
                                Cancelar
                            </Button>                      

                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>

    );


}

export default CadastroUsuario;