import { Container, Typography, TextField, Button } from "@material-ui/core"
import './CadastroTema.css'
import { useNavigate, useParams } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import Tema from "../../../models/Tema";
import { buscarId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";


function CadastroTema() {
    const history = useNavigate();
    const {id} = useParams<{id:string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao:''
    })

    useEffect(() => {
        if(token === ""){
            toast.error('Postagem atualizada com sucesso!', {
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
            history("/login");
        }
    }, [token]);

    useEffect(() => {
        if(id !== undefined){
            findById(id);
        }
    }, [id]);

    async function findById(id: string){
        buscarId(`/temas/${id}`, setTema, {
            headers: {
                "Authorization" : token
            }
        })
    }

    function updatedTema(event: ChangeEvent<HTMLInputElement>){
        setTema({
            ...tema,
            [event.target.name]: event.target.value,
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso!', {
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
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso!', {
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
        back()
    }

    function back() {
        history('/temas')
    }
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography 
                variant="h3" 
                color="textSecondary" 
                component="h1" 
                align="center" 
                >
                {tema.id !== 0 ? 'Editar tema' : 'Cadastrar tema'}
                </Typography>

                <TextField 
                value={tema.descricao}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedTema(event)} 
                id="descricao" 
                label="Descrição" 
                variant="outlined" 
                name="descricao" 
                margin="normal" 
                fullWidth 
                />
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;