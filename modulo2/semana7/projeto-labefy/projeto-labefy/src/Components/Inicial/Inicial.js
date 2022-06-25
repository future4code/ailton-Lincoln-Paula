import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import icon from './image/spot-icon-ye.png'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const FundoTotal = styled.div`
  *{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
  }

  height: 100vh;
  width: 100vh;

`
const EstilizaHeader = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: rgb(255, 255, 102);
  display: flex;
`

const EstilizaMain = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

`

const EstilizaBotao = styled.button`
  border-radius: 8px;
  padding: 4px;
  background-color: rgb(255, 255, 102);
  font-weight: bold;
  font-family: monospace;
  width: 12vw;
  height: 5vh;
  color: black;
  box-shadow: white 5px 5px 5px;

  &:hover{
    cursor: pointer;
    box-shadow: rgb(255, 255, 102) 5px 5px 5px;
  }
`
 
const EstilizaImage = styled.img`

  margin-left: 2vw;
  margin-top: 2vh;

`


const EstilizaP = styled.p`

margin-top: 5vh;
margin-left: 1vw;
font-size: 25px;
font-weight: bold;
font-family: monospace;
`


export default class Inicial extends Component {


  render() {


    return (

      <FundoTotal> 
        <GlobalStyle>
        </GlobalStyle>
        <EstilizaHeader>
        <EstilizaImage src={icon} width='60px' height='60px'></EstilizaImage>
        <EstilizaP>SpotLin</EstilizaP>
        </EstilizaHeader>

        <EstilizaMain>
          <EstilizaBotao onClick={this.props.mudaTelaCriar}>Criar Playlist !</EstilizaBotao>
          </EstilizaMain>

        </FundoTotal>

    )
  }
}
