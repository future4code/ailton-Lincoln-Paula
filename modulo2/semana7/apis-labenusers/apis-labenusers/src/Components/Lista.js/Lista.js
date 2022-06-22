import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";


const EstilizaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const EstilizaHeader = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: black;
`;

const EstilizaCorpo = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: bisque;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EstilizaFooter = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: black;
`;

const EstilizaTitulo = styled.p`
  width: bold;
  font-size: 30px;
  color: white;
  text-align: center;
`;

const EstilizaBotao = styled.button`

margin-left: 1vw;
margin-top: 1.5vh;

`


export default class Lista extends Component {
  state = {
    users: [],
  };

  componentDidUpdate() {
    this.getAllUsers();
  }

  componentDidMount() {
    this.getAllUsers();
  }


// PEGAR USUÁRIOS, SEM SYNC/AWAIT
  
// getAllUsers = () => {
//     axios
//       .get(
//         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
//         {
//           headers: {
//             Authorization: "lincoln-ribeiro-ailton",
//           },
//         }
//       )
//       .then((response) => {
//         const usuarios = response.data.filter((items) => {
//           return items;
//         });

//         this.setState({
//           users: usuarios,
//         });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };


// PEGAR USUÁRIOS COM ASYNC E AWAIT

getAllUsers = async() =>{
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    try{
        const res = await axios.get(url, {
            headers:{
                Authorization: "lincoln-ribeiro-ailton"
            }
        })

        this.setState({users: res.data})
    } catch (err){

        alert("Ocorreu um erro, tente novamente")

    }

}


  deleteUser = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "lincoln-ribeiro-ailton",
        },
      }
    ).then((reponse)=>{
        alert`Usuário Deletado !`

    }).catch((error) =>{
        alert`Não foi possível deletar !`

    })
  };

  render() {
    return (
      <EstilizaContainer>


        <EstilizaHeader>
            <EstilizaTitulo>Lista de Usuários !</EstilizaTitulo>
            < EstilizaBotao onClick={this.props.goCadastro}>Ir para Cadastro</ EstilizaBotao>
        </EstilizaHeader>

        
        <EstilizaCorpo>
    
       {this.state.users.map((users) => {
          return (
            <ul key={users.id}><br></br>
              <li>
                {users.name}
                <button
                  onClick={() => {
                    this.deleteUser(users.id);
                  }}
                >
                  Deletar Usuário
                </button>
              </li>
            </ul>
          );
        })}


        </EstilizaCorpo>
 

        <EstilizaFooter></EstilizaFooter>



      </EstilizaContainer>
    );
  }
}
