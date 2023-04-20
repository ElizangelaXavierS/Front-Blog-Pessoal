import axios from "axios";

export const api = axios.create({
    baseURL:'https://blogpessoal-nc48.onrender.com'
})

export const cadastrarUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}


export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
}
export const getAll = async(url: any, setDados: any, header: any) => {
    const resposta = await api.get(url,header)
    setDados(resposta.data.)
}



