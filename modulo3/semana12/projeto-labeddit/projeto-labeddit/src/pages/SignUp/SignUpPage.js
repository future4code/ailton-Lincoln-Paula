import React from 'react'
import goToPage from '../../routes/coordinator';
import {  DivContainer, InputContainer, DivCadastro, Text, 
    TextBold, TextButton, DivContainerButton,
    DivContainerButtonLogin, DivContainerIntro, ImportantText, DivContainerBox,
    CadastroText } from './SignUpPageStyle'
import { Button, Stack, Input, FormControl, FormLabel, Icon, Checkbox} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';
import {useNavigate} from 'react-router-dom'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const SignUpPage = () =>{

    const Navigate = useNavigate()

   const [form, onChange, cleanFields] = useForm({
    email: '', password:'', name: ''
   }) 

const onSubmitForm = () =>{

    console.log('oi')


}

return(
        <DivContainer>
        <HeaderLogin/>
    <DivContainerIntro>
    <CadastroText>Cadastre-se</CadastroText>
    <p>By continuing, you are setting up a Reddit
        account and agree to our <ImportantText>User Agreement</ImportantText> and 
        <ImportantText> Privacy Policy.</ImportantText>
    </p>
    </DivContainerIntro>
        <DivContainerBox>
        <Checkbox defaultChecked>Concordo em receber emails com coisas legais acontecendo no reddit</Checkbox>
        </DivContainerBox>
        
    <DivContainerButton>
        <Button
        border='solid'
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
         marginBlock={2}
         w={'230px'}
         borderRadius={'25px'}
         marginBottom={6}
         ><TextButton>Continuar com apple</TextButton></Button>
    </DivContainerButton>
    <InputContainer>
        <form>
                  <FormLabel htmlFor="Nome">Nome</FormLabel>
                   
                   <Input
 
                    id='1'
                     name={'name'}
                     type="text"
                     value={form.name}
                     required
                     onChange={onChange}
                     variant='outline'
 
                   />


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
            <DivCadastro><Text>Já possui conta? <TextBold onClick={()=>goToPage(Navigate, 'login')}>entrar</TextBold></Text></DivCadastro>
                <DivContainerButtonLogin>
                    <Button
                    bg="brand.100"
                    variant='outline'
                    borderRadius='20px'
                    w={'240px'}
                    color={'white'}
                    >
                    Cadastrar
                </Button>
                    
                    </DivContainerButtonLogin>
                </form>

    

    </InputContainer>
    </DivContainer>
)


}

export default SignUpPage