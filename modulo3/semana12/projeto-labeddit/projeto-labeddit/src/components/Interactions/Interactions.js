import React, { useState } from "react";
import {
    Icon,
  } from "@chakra-ui/react";
import { TbArrowBigTop } from "react-icons/tb";
import {TbArrowBigDown} from "react-icons/tb"
import {TiArrowUpThick} from "react-icons/ti"
import {TiArrowDownThick} from "react-icons/ti"
import {BiComment} from "react-icons/bi"
import {DivContainerInteractions, DivAlinhamento} from './InteractionsStyle'
import {AiOutlineShareAlt} from "react-icons/ai"





const Interactions = () =>{

  const [interaction1, setInteraciton1] = useState(0)
  const [interaction2, setInteraciton2] = useState(0)
  const [interaction3, setInteraciton3] = useState(0)




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


    return(<DivContainerInteractions>
       <DivAlinhamento><Icon as={TbArrowBigTop} w={10} h={6} marginBottom={0} onClick={() =>Interaction(1)}/>
        {interaction1}

       <Icon as={TbArrowBigDown} w={10} h={6} marginBottom={0} onClick={() =>Interaction(2)}/>
        {interaction2}

       <Icon as={BiComment} w={10} h={6} marginBottom={0} onClick={() =>Interaction(3)}/>
       {interaction3} Comments
       
       
       </DivAlinhamento>



       <DivAlinhamento>
       <Icon as={AiOutlineShareAlt} w={10} h={6} marginBottom={0} onClick={Interaction}/>
       Share
       </DivAlinhamento>
    </DivContainerInteractions>)


}

export default Interactions