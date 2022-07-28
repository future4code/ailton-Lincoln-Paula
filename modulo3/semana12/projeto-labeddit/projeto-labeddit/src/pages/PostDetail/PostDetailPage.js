import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtected'
import { useParams } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import Header from '../../components/Header/Header'
import {DivContainerDetailPage, DivContainerCard, DivTitle, DivName, DivBody, ImageUser,
     DivPhoto, DivDate, GrayText, BlackText, Image, DivContainerCardComments} from './PostDetailPageStyle'

const PostDetailPage = () =>{


useProtectedPage()
const {id} = useParams()
const dataComments = useRequestData([], `${BASE_URL}/posts/${id}/comments`)



const comentarios = dataComments[0].map((comentariosInfo)=>{


    return <div key={comentariosInfo.id}>
        <DivPhoto>
            
            <Image src='https://whatsfacil.com/assets/img/default-avatar.png'/>
            <GrayText>• Enviado por </GrayText> <BlackText>{comentariosInfo.username}</BlackText>
            </DivPhoto>
        {comentariosInfo.body}
    </div>


})



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

     <DivContainerCardComments>{dataComments[0].length === 0 ?
                                <p>Sem comentários</p>
                                :
                                comentarios}
     </DivContainerCardComments>
    </DivContainerDetailPage>
)


}

export default PostDetailPage