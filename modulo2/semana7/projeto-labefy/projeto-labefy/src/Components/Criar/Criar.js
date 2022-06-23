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
  background-color: purple;
`

const EstilizaMain = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: rosybrown;
  

`

const EstilizaFooter = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: purple;
`

export default class Criar extends Component {
  
  state = {

    inputPlaylist: ''
  }


  onChangePlaylist = (e) => {
  this.setState({inputPlaylist: e.target.value})

  }    


createPlaylist = () =>{

  const body = {
    name: this.state.inputPlaylist
  };

  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,{
    headers:{
      Authorization: 'lincoln-ribeiro-ailton'
    }
  }).then((response) =>{
    // console.log(response)
    alert('playlist criada')
    this.setState({playlist: response.data})
  }).catch((error)=>{
    alert('erro:', error)
  })

  

}


  render() {
    console.log('playlist:', this.state.playlist)

    return (

      <FundoTotal>
      <GlobalStyle></GlobalStyle>
      <EstilizaHeader>Header

        <button onClick={this.props.mudaTelaInicial}>Voltar</button>
        <button onClick={this.props.mudaTelaPlaylist}>Minhas playlist</button>
      </EstilizaHeader>

      <EstilizaMain>
                <input value={this.state.inputPlaylist} 
              onChange={this.onChangePlaylist} 
              placeholder='Playlist Name'>                
        </input>

        <button onClick={this.createPlaylist}>Create</button>
        

      </EstilizaMain>

      <EstilizaFooter>Footer</EstilizaFooter>
        
        </FundoTotal>

    )
  }
}
