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
  background-color: brown;
`

const EstilizaMain = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: bisque;
  

`

const EstilizaFooter = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: brown;
`

export default class Playlist extends Component {


state = {

    playlist: [],

}



getAllPlaylist = () =>{

  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
    headers:{
      Authorization: 'lincoln-ribeiro-ailton'
    }
  }).then((response) =>{
    
    this.setState({playlist: response.data})

  }).catch((error)=>{
    alert('erro:', error)
  })



}


  render() {


    return (

      <FundoTotal>
        < GlobalStyle/>
        <EstilizaHeader>Header
          <button onClick={this.props.mudaTelaInicial}>Voltar</button>
          <button onClick={this.props.mudaTelaCriar}>Criar Playlist</button>
        </EstilizaHeader>

        <EstilizaMain>Minhas Playlists
        </EstilizaMain>
        <EstilizaFooter>Footer</EstilizaFooter>
        </FundoTotal>
    )
  }
}
