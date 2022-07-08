import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { ChakraProvider } from '@chakra-ui/react'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
  }
`;

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const DivCard = styled.div`
  background-color: white;
  height: 100vh;
  width: 35vw;
`;

function Matches(props) {
  
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [matches]);

  let getMatches = () => {
    const url = `${BASE_URL}lincoln/matches`;

    axios
      .get(url)

      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let matchesMap = matches.map((info) => {
    return (
      <div key={info.id}>
        <img src={info.photo} 
        alt={info.photo_alt}
        width="120px" 
        height="120px"></img>
        <p>{info.name}</p>
      </div>
    );
  });

  return (  
    <ChakraProvider>

    <DivContainer>

      <h1>Seus matches</h1>
      <div>
              <button onClick={() => props.setTela('home')}>Voltar</button>
              <button onClick={props.Clear}>Clear Match</button>
      <main>{matchesMap}</main>
      </div>

      <footer></footer>
    </DivContainer>

    </ChakraProvider>
  );
}

export default Matches;
