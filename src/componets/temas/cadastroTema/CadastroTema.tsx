import { Container, Typography, TextField, Button } from "@material-ui/core"
import './CadastroTema.css'


function CadastroTema() {
    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography 
                variant="h3" 
                color="textSecondary" 
                component="h1" 
                align="center" 
                >
                    Cadastrar Tema
                </Typography>

                <TextField 
                id="descricao" 
                label="Descrição" 
                variant="outlined" 
                name="descricao" 
                margin="normal" 
                fullWidth 
                />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;