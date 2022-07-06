import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'


const DivContainer = styled.div`

    height: 80%;
    background-color: royalblue;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

`


const Button = styled.button`

width: 25px;
height: 25px;


`

function Main(props) {




  return (


    <DivContainer>
      {/* {console.log(props)} */}
      <p>{props.profile.name}</p>
      <p><img src={props.profile.photo} alt={props.profile.photo_alt} width='100px' height='100px'/></p>
      <p><b>Idade: </b>{props.profile.age}</p>
      <p><b>Descrição:</b>{props.profile.bio}</p>
      <div>

      <Button onClick={props.getProfilleChoose}>X</Button>
      <Button onClick={props.getChoosePerson}>V</Button>

      </div>
    </DivContainer>


  )

}

export default Main