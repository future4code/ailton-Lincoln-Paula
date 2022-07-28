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




const Interactions = ({id,postInfo, dataTratada, dataTratada1}) =>{





  const [interaction1, setInteraciton1] = useState(0)
  const [interaction2, setInteraciton2] = useState(0)
  const [interaction3, setInteraciton3] = useState(0)
  const Navigate = useNavigate()




  


  

const Interaction = (id) =>{

switch (id){
  case 1:
    setInteraciton1(1)
    break;

  case 2:
    setInteraciton2(1)
    break;

  case 3:
    setInteraciton3(1)
    break;
}

}


const Comment = (id) =>{

  localStorage.setItem('infoName', postInfo.username)
  localStorage.setItem('infoTitle', postInfo.title)
  localStorage.setItem('infoBody', postInfo.body)
  localStorage.setItem('dataTratada', dataTratada)
  localStorage.setItem('dataTratada1', dataTratada1)
  goToPage(Navigate,`post/${id}`)


}


    return(<DivContainerInteractions>
       <DivAlinhamento><Icon as={TbArrowBigTop} w={10} h={6} marginBottom={0} onClick={() =>Interaction(1)}/>
        {interaction1}

       <Icon as={TbArrowBigDown} w={10} h={6} marginBottom={0} onClick={() =>Interaction(2)}/>
        {interaction2}

       <DivCommentContainer onClick={() =>Comment(id)}>
        <Icon as={BiComment} w={10} h={6} marginBottom={0} onClick={() =>Interaction(3)}/>
        </DivCommentContainer>
       
       {interaction3} Comments
       
       
       </DivAlinhamento>



       <DivAlinhamento>
       <Icon as={AiOutlineShareAlt} w={10} h={6} marginBottom={0} onClick={Interaction}/>
       Share
       </DivAlinhamento>
    </DivContainerInteractions>)


}

export default Interactions