import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.webp'

// Fonte: Roboto
// Títutos: 24px, Subtítulos: 20px, Corpo Texto: 16px (variável)
// Cor primária: #001F37
// Cor secundária: 3F0071
// Cor destaque: #610094

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const DivContainer = styled.div`

    width: 100;
    height: 100vh;
    /* background-color: black; */
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
width: 100%;
height: 10vh;
display: flex;
color: white;
background-color: black;

/* (vai sair o background) */
`

export const CardPrincipal = styled.div`
/* width: 80%; */
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: black; */
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
