import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.webp';
import Roboto  from '../assets/fonts/Roboto/Roboto-Regular.ttf'

// Fonte: Roboto
// Títutos: 24px, Subtítulos: 20px, Corpo Texto: 16px (variável)
// Cor primária: #001F37
// Cor secundária: 3F0071
// Cor destaque: #610094

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    @font-face {
      font-family: 'Roboto' ;
      src: url(${Roboto});
    }

  }
`;

export const DivContainer = styled.div`

    width: 100;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Roboto;
`;

export const Header = styled.div`
width: 100%;
height: 12vh;
display: flex;
color: white;

`

export const TextHeader = styled.h2`

  &:hover{
    cursor: pointer;
  }
  margin-left: 3vw;
  font-size: 30px;
  margin-top: 25px;
  font-weight: bold;
  display: flex;
`

export const CardPrincipal = styled.div`

height: 90vh;
display: flex;
justify-content: center;
align-items: center;

`

export const Text = styled.p`

color: white;
font-weight: bold;
position: absolute;
bottom: 0;
left: 90%;

&:hover{

    cursor: pointer
    
}

`
