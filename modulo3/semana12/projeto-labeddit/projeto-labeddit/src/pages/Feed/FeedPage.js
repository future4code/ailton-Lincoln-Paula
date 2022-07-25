import React from 'react'
import {useNavigate} from 'react-router-dom'
import goToPage from './../../routes/coordinator'
import { Button } from '@chakra-ui/react'
import Header from '../../components/Header/Header'

const FeedPage = () =>{

const Navigate = useNavigate()

return(

    <div>
        <Header/>
        <div>
        </div>
        {/* <Button onClick={() => goToPage(Navigate, `detail`)}
        bg="brand.100">Detail post</Button>
        <Button onClick={() => goToPage(Navigate, `detail`)}
        bg="brand.200">Detail post</Button> */}
    </div>
)


}

export default FeedPage