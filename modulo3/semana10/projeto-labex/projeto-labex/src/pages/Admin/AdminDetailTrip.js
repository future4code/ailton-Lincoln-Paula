import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {BASE_URL} from './../../constants/Url/url'
import {goToPage} from './../../routes/coordinator'
import {useNavigate} from 'react-router-dom'

function AdminDetailTrip() {

 const Navigate = useNavigate() 

  useEffect(() =>{

    if(localStorage.getItem('token') === null){
        
          goToPage(Navigate, 'login')
        
        }


      

    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip/:id`,{
      headers:{
        auth: token
      }
    })
    .then((res) =>{


    })
    .catch((err)=>{



    })



  },[])


  return (





    <div>AREA DO ADMIN ONDE ELE PODERÁ ACEITAR OU NAO ACEITAR VIAJANTES</div>
  )
}

export default AdminDetailTrip