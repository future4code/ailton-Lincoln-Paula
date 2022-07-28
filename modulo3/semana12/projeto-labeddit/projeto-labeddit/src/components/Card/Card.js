import React, { useEffect } from 'react'
import {DivContainerCard, DivTitle, DivName, DivBody, ImageUser, DivPhoto, DivDate, GrayText, BlackText} from './CardStyle'
import Interactions from './../Interactions/Interactions'


const Card = ({posts}) =>{

useEffect(()=>{


    

},[])

const allPosts = posts.map((postInfo)=>{

        const data = postInfo.createdAt.split('-')

    return <DivContainerCard key={postInfo.id}>
        <DivPhoto>
            <ImageUser src='https://whatsfacil.com/assets/img/default-avatar.png'  
         alt='user'>
            </ImageUser>
             <DivName> <GrayText>• Enviado por </GrayText><BlackText>{postInfo.username}</BlackText></DivName>
            <DivDate><GrayText>{`${data[1]} de ${data[0]}`}</GrayText></DivDate>
            </DivPhoto>
      



        <DivTitle><b>{postInfo.title}</b></DivTitle>
        <DivBody>{postInfo.body}</DivBody>
        <Interactions id={postInfo.id} postInfo={postInfo} dataTratada={data[0]} dataTratada1={data[1]}/>
    </DivContainerCard>


})


return(
    <div>
        
    {allPosts}
    </div>


)



}

export default Card