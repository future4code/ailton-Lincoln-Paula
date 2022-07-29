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

export const Main = styled.div`

height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`

export const ErrorMessage = styled.p`

font-weight: bold;
font-size: 40px;
color: white;

`