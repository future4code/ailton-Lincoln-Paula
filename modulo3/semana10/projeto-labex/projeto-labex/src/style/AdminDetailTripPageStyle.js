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
width: 100vw;
height: 12vh;
display: flex;
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
  margin-top: 25px;
  font-weight: bold;
  display: flex;
`

export const DivContainer = styled.div`

height: 100%;
width: 100vw;
font-family: Roboto;
background-image: url(${background});
*{
    box-sizing: border-box;
}

`

export const Main = styled.div`

height: 88%;
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

export const DivHeaderBackgroundYellow = styled.div`

position: absolute;
right: 72vw;
margin-top: -12px;
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
&:hover{

box-shadow: 15px 15px 15px lightskyblue;

}
`

export const TextCard = styled.h1`

text-align: center;
font-weight: bold;
font-size: 24px;

`

export const TextCandidate = styled.h1`

text-align: center;
font-weight: bold;
font-size: 24px;
color: white;
margin-top: 12px;
`

export const CardCandidatos = styled.div`
margin: 20px;
border-radius: 15px;
height: 40vh;
width: 30vw;
background-color: bisque;
box-shadow: 15px 15px 15px black;
display: flex;
flex-direction: column;
gap: 12px;
padding-left: 5px;
&:hover{

box-shadow: 15px 15px 15px lightskyblue;

}
`
export const CandidateBack = styled.section`

display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const CandidateApproved = styled.div`

display: flex;
flex-direction: column;

`

export const TextCase = styled.p`

color: red;
font-size: 18px;
font-weight: bold;
text-align: center;
margin-top: 12px;
margin-bottom: 12px;
`

export const ButtonPosition = styled.div`

position: absolute;
left: 90vw;


`

export const CardApproved = styled.div`

margin: 20px;
border-radius: 15px;
height: 10vh;
width: 15vw;
color: white;
background-image: url(${background});
box-shadow: 15px 15px 15px black;
display: flex;
flex-direction: column;
gap: 12px;
padding-left: 5px;
margin-left: 8vw;

&:hover{

  box-shadow: 15px 15px 15px lightskyblue;

}
`