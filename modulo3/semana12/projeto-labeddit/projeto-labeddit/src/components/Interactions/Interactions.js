import React from "react";
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
import { TbArrowBigTop } from "react-icons/tb";
import {TbArrowBigDown} from "react-icons/tb"
import {TiArrowUpThick} from "react-icons/ti"
import {TiArrowDownThick} from "react-icons/ti"
import {BiComment} from "react-icons/bi"
import {DivContainerInteractions} from './InteractionsStyle'

const Interactions = () =>{

    return(<DivContainerInteractions>
       <div><Icon as={TbArrowBigTop} w={10} h={6} marginBottom={0}/></div>
       <div><Icon as={TbArrowBigDown} w={10} h={6} marginBottom={0}/></div>
       <div><Icon as={BiComment} w={10} h={6} marginBottom={0}/></div>
    </DivContainerInteractions>)


}

export default Interactions