import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, Stack, Icon } from '@chakra-ui/react'
import {SpinnerIcon} from '@chakra-ui/icons'
import {DivContainer, GlobalStyle,Header, TextHeader
  , DivBotoes, DivBackground, DivPrincipal, DivButtonCard,
  DivCard,DivH1, H1,DivText, Carregando, Planetas, TextPrinc, TitleCard, DivContact,
  DivContainerBackground, Card} from './../../style/ListTripsPageStyle'
import {useRequestDataGet} from '../../constants/Hook/useRequestData'
import {BASE_URL} from '../../constants/Url/url'
import { goToPage } from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'
import astro from '../../assets/images/astronauta.jpg'
import planets from '../../assets/images/planetas.png'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

function ListTripsPage() {


  const Navigate = useNavigate()
  const [data] = useRequestDataGet(`${BASE_URL}/trips`);


  

  const Viagens = () =>{


 return  data.map((viagens) => {
    return <Card key={viagens.id}>
      <TitleCard><b>{viagens.name}</b></TitleCard>
      <p><b>Planeta:</b> {viagens.planet}</p>
      <p><b>Descrição:</b> {viagens.description}</p>
      <p><b>Ida:</b> {viagens.date}</p>
      <p><b>Duração:</b> {viagens.durationInDays} Dias</p>
      </Card>

  });}
    

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
              Sobre nós
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

        <div>
        <TextPrinc>Labex</TextPrinc>
        <DivText>

       
        <p>Seja bem vindo ao nosso serviço de viagem interestelar, aqui você encontrará
          todos os tipos de viagens, para todos os planetas !
        </p>
        <p>Veja nossas viagens disponivéis, e se for do seu interesse, se cadastre
          para poder entrar nessa viagem louca !
        </p>
        </DivText>
        <Planetas>
          <img src={planets} alt='planetas'></img>
          </Planetas>
        </div>

      <DivH1>
        <H1>Viagens Disponivéis !</H1>

        </DivH1>
        <DivCard>

      {data.length !== 0 ?
      Viagens()
      :
      <Carregando><SpinnerIcon
      width={'100px'}
      height={'100px'}></SpinnerIcon>
      <H1>Carregando</H1>
      </Carregando>}
        </DivCard>
     <DivText id='sobre'>

    <p>Somos uma empresa que atua no mercado de viagens a mais de 20 anos, ganhamos diversos prêmios
      como companhia mais
    </p>
    <p>utilizada no setor de viagens !</p>
    <p>Venha se tornar viagem interestelar e se candidate para uma de nossas viagens.</p>
     </DivText>

 <DivButtonCard>
<Button colorScheme={'gray'}
bg={'black'}
color={'white'}
width={'150px'}
height={'50px'}
onClick={() => goToPage(Navigate, 'trips/application')}>Quero Viajar !</Button>
</DivButtonCard>
        <DivContact>
            <a  href='https://facebook.com.br'
            target='_blank'
            >
              <Icon as={AiFillFacebook}
            width={'50px'}
            height={'50px'}
            color={'white'}/>
              </a>

              <a 
              href='https://instagram.com.br'
            target='_blank'>
            <Icon as={AiFillInstagram}
            width={'50px'}
            height={'50px'}
            color={'white'}/> </a>

              <a 
              href='https://email.com.br'
            target='_blank'>
            <Icon as={MdEmail}
            width={'50px'}
            height={'50px'}
            color={'white'}/></a>
        </DivContact>
      
      </DivPrincipal>

        </DivBackground> 
        </DivContainerBackground>

      </DivContainer>
      
      </ChakraProvider>
  )
}

export default ListTripsPage