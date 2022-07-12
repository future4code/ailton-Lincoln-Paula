import React from 'react'
import {DivContainer, GlobalStyle, CardPrincipal, Text, Header, TextHeader} from './../style/HomePageStyle'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import {goToPage} from '../routes/coordinator'


function HomePage() {


  const Navigate = useNavigate()


  return (


    <ChakraProvider>

    <DivContainer>
      <GlobalStyle/>
      
      <Header>
        <TextHeader>LabeX</TextHeader>
      </Header>
      <CardPrincipal>
      <Button 
      colorScheme={'blue'}
      w={150}
      h={12}
      onClick={() =>goToPage(Navigate, 'trips/list')}>Viagem ! 🌎</Button>

      </CardPrincipal>
      
      <Text onClick={() =>goToPage(Navigate, 'login')}>🔒Admin area</Text>
      </DivContainer>

    </ChakraProvider>
  )
}

export default HomePage