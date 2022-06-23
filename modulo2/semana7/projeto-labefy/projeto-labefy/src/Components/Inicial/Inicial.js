import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


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
  height: 10vh;
  background-color: bisque;
`

const EstilizaMain = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: aquamarine;
  

`

const EstilizaFooter = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: bisque;
`
 

export default class Inicial extends Component {


  render() {


    return (

      <FundoTotal> 
        <GlobalStyle>
        </GlobalStyle>
        <EstilizaHeader>Header</EstilizaHeader>

        <EstilizaMain>
          <button onClick={this.props.mudaTelaCriar}>Criar Playlist</button>
          <button onClick={this.props.mudaTelaPlaylist}>Minhas Playlist</button>
          </EstilizaMain>

        <EstilizaFooter>Footer</EstilizaFooter>
        </FundoTotal>

    )
  }
}
