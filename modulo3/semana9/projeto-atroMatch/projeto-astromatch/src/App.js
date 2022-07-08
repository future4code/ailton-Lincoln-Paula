import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";
import Home from "./pages/Home/Home.js";
import Matches from "./pages/Matches/Matches.js";
import {BASE_URL} from './constants/urls'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [tela, setTela] = useState("home");

  const trocarTela = () => {
    switch (tela) {
      case "home":
        return <Home setTela={setTela}
               Clear={Clear}></Home>;
        break;

      case "matches":
        return <Matches setTela={setTela}
                Clear={Clear}></Matches>;
        break;
    }
  };


  let Clear = () => {
    const url = `${BASE_URL}lincoln/clear`;

    axios
      .put(url)
      .then((res) => {
        alert(`Perfis Limpos`);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return <div>{trocarTela()}</div>;
}

export default App;
