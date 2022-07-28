import React from 'react'
import icon from './../../assets/images/favicon-32x32.png'
import { ImArrowRight } from "react-icons/im";
import {
    Input,
    Icon,
  } from "@chakra-ui/react";
import {Button, DivContainerCreatePost, DivInput} from './style'
import {createPost} from './../../services/user'
import {useForm} from './../../hooks/useForm'



const CreatePost = () =>{
    
    const [form, onChange, cleanFields] = useForm({
        title: '', body:''
       }) 

       const body = {
        title: form.title,
        body: form.body
       }

    const criandoPost = () =>{
    
        createPost(body, cleanFields)
    
    
    }





    return(<DivContainerCreatePost>

        <img src='https://whatsfacil.com/assets/img/default-avatar.png'></img>
        <DivInput>
            <Input
        name={'title'}
        onChange={onChange}
        value={form.title}
        required    
        placeholder='Título'
        w={24}
        h={8}>
        </Input>



        <Input
        name={'body'}
        onChange={onChange}
        value={form.body}
        placeholder='Post'
        w={52}
        h={12}></Input>
        
        </DivInput>

        <Button onClick={criandoPost}><Icon as={ImArrowRight}/></Button>
    </DivContainerCreatePost>)

}

export default CreatePost