import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import {DivContainer, GlobalStyle,Header, TextHeader
  , DivBotoes, DivBackground, DivPrincipal,
  DivContainerBackground} from './../../style/ListTripsPageStyle'
import {useRequestData} from '../../constants/Hook/useRequestData'
import {BASE_URL} from '../../constants/Url/url'
import { goToPage } from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'

function ListTripsPage() {


  const Navigate = useNavigate()
  const [data] = useRequestData(`${BASE_URL}/trips`);

  // const Viagens = data.map((viagens) => {
  //   return <li>{viagens.name}</li>;
  // });

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

      {/* {Viagens} */}
      {/* {console.log(data)} */}
      PRINCIPAL PÁGINA DO USUARIO ONDE TERÁ ACESSO A NOSSA PAGINA COM AS LISTAS DAS VIAGENS
      </DivPrincipal>

        </DivBackground> 
        </DivContainerBackground>

      </DivContainer>
      
      </ChakraProvider>
  )
}

export default ListTripsPage