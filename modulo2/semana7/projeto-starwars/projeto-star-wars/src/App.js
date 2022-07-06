import React, { Component } from 'react'
import List from './pages/CharacterListPage/CharacterListPage.js'
import Detail from './pages/CharacterDetailPage/CharacterDetailPage.js'
import { BASE_URL } from './constants/urls.js'

export default class App extends Component {

  state= {
    page: 'list',
    clickedCharacterUrl: ''
  }


  goToDetailPage = (url) =>{

    this.setState({page: 'detail', clickedCharacterUrl: url})


  }

  goToListPage = (url) =>{

    this.setState({page: 'list' , clickedCharacterUrl: ''})


  }

  selectPage =() =>{
  switch (this.state.page) {
    case 'list':
      return <List goDetail={this.goToDetailPage}></List>
      break;
  

    case 'detail':
    return <Detail info={this.state.clickedCharacterUrl} list={this.goToListPage}></Detail>
    break;

    default: 
    return <List goDetail={this.goToDetailPage}></List>
      break;
  }

  }

  render() {


    return (

      <div>{this.selectPage()}</div>

    )
  }
}

