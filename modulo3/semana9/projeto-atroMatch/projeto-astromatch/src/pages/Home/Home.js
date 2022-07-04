import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { BASE_URL } from '../../constants/urls'; 


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

function Home() {


    getProfilleChoose = () =>{
        const key = 'lincoln'
        axios.get((`${BASE_URL}/person`),)

    }


  return (


    <DivContainer>
    <GlobalStyle/>
      
        <DivCard>

            <Header></Header>
            <Main>


            </Main>
            <Footer></Footer>

        </DivCard>

        </DivContainer>

  )

}

export default Home