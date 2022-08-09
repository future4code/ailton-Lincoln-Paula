import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import goToPage from './../../routes/coordinator'
import { Button } from '@chakra-ui/react'
import Header from '../../components/Header/Header'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import Card from './../../components/Card/Card'
import CreatePost from './../../components/CreatePost/CreatePost'
import {DivContainerFeedPage, ImageLoading, DivLoading} from './FeedPageStyle'
import loading from './../../assets/images/loading1.gif'

const FeedPage = () =>{

const [teste, setTeste] = useState()

    


    localStorage.removeItem('infoName')
    localStorage.removeItem('infoTitle')
    localStorage.removeItem('infoBody')
    localStorage.removeItem('dataTratada')
    localStorage.removeItem('dataTratada1')
    
const Posts = useRequestData([], `${BASE_URL}/posts`)
const setMessage = Posts[3]
const isLoading = Posts[2]

const Navigate = useNavigate()
const Logado = localStorage.getItem('login')

// const retornaFeed = () =>{

// if(Logado && isLoading){
//     return  <DivLoading>
            
//     <ImageLoading src={loading}></ImageLoading>
//     </DivLoading>
    
// }


// if(Logado === null){

//   return   <div>
//          <Header/>
//          {Posts[1]}
    
//   </div>
// }

// else{
//         <div>
//         <Header/>
//         <CreatePost/>
//         <Card posts={Posts[0]}/> 
//         </div>
//     }
// }


return(

    <DivContainerFeedPage>

        
        {isLoading  && Logado ?

        <DivLoading>
            
            <ImageLoading src={loading}></ImageLoading></DivLoading>

        
        :
        <div>

        <Header/>
         {Posts[1]}
         <Card posts={Posts[0]}/>    
         </div>  } 

    </DivContainerFeedPage>
)


}

export default FeedPage