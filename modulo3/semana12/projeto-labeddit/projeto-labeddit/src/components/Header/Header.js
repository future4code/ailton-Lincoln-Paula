import React from "react";
import logo from './../../assets/images/logo.png'
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
import { IoIosLogOut} from "react-icons/io";
import {MdOutlinePersonAddAlt} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import goToPage from './../../routes/coordinator'

const Header = () => {

  const Navigate = useNavigate()  


  const consola = () => {
    console.log("caiu");
  };

  return (
    <DivContainer>
      <img src={logo} onClick={()=>goToPage(Navigate,'')}></img>
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          placeholder="Buscar no labeddit"
          variant="flushed"
          height={10}
        ></Input>
      </InputGroup>
      <DivMenuContainer>
        <Icon as={BsFillPersonFill} w={4} h={12}  marginBottom={0}/>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<ChevronDownIcon />}
            marginBlock={1}
            marginBottom={0}
            variant="outline"
          />
          <MenuList>
          <div onClick={() => goToPage(Navigate, 'login')}>
            <MenuItem 
            icon={<MdOutlinePersonAddAlt />}
            >
                Entrar / Cadastrar-se
            </MenuItem>
            </div>
           
            <div onClick={consola}>
            <MenuItem
            icon={<IoIosLogOut />}
            >
                Sair
            </MenuItem>
            </div>
          </MenuList>
        </Menu>
      </DivMenuContainer>
    </DivContainer>
  );
};
export default Header;
