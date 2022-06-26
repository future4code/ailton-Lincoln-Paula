import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
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
  justify-content: space-between;
  align-items: center;
`

const EstilizaMain = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column; 
  
`

const EstilizaInput = styled.input`
  width: 18vw;
  
  
`
const EstilizaText = styled.p`
  
  text-align: center;
  font-weight: bold;
  font-family: monospace;
  font-size: 20px;
  
`
const DivInput = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;


`
const EstilizaBotao0 = styled.button`
  margin-left: 3px;
  width: 4vw;
  color: black;
  box-shadow: white 5px 5px 5px;

  &:hover{
    cursor: pointer;
    box-shadow: rgb(255, 255, 102) 5px 5px 5px;
  }

`
const EstilizaBotao = styled.button`
  padding: 4px;
  font-weight: bold;
  font-family: monospace;
  width: 12vw;
  height: 5vh;
  color: black;
  box-shadow: white 5px 5px 5px;
  margin-right: 1vw;

  &:hover{
    cursor: pointer;
    box-shadow: black 5px 5px 5px;
  }
`

 
const EstilizaImage = styled.img`

  margin-left: 2vw;
  margin-bottom: 1.5vh;

`

const EstilizaP = styled.p`
margin-bottom: 1.5vh;
margin-left: 1vw;
font-size: 25px;
font-weight: bold;
font-family: monospace;
`

const DivSpot = styled.div`

  display: flex;
  align-items: center;
`
const EstilizaP2 = styled.p`
  font-weight: bold;
font-family: monospace;
font-size: 15px;

`

const DivRenderiza = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 2vh;

`

const EstilizaAudio = styled.audio`

  height: 3vh;

`

export default class Playlist extends Component {


state = {

    playlist: [],
    inputNomeMusica: '',
    inputBandaMusica: '',
    inputUrlMusica: '',

}

componentDidMount(){

  this.getAllPlaylist();

}

componentDidUpdate(){

  this.getAllPlaylist();
}


onChangeNomeMusica = (e) =>{
  this.setState({inputNomeMusica: e.target.value})
}

onChangeBandaMusica = (e) =>{
  this.setState({inputBandaMusica: e.target.value})
}

onChangeUrlMusica = (e) =>{
  this.setState({inputUrlMusica: e.target.value})
}  



getAllPlaylist = () =>{

  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`,{
    headers:{
      Authorization: 'lincoln-ribeiro-ailton'
    }
  }).then((response) =>{
    this.setState({playlist: response.data.result.tracks})

  }).catch((error)=>{
    alert('erro:', error)
  })



}

addMusic = () =>{

  const body = {
    name: this.state.inputNomeMusica,
    artist: this.state.inputBandaMusica,
    url: this.state.inputUrlMusica
  };
  
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`,body,{
  headers:{
    Authorization: 'lincoln-ribeiro-ailton'

  }}).then((res) =>{
    alert('Música Adicionada')

    this.setState({
    inputNomeMusica: '',
    inputBandaMusica: '',
    inputUrlMusica: '',
  })
  this.getAllPlaylist()

  }).catch((err) =>{
    alert('Erro, Tente Novamente')

  })

}



  render() {

    const renderiza2 = this.state.playlist.map((music) =>{

      return (
        <DivRenderiza key={music.id}>
          <EstilizaP2>{music.name}</EstilizaP2>
          <EstilizaP2>{music.artist}</EstilizaP2>
            <EstilizaAudio src={music.url} controls></EstilizaAudio>
           
          </DivRenderiza>
        
      )
      
      }) 


    return (

      <FundoTotal>
        < GlobalStyle/>
        <EstilizaHeader>

        <DivSpot>
        <EstilizaImage src={icon} width='60px' height='60px'></EstilizaImage>
        <EstilizaP>SpotLin</EstilizaP>
        </DivSpot>

          <EstilizaBotao onClick={this.props.renderizaPag}>Voltar</EstilizaBotao>
        </EstilizaHeader>

        <EstilizaMain>
          <DivInput>
          <EstilizaText>Adicionar musica</EstilizaText>
          <EstilizaInput placeholder='Musica'
          value={this.state.inputNomeMusica}
          onChange={this.onChangeNomeMusica}
          ></EstilizaInput>

          <EstilizaInput placeholder='Artista/Banda'
          value={this.state.inputBandaMusica}
          onChange={this.onChangeBandaMusica}></EstilizaInput>

          <EstilizaInput placeholder='Url'
          value={this.state.inputUrlMusica}
          onChange={this.onChangeUrlMusica}></EstilizaInput>
           <EstilizaBotao0 onClick={this.addMusic}> Criar </EstilizaBotao0>
          </DivInput>


         
              <div>{renderiza2}</div>
                  
        </EstilizaMain>

        </FundoTotal>
    )
  }
}
