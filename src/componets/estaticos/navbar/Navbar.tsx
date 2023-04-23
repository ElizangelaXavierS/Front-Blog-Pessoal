import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    const history = useNavigate();

    function goLogout() {
        setToken('');
        alert('Usuário deslogado');
        history('/login')
    }
    return (
        <> <AppBar className="navbar" position="static" >
            <Toolbar variant="dense">
                <Box className="cursor" display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    <Typography variant="h5" color="inherit">
                        Blog Pessoal
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="start">

                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Página Inicial
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/postagens" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Sair
                        </Typography>
                    </Box>


                </Box>

            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;