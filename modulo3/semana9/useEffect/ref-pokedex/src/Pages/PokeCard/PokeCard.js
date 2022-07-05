import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";


const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid 2px black;
    background-color: white;
    margin-top: 2vh;
    width: 25vw;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: bold;
    box-shadow: black 15px 15px 15px;
    border-radius: 25px;

    &&:hover{
        margin-top: -1px;
    }
`

const Img = styled.img`

`

function PokeCard(props) {


const [infoPokemons, setInfoPokemons] = useState([]);


useEffect(()=>{

getInfoPoke()

},[props])

  let  getInfoPoke = () =>{

    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
    .then((res)=>{


       setInfoPokemons(res.data)     

    })
    .catch((err)=>{

        console.log(err)

    })


    }


  return (
    

    <DivContainer>
    <p>Nome: {infoPokemons.name}</p>
    <p>Peso: {infoPokemons.weight} Kg</p>
    {infoPokemons.types && <p>Tipo: {infoPokemons.types[0].type.name}</p>}
    {infoPokemons.sprites && (
      <img src={infoPokemons.sprites.front_default} alt={infoPokemons.name} width='150px' height='150px' />
    )}
  </DivContainer>

  )

}


export default PokeCard
