import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Playlist from '../Playlist/Playlist.js'
import icon from './image/spot-icon-ye.png'


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
  height: 15vh;
  background-color: rgb(255, 255, 102);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const EstilizaMain = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: monospace;
  font-size: 25px;

`

 
const EstilizaImage = styled.img`

  margin-left: 2vw;
  margin-top: 1vh;

`

const EstilizaBotao = styled.button`

  margin-right: 1vw;
  font-weight: bold;
  font-family: monospace;
  width: 12vw;
  height: 5vh;
  color: black;
  box-shadow: white 5px 5px 5px;

  &:hover{
    cursor: pointer;
    box-shadow: black 5px 5px 5px;
  }



`

const EstilizaBotao2 = styled.button`

  margin-right: 1vw;
  font-weight: bold;
  font-family: monospace;
  width: 5vw;
  height: 4vh;
  color: black;
  box-shadow: white 5px 5px 5px;

  &:hover{
    cursor: pointer;
    box-shadow: rgb(255, 255, 102) 5px 5px 5px;
  }


`

const EstilizaBotao3 = styled.button`

margin-left: 1vw;
font-weight: bold;
font-family: monospace;
width: 2vw;
height: 4vh;
color: black;
box-shadow: white 5px 5px 5px;

&:hover{
  cursor: pointer;
  box-shadow: red 5px 5px 5px;
}



`

const DivFuncional = styled.div`
  display: flex;
  margin-top: 10px;
`

const EstilizaText = styled.p`

  &:hover{
    cursor: pointer;
    color: rgb(255, 255, 102);

  }

`


export default class Criar extends Component {
  
  state = {
    playlist: [],
    inputPlaylist: '',
    renderiza: false,
    playlistSelecionada: '',
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
    alert('Playlist Criada !')
  }).catch((error)=>{
    alert('Erro, tente novamente !')
  })

  this.setState({
    inputPlaylist:"",
  });

}



  renderiza = (playlist) =>{


    this.setState({renderiza: true, playlistSelecionada: playlist})

  }


retornaValor = () =>{

  this.setState({renderiza: false})

}

componentDidMount(){

  this.getAllPlaylist();

}

componentDidUpdate(){

  this.getAllPlaylist();
}


getAllPlaylist = () =>{

  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
    headers:{
      Authorization: 'lincoln-ribeiro-ailton'
    }
  }).then((response) =>{
    this.setState({playlist: response.data.result.list})

  }).catch((error)=>{
    alert('erro:', error)
  })



}

dellPlaylist = (id) =>{

  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
    headers:{
      Authorization: 'lincoln-ribeiro-ailton'
    }
  }).then((response) =>{
    alert('Playlist Deletada')

  }).catch((error)=>{
    alert('Erro ao Deletar!')
  })



}


  render() {
  

    if (this.state.renderiza) {
      return (
        <Playlist
          renderizaPag={this.retornaValor}
          playlistSelecionada={this.state.playlistSelecionada}
        />
      );
    }

    const renderiza1 = this.state.playlist.map((playlist,index) =>{

      return (
        <div key={index}>
        <DivFuncional key={playlist.id}>
          <EstilizaText onClick={()=> this.renderiza(playlist)}>{playlist.name}</EstilizaText>
          <EstilizaBotao3 onClick={() => this.dellPlaylist(playlist.id)}>X</EstilizaBotao3></DivFuncional>
          </div>
      )
      
      }) 
      
      
    return (

      <FundoTotal>
      <GlobalStyle></GlobalStyle>
      <EstilizaHeader>
      <EstilizaImage src={icon} width='60px' height='60px'></EstilizaImage>
        <EstilizaBotao onClick={this.props.mudaTelaInicial}>Voltar</EstilizaBotao>
      </EstilizaHeader>

      <EstilizaMain>

      <p>Qual nome da playlist</p>
                <input value={this.state.inputPlaylist} 
              onChange={this.onChangePlaylist} 
              placeholder='Playlist Name'>                
        </input>

        <EstilizaBotao2 onClick={this.createPlaylist}>Criar !</EstilizaBotao2>
        
        
        {renderiza1}
      </EstilizaMain>


        
        </FundoTotal>

    )
  }
}
