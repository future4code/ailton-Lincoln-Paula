import axios from 'axios'
import { BASE_URL } from './../constants/urls'


export const voteInPost = (id, direction) =>{

   axios.post(`${BASE_URL}/posts/${id}/votes`, direction,{
    headers:{
        Authorization: localStorage.getItem('login')
    }
   })
   
   
   .then((res)=>{

    if(direction.direction === 1){
        console.log('likado')
    }else{
        console.log('deslikado')
    }
    

   })

   .catch((err)=>{

    console.log(err)

   })

}

