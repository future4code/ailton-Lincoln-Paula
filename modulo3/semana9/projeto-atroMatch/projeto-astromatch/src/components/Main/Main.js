import React from "react";
import styled from "styled-components";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { SiVerizon } from 'react-icons/si';


const DivContainer = styled.div`
  height: 90%;
  background-color: royalblue;
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
`;

const DivCard = styled.div`

height: 90%;
background-image: url(${(props) => props.photo});
background-size: cover;
background-repeat: no-repeat;


`
const Info = styled.div`

background-color: white;
box-shadow: black 15px 15px 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
margin-top: 67vh;
`

function Main(props) {
  return (  

<ChakraProvider>

    <DivContainer>


      {props.profile ? (
        <DivCard  photo={props.profile.photo}>  

      <Info>
      <div>

      <p>{props.profile.name}</p>
      <p>
        <b>Idade: </b>
        {props.profile.age}
      </p>
      <p>
        <b>Descrição:</b>
        {props.profile.bio}
      </p>
      </div>
      <div>
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
      </div>
        
      </Info>
      </DivCard>
      ): (
        <p>carregando</p>
        )}

    </DivContainer>

</ChakraProvider>
  );
}

export default Main;
