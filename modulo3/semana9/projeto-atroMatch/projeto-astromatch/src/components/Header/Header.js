import React from "react";
import styled from "styled-components";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, Icon } from '@chakra-ui/react'
import { GiLovers } from 'react-icons/gi';

const DivContainer = styled.div`
  height: 10%;
  background-color: bisque;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  font-family: 'Courier New', Courier, monospace;
  border: solid black 1px;
  margin-top: 2vh;
`;

const Principal = styled.div`

display: flex;
justify-content: space-between;
margin-left: 5px ;
margin-right: 5px;
padding-top: 12px;
align-items: center;

`

const Text =  styled.h2`

font-weight: bold;
font-size: 25px;


`


function Header(props) {
  return (
    <ChakraProvider>

    <DivContainer>
      <Principal>
        <Text>astroMatch♥</Text>
        <Button
        leftIcon={<Icon as={GiLovers}></Icon>}
        colorScheme={'pink'}
        onClick={() => props.setaTela("matches")}
        width={8}
        paddingRight={2}
        height={8}>
        </Button>

      </Principal>

  
    </DivContainer>

    </ChakraProvider>
  );
}

export default Header;
