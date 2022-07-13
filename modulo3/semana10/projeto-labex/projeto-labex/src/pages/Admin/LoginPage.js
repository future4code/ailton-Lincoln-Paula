import React from 'react'
import {DivContainer, GlobalStyle, Main, DivLogin, DivCentralizaMain} from './../../style/LoginPageStyle'
import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon, Input, Box } from '@chakra-ui/react'
import {useRequestDataPost} from '../../constants/Hook/useRequestData'
import {BASE_URL} from '../../constants/Url/url'
import {useNavigate} from 'react-router-dom'
import {goToPage} from './../../routes/coordinator'
import { TextHeader, Header} from './../../style/LoginPageStyle'


document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#submit");
      
      btn.click();
    
    }
  });

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

      <GlobalStyle></GlobalStyle>
    <DivContainer>

      <Header>
        <TextHeader onClick={() => goToPage(Navigate, 'home')}>
        LabeX
        </TextHeader>
        </Header>


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
      id='submit'
      type='submit'
      bg='white'
      color='black'
      padding={'20px'}
      w='sz'>admin home</Button>


      </DivLogin>

      </Main>
      </DivCentralizaMain>
    </DivContainer>
    </ChakraProvider>

    
  )
}

export default LoginPage