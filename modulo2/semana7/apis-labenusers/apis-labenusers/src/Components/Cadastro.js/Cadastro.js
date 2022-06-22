import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";


document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#submit");
    
    btn.click();
  
  }
});

const EstilizaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png);
  background-size: 1200px;
`;


const EstilizaCorpo = styled.div`
  width: 35vw;
  height: 60vh;
  background-image: url(https://images7.alphacoders.com/592/592678.jpg);
  background-size: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 10px 5px 5px black;`

const EstilizaBotao = styled.button`
  border-radius: 5px;
  margin-top: 2vh;
  color: black;
  box-shadow: 2px 2px 2px black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #99ffdd;
  font-weight: bold;

  &:hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px white;
  }
`

const EstilizaInput = styled.input`

  border-radius: 5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 16vw;
  margin-top: 4px;
`

const EstilizaLista = styled.div`

display: flex;
position: absolute;
top: 0px;
left: 5px;

`

export default class Cadastro extends Component {
  state = {
    inputEmail: "",
    inputName: "",
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  onChangeNome = (event) => {
    this.setState({ inputName: event.target.value });
  };


  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "lincoln-ribeiro-ailton",
          },
        }
      )
      .then((response) => {
        alert`Usuário Criado Com Sucesso !`;
        })
      
      .catch((error) => {
        alert(error.message);
      });
    this.setState({
      inputEmail: "",
      inputName: "",
    });
  };

  render() {
    return (
      <EstilizaContainer>
          <EstilizaLista>
        <EstilizaBotao onClick={this.props.goLista}>Lista De Usuários</EstilizaBotao>
          </EstilizaLista>


        <EstilizaCorpo>

          <EstilizaInput
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
          ></EstilizaInput>
          <EstilizaInput
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.onChangeNome}
          ></EstilizaInput>
          <EstilizaBotao onClick={this.createUser} id='submit'>Cadastre-se</EstilizaBotao>

        </EstilizaCorpo>

      </EstilizaContainer>
    );
  }
}
