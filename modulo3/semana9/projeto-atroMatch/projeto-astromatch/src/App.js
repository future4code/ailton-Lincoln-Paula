import styled from "styled-components";
import axios from "axios";
import React, {useState} from "react";
import Home from './pages/Home/Home.js'
import Matches from './pages/Matches/Matches.js'

function App() {

const [tela, setTela] = useState('home')


const trocarTela = () =>{

switch (tela) {
  case 'home':
    return <Home setaTela={setaTela}></Home>
    break;

  case 'matches':
  return <Matches setaTela={setaTela}></Matches>
  break;
    
  default:
    return <Home></Home>
    break;
}

}


let setaTela = (id) =>{

  console.log('oi', id)

  setTela(id)
}


switch (tela) {
  case 'home':
      return <Home/>
    break;

  default:
    break;
}


  return (


    <div>
      {trocarTela()}

    </div>
  );
}

export default App;
