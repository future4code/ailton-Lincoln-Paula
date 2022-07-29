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
background-color: #3F0071;
opacity: 0.9;
height: 100%;
box-shadow: 15px 15px 15px black;
border: black solid ;
`

export const DivInput = styled.div`

display: flex;
flex-direction: column;
`

export const Form = styled.form`

display: flex;
flex-direction: column;
margin: 5px;
gap: 10px;
margin-left: 28vw;
margin-top: 15vh;
width: 25vw;
`

export const Button = styled.button`


background-color: white;
color: black;
font-weight: bold;
width: 10vw;
height: 8vh;
margin-left: 8vw;
border-radius: 15px;
box-shadow: 15px 15px 15px black;

&:hover{

  box-shadow: 15px 15px 15px lightskyblue;

}
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
