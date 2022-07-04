import React, { Component } from 'react'
import Criar from './Components/Criar/Criar.js'
import Inicial from './Components/Inicial/Inicial.js'
import Playlist from './Components/Playlist/Playlist.js'



export default class App extends Component {

  state = {

    tela: "inicial"

  }
  
  trocarTela  = () =>{

    switch(this.state.tela){
      case "inicial":
      return <Inicial mudaTelaCriar={this.attTelaCriar} mudaTelaPlaylist={this.attTelaPlaylist}/>
      break;

      case "criar":
        return <Criar mudaTelaInicial={this.attTelaInicial} mudaTelaPlaylist={this.attTelaPlaylist}/>
        break;

      case "playlist":
      return <Playlist mudaTelaInicial={this.attTelaInicial}  mudaTelaCriar={this.attTelaCriar}/>
      break;
    }


  }

attTelaInicial = () =>{

this.setState({tela: "inicial"})

}

attTelaCriar = () =>{

this.setState({tela: "criar"})

}

attTelaPlaylist = () =>{

this.setState({tela: "playlist"})

}


  render() {


    return (


      <div>{this.trocarTela()}</div>


    )
  }
}
