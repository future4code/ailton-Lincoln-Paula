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

const EstilizaCorpo = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png);
  background-size: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EstilizaBox = styled.div`
  width: 35vw;
  height: 60vh;
  background-image: url(https://i.pinimg.com/736x/d8/ae/3f/d8ae3f2cf8ed7a17ea67229187130df1.jpg);
  background-size: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 10px 5px 5px black;`

const EstilizaBotao = styled.button`

margin-left: 1vw;
  color: black;
  box-shadow: 2px 2px 2px black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #99ffdd;
  font-weight: bold;
  border-radius: 5px;
  &:hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px white;
  }`


const EstilizaLista = styled.div`

display: flex;
position: absolute;
top: 9px;
left: 5px;

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

        <EstilizaCorpo>
          <EstilizaBox>
        {this.state.users.map((users) => {
            return (
              <ul key={users.id}><br></br>
                <li>
                  {users.name}
                  <EstilizaBotao
                    onClick={() => {
                      this.deleteUser(users.id);
                    }}
                  >
                    Deletar Usuário
                  </EstilizaBotao>
                </li>
              </ul>
            );
          })}


          </EstilizaBox>
      <EstilizaLista><EstilizaBotao onClick={this.props.goCadastro}>Cadastrar</EstilizaBotao></EstilizaLista> 



        </EstilizaCorpo>


      </EstilizaContainer>
    );
  }
}
