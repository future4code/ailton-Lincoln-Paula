import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import {DivContainer, GlobalStyle,Header, TextHeader
  , DivBotoes, DivBackground, DivPrincipal, DivButtonCard,
  DivCard,DivH1, H1,DivText,
  DivContainerBackground, Card} from './../../style/ListTripsPageStyle'
import {useRequestDataGet, useRequestDataPost} from '../../constants/Hook/useRequestData'
import {BASE_URL} from '../../constants/Url/url'
import { goToPage } from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'

function ListTripsPage() {


  const Navigate = useNavigate()
  const [data] = useRequestDataGet(`${BASE_URL}/trips`);


  

  const Viagens = data.map((viagens) => {
    return <Card key={viagens.id}>
      <p><b>{viagens.name}</b></p>
      <p><b>Planeta:</b>{viagens.planet}</p>
      <p><b>Descrição:</b>{viagens.description}</p>
      <p><b>Ida:</b>{viagens.date}</p>
      <p><b>Duração:</b>{viagens.durationInDays}</p>
      </Card>

  });

  return (
    <ChakraProvider>
      <GlobalStyle/>
      <DivContainer>
      <Header>
        <TextHeader onClick={() => goToPage(Navigate, 'home')}>
        LabeX
          <DivBotoes>

          <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme='teal' variant='ghost'>
              Viagens
            </Button>
            <Button colorScheme='teal' variant='ghost'>
              Promoções
            </Button>
            <Button colorScheme='teal' variant='ghost'>
              Contate-nos
            </Button>

          </Stack>

          </DivBotoes>
        </TextHeader>
        </Header>
        <DivContainerBackground>

      <DivBackground>
        
      <DivPrincipal>
      <DivH1>
        <H1>Viagens Disponivéis !</H1>

        </DivH1>
        <DivCard>

      {Viagens}
        </DivCard>
     <DivText>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     </DivText>

 <DivButtonCard>
<Button colorScheme={'purple'}
onClick={() => goToPage(Navigate, 'trips/application')}>Submeter</Button>
</DivButtonCard>

      </DivPrincipal>

        </DivBackground> 
        </DivContainerBackground>

      </DivContainer>
      
      </ChakraProvider>
  )
}

export default ListTripsPage