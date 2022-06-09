import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
   justify-content: center; 
   flex-direction: column; 
   align-items: center; 
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const EstilizaDiv = styled.div`
  display:flex;
  flex-wrap: wrap;
  

`

const EstilizaBotao = styled.button`
  font-family: 'Courier New', Courier, monospace;
  margin-top: 8px;
  margin-bottom: 5px;
  margin-left: 15px;
  height: 28px;
  &:hover {
    background-color: lightblue;
  }

`;

const EstilizaInput = styled.input`
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 5px;
  height: 20px;
  border-width: bold;

`;


class App extends React.Component {
  // DECLARAÇÃO DE UM ARRAY COM OBJETOS QUE REPRESENTAM O POST

  state = {
    posts: [
      {
        nomeUsuario: "Labenu",
        fotoUsuario: "https://picsum.photos/48/50",
        fotoPost: "https://picsum.photos/201/150",
      },
      {
        nomeUsuario: "Indio",
        fotoUsuario: "https://picsum.photos/49/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Lincoln",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/199/150",
      },
    ],

    valorInputNick: "",
    valorInputFoto: "",
    valorInputFotoPerfil: ""
  };
  
  adicionaPost = () => {

    const novoPost = {
      nomeUsuario: this.state.valorInputNick,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFoto
  
    }
    const novosPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novosPosts });
    this.setState({
      valorInputNick: "",
      valorInputFoto: "",
      valorInputFotoPerfil: ""
    });
  }

    onChangeInputNick = (event) => {
    this.setState({ valorInputNick: event.target.value });
    };
    
    onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
    };

    onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
    };
  
  render() {
    // MAPEAMENTO DO ARRAY DE OBJETOS
    const listaDePost = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });


    return (
      <MainContainer>

        <EstilizaDiv>
          <EstilizaInput
            value={this.state.valorInputNick}
            onChange={this.onChangeInputNick}
            placeholder={"Seu nick"}
          />
          <EstilizaInput
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Link da Foto"}
          />
          <EstilizaInput
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Link foto de perfil"}
          />
          <EstilizaBotao onClick={this.adicionaPost}>Adicionar Post</EstilizaBotao>
        </EstilizaDiv>
        <EstilizaDiv>{listaDePost}</EstilizaDiv>

      </MainContainer>
    );
  }
}

export default App;
