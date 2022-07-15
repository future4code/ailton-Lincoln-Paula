import React from 'react'
import {DivContainer, GlobalStyle, Main, DivLogin, DivCentralizaMain} from './../../style/LoginPageStyle'
import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon, Input, Box,  
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from '@chakra-ui/react'
import {useRequestDataPost, useRequestDataGet} from '../../constants/Hook/useRequestData'
import {BASE_URL} from '../../constants/Url/url'
import {useNavigate} from 'react-router-dom'
import {goToPage} from './../../routes/coordinator'
import { TextHeader, Header} from './../../style/LoginPageStyle'
import {useForm} from './../../constants/Hook/useForm'
import axios from 'axios'

function TripDetailsPage() {

  const Navigate = useNavigate()
  const [data] = useRequestDataGet(`${BASE_URL}/trips`);

  const [form, onChange, cleanFields] = useForm(
    {name: '', 
    age:'', 
    applicationText: '', 
    profession: '', 
    country:''})

  const option = data.map((viagens) =>{

  return <option key={viagens.id}>{viagens.name}</option>

})


  const submitOnTrip = (e) =>{

    e.preventDefault()


    const body={
      name: '',
      age: '',
      applicationText: '',
      profession: '',
      country: ''


    }
    axios.post(`${BASE_URL}/trips/:id/apply`, body)
    .then((res)=>{

    })
    .catch((err)=>{

    })

    cleanFields()

  }

  return (

    <ChakraProvider>
      {/* {console.log(form)} */}
      <GlobalStyle></GlobalStyle>
    <DivContainer>

      <Header>
        <TextHeader onClick={() => goToPage(Navigate, 'home')}>
        LabeX
        </TextHeader>
        </Header>


      <DivCentralizaMain>

      <Main>
        <div>
          <form onSubmit={submitOnTrip}>

        <select>
          <option>escolha uma viagem</option>
          {option}
          </select> 

          <Input 
          name={'name'}
          type={'text'}
          pattern={'^.{3,}'}
          title={'O nome deve ter 3 letras'}
          onChange={onChange}
          placeholder='nome'
          value={form.name}
          required
          ></Input>

          <Input 
          name={'age'}
          type={'number'}
          onChange={onChange}
          placeholder='idade' 
          value={form.age}
          required
          ></Input>

          <Input 
          name={'applicationText'}
          type={'text'}
          onChange={onChange}
          placeholder='descrição'
          value={form.applicationText}
          required
          ></Input>

          <Input 
          name={'profession'}
          type={'text'}
          onChange={onChange}
          placeholder='profissão'
          value={form.profession}
          required
          ></Input>

          <Input 
          name={'country'}
          type={'text'}
          onChange={onChange}
          placeholder='país natal'
          value={form.country}
          required
          ></Input>

          <Button>submeter viagem</Button>
          </form>
        </div>

      </Main>
      </DivCentralizaMain>
    </DivContainer>
    </ChakraProvider>

    
  )
}

export default TripDetailsPage