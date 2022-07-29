import React from "react";
import {
  DivContainer,
  GlobalStyle,
  Main,
  DivLogin,
  DivCentralizaMain,
  TitleLogin,
} from "./../../style/LoginPageStyle";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Stack, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useRequestDataPost } from "../../constants/Hook/useRequestData";
import { BASE_URL } from "../../constants/Url/url";
import { useNavigate } from "react-router-dom";
import { goToPage } from "./../../routes/coordinator";
import { TextHeader, Header } from "./../../style/LoginPageStyle";

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#submit");

    btn.click();
  }
});

function LoginPage() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      goToPage(Navigate, "admin/trips/list");
    }

    if (localStorage.getItem("token") === null) {
      goToPage(Navigate, "login");
    }
  });

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const onChangePass = (e) => {
    setPass(e.target.value);
  };

  const SubmitLoginAndPass = (e) => {
    e.preventDefault();

    const body = {
      email: login,
      password: pass,
    };

    useRequestDataPost(`${BASE_URL}/login`, body, Navigate);
  };

  return (
    <ChakraProvider>
      <GlobalStyle></GlobalStyle>
      <DivContainer>
        <Header>
          <TextHeader onClick={() => goToPage(Navigate, "home")}>
            LabeX
          </TextHeader>
        </Header>

        <DivCentralizaMain>
          <Main>
            <DivLogin>
              <TitleLogin>Admin Login</TitleLogin>

              <Stack>
                <FormControl>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    id="1"
                    type="email"
                    value={login}
                    required
                    onChange={onChangeLogin}
                  />

                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <Input
                    id="2"
                    type="password"
                    value={pass}
                    required
                    onChange={onChangePass}
                  />
                </FormControl>
              </Stack>

              <Button
                bg="black"
                id={"submit"}
                colorScheme={"white"}
                onClick={SubmitLoginAndPass}
                color="white"
                padding={"20px"}
                w="sz"
              >
                Entrar
              </Button>
            </DivLogin>
          </Main>
        </DivCentralizaMain>
      </DivContainer>
    </ChakraProvider>
  );
}

export default LoginPage;
