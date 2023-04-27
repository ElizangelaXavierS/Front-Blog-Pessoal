import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import './Login.css';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import './Login.css'
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';


function Login() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('')

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''

        })
        const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
            {
                id: 0,
                nome: '',
                usuario: '',
                senha: '',
                foto: '',
                token: ''
    
            })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await login('/usuarios/logar', userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
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
            toast.success('Usuário ou senha invalidos!', {
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
    }
    
    useEffect(() => {
        if(respUserLogin.token !== ''){
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))
            history('/homr');
        }
    }, [respUserLogin.token])
    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])


    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant='h4'
                            gutterBottom
                            component='h4'
                            align='center'
                        >
                            Entrar
                        </Typography>

                        <TextField
                            id='usuario'
                            value={userLogin.usuario}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                            label='Usuário'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            size='small'
                        />

                        <TextField
                            id='senha'
                            value={userLogin.senha}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            size='small' />

                        <Box marginTop={2} textAlign={'center'}>
                            <Button type='submit' variant='contained' className='button' fullWidth>
                                Logar
                            </Button>
                        </Box>
                    </form>

                    <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                        <Box marginRight={1}>
                            <Typography
                                variant='subtitle1'
                                gutterBottom align='center'

                            >
                                Ainda não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography
                                variant='subtitle1'
                                gutterBottom align='center'
                                className='textosLogin'
                            >
                                Cadastre-se
                            </Typography>

                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagemLogin'>

            </Grid>
        </Grid>
    )
}

export default Login;
