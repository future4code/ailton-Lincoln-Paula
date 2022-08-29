import React from "react";
import { DivContainerHeader } from "./style";
import logo from "./../../assets/images/iconWhite.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Button,
  IconButton,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import {DivCarousel} from './../../pages/HomePage/style'

function Header() {
  return (
    <div><DivContainerHeader>
      <img src={logo} width="55px" height="50px"></img>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} marginRight={4}>
              {isOpen ? (<Icon as={AiOutlineClose} w={"6vw"} h={"4vh"}/>) : <Icon as={AiOutlineMenu} w={"6vw"} h={"4vh"} />}
            </MenuButton>
            <MenuList marginBottom={'24px'}>
              <MenuItem
                width={"100vw"}
                height={"15vh"}
                display={"flex"}
                justifyContent={"center"}
              >
                <p>Página Inicial</p>
              </MenuItem>
              <hr></hr>
              <MenuItem
                width={"100vw"}
                height={"15vh"}
                display={"flex"}
                justifyContent={"center"}
              >
                <p>Clientes</p>
              </MenuItem>
              <hr></hr>
              <MenuItem
                width={"100vw"}
                height={"15vh"}
                display={"flex"}
                justifyContent={"center"}
              >
                <p>Labank</p>
              </MenuItem>
              <hr></hr>
              <MenuItem
                width={"100vw"}
                height={"15vh"}
                display={"flex"}
                justifyContent={"center"}
              >
                <p>Perguntas</p>
              </MenuItem>
              <hr></hr>
              <MenuItem
                width={"100vw"}
                height={"15vh"}
                display={"flex"}
                justifyContent={"center"}
              

              >
                <p>Login</p>
                <Icon as={FiLogIn} w={"6vw"} h={"4vh"} marginLeft={2}/>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </DivContainerHeader>
        <hr/>
    </div>
  );
}

export default Header;
