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

function Matches() {

const [matches, setMatches] = useState([])


useEffect(() =>{

  getMatches()


},[])



  let getMatches = () =>{

    
    const url = `${BASE_URL}/matches`



    axios.get(url,KEY)
    
    .then((res)=>{

      setMatches(res.data.matches)
      

    }).catch((err)=>{

      console.log(err)

    })

   } 


  return (




    <DivContainer>
      <DivCard>
        <Header></Header>
        <Main>

          {/* {matches.map((match)=>{

          return (
            <p>{match}</p>
          )

        })} */}

        </Main>
        </DivCard>
        </DivContainer>

  )
  
}

export default Matches