
import {Button, Grid, TextField, Typography } from '@material-ui/core';
import'./CadastroUsuario.css'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function CadastroUsuario (){
        return (
        
            <Grid container 
            direction='row' 
            justifyContent='center' 
            alignItems='center'
            >
                <Grid item xs={6} className='imagemCadastro'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form>
                            <Typography 
                            variant ='h4'
                            gutterBottom 
                            component='h4' 
                            align='center' 
                            className='textosCadastroUsuario'
                            >
                                Cadastrar
                            </Typography>

                            <TextField 
                            id='nome'
                            label='Nome' 
                            variant='outlined' 
                            name='nome' 
                            margin='normal' 
                            fullWidth 
                            size='small'
                            />

                            <TextField 
                            id='usuario' 
                            label='Usuário' 
                            variant='outlined' 
                            name='usuario' 
                            margin='normal' 
                            fullWidth 
                            size='small' 
                            />

                            <TextField 
                            id='foto'
                            label='Foto' 
                            variant='outlined' 
                            name='foto' 
                            margin='normal' 
                            fullWidth 
                            size='small'
                            />

                            <TextField 
                            id='senha' 
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
                                <Link to='/login' >
                                    <Button variant='contained' className='btnCancelar' >
                                    Cancelar
                                    </Button>
                                </Link>
                               
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            
        );
    

}

export default CadastroUsuario;