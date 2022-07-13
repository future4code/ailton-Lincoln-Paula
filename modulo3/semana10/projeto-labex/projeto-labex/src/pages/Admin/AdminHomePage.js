import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon} from '@chakra-ui/react'
import {DeleteIcon} from '@chakra-ui/icons'
import {GlobalStyle, DivContainer, Main, Header, TextHeader, DivBotoes, CardTrip, DivBackground, Text } 
from '../../style/AdminHomePageStyle'
import { BASE_URL } from '../../constants/Url/url'
import {useRequestDataGet} from './../../constants/Hook/useRequestData' 



function AdminHomePage() {

  
  
  const Navigate = useNavigate()
  
  useEffect(()=>{
    
    if(localStorage.getItem('token') === null){
      
      goToPage(Navigate, 'login')
      
    }
  },[])

    const [data] = useRequestDataGet(`${BASE_URL}/trips`);
  
    const Viagens = data.map((viagens) => {
      return <CardTrip key={viagens.id}>
        {viagens.name}
        <DeleteIcon
        marginRight={5}
        marginTop={1}/>
        </CardTrip>;
    });



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
            <Button colorScheme='green' variant='solid' onClick={() => goToPage(Navigate, 'admin/trips/create')}>
             Criar Viagem
            </Button>
          </Stack>

          </DivBotoes>

        </TextHeader>

        <Button
        colorScheme={'red'}
        marginBlock={6}
        marginRight={2}   
        >
          Logout</Button>

        </Header>
      <Main>
        <DivBackground>
      <Text>Viagens Agendadas!</Text>
      {Viagens}
        </DivBackground>

      </Main>
    

    </DivContainer>

    </ChakraProvider>
  )
}

export default AdminHomePage