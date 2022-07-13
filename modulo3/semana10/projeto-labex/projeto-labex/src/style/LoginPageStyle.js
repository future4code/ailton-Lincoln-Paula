import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import background from './../assets/images/background.webp'
import Roboto from './../assets/fonts/Roboto/Roboto-Regular.ttf'


export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }
  @font-face {
      font-family: 'Roboto' ;
      src: url(${Roboto});
    }
`;

export const DivContainer = styled.div`

height: 100vh;
width: 100vw;
background-image: url(${background});
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`

export const DivCentralizaMain = styled.div`

display: flex;
justify-content: center;
height: 100vh;
`

export const Main = styled.div`

width: 85vw;
background-color: #3F0071;
opacity: 0.9;
height: 100%;
box-shadow: 15px 15px 15px black;
border: black solid ;
display: flex;
justify-content: center;
`

export const DivLogin = styled.div`

background-image: url(${background});
color: white;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 2vh;
height: 30vh;
margin-top: 35vh;
border-radius: 25px;
box-shadow: black 15px 15px 15px ;
padding: 50px;

`