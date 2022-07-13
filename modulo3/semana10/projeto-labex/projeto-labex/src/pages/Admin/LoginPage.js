import React from 'react'
import {DivContainer, GlobalStyle, Main, DivLogin, DivCentralizaMain} from './../../style/LoginPageStyle'
import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon, Input, Box } from '@chakra-ui/react'
import {useRequestDataPost} from '../../constants/Hook/useRequestData'
import {BASE_URL} from '../../constants/Url/url'
import {useNavigate} from 'react-router-dom'
import {goToPage} from './../../routes/coordinator'

function LoginPage() {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState(''); 
  const Navigate = useNavigate()
  
useEffect(()=>{

if(localStorage.getItem('token') === null){

goToPage(Navigate,'login')

}


})

const onChangeLogin = (e) =>{

setLogin(e.target.value)


}

const onChangePass = (e) =>{


setPass(e.target.value)
  
}

const SubmitLoginAndPass = () =>{

  const body = {
    email: login,
    password: pass
  }

useRequestDataPost(`${BASE_URL}/login`, body, Navigate);


  }
  


  return (
    <ChakraProvider>
      {/* {console.log(localStorage.getItem('token'))} */}
    <DivContainer>

      <GlobalStyle/>

      <DivCentralizaMain>

      <Main>
      <DivLogin>

      <h4>Admin Login</h4>

      <Stack>

      <Input 
      placeholder='login'
      type={'text'}
      value={login}
      onChange={onChangeLogin}></Input>

      <Input
      placeholder='senha'
      type={'text'}
      value={pass}
      onChange={onChangePass}></Input>
      </Stack>

      <Button
      onClick={SubmitLoginAndPass}
      bg='white'
      color='black'
      h='sz'
      w='sz'>admin home</Button>


      </DivLogin>

      </Main>
      </DivCentralizaMain>
    </DivContainer>
    </ChakraProvider>

    
  )
}

export default LoginPage