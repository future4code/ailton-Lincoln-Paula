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

export const Header = styled.div`
width: 100%;
height: 12vh;
display: flex;
color: white;
justify-content: space-between;
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
  margin-top: 25px;
  font-weight: bold;
  display: flex;
`

export const DivContainer = styled.div`

height: 100vh;
width: 100vw;
font-family: Roboto;
background-image: url(${background});
*{
    box-sizing: border-box;
}

`

export const Main = styled.div`

height: 88vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`

export const DivBackground = styled.div`

width: 85vw;
background-color: #3F0071;
opacity: 0.9;
height: 100%;
box-shadow: 15px 15px 15px black;
border: black solid ;
display: flex;
flex-direction: column;
align-items: center;
`

export const Text = styled.h2`

font-size: 24px;
font-weight: bold;
color: white;
border-radius: 20px;
padding: 4px;
margin-top: 5px;
margin-left: -35px;
`

export const CardTrip = styled.div`


height: 5vh;
width: 25vw;
background-color: white;
margin: 8px;
margin-left: -50px;
margin-top: 12px;
display: flex;
box-shadow: 8px 8px 8px black;
border-radius: 5px;
font-weight: bold;
display: flex;
justify-content: space-between;

&:hover{
  background-color: red;
}
`

export const DivHeaderBackground = styled.div`

display: flex;

`

export const DivHeaderBackgroundButton = styled.div`

position: absolute;
right: 120px;
`