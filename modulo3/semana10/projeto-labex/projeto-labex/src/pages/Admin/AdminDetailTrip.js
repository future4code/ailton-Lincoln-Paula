import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon} from '@chakra-ui/react'
import {DeleteIcon, CheckIcon, CloseIcon, ArrowBackIcon } from '@chakra-ui/icons'
import {GlobalStyle, DivContainer, Main, Header, TextHeader, DivBotoes, CardTrip, DivBackground, Text,
  DivHeaderBackground, DivHeaderBackgroundButton, DivHeaderBackgroundYellow, Card} 
from '../../style/AdminDetailTripPageStyle'
import { BASE_URL } from '../../constants/Url/url'
import {useRequestDataGet} from './../../constants/Hook/useRequestData' 
import {Deslogar} from './../../constants/Functions/Logout'
import axios from 'axios'

function AdminDetailTrip(props) {

 const Navigate = useNavigate() 
 const params = useParams()
 const [tripDetail, setTripDetail] = useState([])
 const [candidate, setCandidate] = useState([])
 const [approved, setApproved] = useState([])

  useEffect(() =>{
    if(localStorage.getItem('token') === null){
        
          goToPage(Navigate, 'login')
        
        }
        getTripDetail()

  },[])


  const getTripDetail = () =>{
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip/${params.id}`,{
      headers:{
        auth: token
      }
    })
    .then((res) =>{
      setTripDetail(res.data.trip)
      setCandidate(res.data.trip.candidates)
      setApproved(res.data.trip.approved)

    })
    .catch((err)=>{

      alert(err)

    })
  }


  const detalhesViagem = () =>{

    return <div>
 
       <h1>Viagem</h1>
       <p>Planeta:{tripDetail.planet}</p>
       <p>Nome:{tripDetail.name}</p> 
       <p>Descrição:{tripDetail.description}</p>
       <p>Duração:{tripDetail.durationInDays} dias</p>
       <p>Data:{tripDetail.date}</p>
       
       </div>
   } 

  const RetornaCandidatos = () =>{

    return candidate.map((info)=>{

      return <div>

        <p>{info.name}</p>
        <p>{info.age}</p>
        <p>{info.profession}</p>
        <p>{info.applicationText}</p>
        <p>{info.country}</p>
        <button onClick={()=> decideCandidate(info.id, true)}>Aprovar</button>
        <button onClick={()=> decideCandidate(info.id, false)}>Não aprovar</button>
      </div>  
    })


  }

  const decideCandidate = (id, approved) =>{
    const token = localStorage.getItem('token')
    const body = {
      approve: approved
    }
    axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`,body,{
      headers:{
        auth: token
      }
    })
    .then((res)=>{

      console.log(res)
      if(approved === true){
        return alert('Candidato Aprovado !')
      }else{
        return alert('Candidato Negado !')
      }

    })


    .catch((err)=>{

    alert(err)
    console.log(err)
    })


  }

  const aprovados = () =>{
    
    return approved.map((candidate)=>{

      return <div>
        <p>{candidate.name}</p>
        <p>{candidate.age}</p>
        <p>{candidate.profession}</p>
        <p>{candidate.applicationText}</p>
        <p>{candidate.country}</p>
      </div>

    })
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

          {tripDetail.length !== 0 ?
                detalhesViagem()
                    : <h1>...Carregando</h1>}

      <div>
        <section>
      <h1>Candidatos</h1>
          {candidate.length !== 0 ?
          RetornaCandidatos()
        : <p>Nenhum candidato !</p>}
        </section>
 
        <section>
            <h1>Aprovados</h1>
          {approved.length !== 0 ?
          aprovados()
        : <p>...Sem Candidatos !</p>}
        </section>  
            
      </div>
      
        </DivBackground>


      </Main>
    

    </DivContainer>

    </ChakraProvider>
  )
}

export default AdminDetailTrip