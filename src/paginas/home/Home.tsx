import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import TabPostagem from '../../componets/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../componets/postagens/modalpostagem/ModalPostagem';

function Home(){
    return(
        <>
        <Grid container 
        direction="row" 
        justifyContent="center" 
        alignItems="center"
        className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography 
                        variant="h3" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h3" 
                        align="center" 
                        className='titulo' 
                        >
                            Seja bem vindo!
                        </Typography>
                        <Typography 
                        variant="h5" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h5" 
                        align="center" 
                        className='titulo'
                        >
                            Expresse aqui os seus pensamentos e opiniões!
                            </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>

                        <Button 
                        variant="outlined" 
                        className='botao'
                        >
                            Ver Postagens
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/NRwf49I.png" 
                    alt="" 
                    className='fotoHome' />
                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );

}

export default Home;