import React, { Component } from 'react'
import axios from 'axios'
import  {BASE_URL}  from '../../constants/urls.js'
import { CharacterCard, BackGround } from './styled.js'
import { getAllCharacters } from '../../services/Requests.js'
import imgBack from '../../assets/background.jpg'

export default class CharacterListPage extends Component {

    state = {
        Characters: []
    }

    componentDidMount(){

        getAllCharacters(this.saveCharacter)

    }


saveCharacter = (data) =>{
        
        this.setState({Characters: data})

    }   



    

  render() {

    // console.log(this.state.Characters)
    const Characters = this.state.Characters.map((person) =>{

        return <CharacterCard key={person.url} onClick={() => this.props.goDetail(person.url)}>
            {person.name}
            </CharacterCard>


    })

    return (

      <BackGround>
        
        CharacterListPage
        {Characters}
        
        
      </BackGround>

    )
  }
}
