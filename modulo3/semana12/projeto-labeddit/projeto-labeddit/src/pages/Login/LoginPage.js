import React, {useEffect} from 'react'
import goToPage from '../../routes/coordinator';
import {  DivContainer, InputContainer, DivCadastro, Text, 
    TextBold, TextButton, DivContainerButton,
    DivContainerButtonLogin, DivContainerIntro, ImportantText, DivContainerBox,
    CadastroText, 
    ButtonForm} from './LoginPageStyle'
import { Button, Stack, Input, FormControl, FormLabel, Icon, Checkbox} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';
import {useNavigate} from 'react-router-dom'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import  {login} from '../../services/user';
import useUnProtectedPage from './../../hooks/useUnprotected';

const LoginPage = () =>{

    useUnProtectedPage()

    const Navigate = useNavigate()

   const [form, onChange, cleanFields] = useForm({
    email: '', password:''
   }) 

const onSubmitForm = (e) =>{
    e.preventDefault()
    login(form, cleanFields, Navigate)
}





return(
        <DivContainer>
        <HeaderLogin/>
    <DivContainerIntro>
    <CadastroText>Entrar</CadastroText>
    <p>By continuing, you are setting up a Labeddit
        account and agree to our <ImportantText>User Agreement</ImportantText> and 
        <ImportantText> Privacy Policy.</ImportantText>
    </p>
    </DivContainerIntro>

    <DivContainerButton>
        <Button
        border='solid'
        marginBlock={1}
        color={'black'}
        colorScheme={'white'}
        leftIcon={<Icon as={FcGoogle}/>}
        borderRadius={'25px'}
        w={'230px'}>
        
    

        <TextButton>Continuar com google</TextButton></Button>


        <Button
                border='solid'
                color={'black'}
                colorScheme={'white'}
         leftIcon={<Icon as={AiFillApple}/>}

         w={'230px'}
         borderRadius={'25px'}
         marginBottom={6}
         ><TextButton>Continuar com apple</TextButton></Button>
    </DivContainerButton>
                    <InputContainer>
        <form onSubmit={onSubmitForm}>
  

                  <FormLabel htmlFor="email">Email</FormLabel>
                   
                  <Input

                   id='2'
                    name={'email'}
                    type="email"
                    value={form.email}
                    required
                    onChange={onChange}
                    variant='outline'

                  />

                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <Input
                  id='3'
                    name={'password'}
                    type="password"
                    value={form.password}
                    required
                    onChange={onChange}
                    variant='outline'
                  />


                    
            <DivCadastro><Text>Primeira vez ? 
                <TextBold onClick={()=>goToPage(Navigate, 'signup')}>Cadastre-se</TextBold>
                </Text></DivCadastro>

                <DivContainerButtonLogin>
                    <ButtonForm
                    bg="brand.100"
                    variant='outline'
                    borderRadius='20px'
                    w={'240px'}
                    color={'white'}>
                    Entrar
                </ButtonForm>
                    </DivContainerButtonLogin>
                </form>

    

    </InputContainer>
    </DivContainer>
)


}

export default LoginPage