import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.webp';
import Roboto  from '../assets/fonts/Roboto/Roboto-Regular.ttf'


export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    @font-face {
      font-family: 'Roboto';
      src: url(${Roboto});
    }

  }
`;

export const DivContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: Roboto;
`;


export const Header = styled.div`
height: 12vh;
color: white;

`

export const DivBotoes = styled.div`

margin-left: 26vw;


`

export const TextHeader = styled.h2`

  &:hover{
    cursor: pointer;
  }
  margin-left: 3vw;
  font-size: 30px;
  margin-top: 4px;
  font-weight: bold;
  display: flex;
`
// Cor primária: #001F37
// Cor secundária: 3F0071
// Cor destaque: #610094

export const DivBackground = styled.div`

width: 85vw;
background-color: #3F0071;
opacity: 0.9;
height: 100%;
box-shadow: 15px 15px 15px black;
border: black solid ;
`

export const DivContainerBackground = styled.div`

display: flex;
justify-content: center;

`

export const DivPrincipal = styled.div`
height: 80vh;

`