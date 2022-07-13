import React, {useEffect} from 'react'
import {goToPage} from './../../routes/coordinator'
import {useNavigate} from 'react-router-dom'

function CreateTripPage() {

const Navigate = useNavigate()

  useEffect(()=>{

    if(localStorage.getItem('token') === null){
    
      goToPage(Navigate, 'login')
    
    }
    
    
    },[])


  return (


    <div>LISTA DE INPUTS ONDE O ADMIN PODERÁ CRIAR NOVAS VIAGENS</div>

  )
}

export default CreateTripPage