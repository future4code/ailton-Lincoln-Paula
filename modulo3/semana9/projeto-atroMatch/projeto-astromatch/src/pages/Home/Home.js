import axios from 'axios';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { BASE_URL } from '../../constants/urls'; 
import {KEY} from '../../constants/urls'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
  }
`;

const DivContainer = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
 
`


const DivCard = styled.div`

  background-color: white;
  height: 100vh;
  width: 35vw;

`

function Home(props) {

 const [profile, setProfile] = useState([])


  useEffect(()=>{

    getProfilleChoose()

  },[])

 let getProfilleChoose = () =>{

        console.log('passou')

        const url = `${BASE_URL}/person`
        axios.get(url,KEY).then((res)=>{

          // console.log(res.data.profile)
          setProfile(res.data.profile)

        }).catch((err)=>{

          console.log(err)

        })

    }


   let getChoosePerson = () =>{

    // console.log('deu match')
    const url = `${BASE_URL}/choose-person`

    const body = {
      id: profile.id,
      choice: true
    }

    axios.post(url,body)
    
    .then((res)=>{

      // console.log(res)

      if(res.data.isMatch === true){

        return alert`Deu Match !`

      }

      if (res.data.profile){ //aqui vai checar se existe o perfil na resposta
        setPerfil(res.data.profile) // se o perfil existir, ele vai setar
     } else {
        alert('acabaram os perfis disponíveis') // se o perfil não existir, ele ignora e dispara um alert pra avisar o usuário
     }

      

    }).catch((err)=>{

      console.log(err)

    })

   } 


  return (


    <DivContainer>
    <GlobalStyle/>
    {/* {console.log(props)}   */}
        <DivCard>

            <Header setaTela={props.setaTela}>

            </Header>

            <Main profile={profile}
             getChoosePerson={getChoosePerson}
             getProfilleChoose={getProfilleChoose}/>

        <button onClick={() => props.setTela('matches')}>funcional</button> 

        </DivCard>

        </DivContainer>

  )

}

export default Home