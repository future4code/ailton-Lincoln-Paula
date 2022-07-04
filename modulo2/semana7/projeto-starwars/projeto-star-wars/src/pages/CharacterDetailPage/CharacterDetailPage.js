import axios from 'axios'
import React, { Component } from 'react'
import {BASE_URL} from '../../constants/urls.js'
import { getInfoCharacter, getPlanet } from '../../services/Requests.js'

export default class CharacterDetailPage extends Component {

  state={
    infoCharacter: [],
    planet:''
  }
   
   componentDidMount(){
      getInfoCharacter(this.props.info, this.saveCharacter)
     
    }


   componentDidUpdate (prevsprops, prevstate){
    if(this.state.character !== prevstate.infoCharacter){
       getPlanet(this.state.infoCharacter.homeworld, this.savePlanet)
    }
   

   }

   saveCharacter = (data) =>{
        
    this.setState({infoCharacter: data})

} 

  savePlanet = (data) =>{
        
  this.setState({planet: data})

} 



  render() {

    // console.log(this.state.infoCharacter)

    return (

    <div>
        

      {this.state.infoCharacter.name && this.state.planet ?
      (
      <div>

      <p>Nome: {this.state.infoCharacter.name}</p>
      <p>Planeta: {this.state.planet}</p>

      </div>

      )
    : <p>Carregando...</p>}

      <button onClick={this.props.list}>Voltar</button>

    </div> 

    )
  }
}
