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
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                CadastrarTema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Login
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