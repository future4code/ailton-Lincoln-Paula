import { useContext } from 'react'
import GenresMovie from '../GenresMovie/GenresMovie'
import { Link } from 'react-router-dom'
import Movie from '../../Components/Movies/Movies'
import { MoviesContext } from '../../Global/GlobalState'
import Paginate from '../../Services/Paginate/paginate'
import {Container, Content} from './style'

export default function HomePage() {

  const {movies, movieSelect} = useContext(MoviesContext)

  return (
    <div>
      <GenresMovie />
      <Container>
        <Content>
          {movieSelect.length > 0
            ? movieSelect.map(movie => (
                <Link
                  style={{ textDecoration: 'none' }}
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                >
                  <Movie
                    title={movie.title}
                    imagePath={movie.poster_path}
                    dateRelease={movie.release_date}
                  />
                </Link>
              ))
            : 
  movies.map(movie => (
      <Link
        style={{ textDecoration: 'none' }}
        key={movie.id}
        to={`/movie/${movie.id}`}
      >
        <Movie
          title={movie.title}
          imagePath={movie.poster_path}
          dateRelease={movie.release_date}
        ></Movie>
      </Link>
    ))}
        </Content>
        {movieSelect.length > 1 ? (
          <></>
        ) : (
          <Paginate />
        )}
      </Container>
    </div>
  )
}
