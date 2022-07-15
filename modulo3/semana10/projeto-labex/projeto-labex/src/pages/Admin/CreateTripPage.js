import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon} from '@chakra-ui/react'
import {DeleteIcon, CloseIcon, ArrowBackIcon,} from '@chakra-ui/icons'
import {GlobalStyle, DivContainer, Main, Header, TextHeader, DivBotoes, CardTrip, DivBackground, Text,
  DivHeaderBackground, DivHeaderBackgroundButton, DivHeaderBackgroundYellow, DivForm } 
from './../../style/AdminCreateTripPageStyle'
import { BASE_URL } from '../../constants/Url/url'
import {useRequestDataGet} from './../../constants/Hook/useRequestData' 
import {Deslogar} from '../../constants/Functions/Logout'
import { AiFillHome } from 'react-icons/ai';
import {useForm} from '../../constants/Hook/useForm'
import axios from 'axios'


function CreateTripPage() {

  const Navigate = useNavigate()
  
  useEffect(()=>{
    
    if(localStorage.getItem('token') === null){
      
      goToPage(Navigate, 'login')
      
    }
  },[])

 

  const [form, onChange, cleanFields] = useForm(
    {name: '', 
    planet:'', 
    date: '', 
    description: '', 
    durationInDays:''})

    const OrganizandoData = form.date.split('-')
    const Transformando = `${OrganizandoData[2]}/${OrganizandoData[1]}/${OrganizandoData[0]}`
    

    const CreateTrip = (e) =>{

      e.preventDefault()

      const token = localStorage.getItem('token')

      const body = {
        name: form.name,
        planet: form.planet,
        date: Transformando,
        description: form.description,
        durationInDays: form.durationInDays
      }
      axios.post(`${BASE_URL}/trips`, body, {
        headers:{
          auth: token
        }
      })
      .then((res)=>{
        alert(`Viagem aceita!`)
        console.log('Viagem criada')

      })
      .catch((err)=>{

        alert(`Não foi possível criar viagem`)
        console.log(err)

      })


      cleanFields()

    }


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

      <Text>Criar Viagem !
      </Text>
          </DivHeaderBackground>

        <DivForm>
          
        <form onSubmit={CreateTrip}>
        <input placeholder='nome'
        name={'name'}
        type={'text'}
        onChange={onChange}
        value={form.name}
        ></input>

        <select
        name={'planet'}
         value={form.planet}
         onChange={onChange}>
          <option select='true'>Escolha um Planeta</option>
          <option>Mercúrio</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
          <option>Plutão</option>
        </select> 


        <input placeholder='date'
        name={'date'}
         type={'date'}
         value={form.date}
         onChange={onChange}
         required
        ></input>

        <input placeholder='description'
        name={'description'}
         type={'text'}
         value={form.description}
         onChange={onChange}
        ></input>

        <input placeholder='duração'
        name={'durationInDays'}
         type={'number'}
         value={form.durationInDays}
         onChange={onChange}
        ></input>

      <button>Submeter</button>

        </form>

      </DivForm>

        </DivBackground>

      </Main>
    

    </DivContainer>

    </ChakraProvider>
  )
}

export default CreateTripPage