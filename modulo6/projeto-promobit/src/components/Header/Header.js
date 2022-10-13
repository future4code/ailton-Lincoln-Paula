import logoTMDB from '../../Assets/images/logo.svg'
import React from 'react'
import { DivContainer } from './style';
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../Routes/Coordinator';

export default function Header() {

  const navigate = useNavigate()

  return (

    <DivContainer>
        <img
          src={logoTMDB}
          alt="Logo TMDB"
          onClick={() => goToPage(navigate, "/")}
        />
    </DivContainer>
  )
}