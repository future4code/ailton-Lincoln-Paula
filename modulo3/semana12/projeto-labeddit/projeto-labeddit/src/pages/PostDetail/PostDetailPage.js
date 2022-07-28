import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtected'
import { useParams } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import Header from '../../components/Header/Header'
import {DivContainerDetailPage, DivContainerCard, DivTitle, DivName, DivBody, ImageUser,
     DivPhoto, DivDate, GrayText, 
     BlackText, Image, DivContainerCardComments, DivInput, DivCommentContainer1,
     TextCentralize} from './PostDetailPageStyle'
import { ImArrowRight } from 'react-icons/im';
import {
    Icon,
  } from "@chakra-ui/react";
  import {useForm} from './../../hooks/useForm'
  import {createComment} from './../../services/user'
  import {
    Input,
  } from "@chakra-ui/react";
import {voteInComment} from './../../services/vote'
import { DivCommentContainer } from '../../components/Interactions/InteractionsStyle'
import Interactions from '../../components/Interactions/Interactions'


const PostDetailPage = () =>{


useProtectedPage()
const {id} = useParams()
const dataComments = useRequestData([], `${BASE_URL}/posts/${id}/comments`)

const [form, onChange, cleanFields] = useForm({
    bodyComment: ''
   }) 

   const body = {
    body: form.bodyComment
   }


const comentarios = dataComments[0].map((comentariosInfo)=>{


    return <DivCommentContainer1 key={comentariosInfo.id}>
        <DivPhoto>
            
            <Image src='https://whatsfacil.com/assets/img/default-avatar.png'/>
            <GrayText>• Enviado por </GrayText> <BlackText>{comentariosInfo.username}</BlackText>
            </DivPhoto>
            {comentariosInfo.body}
             <Interactions id={comentariosInfo.id} postInfo={comentariosInfo}/>
    </DivCommentContainer1>


})

const addComment = () =>{

    createComment(body, cleanFields, id)


}

// const addVoteInComment = (interaction) =>{


//     const id = postInfo.id
//     const body = {
//       direction: interaction
//     }
    
    
//     voteInComment(id, body)
    
//      }

     
return(
        <DivContainerDetailPage>
        <Header/>

    <DivContainerCard>
        <DivPhoto>
            <ImageUser src='https://whatsfacil.com/assets/img/default-avatar.png'  
             alt='user'>
            </ImageUser>
             <DivName> <GrayText>• Enviado por </GrayText><BlackText>{localStorage.getItem('infoName')}</BlackText></DivName>
            <DivDate><GrayText>{localStorage.getItem('dataTratada1')} de {localStorage.getItem('dataTratada')}</GrayText></DivDate>
            </DivPhoto>
      



        <DivTitle><b>{localStorage.getItem('infoTitle')}</b></DivTitle>
        <DivBody>{localStorage.getItem('infoBody')}</DivBody>
    </DivContainerCard>
    <DivInput><Input placeholder='adicionar comentário'
    w={60}
    h={20}
    bg={'white'}
    name={'bodyComment'}
    onChange={onChange}
    required
    value={form.bodyComment}></Input>
    <button onClick={addComment}>{<ImArrowRight/>}</button>
        </DivInput>

     <DivContainerCardComments>{dataComments[0].length === 0 ?
                                <TextCentralize>Sem comentários</TextCentralize>
                                :
                                comentarios}
     </DivContainerCardComments>
    </DivContainerDetailPage>
)


}

export default PostDetailPage