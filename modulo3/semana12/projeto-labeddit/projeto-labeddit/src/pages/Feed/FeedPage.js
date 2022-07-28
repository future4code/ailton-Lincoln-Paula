import React from 'react'
import {useNavigate} from 'react-router-dom'
import goToPage from './../../routes/coordinator'
import { Button } from '@chakra-ui/react'
import Header from '../../components/Header/Header'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import Card from './../../components/Card/Card'
import CreatePost from './../../components/CreatePost/CreatePost'
import {DivContainerFeedPage} from './FeedPageStyle'

const FeedPage = () =>{
    
    localStorage.removeItem('infoName')
    localStorage.removeItem('infoTitle')
    localStorage.removeItem('infoBody')
    localStorage.removeItem('dataTratada')
    localStorage.removeItem('dataTratada1')
    
const Posts = useRequestData([], `${BASE_URL}/posts`)



const Navigate = useNavigate()



return(

    <DivContainerFeedPage>
        <Header/>
        <CreatePost/>
        {Posts[1]}
        {<Card  posts={Posts[0]}/>}

    </DivContainerFeedPage>
)


}

export default FeedPage