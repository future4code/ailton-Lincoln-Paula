import React, { Component } from 'react'
import Cadastro from './Components/Cadastro.js/Cadastro.js'
import styled from 'styled-components'
import axios from 'axios'


export default class App extends Component {

  state = {
    tela:'cadastro'
  }

goLista = () =>{

    this.setState({tela: "lista"})
}

goCadastro = () =>{

  this.setState({tela: "cadastro"})
}


trocaTela = () =>{

    switch(this.state.tela){
      case "cadastro":
      return <Cadastro goLista={this.goLista}/>
      break;
    }}



  render() {



    return (

      <div>
        {this.trocaTela()}
      </div>
    )

  }

}

