import React, { useContext } from 'react'
import { MoviesContext } from '../../Global/GlobalState'
import {DivContainer,DivButton ,Button, Content,} from './style'

export default function GenresMovie() {

    const {genres, filters, changeGenres} = useContext(MoviesContext)

    return (
      <DivContainer>
        <Content>

          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

          <DivButton>
          <h2>Filtre por:</h2>
          {genres.map(genre => (
            <Button
              key={genre.id}
              selecioned={filters.includes(genre.id)}
              onClick={() => changeGenres(genre.id)}
            >
              {genre.name}
              {filters.includes(genre.id)}
            </Button>
          ))}
      </DivButton>
        </Content>
      </DivContainer>
    )
  }
