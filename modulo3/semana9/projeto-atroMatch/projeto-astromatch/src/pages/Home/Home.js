import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { BASE_URL } from "../../constants/urls";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
  }
`;

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffb3b3;
`;

const DivCard = styled.div`
    background-color: #ffb3b3;
  height: 100vh;
  width: 35vw;
`;

function Home(props) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfilleChoose();
  }, []);

  let getProfilleChoose = () => {
    axios
      .get(`${BASE_URL}lincoln/person`)
      .then((res) => {
        if (res.data.profile) {
          setProfile(res.data.profile);
        } else {
          alert("acabaram os perfis disponíveis");
          props.Clear();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getChoosePerson = () => {
    const url = `${BASE_URL}lincoln/choose-person`;

    const body = {
      id: profile.id,
      choice: true,
    };

    axios
      .post(url, body)

      .then((res) => {
        if (res.data.isMatch) {
          return (
            alert(`Deu Match !`),
          getProfilleChoose()
          )
        }
        getProfilleChoose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DivContainer>
      <GlobalStyle></GlobalStyle>

      <DivCard>
        <Header setaTela={props.setTela}></Header>

        <Main
          profile={profile}
          getChoosePerson={getChoosePerson}
          getProfilleChoose={getProfilleChoose}
        />
      </DivCard>
    </DivContainer>
  );
}

export default Home;
