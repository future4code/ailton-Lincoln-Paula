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

    width: 100%;
    height: 100%;
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

width: 85%;
background-color: #3F0071;
opacity: 0.9;
height: 100%;
box-shadow: 15px 15px 15px black;
border: black solid ;
`

export const DivContainerBackground = styled.div`

display: flex;
justify-content: center;
height: 100%;
`

export const DivPrincipal = styled.div`
height: 80%;
display: flex;
gap: 12px;
flex-wrap: wrap;
`


export const Card = styled.div`
margin: 20px;
border-radius: 15px;
height: 40vh;
width: 30vw;
background-color: white;
box-shadow: 15px 15px 15px black;
display: flex;
flex-direction: column;
gap: 12px;
padding-left: 5px;
`

export const DivH1 = styled.div`

margin-left: 32vw;
margin-top: 25px;
`

export const H1 = styled.div`

color: white;
font-weight: bold;
font-size: 20px;
`

export const DivCard = styled.div`

display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
`

export const DivText = styled.div`

background-color: white;
margin-left: 8vw;
margin-top: 15px;

`

export const Carregando = styled.div`

height: 250px;
width: 250px;
margin-top: 25vh;
margin-left: -150px;

`

export const DivButtonCard = styled.div`


margin-left: 35vw;
padding: 20px;

`

export const Planetas = styled.div`

  display: flex;
  margin-left: 10vw;
  margin-top: 25px;

`

export const TextPrinc = styled.h1`

  display: flex;
  justify-content: center;
  color: white;
  font-size: 50px;
  font-weight: bold;

`

export const TitleCard = styled.p`

  text-align: center;
  font-size: 25px;
`

export const DivContact = styled.div`

margin-top: 20vh;
margin-left: 20vw;

`