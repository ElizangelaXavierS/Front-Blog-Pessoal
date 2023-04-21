import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from "react-router-dom";
import'./Navbar.css'

function Navbar(){
    return(
    <> <AppBar className="navbar" position="static" >
                <Toolbar variant="dense">
                    <Box className="cursor"  display={'flex'} justifyContent={'space-between'} width={'100%'}>
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
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
                        
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                CadastrarTema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>  
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
    </>
    )
}

export default Navbar;