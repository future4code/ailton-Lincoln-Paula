import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { ChakraProvider } from "@chakra-ui/react";
import { Button,Stack} from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import {
  GlobalStyle,
  DivContainer,
  Main,
  Header,
  TextHeader,
  DivBotoes,
  DivBackground,
  Text,
  DivHeaderBackground,
  DivHeaderBackgroundButton,
  DivHeaderBackgroundYellow,
  Card,
  TextCard,
  TextCandidate,
  CardCandidatos,
  CandidateBack,
  CandidateApproved,
  TextCase,
  ButtonPosition,
  CardApproved,
} from "../../style/AdminDetailTripPageStyle";
import { BASE_URL } from "../../constants/Url/url";
import { useRequestDataGet } from "./../../constants/Hook/useRequestData";
import { Deslogar } from "./../../constants/Functions/Logout";
import axios from "axios";

function AdminDetailTrip(props) {
  const Navigate = useNavigate();
  const params = useParams();
  const [tripDetail, setTripDetail] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [approved, setApproved] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      goToPage(Navigate, "login");
    }
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setTripDetail(res.data.trip);
        setCandidate(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const detalhesViagem = () => {
    return (
      <Card>
        <TextCard>Viagem</TextCard>
        <p>
          <b>Planeta:</b> {tripDetail.planet}
        </p>
        <p>
          <b>Nome:</b> {tripDetail.name}
        </p>
        <p>
          <b>Descrição:</b> {tripDetail.description}
        </p>
        <p>
          <b>Duração:</b> {tripDetail.durationInDays} dias
        </p>
        <p>
          <b>Data:</b> {tripDetail.date}
        </p>
      </Card>
    );
  };

  const RetornaCandidatos = () => {
    return candidate.map((info) => {
      return (
        <CardCandidatos>
          <p>
            <b>Nome:</b> {info.name}
          </p>
          <p>
            <b>Idade:</b> {info.age}
          </p>
          <p>
            <b>Profissão: </b>
            {info.profession}
          </p>
          <p>
            <b>Texto: </b>
            {info.applicationText}
          </p>
          <p>
            <b>País: </b>
            {info.country}
          </p>
          <Button
            onClick={() => decideCandidate(info.id, true)}
            colorScheme={"green"}
            marginLeft={"12vw"}
            width={"70px"}
          >
            Aprovar
          </Button>
          <Button
            onClick={() => decideCandidate(info.id, false)}
            colorScheme={"red"}
            marginLeft={"10vw"}
            width={"120px"}
          >
            Não aprovar
          </Button>
        </CardCandidatos>
      );
    });
  };

  const decideCandidate = (id, approved) => {
    const token = localStorage.getItem("token");
    const body = {
      approve: approved,
    };
    axios
      .put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        if (approved === true) {
          return alert("Candidato Aprovado !");
        } else {
          return alert("Candidato Negado !");
        }
      })

      .catch((err) => {
        alert(err);
      });
  };

  const aprovados = () => {
    return approved.map((candidate) => {
      return (
        <CardApproved key={candidate.id}>
          <p>
            <b>Nome: </b>
            {candidate.name}
          </p>
        </CardApproved>
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
          <ButtonPosition>
            <Button
              colorScheme={"red"}
              marginBlock={6}
              onClick={() => Deslogar(Navigate)}
              rightIcon={<CloseIcon></CloseIcon>}
            >
              Logout
            </Button>
          </ButtonPosition>
        </Header>
        <Main>
          <DivBackground>
            <DivHeaderBackground>
              <Text>Detalhes da viagem!</Text>
              <DivHeaderBackgroundButton>
                <DivHeaderBackgroundYellow>
                  <Button
                    colorScheme={"purple"}
                    marginBlock={6}
                    marginRight={2}
                    leftIcon={<ArrowBackIcon></ArrowBackIcon>}
                    onClick={() => goToPage(Navigate, "admin/trips/list")}
                  >
                    Voltar
                  </Button>
                </DivHeaderBackgroundYellow>

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

            {tripDetail.length !== 0 ? (
              detalhesViagem()
            ) : (
              <h1>...Carregando</h1>
            )}

            <div>
              <TextCandidate>Candidatos</TextCandidate>
              <CandidateBack>
                {candidate.length !== 0 ? (
                  RetornaCandidatos()
                ) : (
                  <TextCase>Nenhum candidato !</TextCase>
                )}
              </CandidateBack>

              <CandidateApproved>
                <TextCandidate>Aprovados</TextCandidate>
                {approved.length !== 0 ? (
                  aprovados()
                ) : (
                  <TextCase>...Sem Candidatos !</TextCase>
                )}
              </CandidateApproved>
            </div>
          </DivBackground>
        </Main>
      </DivContainer>
    </ChakraProvider>
  );
}

export default AdminDetailTrip;
