import React, { useEffect, useState } from "react";
import {
    Icon,
  } from "@chakra-ui/react";
import { TbArrowBigTop } from "react-icons/tb";
import {TbArrowBigDown} from "react-icons/tb"
import {TiArrowUpThick} from "react-icons/ti"
import {TiArrowDownThick} from "react-icons/ti"
import {BiComment} from "react-icons/bi"
import {DivContainerInteractions, DivAlinhamento, DivCommentContainer} from './InteractionsStyle'
import {AiOutlineShareAlt} from "react-icons/ai"
import { useNavigate } from "react-router";
import goToPage from "../../routes/coordinator";
import {voteInPost} from './../../services/vote'



const Interactions = ({id,postInfo, dataTratada, dataTratada1}) =>{


  const Navigate = useNavigate()

const Comment = (id) =>{

  localStorage.setItem('infoName', postInfo.username)
  localStorage.setItem('infoTitle', postInfo.title)
  localStorage.setItem('infoBody', postInfo.body)
  localStorage.setItem('dataTratada', dataTratada)
  localStorage.setItem('dataTratada1', dataTratada1)
  goToPage(Navigate,`post/${id}`)


}

 const addVoteInPost = (interaction) =>{
 

 const id = postInfo.id
 const body = {
  direction: interaction
}
  voteInPost(id,body)

 }


 

    return(<DivContainerInteractions>
       <DivAlinhamento><Icon as={TbArrowBigTop} w={10} h={6} marginBottom={0} onClick={() =>addVoteInPost(1)}/>
        {postInfo.voteSum === 1 ?
          postInfo.voteSum
          :
          0
        }

       <Icon as={TbArrowBigDown} w={10} h={6} marginBottom={0}  onClick={() =>addVoteInPost(-1)}/>
       {postInfo.voteSum === -1 ?
          postInfo.voteSum
          :
          0
        }
       <DivCommentContainer onClick={() =>Comment(id)}>
        <Icon as={BiComment} w={10} h={6} marginBottom={0}/>
        </DivCommentContainer>
       
       {postInfo.commentCount === null ?
               0
               :
        postInfo.commentCount} Comments
       
       
       </DivAlinhamento>



       <DivAlinhamento>
       <Icon as={AiOutlineShareAlt} w={10} h={6} marginBottom={0}/>
       Share
       </DivAlinhamento>
    </DivContainerInteractions>)


}

export default Interactions