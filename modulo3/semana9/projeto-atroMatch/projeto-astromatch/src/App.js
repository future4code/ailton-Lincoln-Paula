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
    return <Home setTela={setTela}></Home>
    break;

  case 'matches':
  return <Matches></Matches>
  break;
    
}

}




  return (


    <div>
      {trocarTela()}

    </div>
  );
}

export default App;
