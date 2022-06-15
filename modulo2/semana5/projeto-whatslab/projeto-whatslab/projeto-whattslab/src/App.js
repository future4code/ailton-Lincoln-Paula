import styled from "styled-components";
import React, { Component } from "react";
import fundo from './images/fundo-zap.jpg'
import emoji from './images/emoji.png'
import labenu from './images/labenu.png'
import './styles.css'

// ESTILIZAÇÃO

const FundoGeral = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const EstilizaFundo = styled.div`
  display: flex;
  width: 35vw;
  background-image: url(${fundo});
  background-size: 500px;
  height: 90vh;
  margin-top: 10px;
  flex-direction: column;
  justify-content: end;
  border: solid 2px black;
  border-radius: 15px;
`;

const EstilizaBotao = styled.button`
  margin-left: 5px;
  margin-bottom: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  &:hover {
    background-color: lightskyblue;
  }
  border-radius: 10px;
`;

const EstilizaInputUser = styled.input`
  margin-right: 5px;
  margin-left: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 6vw;
  border-radius: 10px;
`;
const EstilizaInputTexto = styled.input`
  margin-right: 5px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 50%;
  border-radius: 10px;
`;


const CabecalhoDiv = styled.div`
  background-color: greenyellow;
  width: 35vw;
  height: 10vh;
  position: fixed;
  margin-bottom: 81vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
`

const EstilizaH1 = styled.h1`
  margin-left: 5vw;
  font-size: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const EstilizaH4 = styled.h4`
  text-align: center;
  font-size: 14px;

`

document.addEventListener("keypress", function(e) {    
  if(e.key === 'Enter') {
      const btn = document.querySelector("#submit");
    btn.click();
  }
});

const perguntaNome = prompt("Qual seu nome?");


class App extends React.Component {
  state = {
    mensagem: [],

    inputUser: "",
    inputMensagem: "",
  };


  onChangeInputUser = (event) => {
    this.setState({ inputUser: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  imprimiMensagem = () => {
    const novaMesangem = {
      user: this.state.inputUser,
      texto: this.state.inputMensagem,
    };

    const novaMensagem2 = [...this.state.mensagem, novaMesangem];

    this.setState({ mensagem: novaMensagem2 });
    this.setState({ inputUser: "", inputMensagem: "" });
  };
  

  render() {

    // Transformando array de string em array de objetos
    const MensagemImprimiTela = this.state.mensagem.map((mensagem) => {
      // Por isso, no momento de colocá-la na tela
      // precisamos explicitar qual das propriedades queremos mostrar em
      // cada lugar.

      return (
        <div className="div-mensagem">
          <div className="div-mensagem2">
          <b><p>{mensagem.user}</p></b>
                <p>{mensagem.texto}</p>
                </div>
        </div>
      );
    });

    return (
      <FundoGeral>
        <EstilizaFundo id="fundo-wal">

        <CabecalhoDiv id="cabeçalho">
          <img src={labenu} id='labenu-icon'></img>
          <EstilizaH1 id="texto-grupo">Grupo da Labenu</EstilizaH1>
        </CabecalhoDiv>
          {MensagemImprimiTela}
          <EstilizaH4>{perguntaNome} foi adicionado(a) ao grupo</EstilizaH4>
          <div className="div-input">
            <EstilizaInputUser 
              id="input-user"
              value={this.state.inputUser}
              onChange={this.onChangeInputUser}
              placeholder={"Usuário"}
            ></EstilizaInputUser>

            <EstilizaInputTexto
              id="input-texto"
              value={this.state.inputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            ></EstilizaInputTexto>
            <img src={emoji} id='emoji'/>
            <EstilizaBotao onClick={this.imprimiMensagem} id='submit'>Enviar</EstilizaBotao>
          </div>
        </EstilizaFundo>



      </FundoGeral>
    );
  }
}

export default App;
