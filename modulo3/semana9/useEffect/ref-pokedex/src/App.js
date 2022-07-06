import {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import PokeCard from './Pages/PokeCard/PokeCard';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }`

const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: black;
    width: 100vw;
    height: 100vh;
    background-image: url('https://images2.alphacoders.com/116/thumb-1920-1160159.png');
`

const Text = styled.p`

font-size: 25px;

`

const Select = styled.select`

font-size: 15px;
margin-bottom: 10px;

`

export default function App() {

  const [listPokemons, setListaPokemons] = useState([]);
  const [pokemonSelecionado, setPokemonSelecionado] = useState('');

  useEffect(()=>{

    Requisicao()

  },[])


let Requisicao = () =>{

  axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then((res)=>{
 
    setListaPokemons(res.data.results)
  //  console.log(res.data.results)

  })
 .catch((err)=>{
   console.log(err)
 })

 
}


let attPokemon = (event) =>{

setPokemonSelecionado(event.target.value)

}


return (
  
  <DivContainer>
    <GlobalStyle></GlobalStyle>
      {/* {console.log(listPokemons)}*/}
      {/* {console.log(pokemonSelecionado)} */}
      
      <Text>Escolha seu Pokémon</Text>
      <Select onChange={attPokemon}>

        <option value={''}>Nenhum</option>

        {listPokemons.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}

      </Select>
      
          {pokemonSelecionado && <PokeCard pokemon={pokemonSelecionado} />}

    </DivContainer>

  )
}

