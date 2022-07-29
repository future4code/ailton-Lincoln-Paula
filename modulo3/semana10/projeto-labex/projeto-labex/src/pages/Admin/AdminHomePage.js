import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Stack} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  GlobalStyle,
  DivContainer,
  Main,
  Header,
  TextHeader,
  DivBotoes,
  CardTrip,
  DivBackground,
  Text,
  DivHeaderBackground,
  DivHeaderBackgroundButton,
} from "../../style/AdminHomePageStyle";
import { BASE_URL } from "../../constants/Url/url";
import { Deslogar } from "./../../constants/Functions/Logout";
import axios from "axios";

function AdminHomePage() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  const pegaTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setData(res.data.trips);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      goToPage(Navigate, "login");
    }
    pegaTrips();
    renderizaTrip();
  }, []);

  const delThisTrip = (id) => {
    const confirm = window.confirm("Deseja deletar ?");
    const token = localStorage.getItem("token");

    if (confirm) {
      axios
        .delete(`${BASE_URL}/trips/${id}`, {
          headers: {
            auth: token,
          },
        })

        .then((res) => {
          alert(`Viagem deletada !`);
          pegaTrips();
        })
        .catch((err) => {
          alert("Não foi possível deletar !");
        });
    }
  };
  const renderizaTrip = () => {
    return data.map((viagens) => {
      return (
        <CardTrip key={viagens.id}>
          <p onClick={() => goToPage(Navigate, `admin/trips/${viagens.id}`)}>
            {viagens.name}
          </p>
          <DeleteIcon
            marginRight={5}
            marginTop={1}
            onClick={() => delThisTrip(viagens.id)}
          />
        </CardTrip>
      );
    });
  };

  return (
    <ChakraProvider>
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          <TextHeader onClick={() => goToPage(Navigate, "home")}>
            LabeX
            <DivBotoes>
              <Stack
                direction="row"
                marginLeft={"120px"}
                spacing={4}
                align="center"
              ></Stack>
            </DivBotoes>
          </TextHeader>

          <Button
            colorScheme={"red"}
            marginBlock={6}
            marginRight={2}
            onClick={() => Deslogar(Navigate)}
            rightIcon={<CloseIcon></CloseIcon>}
          >
            Logout
          </Button>
        </Header>
        <Main>
          <DivBackground>
            <DivHeaderBackground>
              <Text>Viagens Agendadas!</Text>
              <DivHeaderBackgroundButton>
                <Button
                  onClick={() => goToPage(Navigate, "admin/trips/create")}
                  marginBlock={4}
                  colorScheme={"green"}
                  rightIcon={<CheckIcon />}
                >
                  Criar Viagem
                </Button>
              </DivHeaderBackgroundButton>
            </DivHeaderBackground>
            {data.length !== 0 ? renderizaTrip() : <p>...carregando</p>}
          </DivBackground>
        </Main>
      </DivContainer>
    </ChakraProvider>
  );
}

export default AdminHomePage;
