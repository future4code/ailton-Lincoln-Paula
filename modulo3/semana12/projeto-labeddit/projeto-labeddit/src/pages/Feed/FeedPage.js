import React from 'react'
import {useNavigate} from 'react-router-dom'
import goToPage from './../../routes/coordinator'
import { Button } from '@chakra-ui/react'
import Header from '../../components/Header/Header'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import Card from './../../components/Card/Card'

const FeedPage = () =>{
const Posts = useRequestData([], `${BASE_URL}/posts`)
const Navigate = useNavigate()

return(

    <div>
        <Header/>
        {Posts[1]}
        {<Card  posts={Posts[0]}/>}

    </div>
)


}

export default FeedPage