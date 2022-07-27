import React from 'react'
import icon from './../../assets/images/favicon-32x32.png'
import { BsArrowRightCircle } from "react-icons/bs";
import {
    Input,
    Icon,
  } from "@chakra-ui/react";
import {Button, DivContainerCreatePost} from './style'

const CreatePost = () =>{

    return(<DivContainerCreatePost>

        <img src='https://whatsfacil.com/assets/img/default-avatar.png'></img>
        <Input
        placeholder='Criar Post'
        w={52}
        h={8}></Input>
        <Button>➜</Button>
    </DivContainerCreatePost>)

}

export default CreatePost