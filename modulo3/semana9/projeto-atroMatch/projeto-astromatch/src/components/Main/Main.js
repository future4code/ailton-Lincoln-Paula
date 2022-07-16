import React from "react";
import styled from "styled-components";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { SiVerizon } from 'react-icons/si';


const DivContainer = styled.div`
  height: 85%;
  width: 100%;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  border: solid black 1px;
  box-shadow: black 15px 15px 15px; 
  background-color: white;
`;

const DivCard = styled.div`
background-image: url(${(props) => props.photo});
width: 75%;
height: 85%;
margin-top: 1vh;
background-repeat: no-repeat;
background-position: center;
box-shadow: black 15px 15px 15px; 
background-size: cover;


`
const Info = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
color: white;
margin-top: 50vh;
background-color: #ffb3b3;
height: 15vh;
`

const Espacamento = styled.div`

  display: flex;
  column-gap: 2vw;

`
const Botoes = styled.div`
display: flex;
justify-content: center;
background-color: #ffb3b3;

`

const DivTeste = styled.div`

background-color: #ffb3b3;
opacity: 0.9;
`

function Main(props) {
  return (  

<ChakraProvider>

    <DivContainer>
      {props.profile ? (
        <DivCard  photo={props.profile.photo}>  
      <DivTeste>

      <Info>
      <div>
        <Espacamento>

      <span>
        <b>{props.profile.name}</b>
        </span>
      <span>
        {props.profile.age}
      </span>
        </Espacamento>
      <p>
        {props.profile.bio}
      </p>
      </div>
        
      </Info>
      <Botoes>
        <Button 
         colorScheme={'red'}
         rightIcon={<Icon as={AiFillCloseCircle} w={5} h={5} />}
        onClick={props.getProfilleChoose}>Pass</Button>



        <Button
         onClick={props.getChoosePerson}
         colorScheme={'green'}
         rightIcon={<Icon as={SiVerizon} w={4} h={5} />}
         marginLeft={2}
         >Like</Button>
      </Botoes>
      </DivTeste>
      </DivCard>
      ): (
        <p>carregando</p>
        )}

    </DivContainer>

</ChakraProvider>
  );
}

export default Main;
