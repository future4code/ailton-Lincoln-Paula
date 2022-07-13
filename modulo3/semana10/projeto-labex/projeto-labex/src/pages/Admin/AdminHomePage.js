import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { goToPage } from '../../routes/coordinator'


function AdminHomePage() {

const Navigate = useNavigate()

useEffect(()=>{

if(localStorage.getItem('token') === null){

  goToPage(Navigate, 'login')

}


},[])

  return (


    <div>SERA REDIRECIONADO PARA CÁ APOS O LOGIN COM SUCESSO (LISTA DE TODOS OS SERVIÇOS PODENDO EXCLUILOS)

    </div>

  )
}

export default AdminHomePage