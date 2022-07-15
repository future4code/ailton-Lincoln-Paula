import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon} from '@chakra-ui/react'
import {DeleteIcon, CheckIcon, CloseIcon, ArrowBackIcon } from '@chakra-ui/icons'
import {GlobalStyle, DivContainer, Main, Header, TextHeader, DivBotoes, CardTrip, DivBackground, Text,
  DivHeaderBackground, DivHeaderBackgroundButton, DivHeaderBackgroundYellow } 
from '../../style/AdminDetailTripPageStyle'
import { BASE_URL } from '../../constants/Url/url'
import {useRequestDataGet} from './../../constants/Hook/useRequestData' 
import {Deslogar} from './../../constants/Functions/Logout'
import axios from 'axios'

function AdminDetailTrip(props) {

 const Navigate = useNavigate() 

  useEffect(() =>{
    if(localStorage.getItem('token') === null){
        
          goToPage(Navigate, 'login')
        
        }
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip/:id`,{
      headers:{
        auth: token
      }
    })
    .then((res) =>{
    })
    .catch((err)=>{
    })
  },[])


  return (

    <ChakraProvider>

    <DivContainer>
      <GlobalStyle>
        </GlobalStyle>

        <Header>
        <TextHeader onClick={() => goToPage(Navigate, 'home')}>
        LabeX
          <DivBotoes>

          <Stack direction='row' marginLeft={'120px'} spacing={4} align='center'>
          </Stack>

          </DivBotoes>

        </TextHeader>

        <Button
        colorScheme={'red'}
        marginBlock={6}
        marginRight={2}
        onClick={() => Deslogar(Navigate)}   
        rightIcon={<CloseIcon></CloseIcon>}
        >
          Logout</Button>

        </Header>
      <Main>
        <DivBackground>
          <DivHeaderBackground>
      <Text>Detalhes da viagem!
      </Text>
        <DivHeaderBackgroundButton>
      <DivHeaderBackgroundYellow>

        <Button

colorScheme={'purple'}
marginBlock={6}
marginRight={2}
leftIcon={<ArrowBackIcon></ArrowBackIcon>}
onClick={() => goToPage(Navigate, 'admin/trips/list')}

>
  Voltar</Button>
      </DivHeaderBackgroundYellow>



          <Button
          onClick={() => goToPage(Navigate, 'admin/trips/create')}
          marginBlock={4}
          colorScheme={'green'}
          rightIcon={<CheckIcon/>}
          >Criar Viagem</Button>
          
        </DivHeaderBackgroundButton>
          </DivHeaderBackground>


      <div>AQUI VAI OS DETALHES</div>
      
        </DivBackground>


      </Main>
    

    </DivContainer>

    </ChakraProvider>
  )
}

export default AdminDetailTrip