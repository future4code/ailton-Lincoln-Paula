import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const EstilizaContainer = styled.div`

    width: 100vw;
    height: 100vh;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`

const EstilizaHeader = styled.div`

  width: 100vw;
  height: 10vh;
  background-color: black;
`

const EstilizaCorpo = styled.div`

    width: 100vw;
    height: 80vh;
    background-color: bisque;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const EstilizaFooter = styled.div`

  width: 100vw;
  height: 10vh;
  background-color: black;

`

const EstilizaTitulo = styled.p`

width: bold;
font-size: 30px;
color: white;
text-align: center;
`

export default class Cadastro extends Component {

    state = {
        inputEmail:'',
        inputName: '',
        users: [],
    }

onChangeEmail = (event) => {
this.setState({ inputEmail: event.target.value });
};



onChangeNome = (event) =>{
this.setState({ inputName: event.target.value });
};



getAllUsers = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "lincoln-ribeiro-ailton"
          }
        }
      ).then((response) => {
        const usuarios = response.data.filter((items) =>{
            return items
        })

        this.setState({
            users: usuarios
        })


      }).catch((error) => {
        alert(error.message);
      });
  };

  componentDidUpdate() {
    this.getAllUsers();
  }

  componentDidMount() {
    this.getAllUsers();
  }


createUser = () =>{

    const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
      };
  
      axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {
              Authorization: "lincoln-ribeiro-ailton"
            }
          }
        ).then((response) => {
        
          this.getAllUsers()
          alert`Usuário Criado Com Sucesso !` 
        }).catch((error) => {
         alert(error.message);
        });
        this.setState({
            inputEmail: "",
            inputName: "",
          });
}

deleteUser = (id) =>{

    axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "lincoln-ribeiro-ailton",
          },
        }
      );
    }


  render() {

    return (

<EstilizaContainer>

    <EstilizaHeader>
        <EstilizaTitulo> Formulário de Cadastro</EstilizaTitulo>
    </EstilizaHeader>

        <EstilizaCorpo>
            <input placeholder='Email' value={this.state.inputEmail} onChange={this.onChangeEmail}></input>
            <input placeholder='Nome' value={this.state.inputName} onChange={this.onChangeNome}></input>
            <button onClick={this.createUser}>Cadastro</button>


        <div>
            {this.state.users.map((users) => {
            return <ul key={users.id}>
                 <li>{users.name}
                 <button onClick={() => {this.deleteUser(users.id)}}>Deletar Usuário</button></li>
                </ul>;
          })}
        </div>

        </EstilizaCorpo>  

 
    <EstilizaFooter>Footer</EstilizaFooter>

</EstilizaContainer>
    )
  }
}
