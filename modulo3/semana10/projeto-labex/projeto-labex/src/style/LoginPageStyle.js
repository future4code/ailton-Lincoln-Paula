import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import background from './../assets/images/background.webp'
import Roboto from './../assets/fonts/Roboto/Roboto-Regular.ttf'


export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }
  @font-face {
      font-family: 'Roboto' ;
      src: url(${Roboto});
    }
`;

export const Header = styled.div`
height: 10vh;
color: white;

`


export const TextHeader = styled.h2`

  &:hover{
    cursor: pointer;
  }
  font-size: 30px;
  font-weight: bold;
  display: flex;
  margin-left: 3vw;
  padding-top: 4vh;
`

export const DivContainer = styled.div`

height: 100vh;
width: 100vw;
font-family: Roboto;
background-image: url(${background});


`

export const DivCentralizaMain = styled.div`

display: flex;
justify-content: center;
height: 88vh;
`

export const Main = styled.div`

width: 80vw;
opacity: 0.9;
height: 100%;
display: flex;
justify-content: center;
`

export const DivLogin = styled.div`

background-color: white;
color: black;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 2vh;
height: 45vh;
margin-top: 20vh;
border-radius: 25px;
box-shadow: black 15px 15px 15px ;
padding: 50px;
`

export const TitleLogin = styled.h1`

  font-weight: bold;
  margin-top: 4vh;
`