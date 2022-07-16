import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
  }
`;

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffb3b3;
`;

const DivCard = styled.div`
  background-color: white;
  height: 95vh;
  width: 35vw;
  /* border: solid black 1px; */
  box-shadow: 15px 15px 15px black;
  margin-top: 1vh;
`;

const Header = styled.div`

background-color: bisque;
height: 10vh;
display: flex;
justify-content: space-between;
border: solid 1px black;
align-items: center;
`
const Main = styled.div`

background-color: bisque;
height: 85vh;
border: solid 1px black;

`

const Text =  styled.h2`

font-weight: bold;
font-size: 25px;

`

const Img = styled.img`

width: 50px;
height: 50px;
border-radius: 25px;

`

const DivMatches = styled.div`

display: flex;
align-items: center;
margin-left: 12vw;
column-gap: 0.5vw;

`

function Matches(props) {
  
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [matches]);

  let getMatches = () => {
    const url = `${BASE_URL}lincoln/matches`;

    axios
      .get(url)

      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let matchesMap = matches.map((info) => {
    return (
      <DivMatches key={info.id}>
        <Img src={info.photo} 
        alt={info.photo_alt}></Img>
        <p><b> {info.name},</b></p>
        <span><b>{info.age}</b></span>
      </DivMatches>
    );
  });

  return (  
    <ChakraProvider>

    <DivContainer>

      <DivCard>
      <Header><Text>Your matches♥</Text>
      
              <Button 
              onClick={() => props.setTela('home')}
              leftIcon={<Icon as={BiArrowBack}></Icon>}
              colorScheme={'green'}
              >Back</Button>


              <Button 
              onClick={props.Clear}
              rightIcon={<Icon as={BsTrash}></Icon>}
              marginRight={1}
              colorScheme={'red'}
              >Clear Match</Button>
      </Header>

      <Main>{matchesMap}</Main>
      </DivCard>

    </DivContainer>

    </ChakraProvider>
  );
}

export default Matches;
