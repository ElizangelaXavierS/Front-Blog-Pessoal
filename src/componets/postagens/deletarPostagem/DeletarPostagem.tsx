
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import './DeletarPostagem.css';
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import useLocalStorage from "react-use-localstorage";
import { useEffect, useState } from "react";
import { buscarId, deleteId } from "../../../services/Service";

function DeletarPostagem() {
    const history = useNavigate();
    const {id} = useParams<{id:string}>();
    const [token, setToken]= useLocalStorage('token');
    const [postagem, setPostagens] = useState<Postagem>();

    useEffect(() => {
        if(token === ""){
            alert("Você precisar está logado!");
            history("/login");
        }
    }, [token]);

    useEffect(() => {
        if(id !== undefined){
            findById(id);
        }
    }, [id]);

    async function findById(id: string){
        buscarId(`/postagens/${id}`, setPostagens, {
            headers: {
                "Authorization" : token
            }
        })
    }

    function sim(){
        history('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization' : token
            }
        });
        alert("Postagem deletada com sucesso!")
    }

    function nao (){
        history('/postagens')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a postagem?
                            </Typography>
                            <Typography color="textSecondary" >
                                {postagem?.titulo}
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
                                size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>

                            <Box>
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
export default DeletarPostagem;