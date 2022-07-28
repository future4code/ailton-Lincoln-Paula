import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import goToPage from './../routes/coordinator'

export const login = async (body, clear, Navigate) =>{


 await   axios.post(`${BASE_URL}/users/login`,body)
    
    .then((res)=>{

   
        localStorage.setItem('login', res.data.token)
        clear()
        goToPage(Navigate, '')


    })
    .catch((err)=>{

        alert(err.response.data)

    })


}

export const signup = async (body, clear, Navigate)=>{


    await  axios.post(`${BASE_URL}/users/signup`,body)
    
    .then((res)=>{


        clear()
        goToPage(Navigate, 'login')


    })
    .catch((err)=>{

        alert(err.response.data)

    })


}

export const logout = async (contador, setContador) =>{
 setContador(2)
 await localStorage.removeItem('login')



}

export const createPost = async (body, clear, Navigate) =>{

    console.log(body)

    await   axios.post(`${BASE_URL}/posts`,body,{
        headers:{
            Authorization: localStorage.getItem('login')
        }
    })
       
       .then((res)=>{
        
           clear()   
           console.log(res)
   
       })
       .catch((err)=>{
   
           alert(err.response.data)
   
       })
   
   
   }

   export const createComment = async (body, clear, id) =>{


    await   axios.post(`${BASE_URL}/posts/${id}/comments`,body,{
        headers:{
            Authorization: localStorage.getItem('login')
        }
    })
       
       .then((res)=>{
        
           clear()   
           console.log(res)
   
       })
       .catch((err)=>{
   
           alert(err.response.data)
   
       })
   }