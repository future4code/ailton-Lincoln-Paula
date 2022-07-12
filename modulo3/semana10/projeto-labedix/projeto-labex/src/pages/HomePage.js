import React from 'react'
import {DivContainer, GlobalStyle, CardPrincipal, Text, Header} from './../style/HomePageStyle'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import {goToAdminLogin, goToListTripsPage, goBack} from '../routes/coordinator'


function HomePage() {


  const Navigate = useNavigate()


  return (



    <DivContainer>
      <GlobalStyle/>
      
      <Header>
        <h2 onClick={() =>goBack(Navigate)}>LabeX</h2>
      </Header>
      <CardPrincipal>
      <Button onClick={() =>goToListTripsPage(Navigate)}>Viagem ! 🌎</Button>

      </CardPrincipal>
      
      <Text onClick={() =>goToAdminLogin(Navigate)}>🔒Admin area</Text>
      </DivContainer>
  )
}

export default HomePage