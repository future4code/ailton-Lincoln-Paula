import React, { Component } from "react";
import Cadastro from "./Components/Cadastro.js/Cadastro.js";
import Lista from "./Components/Lista.js/Lista.js";
import styled from "styled-components";
import axios from "axios";
import { createGlobalStyle } from 'styled-components';

const EstilizaContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export default class App extends Component {
  state = {
    tela: "cadastro",
  };

  goLista = () => {
    this.setState({ tela: "lista" });
  };

  goCadastro = () => {
    this.setState({ tela: "cadastro" });
  };

  trocaTela = () => {
    switch (this.state.tela) {
      case "cadastro":
        return <Cadastro goLista={this.goLista}></Cadastro>;
        break;

      case "lista":
        return <Lista goCadastro={this.goCadastro}></Lista>;
        break;
    }
  };

  render() {
    return <>
    <GlobalStyle/>
 <EstilizaContainer>{this.trocaTela()}</EstilizaContainer>
    </>

  }
 
}
