import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" className='tabPostagem' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre o ptojeto" value="2" />
                        <Tab label="Desenvolvedora" value="3" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography 
                    variant="h5" 
                    gutterBottom 
                    color="textPrimary" 
                    component="h5" 
                    align="center" 
                    className="titulo"
                    >
                        Sobre-nós
                    </Typography>

                    <Typography 
                    variant="body1" 
                    gutterBottom 
                    color="textPrimary" 
                    align="justify"
                    >   
                        <h3> Descrição API</h3>
                        <p>
                            Uma API (Interface de Programação de Aplicativos, do inglês Application Programming Interface) é um conjunto de regras e protocolos que permitem a comunicação e interação entre diferentes softwares. Ela define como dois ou mais sistemas podem se comunicar e trocar informações de forma estruturada e padronizada.
                        </p>

                        <p>
                            Em termos simples, uma API é como uma ponte que permite que aplicativos e serviços se conectem e compartilhem dados ou funcionalidades uns com os outros. Ela estabelece uma interface, geralmente baseada em URLs (Uniform Resource Locators), que permite que desenvolvedores de software solicitem dados ou executem ações em outro sistema, como um servidor ou serviço web, de forma programática.
                        </p>

                        <p>
                            As APIs são amplamente utilizadas na construção de aplicativos modernos, permitindo que diferentes serviços e plataformas se integrem e trabalhem juntos de forma eficiente. Elas são usadas em uma ampla gama de contextos, incluindo desenvolvimento de aplicativos web, aplicativos móveis, integração de sistemas, automação de processos e muito mais. As APIs são uma peça fundamental da economia digital atual, possibilitando a criação de novos produtos e serviços ao aproveitar a funcionalidade de sistemas e serviços existentes.
                        </p>
                    
                    
                    </Typography>
                </TabPanel>

                <TabPanel value="3" >
                    <Box display="flex"  justifyContent="space-around" >
                        <Box>
                        <h1>Elizangela Xavier</h1>
                        <p> 
                            Desenvolvedora Java Full Stack com conhecimentos em
                            tecnologias como Spring Boot, MySQL, Docker, HTML, CSS,
                            JavaScript TypeScript e React. Venho de tensição de carreira da area do 
                            comercio que me permitiu desenvolver habilidades como
                            comunicação, adaptabilidade, trabalho em equipe e
                            persistência. Venho de transição de carreira o que me permite
                            ter uma visão diferenciada e abertura para novos desafios
                        </p>
                        <img src='https://i.imgur.com/jVb4cxw.png' height='50%' width='70%'/>
                        </Box>
                        <Box>
                        <img src="https://github.com/ElizangelaXavierS.png" alt="Foto do perfil" />
                        </Box>                     
                        
                    </Box>
                </TabPanel>
                
            </TabContext>
        </>
    );
}
export default TabPostagem;