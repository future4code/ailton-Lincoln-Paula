import React, { useEffect, useState } from "react";
import logo from "./../../assets/images/logo.png";
import { DivContainer, DivMenuContainer } from "./style";
import {
  Input,
  Icon,
  IconButton,
  Button,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import goToPage from "./../../routes/coordinator";
import { logout } from "./../../services/user";

const Header = () => {
  const [tokenChange, setTokenChange] = useState(1);
  const Navigate = useNavigate();

  useEffect(() => {
    setTokenChange(1);
    menuChoose();
  }, [tokenChange]);

  const menuChoose = () => {
    const token = localStorage.getItem("login");
    if (token) {
      return (
        <div>
          <div>
            <MenuItem icon={<MdOutlinePersonAddAlt />}>Logado</MenuItem>
          </div>

          <div onClick={() => logout(tokenChange, setTokenChange)}>
            <MenuItem icon={<IoIosLogOut />}>Sair</MenuItem>
          </div>
        </div>
      );
    } else {
      return (
        <div onClick={() => goToPage(Navigate, "signup")}>
          <MenuItem icon={<MdOutlinePersonAddAlt />}>
            Logar / Cadastrar
          </MenuItem>
        </div>
      );
    }
  };

  return (
    <DivContainer>
      <img src={logo} onClick={() => goToPage(Navigate, "")}></img>
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          placeholder="Buscar no labeddit"
          variant="flushed"
          height={10}
        ></Input>
      </InputGroup>
      <DivMenuContainer>
        <Icon as={BsFillPersonFill} w={4} h={12} marginBottom={0} />

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<ChevronDownIcon />}
            marginBlock={1}
            marginBottom={0}
            variant="ghost"
          />
          <MenuList>{menuChoose()}</MenuList>
        </Menu>
      </DivMenuContainer>
    </DivContainer>
  );
};
export default Header;
